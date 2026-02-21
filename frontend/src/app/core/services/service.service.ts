import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    private apiUrl = 'http://127.0.0.1:5000/api/services';

    private services$: Observable<any[]> | null = null;
    
    constructor(private http: HttpClient) { }

    getServices(): Observable<any[]> {
        if (!this.services$) {
            this.services$ = this.http.get<any[]>(this.apiUrl).pipe(
                tap({
                    next: (data) => console.log('API Service Response:', data),
                    error: (err) => console.error('API Service Error:', err)
                }),
                shareReplay(1)
            );
        }
        return this.services$;
    }

    getService(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    createService(serviceData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, serviceData);
    }

    updateService(id: string, serviceData: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, serviceData);
    }

    deleteService(id: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}
