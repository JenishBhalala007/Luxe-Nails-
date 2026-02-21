import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://127.0.0.1:5000/api/auth';
    private userSubject = new BehaviorSubject<any>(null);
    public user$ = this.userSubject.asObservable();

    constructor(private http: HttpClient, private router: Router) {
        // Init user from localStorage to prevent flash of empty state
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                this.userSubject.next(JSON.parse(savedUser));
            } catch (e) {
                console.error('Error parsing user from local storage', e);
                localStorage.removeItem('user');
            }
        }

        // Load fresh user data on startup if token exists
        const token = this.getToken();
        if (token) {
            this.loadUser().subscribe();
        }
    }

    loadUser(): Observable<any> {
        return this.http.get(`${this.apiUrl}/me`).pipe(
            tap((user: any) => {
                this.userSubject.next(user);
                localStorage.setItem('user', JSON.stringify(user));
            }),
            catchError((error) => {
                console.error('Error loading user:', error);
                this.logout();
                return of(null);
            })
        );
    }

    register(user: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, user).pipe(
            tap((response: any) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user', JSON.stringify(response.user));
                    this.userSubject.next(response.user);
                }
            })
        );
    }

    login(credentials: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
            tap((response: any) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('user', JSON.stringify(response.user));
                    this.userSubject.next(response.user);
                }
            })
        );
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/auth/login']);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
