import { Component, inject, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryService } from '../../../../../core/services/gallery.service';
import { BookingStateService } from '../../../booking/services/booking-state.service';

@Component({
    selector: 'app-detail-content',
    standalone: true,
    imports: [CommonModule],
    template: `
    <article class="flex-1 w-full max-w-[1248px] mx-auto px-6 md:px-12 py-8 animate-fade-in-up">

        <!-- Breadcrumb / Back Navigation -->
        <nav class="flex items-center gap-2 text-sm text-gallery-text-muted mb-8 group w-fit cursor-pointer" (click)="goBack()">
            <span class="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
            <span class="hover:text-gallery-rose-gold transition-colors font-medium">Back to Gallery</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12" *ngIf="item">
            
            <!-- Left: Main Image -->
            <div class="lg:col-span-5 flex flex-col gap-6">
                <div class="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-soft bg-zinc-100 dark:bg-zinc-800">
                     <img 
                        [src]="item.imageUrl" 
                        [alt]="item.title"
                        class="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                     <div class="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none rounded-2xl"></div>
                </div>
            </div>

            <!-- Right: Details & Info -->
            <div class="lg:col-span-7 flex flex-col justify-center h-full gap-8">
                
                <!-- Category/Tag -->
                <div class="flex items-center justify-between">
                     <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-gallery-rose-gold/10 text-gallery-rose-gold text-xs font-bold uppercase tracking-widest border border-gallery-rose-gold/20">
                        {{ item.category }}
                     </span>
                     <!-- Share Button placed here for alignment -->
                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-gallery-text-muted hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors" title="Share">
                        <span class="material-symbols-outlined text-[20px]">share</span>
                    </button>
                </div>

                <!-- Title & Description -->
                <div>
                    <h1 class="text-3xl md:text-5xl font-serif font-medium text-text-dark dark:text-[#f3e7ea] leading-tight mb-4">
                        {{ item.title }}
                    </h1>
                     <p class="text-gallery-text-muted leading-relaxed text-lg font-light">
                        {{ item.description || 'Stunning nail art design created by our talented artists.' }}
                    </p>
                </div>

                <div class="h-px bg-rose-200/30 dark:bg-rose-200/10 w-full"></div>

                <!-- Artist Info -->
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full bg-gallery-rose-gold text-white flex items-center justify-center text-xl font-bold font-serif shadow-md">
                        {{ (item.artist || 'L')[0] }}
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs text-gallery-text-muted font-bold uppercase tracking-wider">Artist</span>
                        <span class="text-text-dark dark:text-white font-medium text-lg">{{ item.artist || 'Luxe Nails' }}</span>
                    </div>
                </div>

                 <!-- Meta Info (Price, Duration) -->
                <div class="grid grid-cols-2 gap-4">
                     <div class="p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-rose-100/50 dark:border-white/5 flex flex-col gap-1">
                        <div class="flex items-center gap-2 text-gallery-text-muted">
                            <span class="material-symbols-outlined text-[18px]">schedule</span>
                            <span class="text-xs font-bold uppercase tracking-wider">Duration</span>
                        </div>
                        <span class="text-lg font-medium text-text-dark dark:text-white">{{ item.duration || '60 min' }}</span>
                     </div>
                     <div class="p-4 rounded-xl bg-background-light dark:bg-surface-dark border border-rose-100/50 dark:border-white/5 flex flex-col gap-1">
                         <div class="flex items-center gap-2 text-gallery-text-muted">
                            <span class="material-symbols-outlined text-[18px]">payments</span>
                             <span class="text-xs font-bold uppercase tracking-wider">Price</span>
                         </div>
                        <span class="text-lg font-medium text-text-dark dark:text-white">{{ item.price ? (item.price | currency:'INR') : 'Variable' }}</span>
                     </div>
                </div>
                
                 <!-- CTA -->
                <button (click)="onBook()" class="w-full mt-2 py-4 rounded-xl bg-rose-gold hover:bg-rose-gold-hover text-white font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-rose-gold/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]">
                    Book this design
                </button>

            </div>
        </div>
        
        <div *ngIf="!item && !loading" class="text-center py-20 text-gallery-text-muted">
             Item not found.
        </div>
         <div *ngIf="loading" class="text-center py-20 text-gallery-text-muted">
             Loading details...
        </div>

    </article>
  `
})
export class DetailContentComponent implements OnInit, OnChanges {
    private location = inject(Location);
    private galleryService = inject(GalleryService);
    private cdr = inject(ChangeDetectorRef);
    private bookingState = inject(BookingStateService);
    private router = inject(Router);

    @Input() itemId: string | null = null;
    item: any = null;
    loading = false;

    ngOnInit() {
        // Initial load handled by ngOnChanges if input is provided immediately
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['itemId'] && this.itemId) {
            this.fetchItem(this.itemId);
        }
    }

    fetchItem(id: string) {
        this.loading = true;
        this.galleryService.getGalleryItem(id).subscribe({
            next: (data) => {
                this.item = data;
                this.loading = false;
                this.cdr.markForCheck();
            },
            error: (err) => {
                console.error('Error fetching item:', err);
                this.loading = false;
                this.cdr.markForCheck();
            }
        });
    }

    goBack() {
        this.location.back();
    }

    onBook() {
        if (this.item) {
            this.bookingState.updateState({ nailDesigns: [this.item] });
            this.router.navigate(['/client/booking/services'], { queryParams: { reset: 'true' } });
        }
    }
}
