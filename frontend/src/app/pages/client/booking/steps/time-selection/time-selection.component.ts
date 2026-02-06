import { Component, OnInit } from '@angular/core';
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
    <div class="flex-1 w-full bg-booking-bg-light dark:bg-booking-bg-dark">
        <!-- Main Content Layout -->
        <div class="w-full max-w-[1200px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-12">
            <!-- Left Column: Calendar & Time -->
            <main class="flex-1 flex flex-col gap-10">
                <!-- Stepper -->
                <div class="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                    <div class="flex w-full items-center justify-center gap-2 md:w-auto">
                        <div class="flex items-center gap-2">
                            <div class="flex size-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <span class="material-symbols-outlined text-lg">check</span>
                            </div>
                            <span class="text-sm font-semibold text-[#1b0d10] dark:text-gray-200">Service</span>
                        </div>
                        <div class="h-px w-12 bg-gray-200 dark:bg-white/10"></div>
                        <div class="flex items-center gap-2">
                            <div class="flex size-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <span class="material-symbols-outlined text-lg">check</span>
                            </div>
                            <span class="text-sm font-semibold text-[#1b0d10] dark:text-gray-200">Artist</span>
                        </div>
                        <div class="h-px w-12 bg-gray-200 dark:bg-white/10"></div>
                        <div class="flex items-center gap-2">
                            <div class="flex size-8 items-center justify-center rounded-full bg-booking-step3-primary text-white shadow-lg shadow-booking-step3-primary/30">
                                <span class="text-sm font-bold">3</span>
                            </div>
                            <span class="text-sm font-bold text-booking-step3-primary">Time</span>
                        </div>
                        <div class="h-px w-12 bg-gray-200 dark:bg-white/10"></div>
                        <div class="flex items-center gap-2 opacity-50">
                            <div class="flex size-8 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-400">
                                <span class="text-sm font-bold">4</span>
                            </div>
                            <span class="text-sm font-medium text-[#1b0d10] dark:text-gray-400">Details</span>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="flex flex-col gap-10">
                    <!-- Heading -->
                    <div class="flex flex-col gap-2">
                        <h1 class="text-3xl font-extrabold tracking-tight text-[#1b0d10] dark:text-gray-100 sm:text-4xl">Schedule Your Appointment</h1>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Choose a date and time for your {{ service?.name }} with {{ artist?.name || 'an available artist' }}.</p>
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
                                            'bg-booking-step3-primary text-white shadow-md shadow-booking-step3-primary/20 hover:bg-booking-step3-primary/90 font-bold': isSameDate(dateObj.date, selectedDate),
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
                        
                        <div *ngIf="!loadingSlots && timeSlots.length === 0" class="text-center py-8 text-gray-500">
                            No available slots for this date. Please try another day.
                        </div>

                        <div *ngIf="!loadingSlots && timeSlots.length > 0" class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                            <button *ngFor="let slot of timeSlots"
                                    (click)="selectTime(slot)"
                                    [disabled]="!slot.available"
                                    class="flex h-12 w-full items-center justify-center rounded-full border px-4 text-sm font-medium transition-all"
                                    [ngClass]="{
                                        'bg-booking-step3-primary border-booking-step3-primary text-white shadow-lg ring-2 ring-booking-step3-primary ring-offset-2 dark:ring-offset-[#230f14] font-bold': selectedTime === slot.time,
                                        'border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] text-[#1b0d10] dark:text-gray-200 hover:border-booking-step3-primary hover:text-booking-step3-primary': selectedTime !== slot.time && slot.available,
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
                        <!-- Service Info -->
                        <div class="flex items-start justify-between border-b border-gray-200/50 dark:border-white/10 pb-4" *ngIf="service">
                            <div class="flex flex-col gap-1">
                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Service</span>
                                <span class="text-lg font-bold text-[#1b0d10] dark:text-gray-100">{{ service.name }}</span>
                                <span class="text-sm text-gray-600 dark:text-gray-300">{{ service.duration }} mins</span>
                            </div>
                            <span class="font-bold text-[#1b0d10] dark:text-gray-100">₹{{ service.price }}</span>
                        </div>
                        
                        <!-- Artist Info -->
                        <div class="flex items-start gap-4 border-b border-gray-200/50 dark:border-white/10 pb-4" *ngIf="artist">
                            <div class="size-12 overflow-hidden rounded-full border-2 border-white dark:border-white/10 shadow-sm">
                                <img [alt]="artist.name" class="h-full w-full object-cover" [src]="artist.profileImage || 'assets/placeholder-user.jpg'"/>
                            </div>
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Artist</span>
                                <span class="font-bold text-[#1b0d10] dark:text-gray-100">{{ artist.name }}</span>
                                <div class="flex items-center gap-1">
                                    <span class="material-symbols-outlined text-sm text-yellow-500 fill-current">star</span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-400">{{ artist.rating || '4.8' }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Date & Time Selection -->
                        <div class="flex flex-col gap-3 rounded-xl bg-white/60 dark:bg-white/10 p-4" *ngIf="selectedDate && selectedTime">
                            <div class="flex items-center gap-3">
                                <div class="flex size-8 items-center justify-center rounded-full bg-booking-step3-primary/10 text-booking-step3-primary">
                                    <span class="material-symbols-outlined text-lg">calendar_month</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Date</span>
                                    <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">{{ formatSelectedDate() }}</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="flex size-8 items-center justify-center rounded-full bg-booking-step3-primary/10 text-booking-step3-primary">
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
                            <span class="text-2xl font-black text-[#1b0d10] dark:text-gray-100">₹{{ service?.price || 0 }}</span>
                        </div>

                        <!-- Action -->
                        <button [routerLink]="selectedTime ? '/client/booking/review' : null" 
                                [disabled]="!selectedTime"
                                [ngClass]="selectedTime ? 'bg-booking-step3-primary hover:bg-[#a01c40] shadow-lg hover:shadow-booking-step3-primary/30 transform hover:-translate-y-0.5' : 'bg-gray-300 cursor-not-allowed'"
                                class="flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-white transition-all">
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
    service: any;
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
        private router: Router
    ) { }

    ngOnInit() {
        const state = this.bookingState.getState();
        this.service = state.service;
        this.artist = state.artist;

        if (!this.service) {
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
        // Use local date string to avoid timezone shifts
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;

        // Mock Logic if Artist is null (Any Artist) or specific
        const artistId = this.artist?._id;

        // If artist is selected, check their availability. 
        // If "Any", technically we should check ALL artists, but that's complex.
        // For "Any", let's assume valid slots are 10 AM to 6 PM.
        // If specific artist, fetch their appointments and block slots.

        if (artistId) {
            this.appointmentService.checkAvailability(artistId, dateStr, '').subscribe({
                next: (bookedSlots: any[]) => {
                    this.generateSlots(bookedSlots);
                    this.loadingSlots = false;
                },
                error: (err) => {
                    console.error(err);
                    this.loadingSlots = false;
                }
            });
        } else {
            // "Any" artist - simplified: just show all slots as available for now
            // or fetch all shop appointments (not implemented).
            this.generateSlots([]);
            this.loadingSlots = false;
        }
    }

    generateSlots(bookedAppts: any[]) {
        // Assume working hours 10:00 to 18:00 (6 PM)
        const startHour = 10;
        const endHour = 18;
        const slots = [];

        // Parse booked times
        // Format: '10:00 AM' -> we need to normalize comparisons
        const bookedTimes = bookedAppts.map(appt => appt.time);

        for (let h = startHour; h < endHour; h++) {
            for (let m of ['00', '30']) {
                const hour12 = h > 12 ? h - 12 : h;
                const ampm = h >= 12 ? 'PM' : 'AM';
                const timeStr = `${hour12.toString().padStart(2, '0')}:${m} ${ampm}`;

                const isBooked = bookedTimes.includes(timeStr);

                slots.push({
                    time: timeStr,
                    available: !isBooked
                });
            }
        }
        this.timeSlots = slots;
    }

    selectTime(slot: any) {
        if (slot.available) {
            this.selectedTime = slot.time;
            this.bookingState.updateState({ time: slot.time });
        }
    }
}
