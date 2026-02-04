import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:5000/api/auth';
    private userSubject = new BehaviorSubject<any>(null);
    public user$ = this.userSubject.asObservable();

    constructor(private http: HttpClient) { }

    login(credentials: any): Observable<any> {
        // Mock Login for development (since backend port 5000 is likely unchanged/not running)
        return of({ token: 'mock-token-123', user: { name: 'Sarah Jenkins', role: 'worker' } }).pipe(
            tap((response: any) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    this.userSubject.next(response.user);
                }
            })
        );
        /* 
        return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
            tap((response: any) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    this.userSubject.next(response.user);
                }
            })
        );
        */
    }

    logout() {
        localStorage.removeItem('token');
        this.userSubject.next(null);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
