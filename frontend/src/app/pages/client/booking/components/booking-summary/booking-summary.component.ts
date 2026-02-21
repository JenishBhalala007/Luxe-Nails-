import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookingStateService, BookingState } from '../../services/booking-state.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-booking-summary',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="glass-panel p-6 rounded-xl shadow-lg flex flex-col h-full lg:max-h-[500px] bg-white/70 dark:bg-[#230f14]/70 backdrop-blur-xl border border-white/50 dark:border-booking-primary/10">
        <div class="border-b border-gray-200 dark:border-white/10 pb-4 mb-4">
            <h3 class="text-xl font-bold text-[#1c0d10] dark:text-gray-100">Your Booking</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Review your selected services</p>
        </div>
        <div class="flex-1 overflow-y-auto space-y-4">
            <div *ngIf="state.services.length === 0" class="text-gray-500 text-sm text-center py-4">
                Please select a service to proceed.
            </div>

            <div *ngFor="let service of state.services" class="flex justify-between items-start group border-b border-gray-100 dark:border-white/5 pb-2 mb-2 last:border-0">
                <div>
                    <p class="font-bold text-sm text-[#1c0d10] dark:text-gray-100">{{ service.name }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        {{ service.timeRange?.min || service.duration }} min
                    </p>
                </div>
                <div class="text-right flex flex-col items-end">
                    <p class="font-bold text-sm text-[#1c0d10] dark:text-gray-100">
                        ₹{{ service.price }}
                    </p>
                    <p class="text-[10px] text-gray-400 italic">Pay at Venue</p>
                </div>
            </div>
            
            <div *ngIf="state.artist" class="flex justify-between items-start group border-b border-gray-100 dark:border-white/5 pb-2 mb-2">
                <div>
                    <p class="font-bold text-sm text-[#1c0d10] dark:text-gray-100">Artist Fee</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ state.artist.name }}</p>
                </div>
                <div class="text-right">
                    <p class="font-bold text-sm text-[#1c0d10] dark:text-gray-100">
                        +₹200
                    </p>
                </div>
            </div>

            <div *ngIf="state.nailDesigns.length > 0" class="pt-2">
                <p class="text-xs font-bold uppercase text-gray-400 mb-2">Design Add-ons</p>
                <div *ngFor="let design of state.nailDesigns" class="flex justify-between items-start group pb-2">
                    <div>
                        <p class="text-sm text-[#1c0d10] dark:text-gray-100">{{ design.title }}</p>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-sm text-[#1c0d10] dark:text-gray-100">{{ design.price ? '+₹' + design.price : 'Included' }}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Total & Action -->
        <div class="pt-6 mt-4 border-t border-gray-200 dark:border-white/10">
            <div class="flex justify-between items-center mb-6">
                <span class="text-gray-600 dark:text-gray-300 font-medium">Total (Approx)</span>
                <span class="text-2xl font-bold text-booking-primary">
                    ₹{{ getTotalPrice() }}
                </span>
            </div>
            <button [routerLink]="state.services.length > 0 ? '/client/booking/nails' : null" 
                    [disabled]="state.services.length === 0"
                    [ngClass]="state.services.length > 0 ? 'bg-booking-primary hover:bg-booking-primary/90 shadow-lg hover:shadow-booking-primary/30 active:scale-[0.98]' : 'bg-gray-300 cursor-not-allowed'"
                    class="w-full text-white font-bold py-3.5 px-6 rounded-full transition-all transform flex items-center justify-center gap-2 group">
                <span>Choose Nails</span>
                <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <p class="text-center text-[11px] text-gray-400 mt-3">
                <span class="material-symbols-outlined align-middle text-[14px] mr-1">lock</span>
                Secure booking
            </p>
        </div>
    </div>
    `
})
export class BookingSummaryComponent implements OnInit, OnDestroy {
    state: BookingState = { services: [], nailDesigns: [], artist: null, date: null, time: null, paymentMethod: null };
    private sub!: Subscription;

    constructor(private bookingState: BookingStateService) { }

    ngOnInit() {
        this.sub = this.bookingState.state$.subscribe((state: BookingState) => {
            this.state = state;
        });
    }

    ngOnDestroy() {
        if (this.sub) this.sub.unsubscribe();
    }

    getTotalPrice(): number {
        return this.bookingState.getBookingTotal();
    }
}
