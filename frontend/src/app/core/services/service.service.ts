import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    private apiUrl = 'http://127.0.0.1:5000/api/services';

    constructor(private http: HttpClient) { }

    getServices(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl).pipe(
            tap({
                next: (data) => console.log('API Service Response:', data),
                error: (err) => console.error('API Service Error:', err)
            })
        );
    }

    getService(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
}
