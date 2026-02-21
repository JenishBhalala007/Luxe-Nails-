import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {
    private apiUrl = 'http://127.0.0.1:5000/api/gallery';
    private http = inject(HttpClient);
    private galleryCache$: Observable<any[]> | null = null;

    getGallery(): Observable<any[]> {
        if (!this.galleryCache$) {
            this.galleryCache$ = this.http.get<any[]>(this.apiUrl).pipe(
                shareReplay(1)
            );
        }
        return this.galleryCache$;
    }

    getGalleryItem(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

    addPhoto(photoData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, photoData);
    }

    deletePhoto(id: string): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }

    updatePhoto(id: string, photoData: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, photoData);
    }
}
