import { Component, Input, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GalleryService } from '../../../../../core/services/gallery.service';

@Component({
    selector: 'app-gallery-masonry',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <section class="flex-1 px-4 md:px-10 py-8 flex justify-center">
        <div class="max-w-[1200px] w-full mx-auto">
            <!-- CSS Grid Layout -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div *ngFor="let item of filteredItems" 
                     [routerLink]="['/client/gallery', item._id]" 
                     class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img [alt]="item.title" 
                         [src]="item.imageUrl" 
                         class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">{{ item.title }}</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By {{ item.artist || 'Luxe Nails' }}</p>
                            <!-- <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">{{ item.likes || 0 }}</span>
                            </button> -->
                        </div>
                    </div>
                </div>

            </div>
            
            <!-- Load More Section -->
            <div class="py-12 px-4 flex justify-center" *ngIf="loading">
                <p class="text-gallery-text-muted animate-pulse">Loading gallery...</p>
            </div>
            <div class="py-12 px-4 flex justify-center" *ngIf="error">
                <p class="text-red-500">{{ error }}</p>
            </div>
            <div class="py-12 px-4 flex justify-center" *ngIf="!loading && !error && filteredItems.length === 0">
                <p class="text-gallery-text-muted">No images found for this category.</p>
            </div>
        </div>
    </section>
  `
})
export class GalleryMasonryComponent implements OnInit {
    private galleryService = inject(GalleryService);
    private cdr = inject(ChangeDetectorRef);
    
    @Input() set activeCategory(value: string) {
        console.log('Active Category Set:', value);
        this._activeCategory = value || 'All';
        // Only filter if we have data
        if (this.galleryItems.length > 0) {
            this.filterItems();
        }
    }
    
    _activeCategory: string = 'All';
    galleryItems: any[] = [];
    filteredItems: any[] = [];
    loading: boolean = true;
    error: string | null = null;

    ngOnInit() {
        console.log('GalleryMasonryComponent Initialized');
        this.galleryService.getGallery().subscribe({
            next: (data) => {
                console.log('Gallery data fetched:', data.length);
                this.galleryItems = data;
                this.loading = false;
                // Force filter update with current category
                this.filterItems();
                this.cdr.markForCheck();
            },
            error: (err: any) => {
                console.error('Gallery fetch error:', err);
                this.error = 'Failed to load gallery items.';
                this.loading = false;
                this.cdr.markForCheck();
            }
        });
    }

    filterItems() {
        console.log('Filtering items. Active Category:', this._activeCategory);
        
        if (!this._activeCategory || this._activeCategory.toLowerCase() === 'all') {
            this.filteredItems = this.galleryItems;
        } else {
            const active = this._activeCategory.toLowerCase();
            this.filteredItems = this.galleryItems.filter(item => {
                const categoryMatch = item.category && item.category.toLowerCase() === active;
                const tagMatch = item.tags && item.tags.some((tag: string) => tag.toLowerCase() === active);
                return categoryMatch || tagMatch;
            });
        }
        console.log('Filtered Items Count:', this.filteredItems.length);
        this.cdr.markForCheck();
    }
}
