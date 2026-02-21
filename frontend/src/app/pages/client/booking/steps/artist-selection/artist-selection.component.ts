import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ArtistService } from '../../../../../core/services/artist.service';
import { BookingStateService } from '../../services/booking-state.service';

@Component({
    selector: 'app-artist-selection',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex-1 w-full bg-background-light dark:bg-background-dark">
        <!-- Main Content Layout -->
        <div class="w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
            <!-- Left Column: Artist Selection -->
            <main class="flex-1 flex flex-col gap-6">
                <!-- Progress Bar -->
                <div class="flex flex-col gap-3">
                     <div class="flex gap-6 justify-between items-end">
                        <div>
                            <h1 class="text-2xl lg:text-3xl font-bold leading-tight text-[#1c0d10] dark:text-gray-100">Artist Selection</h1>
                        </div>
                    </div>
                </div>
                
                <h2 class="text-xl font-bold pt-4 text-[#1c0d10] dark:text-gray-100">Choose your Artist</h2>
                
                <!-- Artist List -->
                <div class="flex flex-col gap-4">
                    <div *ngIf="loading" class="text-center py-10">Loading artists...</div>
                    <div class="text-center py-10 text-booking-primary" *ngIf="!loading && artists.length === 0">No artists available for the selected services or designs. Please try changing your selections.</div>

                    <!-- Any Artist Option -->
                    <div (click)="selectArtist(null)" 
                         class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border"
                         [ngClass]="{'border-primary ring-2 ring-primary shadow-lg shadow-primary/20': selectedArtist === null && manuallySelected, 'border-transparent hover:border-primary/40': selectedArtist !== null}">
                        <div class="w-full sm:w-24 aspect-square bg-[#f0f0f0] dark:bg-white/5 rounded-full flex items-center justify-center text-gray-400">
                            <span class="material-symbols-outlined text-[40px]">groups</span>
                        </div>
                        <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                            <div class="flex justify-between items-start w-full">
                                <h3 class="text-lg font-bold text-[#1c0d10] dark:text-gray-100">Any Available Artist</h3>
                                <div class="hidden sm:block text-right">
                                    <span class="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Fastest Booking</span>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">Select this option for maximum availability. We'll assign the best available artist for your selected service.</p>
                        </div>
                    </div>

                    <!-- Dynamic Artists -->
                    <div *ngFor="let artist of artists" 
                         (click)="selectArtist(artist)"
                         class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border"
                         [ngClass]="{'border-primary ring-2 ring-primary shadow-lg shadow-primary/20': selectedArtist?._id === artist._id, 'border-transparent hover:border-primary/40': selectedArtist?._id !== artist._id}">
                        
                        <div *ngIf="selectedArtist?._id === artist._id" class="absolute top-0 right-0 p-2 sm:p-3">
                            <div class="size-6 bg-primary rounded-full flex items-center justify-center text-[#1b0d10] shadow-sm">
                                <span class="material-symbols-outlined text-[16px] font-bold">check</span>
                            </div>
                        </div>

                        <!-- Artist Avatar -->
                        <div class="w-full sm:w-24 aspect-square rounded-full shrink-0 border-2 overflow-hidden relative"
                             [ngClass]="selectedArtist?._id === artist._id ? 'border-primary' : 'border-transparent'">
                            
                            <!-- Image -->
                            <img *ngIf="artist.profileImage" 
                                 [src]="artist.profileImage" 
                                 alt="{{ artist.name }}"
                                 class="w-full h-full object-cover">
                            
                            <!-- Initials Fallback -->
                            <div *ngIf="!artist.profileImage" 
                                 class="w-full h-full bg-booking-primary/10 flex items-center justify-center">
                                 <span class="text-2xl font-bold text-booking-primary">{{ getInitials(artist.name) }}</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                            <div class="flex justify-between items-start w-full pr-0 sm:pr-8">
                                <div>
                                    <h3 class="text-lg font-bold" [ngClass]="selectedArtist?._id === artist._id ? 'text-[#ea5b7a]' : 'text-[#1c0d10] dark:text-gray-100'">{{ artist.name }}</h3>
                                    <div class="flex items-center justify-center sm:justify-start gap-1 text-sm text-yellow-500 font-bold mt-0.5">
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span>{{ artist.rating || '4.8' }}</span>
                                        <span class="text-gray-400 font-normal text-xs ml-1">({{ artist.reviews || 0 }} reviews)</span>
                                    </div>
                                </div>
                                <div class="hidden sm:flex flex-wrap items-center justify-end gap-2">
                                    <span *ngFor="let tag of getArtistTags(artist)" class="text-xs font-bold text-booking-primary bg-booking-primary/10 px-2 py-1 rounded-full">{{ tag }}</span>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0 mt-2">{{ artist.bio || 'Experienced nail artist.' }}</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <!-- Right Column: Sticky Summary -->
            <aside class="w-full lg:w-[320px] shrink-0 lg:h-[calc(100vh-120px)] lg:sticky lg:top-28">
                <div class="bg-white dark:bg-[#2d151b] rounded-2xl p-6 shadow-lg flex flex-col gap-6 sticky top-6 border-t-4 border-booking-primary">
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-[#1c0d10] dark:text-gray-100">Your Booking</h3>
                        <div class="flex flex-col gap-4">
                            <!-- Selected Services -->
                            <div *ngIf="selectedServices.length > 0">
                                <div class="flex justify-between items-center mb-2">
                                    <h4 class="text-xs font-bold uppercase text-gray-400">Services</h4>
                                    <button routerLink="/client/booking/services" class="text-xs text-booking-primary hover:underline">Edit</button>
                                </div>
                                <div *ngFor="let service of selectedServices" class="flex gap-3 items-start pb-2 border-b border-gray-100 dark:border-white/10 mb-2">
                                     <div class="size-8 rounded-lg bg-gray-100 bg-center bg-cover shrink-0" 
                                         [style.backgroundImage]="'url(' + (service.imageUrl || 'assets/placeholder-service.jpg') + ')'"></div>
                                    <div class="flex-1">
                                        <p class="text-sm font-bold text-[#1c0d10] dark:text-gray-100">{{ service.name }}</p>
                                        <p class="text-xs text-gray-500">₹{{ service.price }} <span class="italic text-[10px]">(Pay at Venue)</span></p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Selected Nail Designs -->
                            <div *ngIf="selectedNailDesigns.length > 0">
                                <div class="flex justify-between items-center mb-2">
                                    <h4 class="text-xs font-bold uppercase text-gray-400">Designs</h4>
                                    <button routerLink="/client/booking/nails" class="text-xs text-booking-primary hover:underline">Edit</button>
                                </div>
                                <div *ngFor="let design of selectedNailDesigns" class="flex gap-3 items-start pb-2 border-b border-gray-100 dark:border-white/10 mb-2">
                                    <div class="size-8 rounded-lg bg-gray-100 bg-center bg-cover shrink-0" 
                                         [style.backgroundImage]="'url(' + (design.imageUrl || 'assets/placeholder-nail.jpg') + ')'"></div>
                                    <div class="flex-1">
                                        <p class="text-sm font-bold text-[#1c0d10] dark:text-gray-100">{{ design.title }}</p>
                                        <p class="text-xs text-gray-500">{{ design.price ? '+₹' + design.price : 'Included' }}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Selected Artist (Preview) -->
                            <div class="flex gap-3 items-start mt-2" *ngIf="manuallySelected || selectedArtist">
                                <div class="size-10 rounded-full bg-booking-primary/10 text-[#ea5b7a] flex items-center justify-center shrink-0 overflow-hidden">
                                    <ng-container *ngIf="selectedArtist">
                                         <img *ngIf="selectedArtist.profileImage" [src]="selectedArtist.profileImage" class="w-full h-full object-cover">
                                         <span *ngIf="!selectedArtist.profileImage" class="text-sm font-bold">{{ getInitials(selectedArtist.name) }}</span>
                                    </ng-container>
                                    <span *ngIf="!selectedArtist" class="material-symbols-outlined text-[20px]">groups</span>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-[#1c0d10] dark:text-gray-100">{{ selectedArtist ? selectedArtist.name : 'Any Available Artist' }}</p>
                                    <p class="text-xs text-[#ea5b7a]" *ngIf="selectedArtist">Artist Fee: <span class="font-bold">+₹200</span></p>
                                    <p class="text-xs text-green-600" *ngIf="!selectedArtist">No extra artist fee</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-dashed border-gray-200 dark:border-white/20">
                        <div class="flex justify-between items-end mb-1">
                            <span class="text-gray-500 text-sm">Total</span>
                            <span class="text-2xl font-bold text-[#ea5b7a]">₹{{ getTotalPrice() }}</span>
                        </div>
                        <p class="text-xs text-gray-400">Includes all taxes</p>
                    </div>

                    <button routerLink="/client/booking/time" 
                            [disabled]="!manuallySelected"
                            [ngClass]="manuallySelected ? 'bg-primary hover:bg-[#ffb0c4] text-[#1b0d10] shadow-lg shadow-primary/30 transform hover:-translate-y-0.5' : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
                            class="w-full py-3.5 px-6 font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2">
                        <span>Continue to Date & Time</span>
                        <span class="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </aside>
        </div>
    </div>
  `
})
export class ArtistSelectionComponent implements OnInit {
    artists: any[] = [];
    selectedArtist: any | null = null;
    selectedServices: any[] = [];
    selectedNailDesigns: any[] = [];
    loading = true;
    manuallySelected = false;

    constructor(
        private artistService: ArtistService,
        private bookingState: BookingStateService,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) { }

    getInitials(name: string): string {
        if (!name) return '';
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    }

    getArtistTags(artist: any): string[] {
        let tags: string[] = [];
        if (artist.skills && Array.isArray(artist.skills) && artist.skills.length > 0) {
            tags = [...artist.skills];
        } else if (artist.specialty) {
            tags = artist.specialty.split(',').map((s: string) => s.trim()).filter((s: string) => s);
        }
        return tags.length > 0 ? tags : ['Stylist'];
    }

    ngOnInit() {
        // Load state
        const state = this.bookingState.getState();
        this.selectedServices = state.services || [];
        this.selectedNailDesigns = state.nailDesigns || [];
        
        if (this.selectedServices.length === 0) {
            this.router.navigate(['/client/booking/services']);
            return;
        }

        // Fetch artists
        this.artistService.getArtists().subscribe({
            next: (data) => {
                console.log('Artists loaded:', data);
                this.artists = data;
                
                // Filter artists based on selected nail designs
                if (this.selectedNailDesigns.length > 0) {
                    const requiredSkills = this.selectedNailDesigns.map(d => (d.title || '').trim().toLowerCase());
                    const filteredArtists = this.artists.filter(artist => {
                        const artistTags = this.getArtistTags(artist).map(t => t.trim().toLowerCase());
                        
                        // Check if the artist has tags that loosely match ANY of the required design titles
                        return requiredSkills.some(reqSkill => {
                            return artistTags.some(tag => tag.includes(reqSkill) || reqSkill.includes(tag));
                        });
                    });
                    
                    // If the strict filter hides everyone, just show all artists to not block booking
                    if (filteredArtists.length > 0) {
                        this.artists = filteredArtists;
                    }
                }

                this.loading = false;
                
                // Restore selection
                if (state.artist) {
                    this.selectedArtist = this.artists.find(a => a._id === state.artist._id);
                    this.manuallySelected = true;
                }
                this.cdr.detectChanges(); // Force update
            },
            error: (err) => {
                console.error('Error fetching artists:', err);
                this.loading = false;
                this.cdr.detectChanges(); // Force update
            }
        });
    }

    selectArtist(artist: any | null) {
        this.selectedArtist = artist;
        this.manuallySelected = true;
        this.bookingState.updateState({ artist: artist });
    }

    getTotalPrice(): number {
        return this.bookingState.getBookingTotal();
    }
}
