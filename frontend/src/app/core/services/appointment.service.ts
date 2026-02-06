import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {
    private apiUrl = 'http://127.0.0.1:5000/api/appointments';

    constructor(private http: HttpClient) { }

    createAppointment(appointmentData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, appointmentData);
    }

    getMyAppointments(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/my`);
    }

    checkAvailability(artistId: string, date: string, time: string): Observable<any> {
        return this.http.get<any[]>(`${this.apiUrl}/artist/${artistId}?date=${date}`);
    }

    cancelAppointment(id: string): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}/cancel`, {});
    }
}
