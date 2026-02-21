import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtistService {
    private apiUrl = 'http://localhost:5000/api/artists';

    constructor(private http: HttpClient) { }

    getArtists(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getArtist(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    createArtist(artist: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, artist);
    }
}
