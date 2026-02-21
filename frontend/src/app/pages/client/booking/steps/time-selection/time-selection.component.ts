import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { BookingStateService } from '../../services/booking-state.service';
import { AppointmentService } from '../../../../../core/services/appointment.service';
import { ArtistService } from '../../../../../core/services/artist.service';

@Component({
    selector: 'app-time-selection',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex-1 w-full bg-background-light dark:bg-background-dark">
        <!-- Main Content Layout -->
        <div class="w-full max-w-[1200px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-12">
            <!-- Left Column: Calendar & Time -->
            <main class="flex-1 flex flex-col gap-10">
                
                <!-- Content -->
                <div class="flex flex-col gap-10">
                    <!-- Heading -->
                    <div class="flex flex-col gap-2">
                        <h1 class="text-3xl font-extrabold tracking-tight text-[#1b0d10] dark:text-gray-100 sm:text-4xl">Schedule Your Appointment</h1>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Choose a date and time for your appointment with {{ artist?.name || 'an available artist' }}.</p>
                    </div>

                    <!-- Calendar Widget -->
                    <div class="overflow-hidden rounded-xl border border-[#f3e7e9] dark:border-white/10 bg-white dark:bg-[#2d151b] shadow-sm">
                        <div class="flex items-center justify-between border-b border-[#f3e7e9] dark:border-white/10 p-6">
                            <span class="text-lg font-bold text-[#1b0d10] dark:text-gray-100">{{ currentMonth }}</span>
                            <!-- Simplified navigation for this demo -->
                            <div class="flex gap-2">
                                <!-- <button class="flex size-9 items-center justify-center..." ...> < </button> -->
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-7 mb-4">
                                <span *ngFor="let day of weekDays" class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">{{ day }}</span>
                            </div>
                            <div class="grid grid-cols-7 gap-y-4 gap-x-2">
                                <!-- Dates -->
                                <button *ngFor="let dateObj of calendarDays" 
                                        (click)="selectDate(dateObj.date)"
                                        [disabled]="dateObj.disabled"
                                        class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium transition-all"
                                        [ngClass]="{
                                            'bg-primary text-[#1b0d10] shadow-md shadow-primary/40 hover:bg-[#ffb0c4] font-bold': isSameDate(dateObj.date, selectedDate),
                                            'text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5': !isSameDate(dateObj.date, selectedDate) && !dateObj.disabled,
                                            'text-gray-300 cursor-not-allowed': dateObj.disabled
                                        }">
                                    {{ dateObj.day }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Time Slots -->
                    <div class="flex flex-col gap-4" *ngIf="selectedDate">
                        <h3 class="text-xl font-bold text-[#1b0d10] dark:text-gray-100">Available Slots for {{ formatSelectedDate() }}</h3>
                        
                        <div *ngIf="loadingSlots" class="text-center py-8">Checking availability...</div>
                        
                        <div *ngIf="!loadingSlots && timeSlots.length === 0" class="text-center py-10 text-booking-primary">No available time slots for the selected date. Please try another date or artist.</div>

                        <div *ngIf="!loadingSlots && timeSlots.length > 0" class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                            <button *ngFor="let slot of timeSlots"
                                    (click)="selectTime(slot)"
                                    [disabled]="!slot.available"
                                    class="flex h-12 w-full items-center justify-center rounded-full border px-4 text-sm font-medium transition-all"
                                    [ngClass]="{
                                        'bg-primary border-primary text-[#1b0d10] shadow-lg ring-2 ring-primary ring-offset-2 dark:ring-offset-[#230f14] font-bold': selectedTime === slot.time,
                                        'border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] text-[#1b0d10] dark:text-gray-200 hover:border-primary hover:shadow-md': selectedTime !== slot.time && slot.available,
                                        'cursor-not-allowed border-transparent bg-gray-100 dark:bg-white/5 text-gray-400': !slot.available
                                    }">
                                {{ slot.time }}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            
            <!-- Right Column: Sidebar -->
            <aside class="lg:col-span-4 lg:w-[350px]">
                <div class="sticky top-28 backdrop-blur-md bg-booking-beige-lux/40 dark:bg-[#2d151b]/40 rounded-2xl p-6 shadow-xl border border-white/50 dark:border-white/10">
                    <h2 class="mb-6 text-xl font-bold text-[#1b0d10] dark:text-gray-100">Your Booking</h2>
                    <div class="flex flex-col gap-6">
                        
                         <!-- Service Items -->
                        <div *ngIf="selectedServices.length > 0">
                            <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Services</div>
                            <div *ngFor="let service of selectedServices" class="flex justify-between items-start pb-2 border-b border-gray-200/50 dark:border-white/10 mb-2">
                                <div class="flex flex-col gap-1">
                                    <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">{{ service.name }}</span>
                                    <span class="text-xs text-gray-600 dark:text-gray-300">
                                        {{ service.timeRange && service.timeRange.min !== service.timeRange.max 
                                            ? service.timeRange.min + ' - ' + service.timeRange.max 
                                            : service.duration }} mins
                                    </span>
                                </div>
                                <div class="flex flex-col items-end">
                                    <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">
                                        {{ service.priceRange && service.priceRange.min !== service.priceRange.max
                                            ? '₹' + service.priceRange.min + ' - ₹' + service.priceRange.max
                                            : '₹' + service.price }}
                                    </span>
                                    <span class="text-[10px] text-gray-500 italic">Pay at Venue</span>
                                </div>
                            </div>
                        </div>

                         <!-- Design Items -->
                        <div>
                             <div class="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Designs</div>
                            <div *ngIf="selectedDesigns.length === 0" class="text-sm text-gray-500 italic pb-2">None selected</div>
                            <div *ngFor="let design of selectedDesigns" class="flex justify-between items-start pb-2 border-b border-gray-200/50 dark:border-white/10 mb-2">
                                <div class="flex items-start gap-3">
                                    <div class="size-8 overflow-hidden rounded-md border border-gray-200 dark:border-white/10">
                                         <img [alt]="design.title" class="h-full w-full object-cover" [src]="design.imageUrl || 'assets/placeholder-nail.jpg'"/>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-sm font-medium text-[#1b0d10] dark:text-gray-100">{{ design.title }}</span>
                                    </div>
                                </div>
                                <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">
                                    {{ design.price ? '+₹' + design.price : 'Included' }}
                                </span>
                            </div>
                        </div>
                        
                        <!-- Artist Info -->
                        <div class="flex items-start gap-4 border-b border-gray-200/50 dark:border-white/10 pb-4" *ngIf="artist">
                            <div class="size-12 overflow-hidden rounded-full border-2 border-white dark:border-white/10 shadow-sm">
                                <img [alt]="artist.name" class="h-full w-full object-cover" [src]="artist.profileImage || 'assets/placeholder-user.svg'"/>
                            </div>
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Artist</span>
                                <span class="font-bold text-[#1b0d10] dark:text-gray-100">{{ artist.name }}</span>
                                <div class="flex items-center gap-1">
                                    <span class="material-symbols-outlined text-sm text-yellow-500 fill-current">star</span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-400">{{ artist.rating || '4.8' }}</span>
                                </div>
                                <span class="text-xs font-bold text-[#ea5b7a] mt-1">Fee: +₹200</span>
                            </div>
                        </div>

                        <!-- Date & Time Selection -->
                        <div class="flex flex-col gap-3 rounded-xl bg-white/60 dark:bg-white/10 p-4" *ngIf="selectedDate && selectedTime">
                            <div class="flex items-center gap-3">
                                <div class="flex size-8 items-center justify-center rounded-full bg-primary/20 text-[#ea5b7a]">
                                    <span class="material-symbols-outlined text-lg">calendar_month</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Date</span>
                                    <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">{{ formatSelectedDate() }}</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="flex size-8 items-center justify-center rounded-full bg-primary/20 text-[#ea5b7a]">
                                    <span class="material-symbols-outlined text-lg">schedule</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Time</span>
                                    <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">{{ selectedTime }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Total -->
                        <div class="flex items-center justify-between pt-2">
                            <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Total</span>
                            <span class="text-2xl font-black text-[#1b0d10] dark:text-gray-100">₹{{ getTotalPrice() }}</span>
                        </div>

                        <!-- Action -->
                        <button [routerLink]="selectedTime ? '/client/booking/review' : null" 
                                [disabled]="!selectedTime"
                                [ngClass]="selectedTime ? 'bg-primary text-[#1b0d10] hover:bg-[#ffb0c4] shadow-lg shadow-primary/30 transform hover:-translate-y-0.5' : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
                                class="flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold transition-all">
                            <span>Continue to Details</span>
                            <span class="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    </div>
    `
})
export class TimeSelectionComponent implements OnInit {
    selectedServices: any[] = [];
    selectedDesigns: any[] = [];
    artist: any;

    selectedDate: Date | null = null;
    selectedTime: string | null = null;

    weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    calendarDays: any[] = [];
    currentMonth: string = '';

    timeSlots: any[] = [];
    loadingSlots = false;

    constructor(
        private bookingState: BookingStateService,
        private appointmentService: AppointmentService,
        private artistService: ArtistService, // Need full artist details if current state is sparse
        private router: Router,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        const state = this.bookingState.getState();
        this.selectedServices = state.services || [];
        this.selectedDesigns = state.nailDesigns || [];
        this.artist = state.artist;

        if (this.selectedServices.length === 0) {
            this.router.navigate(['/client/booking/service']);
            return;
        }

        // Initialize calendar
        this.generateCalendar();

        // Restore state
        if (state.date) {
            this.selectedDate = state.date;
            this.fetchSlots(this.selectedDate);
            if (state.time) {
                this.selectedTime = state.time;
            }
        }
    }

    generateCalendar() {
        const today = new Date();
        this.currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });

        // Generate next 14 days for simplicity
        for (let i = 0; i < 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            this.calendarDays.push({
                day: date.getDate(),
                date: date,
                disabled: false // Could disable past dates or closed days
            });
        }

        // Select today by default if nothing selected
        if (!this.selectedDate) {
            this.selectDate(today);
        }
    }

    selectDate(date: Date) {
        this.selectedDate = date;
        this.selectedTime = null; // Reset time on date change
        this.fetchSlots(date);
        this.bookingState.updateState({ date: date, time: null });
    }

    isSameDate(d1: Date | null, d2: Date | null): boolean {
        if (!d1 || !d2) return false;
        return d1.toDateString() === d2.toDateString();
    }

    formatSelectedDate(): string {
        if (!this.selectedDate) return '';
        return this.selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }

    fetchSlots(date: Date) {
        this.loadingSlots = true;
        this.timeSlots = [];
        this.selectedTime = null; // Reset selection

        console.log('Fetching slots for date:', date);

        // Format date as YYYY-MM-DD for API
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        const artistId = this.artist?._id;
        console.log('Selected Artist ID:', artistId);

        if (artistId) {
             // Check specific artist availability
            this.appointmentService.checkAvailability(artistId, dateStr, '').subscribe({
                next: (bookedSlots: any[]) => {
                    console.log('Booked slots from API:', bookedSlots);
                    this.generateSlots(bookedSlots);
                    this.loadingSlots = false;
                    this.cdr.detectChanges();
                },
                error: (err) => {
                    console.error('Error fetching availability:', err);
                    this.loadingSlots = false;
                    // Fallback to generating empty slots if API fails, to at least show something
                    this.generateSlots([]); 
                    this.cdr.detectChanges();
                }
            });
        } else {
            // "Any Artist" - For now, show all slots as available
            console.log('No artist selected (Any Artist), generating all slots.');
            // Ideally we should check if *at least one* artist is available, but for now open all.
            this.generateSlots([]);
            this.loadingSlots = false;
            this.cdr.detectChanges();
        }
    }

    generateSlots(bookedAppts: any[]) {
        console.log('Generating slots. Booked appointments:', bookedAppts);
        
        // Define working hours (e.g., 10 AM to 6 PM)
        const startHour = 10;
        const endHour = 18; // 6 PM
        const slots: any[] = [];

        // Normalize booked times for comparison
        // Expected format from DB/API: "10:00 AM", "02:30 PM", etc.
        const bookedTimes = bookedAppts.map(appt => appt.time);

        for (let h = startHour; h < endHour; h++) {
            // Create slots for :00 and :30
            for (let m of ['00', '30']) {
                let hour12 = h > 12 ? h - 12 : h;
                if (hour12 === 0) hour12 = 12; // Handle 12 PM corner case if needed, though loop starts at 10
                
                const ampm = h >= 12 ? 'PM' : 'AM';
                const timeStr = `${hour12}:${m} ${ampm}`; // e.g., "10:00 AM"

                // Check if this time matches any booked appointment time
                const isBooked = bookedTimes.includes(timeStr);

                slots.push({
                    time: timeStr,
                    available: !isBooked
                });
            }
        }
        
        console.log('Generated slots:', slots);
        this.timeSlots = slots;
        this.cdr.detectChanges(); // Force update
    }

    selectTime(slot: any) {
        if (slot.available) {
            this.selectedTime = slot.time;
            this.bookingState.updateState({ time: slot.time });
        }
    }

    getTotalPrice(): number {
        return this.bookingState.getBookingTotal();
    }
}
