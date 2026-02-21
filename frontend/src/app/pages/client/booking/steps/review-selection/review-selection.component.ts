import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingStateService } from '../../services/booking-state.service';
import { AppointmentService } from '../../../../../core/services/appointment.service';

@Component({
    selector: 'app-review-selection',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    template: `
    <div class="flex-1 w-full bg-background-light dark:bg-background-dark flex justify-center py-10 px-4 md:px-8">
        <div class="w-full max-w-[960px] flex flex-col gap-8">


            <!-- Page Heading -->
            <div class="flex flex-col gap-2 px-4 text-center md:text-left">
                <p class="text-[#1b0d10] dark:text-white text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">Review your Appointment</p>
                <p class="text-booking-rose-gold dark:text-booking-rose-gold/80 text-base font-medium">Step 4 of 4 • Please check the details carefully</p>
            </div>

            <div *ngIf="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error: </strong>
                <span class="block sm:inline">{{ error }}</span>
            </div>

            <!-- Main Card -->
            <div class="bg-white dark:bg-[#2a1418] rounded-xl shadow-lg border border-[#f3e7e9] dark:border-[#3a1d22] overflow-hidden" *ngIf="selectedServices.length > 0">
                <!-- Details List -->
                <div class="flex flex-col">
                    
                    <!-- Services Header -->
                    <div class="px-6 md:px-8 py-4 bg-gray-50 dark:bg-[#32181d] border-b border-[#f3e7e9] dark:border-[#3a1d22] flex justify-between items-center">
                        <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Services</h3>
                        <button routerLink="/client/booking/service" class="text-primary text-sm hover:underline">Edit</button>
                    </div>

                    <!-- Service Items -->
                    <div *ngFor="let service of selectedServices" class="group flex items-center gap-4 px-6 md:px-8 py-4 border-b border-[#f3e7e9] dark:border-[#3a1d22] hover:bg-[#fcf8f9] dark:hover:bg-[#32181d] transition-colors">
                        <div class="flex items-center gap-4 md:gap-6 w-full">
                            <div class="text-[#ea5b7a] flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12">
                                <span class="material-symbols-outlined text-[24px]">brush</span>
                            </div>
                            <div class="flex flex-col justify-center gap-1">
                                <p class="text-[#1b0d10] dark:text-white text-lg font-bold leading-tight">{{ service.name }}</p>
                                <p class="text-booking-rose-gold text-sm font-medium">
                                    {{ service.priceRange && service.priceRange.min !== service.priceRange.max ? '₹' + service.priceRange.min + ' - ₹' + service.priceRange.max : '₹' + service.price }} • {{ service.timeRange && service.timeRange.min !== service.timeRange.max ? service.timeRange.min + ' - ' + service.timeRange.max : service.duration }} min
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Nail Designs Header -->
                    <div class="px-6 md:px-8 py-4 bg-gray-50 dark:bg-[#32181d] border-b border-[#f3e7e9] dark:border-[#3a1d22] flex justify-between items-center" *ngIf="selectedNailDesigns.length > 0">
                        <h3 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Nail Designs</h3>
                        <button routerLink="/client/booking/nails" class="text-primary text-sm hover:underline">Edit</button>
                    </div>

                    <!-- Nail Design Items -->
                    <div *ngFor="let design of selectedNailDesigns" class="group flex items-center gap-4 px-6 md:px-8 py-4 border-b border-[#f3e7e9] dark:border-[#3a1d22] hover:bg-[#fcf8f9] dark:hover:bg-[#32181d] transition-colors">
                        <div class="flex items-center gap-4 md:gap-6 w-full">
                             <div class="bg-center bg-no-repeat bg-cover rounded-xl size-12 shrink-0 shadow-sm border border-gray-200 dark:border-white/10" 
                                  [style.backgroundImage]="'url(' + (design.imageUrl || 'assets/placeholder-nail.jpg') + ')'"></div>
                            <div class="flex flex-col justify-center gap-1">
                                <p class="text-[#1b0d10] dark:text-white text-lg font-bold leading-tight">{{ design.title }}</p>
                                <p class="text-xs text-gray-500">
                                    {{ design.category }} 
                                    <span *ngIf="design.price" class="text-booking-rose-gold font-medium ml-1">(+₹{{ design.price }})</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Artist Item -->
                    <div class="group flex items-center gap-4 px-6 md:px-8 py-6 justify-between border-b border-[#f3e7e9] dark:border-[#3a1d22] hover:bg-[#fcf8f9] dark:hover:bg-[#32181d] transition-colors">
                        <div class="flex items-center gap-4 md:gap-6">
                             <div class="bg-center bg-no-repeat bg-cover rounded-xl size-14 shrink-0 shadow-sm border border-gray-200 dark:border-white/10" 
                                  [style.backgroundImage]="'url(' + (artist?.profileImage || 'assets/placeholder-user.svg') + ')'"></div>
                            <div class="flex flex-col justify-center gap-1">
                                <p class="text-[#888] dark:text-[#aaa] text-xs font-semibold uppercase tracking-wider">Artist</p>
                                <p class="text-[#1b0d10] dark:text-white text-lg font-bold leading-tight">{{ artist ? artist.name : 'Any Available Artist' }}</p>
                                <div class="flex items-center gap-1 text-sm text-yellow-500" *ngIf="artist">
                                    <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                    <span class="font-medium text-[#1b0d10] dark:text-gray-300">{{ artist.rating || '4.8' }}</span>
                                </div>
                            </div>
                        </div>
                        <button routerLink="/client/booking/artists" class="shrink-0 text-gray-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5">
                            <span class="material-symbols-outlined">edit</span>
                        </button>
                    </div>

                    <!-- Date & Time Item -->
                    <div class="group flex items-center gap-4 px-6 md:px-8 py-6 justify-between border-b border-[#f3e7e9] dark:border-[#3a1d22] hover:bg-[#fcf8f9] dark:hover:bg-[#32181d] transition-colors">
                        <div class="flex items-center gap-4 md:gap-6">
                            <div class="text-[#ea5b7a] flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-14">
                                <span class="material-symbols-outlined text-[28px]">calendar_month</span>
                            </div>
                            <div class="flex flex-col justify-center gap-1">
                                <p class="text-[#888] dark:text-[#aaa] text-xs font-semibold uppercase tracking-wider">Date &amp; Time</p>
                                <p class="text-[#1b0d10] dark:text-white text-lg font-bold leading-tight">{{ formatDate(date) }}</p>
                                <p class="text-[#1b0d10] dark:text-white text-base font-medium opacity-80">{{ time }}</p>
                            </div>
                        </div>
                        <button routerLink="/client/booking/time" class="shrink-0 text-gray-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/5">
                            <span class="material-symbols-outlined">edit</span>
                        </button>
                    </div>
                </div>

                <!-- Special Requests Section -->
                <div class="p-6 md:p-8 border-b border-[#f3e7e9] dark:border-[#3a1d22] bg-[#fcfcfc] dark:bg-[#251215]">
                    <label class="block text-[#1b0d10] dark:text-white text-sm font-bold mb-2 flex items-center gap-2" for="notes">
                        <span class="material-symbols-outlined text-[18px]">edit_note</span>
                        Special Requests / Notes
                    </label>
                    <textarea [(ngModel)]="notes" class="w-full bg-white dark:bg-[#1a0b0e] border border-gray-200 dark:border-[#4a242a] rounded-lg p-4 text-[#1b0d10] dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" id="notes" placeholder="Any allergies, specific design ideas, or preferences?" rows="3"></textarea>
                </div>

                <!-- Payment & Summary Section -->
                <div class="p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-12">
                    <!-- Payment Method -->
                    <div class="flex-1 flex flex-col gap-4">
                        <h3 class="text-[#1b0d10] dark:text-white text-sm font-bold uppercase tracking-wider">Payment Method</h3>
                        <div class="flex flex-col gap-3">
                            <label class="relative flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all"
                                   [ngClass]="paymentMethod === 'card' ? 'border-[#ea5b7a] bg-primary/10' : 'border-gray-200 dark:border-[#4a242a] hover:bg-gray-50 dark:hover:bg-[#32181d]'">
                                <div class="flex items-center gap-3">
                                    <div class="flex items-center justify-center size-5 rounded-full border" 
                                         [ngClass]="paymentMethod === 'card' ? 'border-primary bg-primary text-[#1b0d10]' : 'border-gray-300 dark:border-gray-600'">
                                        <span *ngIf="paymentMethod === 'card'" class="material-symbols-outlined text-[14px] font-bold">check</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-[#1b0d10] dark:text-white font-bold text-sm">Pay Online (Card/UPI)</span>
                                        <span class="text-xs text-booking-rose-gold">Secure processing</span>
                                    </div>
                                </div>
                                <span class="material-symbols-outlined text-primary/50">credit_card</span>
                                <input class="hidden" name="payment" type="radio" value="card" [(ngModel)]="paymentMethod"/>
                            </label>

                            <label class="relative flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all"
                                   [ngClass]="paymentMethod === 'cash' ? 'border-[#ea5b7a] bg-primary/10' : 'border-gray-200 dark:border-[#4a242a] hover:bg-gray-50 dark:hover:bg-[#32181d]'">
                                <div class="flex items-center gap-3">
                                    <div class="flex items-center justify-center size-5 rounded-full border"
                                          [ngClass]="paymentMethod === 'cash' ? 'border-primary bg-primary text-[#1b0d10]' : 'border-gray-300 dark:border-gray-600'">
                                        <span *ngIf="paymentMethod === 'cash'" class="material-symbols-outlined text-[14px] font-bold">check</span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-[#1b0d10] dark:text-white font-medium text-sm">Pay at Salon</span>
                                        <span class="text-xs text-gray-500">Cash upon arrival</span>
                                    </div>
                                </div>
                                <span class="material-symbols-outlined text-gray-400">payments</span>
                                <input class="hidden" name="payment" type="radio" value="cash" [(ngModel)]="paymentMethod"/>
                            </label>
                        </div>
                    </div>

                    <!-- Summary Totals -->
                    <div class="flex-1 flex flex-col gap-4">
                        <h3 class="text-[#1b0d10] dark:text-white text-sm font-bold uppercase tracking-wider">Order Summary</h3>
                        <div class="bg-booking-bg-light dark:bg-[#1a0b0e] rounded-lg p-5 flex flex-col gap-3">
                            <div class="flex justify-between items-center text-sm">
                                <span class="text-gray-600 dark:text-gray-400">Services Total</span>
                                <span class="text-[#1b0d10] dark:text-white font-medium">₹{{ getServicesTotal() }} <span class="text-xs font-normal text-gray-500">(Pay at Venue)</span></span>
                            </div>
                            <div class="flex justify-between items-center text-sm" *ngIf="artist">
                                <span class="text-gray-600 dark:text-gray-400">Artist Fee</span>
                                <span class="text-[#1b0d10] dark:text-white font-medium">₹{{ artist.basePrice || 200 }}</span>
                            </div>
                             <div class="flex justify-between items-center text-sm" *ngIf="selectedNailDesigns.length > 0">
                                <span class="text-gray-600 dark:text-gray-400">Designs Total</span>
                                <span class="text-[#1b0d10] dark:text-white font-medium">₹{{ getDesignsTotal() }}</span>
                            </div>
                            <div class="h-px bg-gray-200 dark:bg-[#3a1d22] my-1"></div>
                            <div class="flex justify-between items-center text-lg">
                                <span class="text-[#1b0d10] dark:text-white font-bold">Total</span>
                                <span class="text-[#ea5b7a] font-black">₹{{ getTotalPrice() }}</span>
                            </div>
                            <div class="mt-2 text-xs text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-[#2a1418] py-2 px-3 rounded border border-gray-100 dark:border-[#3a1d22] flex items-center justify-center gap-1">
                                <span class="material-symbols-outlined text-[14px]">lock</span>
                                Secure booking
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer Action -->
                <div class="p-6 md:p-8 border-t border-[#f3e7e9] dark:border-[#3a1d22] bg-[#fcf8f9] dark:bg-[#251215] flex flex-col md:flex-row items-center justify-between gap-4">
                    <button routerLink="/client/booking/time" class="text-sm font-bold text-gray-500 hover:text-[#1b0d10] dark:hover:text-white transition-colors flex items-center gap-1 order-2 md:order-1">
                        <span class="material-symbols-outlined text-[18px]">arrow_back</span> Back
                    </button>
                    <button (click)="confirmBooking()" [disabled]="processing" class="w-full md:w-auto order-1 md:order-2 bg-gradient-to-r from-primary to-[#ffb0c4] hover:from-[#ffb0c4] hover:to-[#ea5b7a] text-[#1b0d10] text-lg font-bold py-4 px-12 rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait">
                        <span *ngIf="!processing">Confirm Appointment</span>
                        <span *ngIf="processing">Processing...</span>
                        <span *ngIf="!processing" class="material-symbols-outlined">check</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    // No dedicated style file or it works with utility classes
})
export class ReviewSelectionComponent implements OnInit {
    selectedServices: any[] = [];
    selectedNailDesigns: any[] = [];
    artist: any;
    date: Date | null = null;
    time: string | null = null;
    notes: string = '';
    paymentMethod: 'card' | 'cash' | 'upi' = 'card';

    processing = false;
    error: string | null = null;

    constructor(
        private bookingState: BookingStateService,
        private appointmentService: AppointmentService,
        private router: Router
    ) { }

    ngOnInit() {
        const state = this.bookingState.getState();
        this.selectedServices = state.services || [];
        this.selectedNailDesigns = state.nailDesigns || [];
        this.artist = state.artist;
        this.date = state.date;
        this.time = state.time;

        if (this.selectedServices.length === 0 || !this.date || !this.time) {
            this.router.navigate(['/client/booking/service']);
        }
    }

    formatDate(date: Date | null): string {
        if (!date) return '';
        return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }

    getServicesTotal(): number {
        return this.selectedServices.reduce((sum, s) => sum + (s.price || 0), 0);
    }

    getDesignsTotal(): number {
        return this.selectedNailDesigns.reduce((sum, d) => sum + (d.price || 0), 0);
    }

    getTotalPrice(): number {
        return this.bookingState.getBookingTotal();
    }

    confirmBooking() {
        if (this.selectedServices.length === 0 || !this.date || !this.time) return;

        this.processing = true;
        this.error = null;

        const appointmentData = {
            services: this.selectedServices.map(s => s._id),
            nailDesigns: this.selectedNailDesigns.map(d => d._id),
            artistId: this.artist ? this.artist._id : null,
            // Use local date formatting manually
            date: `${this.date!.getFullYear()}-${String(this.date!.getMonth() + 1).padStart(2, '0')}-${String(this.date!.getDate()).padStart(2, '0')}`,
            time: this.time,
            notes: this.notes,
            paymentMethod: this.paymentMethod,
            totalAmount: this.getTotalPrice()
        };

        this.appointmentService.createAppointment(appointmentData).subscribe({
            next: (res) => {
                this.processing = false;
                // Navigate to appointments
                this.router.navigate(['/client/appointments']);
                // Or clear state
                this.bookingState.updateState({ services: [], nailDesigns: [], artist: null, date: null, time: null });
            },
            error: (err) => {
                this.processing = false;
                this.error = err.error?.message || 'Booking failed';
            }
        });
    }
}
