import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingStateService } from '../../services/booking-state.service';
import { GalleryService } from '../../../../../core/services/gallery.service';

@Component({
  selector: 'app-nails-selection',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex-1 w-full bg-background-light dark:bg-background-dark text-[#1b0d11] dark:text-gray-100 font-display antialiased min-h-screen flex flex-col">
        <!-- Main Content Layout -->
        <main class="flex-grow max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-12 py-8 flex flex-col lg:flex-row gap-8">
            <!-- Left Column: Design Selection (70%) -->
            <div class="w-full lg:w-[70%] flex flex-col gap-8">
                <!-- Header & Filters -->
                <div class="flex flex-col gap-6">
                    <div>
                        <h1 class="font-serif text-4xl lg:text-5xl font-bold text-[#1b0d11] mb-2">Choose Your Look</h1>
                        <p class="text-[#6b3844] text-lg">Select one or more designs to complement your style.</p>
                    </div>
                    <!-- Horizontal Scrollable Filters -->
                    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
                        <button 
                            (click)="filterCategory('All')"
                            [class.bg-[#1b0d11]]="selectedCategory === 'All'"
                            [class.text-white]="selectedCategory === 'All'"
                            [class.bg-white]="selectedCategory !== 'All'"
                            [class.text-[#1b0d11]]="selectedCategory !== 'All'"
                            class="flex-shrink-0 px-6 py-2.5 rounded-full border border-[#e7cfd5] text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:border-primary/50"
                        >
                            All
                        </button>
                        <button 
                            *ngFor="let cat of categories"
                            (click)="filterCategory(cat)"
                            [class.bg-[#1b0d11]]="selectedCategory === cat"
                            [class.text-white]="selectedCategory === cat"
                            [class.bg-white]="selectedCategory !== cat"
                            [class.text-[#1b0d11]]="selectedCategory !== cat"
                            class="flex-shrink-0 px-6 py-2.5 rounded-full border border-[#e7cfd5] text-sm font-medium transition-all hover:border-primary/50"
                        >
                            {{ cat }}
                        </button>
                    </div>
                </div>

                <!-- Loading State -->
                <div *ngIf="loading" class="flex justify-center py-12">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>

                <!-- Empty State -->
                <div *ngIf="!loading && filteredDesigns.length === 0" class="text-center py-12 text-[#6b3844]">
                    No specific designs found for this category.
                </div>

                <!-- Masonry Grid -->
                <div *ngIf="!loading && filteredDesigns.length > 0" class="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    <div 
                        *ngFor="let design of filteredDesigns"
                        (click)="toggleDesign(design)"
                        class="relative group cursor-pointer break-inside-avoid mb-6"
                    >
                        <div 
                            class="relative rounded-[32px] overflow-hidden bg-gray-100 dark:bg-white/5 transition-all duration-300 transform backface-hidden"
                            [ngClass]="{
                                'ring-4 ring-primary shadow-xl shadow-primary/30 scale-[1.02]': isSelected(design),
                                'hover:shadow-xl hover:scale-[1.01]': !isSelected(design)
                            }"
                        >
                            <img 
                                [src]="design.imageUrl" 
                                [alt]="design.title"
                                class="w-full h-auto object-cover block"
                            >
                            
                            <!-- Selected Overlay -->
                            <div *ngIf="isSelected(design)" class="absolute inset-0 bg-booking-primary/20 transition-opacity duration-300"></div>
                            
                            <div *ngIf="isSelected(design)" class="absolute inset-0 flex items-center justify-center animate-scale-in z-20">
                                <div class="size-14 rounded-full bg-primary text-[#1b0d10] flex items-center justify-center shadow-lg transform transition-transform duration-300 scale-100">
                                    <span class="material-symbols-outlined text-3xl font-bold">check</span>
                                </div>
                            </div>
                            
                            <!-- Price Badge -->
                            <div class="absolute top-4 right-4 z-10">
                                <div *ngIf="design.price" class="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#1b0d11] text-xs font-extrabold shadow-sm">
                                    +₹{{ design.price }}
                                </div>
                                <div *ngIf="!design.price" class="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#1b0d11] text-xs font-extrabold shadow-sm uppercase tracking-wider">
                                    Included
                                </div>
                            </div>

                            <!-- Title Gradient -->
                            <div class="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32">
                                <h3 class="text-white font-serif text-2xl font-bold leading-tight drop-shadow-md">{{ design.title }}</h3>
                                <p class="text-white/90 text-sm mt-1.5 font-medium drop-shadow-md flex items-center gap-2">
                                    <span>{{ design.category }}</span>
                                    <span *ngIf="design.duration" class="w-1 h-1 rounded-full bg-white/60"></span>
                                    <span *ngIf="design.duration" class="opacity-90">{{ design.duration }} min</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Sticky Summary (30%) -->
            <div class="w-full lg:w-[30%] lg:min-w-[320px]">
                <div class="sticky top-32 flex flex-col gap-6">
                    <div class="bg-white rounded-2xl p-6 shadow-xl shadow-[#1b0d11]/5 border border-[#f3e7ea]">
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="font-serif text-xl font-bold text-[#1b0d11]">Your Booking</h3>
                            <span class="material-symbols-outlined text-[#9a4c5f]">receipt_long</span>
                        </div>
                        <div class="space-y-4 mb-6">
                            <!-- Service Items -->
                            <div *ngIf="selectedServices.length > 0">
                                <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Services</div>
                                <div *ngFor="let service of selectedServices" class="flex justify-between items-start pb-2 border-b border-dashed border-[#f3e7ea] mb-2">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-sm text-[#6b3844]">{{ service.name }}</span>
                                        <span class="text-[10px] text-gray-500 italic">Pay at Venue</span>
                                    </div>
                                    <span class="text-sm font-bold text-[#1b0d11]">₹{{ service.price }}</span>
                                </div>
                            </div>

                            <!-- Design Items -->
                            <div>
                                <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Designs</div>
                                <div *ngIf="selectedDesigns.length === 0" class="text-sm text-[#6b3844] italic">None selected</div>
                                <div *ngFor="let design of selectedDesigns" class="flex justify-between items-start pb-2 border-b border-dashed border-[#f3e7ea] mb-2">
                                    <div class="flex flex-col gap-1">
                                        <span class="text-sm font-medium text-[#ea5b7a]">{{ design.title }}</span>
                                    </div>
                                    <span class="text-sm font-bold text-[#1b0d11]">
                                        {{ design.price ? '+₹' + design.price : 'Included' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Total -->
                        <div class="flex justify-between items-end mb-8 pt-2">
                            <span class="font-serif text-lg text-[#1b0d11]">Total</span>
                            <div class="flex flex-col items-end">
                                <span class="font-display text-2xl font-bold text-[#ea5b7a]">
                                    ₹{{ getTotalPrice() }}
                                </span>
                                <span class="text-xs text-[#9a4c5f]">Inc. taxes</span>
                            </div>
                        </div>
                        
                        <!-- Action Button -->
                        <button 
                            (click)="confirmSelection()"
                            class="w-full bg-primary hover:bg-[#ffb0c4] text-[#1b0d10] rounded-xl py-4 px-6 flex items-center justify-between group transition-all duration-300 shadow-lg shadow-primary/30"
                        >
                            <span class="font-bold text-sm tracking-wide">Next: Choose Artist</span>
                            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                         <button 
                            (click)="skipStep()"
                            class="w-full mt-3 text-[#9a4c5f] text-xs font-medium text-center hover:underline"
                        >
                            Skip / Decide later at Salon
                        </button>
                    </div>
                    
                    <!-- Helper Card -->
                    <div class="bg-[#fcf1f3] rounded-2xl p-4 border border-primary/10 flex gap-3 items-start">
                        <span class="material-symbols-outlined text-primary text-xl mt-0.5">info</span>
                        <div>
                            <h4 class="text-sm font-bold text-[#1b0d11] mb-1">Not sure about the design?</h4>
                            <p class="text-xs text-[#6b3844] leading-relaxed">You can always discuss with your artist upon arrival. Select "Artist's Choice" or skip this step if unsure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  `
})
export class NailsSelectionComponent implements OnInit {
  nailDesigns: any[] = [];
  filteredDesigns: any[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  
  selectedDesigns: any[] = [];
  loading = true;
  selectedServices: any[] = [];

  constructor(
    private galleryService: GalleryService,
    private bookingState: BookingStateService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const state = this.bookingState.getState();
    this.selectedServices = state.services || [];
    
    if (this.selectedServices.length === 0) {
      this.router.navigate(['/client/booking/services']);
      return;
    }

    // Initialize with existing selection if navigating back
    this.selectedDesigns = state.nailDesigns || [];

    this.fetchDesigns();
  }

  fetchDesigns() {
    this.loading = true;
    this.galleryService.getGallery().subscribe({
      next: (items) => {
        // 1. Get ALL categories from selected services (flattened)
        const serviceCategories = new Set<string>();
        
        this.selectedServices.forEach(s => {
            const cat = s.category;
            if (Array.isArray(cat)) {
                cat.forEach(c => serviceCategories.add(c.trim()));
            } else if (typeof cat === 'string') {
                cat.split(',').forEach(c => serviceCategories.add(c.trim()));
            }
        });

        // 2. Filter designs that match these categories
        let validItems = items;
        if (serviceCategories.size > 0) {
            validItems = items.filter(item => {
                const itemCat = item.category || '';
                // Check if item category matches ANY service category
                // Also check tags if available
                return Array.from(serviceCategories).some(sc => 
                    itemCat.toLowerCase() === sc.toLowerCase() ||
                    (item.tags && item.tags.some((t: string) => sc.toLowerCase() === t.toLowerCase()))
                );
            });
        }

        this.nailDesigns = validItems;

        // 3. Extract unique categories dynamically from the FILTERED items
        // This ensures distinct tabs for each category found
        const uniqueCategories = new Set(validItems.map(i => i.category).filter(c => c));
        this.categories = Array.from(uniqueCategories);
        
        // Default to All
        this.filterCategory('All');
        
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching designs:', err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
        this.filteredDesigns = this.nailDesigns;
    } else {
        this.filteredDesigns = this.nailDesigns.filter(d => 
            d.category?.toLowerCase() === category.toLowerCase() || 
            d.title?.toLowerCase().includes(category.toLowerCase())
        );
    }
  }

  toggleDesign(design: any) {
    const index = this.selectedDesigns.findIndex(d => d._id === design._id);
    if (index > -1) {
        this.selectedDesigns.splice(index, 1);
    } else {
        this.selectedDesigns.push(design);
    }
    this.bookingState.updateState({ nailDesigns: this.selectedDesigns });
  }

  isSelected(design: any): boolean {
      return this.selectedDesigns.some(d => d._id === design._id);
  }

  confirmSelection() {
    // Save state is already done in toggle, but ensure we proceed
    this.router.navigate(['/client/booking/time']); // Skipping artist for now as per routing? Or going to Artist? 
    // Wait, typical flow is Service -> Nails -> Artist -> Time -> Review
    // Checking router link in template... it says /client/booking/artists
    this.router.navigate(['/client/booking/artists']);
  }

  skipStep() {
      // Clear Designs? Or just proceed?
      // If they skip, maybe we keep previous selection or clear it?
      // "Decide later" implies clearing.
      this.selectedDesigns = [];
      this.bookingState.updateState({ nailDesigns: [] });
      this.router.navigate(['/client/booking/artists']);
  }

  getTotalPrice(): number {
      return this.bookingState.getBookingTotal();
  }
}
