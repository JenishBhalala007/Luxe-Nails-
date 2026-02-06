import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ArtistService } from '../../../../../core/services/artist.service';
import { BookingStateService } from '../../services/booking-state.service';

@Component({
    selector: 'app-artist-selection',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex-1 w-full bg-[#F5E6CA] dark:bg-booking-bg-dark">
        <!-- Main Content Layout -->
        <div class="w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
            <!-- Left Column: Artist Selection -->
            <main class="flex-1 flex flex-col gap-6">
                <!-- Progress Bar -->
                <div class="flex flex-col gap-3">
                    <div class="flex gap-6 justify-between items-end">
                        <div>
                            <p class="text-booking-step2-primary text-sm font-bold uppercase tracking-wider mb-1">Step 2 of 4</p>
                            <h1 class="text-2xl lg:text-3xl font-bold leading-tight text-[#1c0d10] dark:text-gray-100">Artist Selection</h1>
                        </div>
                    </div>
                    <div class="rounded-full bg-white/50 dark:bg-white/10 h-2 w-full overflow-hidden">
                        <div class="h-full rounded-full bg-booking-step2-primary transition-all duration-500 ease-out" style="width: 50%;"></div>
                    </div>
                </div>
                
                <h2 class="text-xl font-bold pt-4 text-[#1c0d10] dark:text-gray-100">Choose your Artist</h2>
                
                <!-- Artist List -->
                <div class="flex flex-col gap-4">
                    <div *ngIf="loading" class="text-center py-10">Loading artists...</div>

                    <!-- Any Artist Option -->
                    <div (click)="selectArtist(null)" 
                         class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border"
                         [ngClass]="{'border-booking-step2-primary ring-2 ring-booking-step2-primary': selectedArtist === null && manuallySelected, 'border-transparent hover:border-booking-step2-primary/30': selectedArtist !== null}">
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
                         [ngClass]="{'border-booking-step2-primary ring-2 ring-booking-step2-primary shadow-[0_4px_20px_rgba(236,19,91,0.15)]': selectedArtist?._id === artist._id, 'border-transparent hover:border-booking-step2-primary/30': selectedArtist?._id !== artist._id}">
                        
                        <div *ngIf="selectedArtist?._id === artist._id" class="absolute top-0 right-0 p-2 sm:p-3">
                            <div class="size-6 bg-booking-step2-primary rounded-full flex items-center justify-center text-white shadow-sm">
                                <span class="material-symbols-outlined text-[16px] font-bold">check</span>
                            </div>
                        </div>

                        <div class="w-full sm:w-24 aspect-square bg-center bg-cover rounded-full shrink-0 border-2"
                             [ngClass]="selectedArtist?._id === artist._id ? 'border-booking-step2-primary' : 'border-transparent'"
                             [style.backgroundImage]="'url(' + (artist.profileImage || 'assets/placeholder-user.jpg') + ')'"></div>
                        
                        <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                            <div class="flex justify-between items-start w-full pr-0 sm:pr-8">
                                <div>
                                    <h3 class="text-lg font-bold" [ngClass]="selectedArtist?._id === artist._id ? 'text-booking-step2-primary' : 'text-[#1c0d10] dark:text-gray-100'">{{ artist.name }}</h3>
                                    <div class="flex items-center justify-center sm:justify-start gap-1 text-sm text-yellow-500 font-bold mt-0.5">
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span>{{ artist.rating || '4.8' }}</span>
                                        <span class="text-gray-400 font-normal text-xs ml-1">({{ artist.reviews || 0 }} reviews)</span>
                                    </div>
                                </div>
                                <div class="hidden sm:block text-right">
                                    <span class="text-xs font-bold text-booking-step2-primary bg-booking-step2-primary/10 px-2 py-1 rounded-full">{{ artist.specialty || 'Stylist' }}</span>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0 mt-2">{{ artist.bio || 'Experienced nail artist.' }}</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <!-- Right Column: Sticky Summary -->
            <aside class="w-full lg:w-[320px] shrink-0 lg:h-[calc(100vh-120px)] lg:sticky lg:top-28">
                <div class="bg-white dark:bg-[#2d151b] rounded-2xl p-6 shadow-lg flex flex-col gap-6 sticky top-6 border-t-4 border-booking-step2-primary">
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-[#1c0d10] dark:text-gray-100">Your Booking</h3>
                        <div class="flex flex-col gap-4">
                            <!-- Selected Service -->
                            <div class="flex gap-3 items-start pb-4 border-b border-gray-100 dark:border-white/10" *ngIf="selectedService">
                                <div class="size-10 rounded-lg bg-gray-100 bg-center bg-cover shrink-0" 
                                     [style.backgroundImage]="'url(' + (selectedService.imageUrl || 'assets/placeholder-service.jpg') + ')'"></div>
                                <div>
                                    <p class="text-sm font-bold text-[#1c0d10] dark:text-gray-100">{{ selectedService.name }}</p>
                                    <p class="text-xs text-gray-500">{{ selectedService.duration }} min • ₹{{ selectedService.price }}</p>
                                </div>
                                <button routerLink="/client/booking/service" class="ml-auto text-xs text-gray-400 hover:text-booking-step2-primary">Edit</button>
                            </div>
                            
                            <!-- Selected Artist (Preview) -->
                            <div class="flex gap-3 items-start" *ngIf="manuallySelected || selectedArtist">
                                <div class="size-10 rounded-full bg-booking-step2-primary/10 text-booking-step2-primary flex items-center justify-center shrink-0">
                                    <span class="material-symbols-outlined text-[20px]">{{ selectedArtist ? 'person' : 'groups' }}</span>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-[#1c0d10] dark:text-gray-100">{{ selectedArtist ? selectedArtist.name : 'Any Available Artist' }}</p>
                                    <p class="text-xs text-booking-step2-primary">Artist Selected</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-dashed border-gray-200 dark:border-white/20">
                        <div class="flex justify-between items-end mb-1">
                            <span class="text-gray-500 text-sm">Total</span>
                            <span class="text-2xl font-bold text-booking-step2-primary">₹{{ selectedService?.price || 0 }}</span>
                        </div>
                        <p class="text-xs text-gray-400">Includes all taxes</p>
                    </div>

                    <button routerLink="/client/booking/time" 
                            [disabled]="!manuallySelected"
                            [ngClass]="manuallySelected ? 'bg-booking-step2-primary hover:bg-[#d01150] shadow-[0_4px_14px_rgba(236,19,91,0.4)] hover:shadow-[0_6px_20px_rgba(236,19,91,0.6)] transform hover:-translate-y-0.5' : 'bg-gray-300 cursor-not-allowed'"
                            class="w-full py-3.5 px-6 text-white font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2">
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
    selectedService: any | null = null;
    loading = true;
    manuallySelected = false; // To track if user has made a selection (either null for any, or specific artist)

    constructor(
        private artistService: ArtistService,
        private bookingState: BookingStateService,
        private router: Router
    ) { }

    ngOnInit() {
        // Load state
        const state = this.bookingState.getState();
        this.selectedService = state.service;
        if (!this.selectedService) {
            this.router.navigate(['/client/booking/service']);
            return;
        }

        // Fetch artists
        this.artistService.getArtists().subscribe({
            next: (data) => {
                this.artists = data;
                this.loading = false;
                // Restore selection
                if (state.artist) {
                    this.selectedArtist = this.artists.find(a => a._id === state.artist._id);
                    this.manuallySelected = true;
                } else if (state.artist === null && state.service) { // If artist explicitly set to null but service exists?
                    // Actually we don't know if 'null' in state means "Any" or "Not selected yet".
                    // Let's assume initially artist is null.
                }
            },
            error: (err) => {
                console.error(err);
                this.loading = false;
            }
        });
    }

    selectArtist(artist: any | null) {
        this.selectedArtist = artist;
        this.manuallySelected = true;
        this.bookingState.updateState({ artist: artist });
    }
}
