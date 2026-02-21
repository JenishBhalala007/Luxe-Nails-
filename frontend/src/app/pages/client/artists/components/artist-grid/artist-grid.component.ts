import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from '../artist-card/artist-card.component';
import { ArtistFilterComponent } from '../artist-filter/artist-filter.component';
import { ArtistService } from '../../../../../core/services/artist.service';

@Component({
    selector: 'app-artist-grid',
    standalone: true,
    imports: [CommonModule, ArtistCardComponent, ArtistFilterComponent],
    template: `
    <div class="w-full max-w-[1200px] mx-auto">
        <app-artist-filter 
            [activeFilter]="activeCategory"
            (filterChange)="onFilterChange($event)">
        </app-artist-filter>
        
        <!-- Loading State -->
        <div *ngIf="loading" class="flex justify-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>

        <!-- Error State -->
        <div *ngIf="error" class="text-center py-12 text-red-500">
            {{ error }}
        </div>

        <!-- Artists Grid -->
        <div *ngIf="!loading && !error" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pt-4">
            <app-artist-card 
                *ngFor="let artist of filteredArtists"
                [name]="artist.name || 'Artist'"
                [specialty]="artist.specialty"
                [rating]="artist.rating"
                [reviews]="artist.reviews"
                [image]="artist.imageUrl || 'assets/placeholder-artist.jpg'"
                [badgeIcon]="artist.badgeIcon">
            </app-artist-card>
        </div>

        <!-- Empty State -->
        <div *ngIf="!loading && !error && filteredArtists.length === 0" class="text-center py-12 text-gray-500">
            No artists found matching your criteria.
        </div>
    </div>
  `
})
export class ArtistGridComponent implements OnInit {
    artists: any[] = [];
    filteredArtists: any[] = [];
    loading = true;
    error = '';
    activeCategory = 'All Artists';

    constructor(
        private artistService: ArtistService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.loadArtists();
    }

    loadArtists() {
        console.log('Loading artists...');
        this.artistService.getArtists().subscribe({
            next: (data) => {
                console.log('Artists loaded:', data);
                // Parse tags for each artist
                this.artists = data.map(artist => {
                    let tags: string[] = [];
                    if (artist.skills && Array.isArray(artist.skills) && artist.skills.length > 0) {
                        tags = [...artist.skills];
                    } else if (artist.specialty) {
                        tags = artist.specialty.split(',').map((s: string) => s.trim()).filter((s: string) => s);
                    }
                    return {
                        ...artist,
                        parsedTags: tags,
                        specialty: tags.join(', '), // Ensure specialty formats nicely as comma-sep initially if needed
                        rating: (4.5 + Math.random() * 0.5).toFixed(1),
                        reviews: Math.floor(Math.random() * 200) + 10,
                        badgeIcon: Math.random() > 0.7 ? 'verified' : (Math.random() > 0.7 ? 'palette' : (Math.random() > 0.8 ? 'diamond' : undefined))
                    };
                });
                this.filteredArtists = [...this.artists];
                this.loading = false;
                this.cdr.detectChanges(); // Force update
            },
            error: (err) => {
                console.error('Error fetching artists:', err);
                this.error = 'Failed to load artists. Please try again later.';
                this.loading = false;
                this.cdr.detectChanges(); // Force update
            }
        });
    }

    onFilterChange(category: string) {
        this.activeCategory = category;
        if (category === 'All Artists') {
            this.filteredArtists = [...this.artists];
        } else {
            const lowerCategory = category.toLowerCase();
            this.filteredArtists = this.artists.filter(artist => {
                return artist.parsedTags.some((tag: string) => tag.toLowerCase().includes(lowerCategory));
            });
        }
    }
}
