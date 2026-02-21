import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';
import { AppointmentService } from '../../../core/services/appointment.service';
import { ArtistSidebarComponent } from '../components/artist-sidebar/artist-sidebar.component';

@Component({
    selector: 'app-artist-schedule',
    standalone: true,
    imports: [CommonModule, ArtistSidebarComponent],
    template: `
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
        <!-- Sidebar -->
        <app-artist-sidebar></app-artist-sidebar>

        <!-- Main Content Area -->
        <main class="flex-1 flex flex-col h-full overflow-hidden relative">
            <!-- Header -->
            <header class="px-8 pt-8 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                <div>
                    <h2 class="font-serif text-4xl font-black text-text-main dark:text-white leading-tight mb-1">Your Schedule</h2>
                    <div class="flex items-center gap-2 text-artist-text-muted dark:text-gray-400">
                        <span class="material-symbols-outlined text-lg">calendar_today</span>
                        <span class="text-lg">{{ filterDate | date:'MMMM yyyy' }}</span>
                    </div>
                </div>
                <!-- Filters and Date Nav -->
                <div class="flex items-center gap-4">
                    <div class="bg-white dark:bg-white/5 p-1 rounded-full shadow-sm border border-gray-100 dark:border-white/10 flex">
                        <button (click)="setFilter('today')" [ngClass]="{'bg-artist-primary text-white shadow-md': activeFilter === 'today', 'text-artist-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white': activeFilter !== 'today'}" class="px-6 py-2 rounded-full text-sm font-bold transition-all">Today</button>
                        <button (click)="setFilter('tomorrow')" [ngClass]="{'bg-artist-primary text-white shadow-md': activeFilter === 'tomorrow', 'text-artist-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white': activeFilter !== 'tomorrow'}" class="px-6 py-2 rounded-full text-sm font-medium transition-all">Tomorrow</button>
                        <button (click)="setFilter('upcoming')" [ngClass]="{'bg-artist-primary text-white shadow-md': activeFilter === 'upcoming', 'text-artist-text-muted hover:text-text-main dark:text-gray-400 dark:hover:text-white': activeFilter !== 'upcoming'}" class="px-6 py-2 rounded-full text-sm font-medium transition-all">Upcoming</button>
                    </div>
                    <div class="relative flex items-center bg-white dark:bg-white/5 rounded-full shadow-sm border border-gray-100 dark:border-white/10 px-3 hover:border-artist-primary/30 transition-colors focus-within:ring-2 focus-within:ring-artist-primary/50">
                        <span class="material-symbols-outlined text-artist-text-muted dark:text-gray-400 mr-1 text-lg">event</span>
                        <input type="date"
                               [value]="getFormattedDate(filterDate)"
                               (change)="onDateSelect($event)"
                               class="bg-transparent border-none outline-none text-sm font-bold text-text-main dark:text-white cursor-pointer py-2 w-[115px] focus:ring-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100" />
                    </div>

                    <div class="flex gap-2">
                        <button (click)="changeDate(-1)" class="size-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:shadow-md transition-all">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button (click)="changeDate(1)" class="size-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:shadow-md transition-all">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- Schedule List & Details -->
            <div class="flex-1 px-8 pb-8 overflow-hidden flex gap-8">
                <!-- Appointment List -->
                <div class="flex-1 overflow-y-auto pr-2 space-y-4">
                    
                    <div *ngIf="loading" class="text-center py-10 text-gray-500">Loading schedule...</div>
                    <div *ngIf="!loading && displayedAppointments.length === 0" class="text-center py-10 text-gray-500 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
                        No appointments for this period.
                    </div>

                    <!-- Morning Section -->
                    <ng-container *ngIf="morningAppointments.length > 0">
                        <div class="flex items-center gap-4 px-2 py-2 mt-4">
                            <span class="text-xs font-bold text-artist-text-muted dark:text-gray-400 uppercase tracking-widest shrink-0">Morning</span>
                            <div class="h-px bg-gray-200 dark:bg-white/10 w-full"></div>
                        </div>
                        <div *ngFor="let appt of morningAppointments" 
                             (click)="selectAppointment(appt)"
                             [class.active]="selectedAppointment?._id === appt._id"
                             class="request-card bg-artist-surface dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-soft cursor-pointer transition-all hover:shadow-md flex items-start gap-6 group hover:border-artist-primary/30">
                             
                            <!-- Avatar -->
                            <div class="size-16 rounded-full bg-rose-gold/10 dark:bg-primary/20 flex items-center justify-center text-rose-gold dark:text-primary font-bold text-xl border-2 border-transparent group-hover:border-artist-primary/10">
                                {{ appt.client?.name?.charAt(0) || 'C' }}
                            </div>
                            
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-1">
                                    <h4 class="font-serif text-xl font-bold text-text-main dark:text-white">{{ appt.client?.name || 'Client' }}</h4>
                                    <div class="flex flex-col items-end gap-0.5">
                                        <span class="text-[10px] font-bold text-artist-text-muted dark:text-gray-500 uppercase tracking-wider">{{ appt.date | date:'mediumDate' }}</span>
                                        <span class="text-sm font-bold text-artist-primary dark:text-primary transition-colors group-hover:text-artist-primary">{{ appt.time }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4 text-sm text-artist-text-muted dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        <span class="material-symbols-outlined text-base">spa</span>
                                        {{ getServiceNames(appt) }}
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="material-symbols-outlined text-base">schedule</span>
                                        {{ getTotalDuration(appt) }} min
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex flex-col items-end gap-1">
                                <span class="text-lg font-bold text-text-main dark:text-white">&#8377;{{ appt.totalAmount }}</span>
                                <span *ngIf="(appt.paymentStatus === 'paid' || appt.status === 'confirmed') && isPast(appt)" class="text-[10px] uppercase font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">Paid</span>

                            </div>
                        </div>
                    </ng-container>

                    <!-- Afternoon Section -->
                    <ng-container *ngIf="afternoonAppointments.length > 0">
                        <div class="flex items-center gap-4 px-2 py-6">
                            <span class="text-xs font-bold text-artist-text-muted dark:text-gray-400 uppercase tracking-widest shrink-0">Afternoon</span>
                            <div class="h-px bg-gray-200 dark:bg-white/10 w-full"></div>
                        </div>
                        <div *ngFor="let appt of afternoonAppointments" 
                             (click)="selectAppointment(appt)"
                             [class.active]="selectedAppointment?._id === appt._id"
                             class="request-card bg-artist-surface dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-soft cursor-pointer transition-all hover:shadow-md flex items-start gap-6 group hover:border-artist-primary/30">
                            
                             <div class="size-16 rounded-full bg-rose-gold/10 dark:bg-primary/20 flex items-center justify-center text-rose-gold dark:text-primary font-bold text-xl border-2 border-transparent group-hover:border-artist-primary/10">
                                {{ appt.client?.name?.charAt(0) || 'C' }}
                            </div>

                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-1">
                                    <h4 class="font-serif text-xl font-bold text-text-main dark:text-white">{{ appt.client?.name || 'Client' }}</h4>
                                    <div class="flex flex-col items-end gap-0.5">
                                        <span class="text-[10px] font-bold text-artist-text-muted dark:text-gray-500 uppercase tracking-wider">{{ appt.date | date:'mediumDate' }}</span>
                                        <span class="text-sm font-bold text-artist-text-muted dark:text-gray-400 group-hover:text-artist-primary transition-colors">{{ appt.time }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4 text-sm text-artist-text-muted dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        <span class="material-symbols-outlined text-base">spa</span>
                                        {{ getServiceNames(appt) }}
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="material-symbols-outlined text-base">schedule</span>
                                        {{ getTotalDuration(appt) }} min
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-end gap-1">
                                <span class="text-lg font-bold text-text-main dark:text-white">&#8377;{{ appt.totalAmount }}</span>
                                <span *ngIf="(appt.paymentStatus === 'paid' || appt.status === 'confirmed') && isPast(appt)" class="text-[10px] uppercase font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">Paid</span>
                            </div>
                        </div>
                    </ng-container>

                     <!-- Evening Section (Optional/If needed) -->
                     <ng-container *ngIf="eveningAppointments.length > 0">
                        <div class="flex items-center gap-4 px-2 py-6">
                            <span class="text-xs font-bold text-artist-text-muted dark:text-gray-400 uppercase tracking-widest shrink-0">Evening</span>
                            <div class="h-px bg-gray-200 dark:bg-white/10 w-full"></div>
                        </div>
                         <div *ngFor="let appt of eveningAppointments" 
                             (click)="selectAppointment(appt)"
                             [class.active]="selectedAppointment?._id === appt._id"
                             class="request-card bg-artist-surface dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/5 shadow-soft cursor-pointer transition-all hover:shadow-md flex items-start gap-6 group hover:border-artist-primary/30">
                            
                             <div class="size-16 rounded-full bg-rose-gold/10 dark:bg-primary/20 flex items-center justify-center text-rose-gold dark:text-primary font-bold text-xl border-2 border-transparent group-hover:border-artist-primary/10">
                                {{ appt.client?.name?.charAt(0) || 'C' }}
                            </div>

                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-1">
                                    <h4 class="font-serif text-xl font-bold text-text-main dark:text-white">{{ appt.client?.name || 'Client' }}</h4>
                                    <div class="flex flex-col items-end gap-0.5">
                                        <span class="text-[10px] font-bold text-artist-text-muted dark:text-gray-500 uppercase tracking-wider">{{ appt.date | date:'mediumDate' }}</span>
                                        <span class="text-sm font-bold text-artist-text-muted dark:text-gray-400 group-hover:text-artist-primary transition-colors">{{ appt.time }}</span>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4 text-sm text-artist-text-muted dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        <span class="material-symbols-outlined text-base">spa</span>
                                        {{ getServiceNames(appt) }}
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <span class="material-symbols-outlined text-base">schedule</span>
                                        {{ getTotalDuration(appt) }} min
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-end gap-1">
                                <span class="text-lg font-bold text-text-main dark:text-white">&#8377;{{ appt.totalAmount }}</span>
                                <span *ngIf="(appt.paymentStatus === 'paid' || appt.status === 'confirmed') && isPast(appt)" class="text-[10px] uppercase font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">Paid</span>
                            </div>
                        </div>
                    </ng-container>

                </div>

                <!-- Details Sidebar -->
                <aside class="w-[380px] shrink-0 flex flex-col gap-6" *ngIf="selectedAppointment">
                    <div class="bg-artist-surface dark:bg-white/5 rounded-[24px] shadow-soft p-8 border border-gray-100 dark:border-white/5 flex flex-col gap-8 sticky top-0 overflow-y-auto max-h-full animate-fade-in-right">
                        <div class="flex justify-between items-start">
                            <h3 class="text-artist-text-muted dark:text-gray-400 text-xs font-bold uppercase tracking-widest">Full Request Details</h3>
                            <button (click)="selectedAppointment = null" class="text-artist-text-muted dark:text-gray-400 hover:text-artist-primary dark:hover:text-primary transition-colors">
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        
                        <div class="flex flex-col items-center gap-4 text-center">
                            <div class="relative">
                                <div class="size-28 rounded-full bg-rose-gold/10 dark:bg-primary/20 flex items-center justify-center text-rose-gold dark:text-primary text-4xl font-bold shadow-lg border-4 border-white dark:border-white/10">
                                    {{ selectedAppointment.client?.name?.charAt(0) || 'C' }}
                                </div>
                                <div class="absolute bottom-1 right-1 bg-green-500 size-5 rounded-full border-4 border-white dark:border-[#1c1617]"></div>
                            </div>
                            <div>
                                <h4 class="font-serif text-3xl font-bold text-text-main dark:text-white">{{ selectedAppointment.client?.name || 'Client' }}</h4>
                                <p class="text-sm text-artist-text-muted dark:text-gray-400 mt-1 font-medium">{{ selectedAppointment.client?.email }}</p>
                            </div>
                        </div>
                        
                        <div class="h-px bg-gray-100 dark:bg-white/10 w-full"></div>
                        
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="size-12 rounded-full bg-artist-primary-light dark:bg-primary/20 flex items-center justify-center text-artist-primary dark:text-primary shrink-0">
                                    <span class="material-symbols-outlined">spa</span>
                                </div>
                                <div>
                                    <p class="text-[10px] text-artist-text-muted dark:text-gray-400 font-bold uppercase tracking-wider">Service Requested</p>
                                    <p class="text-text-main dark:text-white font-bold text-lg leading-tight">{{ getServiceNames(selectedAppointment) }}</p>
                                    <p class="text-sm text-artist-text-muted dark:text-gray-500 mt-0.5" *ngIf="selectedAppointment.nailDesigns?.length > 0">
                                        + {{ selectedAppointment.nailDesigns.length }} Design(s)
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex gap-4" *ngIf="selectedAppointment?.nailDesigns?.length > 0">
                                <div class="size-12 rounded-full bg-artist-primary-light dark:bg-primary/20 flex items-center justify-center text-artist-primary dark:text-primary shrink-0">
                                    <span class="material-symbols-outlined">brush</span>
                                </div>
                                <div>
                                    <p class="text-[10px] text-artist-text-muted dark:text-gray-400 font-bold uppercase tracking-wider">Nails Name</p>
                                    <p class="text-text-main dark:text-white font-bold text-lg leading-tight">{{ getNailDesignNames(selectedAppointment) }}</p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="size-12 rounded-full bg-artist-primary-light dark:bg-primary/20 flex items-center justify-center text-artist-primary dark:text-primary shrink-0">
                                    <span class="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <p class="text-[10px] text-artist-text-muted dark:text-gray-400 font-bold uppercase tracking-wider">Appointment Time</p>
                                    <p class="text-text-main dark:text-white font-bold text-lg leading-tight">{{ selectedAppointment.date | date:'mediumDate' }} at {{ selectedAppointment.time }}</p>
                                    <p class="text-sm text-artist-text-muted dark:text-gray-500 mt-0.5">Duration: {{ getTotalDuration(selectedAppointment) }} Minutes</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="size-12 rounded-full bg-artist-primary-light dark:bg-primary/20 flex items-center justify-center text-artist-primary dark:text-primary shrink-0">
                                    <span class="material-symbols-outlined">payments</span>
                                </div>
                                <div>
                                    <p class="text-[10px] text-artist-text-muted dark:text-gray-400 font-bold uppercase tracking-wider">Total Price</p>
                                    <div class="flex items-center gap-3">
                                        <p class="text-text-main dark:text-white font-bold text-lg leading-tight">&#8377;{{ selectedAppointment.totalAmount }}</p>
                                        <span class="text-[10px] text-green-600 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full border border-green-100 dark:border-green-900/30">
                                            {{ selectedAppointment.status | titlecase }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-background-light dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/5">
                            <p class="text-[10px] text-artist-text-muted dark:text-gray-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span class="material-symbols-outlined text-base">sticky_note_2</span>
                                Special Instructions
                            </p>
                            <p class="text-sm text-text-main dark:text-white leading-relaxed italic">"No specific notes provided."</p>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3 mt-6">
                            <button class="flex items-center justify-center gap-2 py-3 rounded-full border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <span class="material-symbols-outlined text-lg">chat</span>
                                Message
                            </button>
                            <button class="flex items-center justify-center gap-2 py-3 rounded-full border border-gray-200 dark:border-white/10 text-text-main dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <span class="material-symbols-outlined text-lg">edit</span>
                                Reschedule
                            </button>
                        </div>
                    </div>
                </aside>

                 <!-- Empty State for Sidebar -->
                 <aside class="w-[380px] shrink-0 flex flex-col items-center justify-center text-center p-6 bg-artist-surface dark:bg-white/5 rounded-[24px] border border-gray-100 dark:border-white/5 text-artist-text-muted dark:text-gray-400" *ngIf="!selectedAppointment">
                    <span class="material-symbols-outlined text-4xl mb-2 opacity-50">event_note</span>
                    <p class="text-sm font-medium">Select an appointment to view details</p>
                </aside>

            </div>
        </main>
    </div>
    `,
    styles: [`
        .request-card.active {
            @apply ring-2 ring-primary bg-artist-primary-light/30 border-artist-primary/20 dark:bg-primary/10 dark:border-primary/20;
        }
    `]
})
export class ArtistScheduleComponent implements OnInit {
    filterDate: Date = new Date();
    activeFilter: 'today' | 'tomorrow' | 'upcoming' | 'custom' = 'upcoming';
    appointments: any[] = [];
    displayedAppointments: any[] = [];
    selectedAppointment: any = null;
    loading: boolean = true;
    
    morningAppointments: any[] = [];
    afternoonAppointments: any[] = [];
    eveningAppointments: any[] = [];

    constructor(
        private appointmentService: AppointmentService,
        private authService: AuthService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.fetchAppointments();
    }

    fetchAppointments() {
        this.loading = true;
        this.appointmentService.getMyAppointments().subscribe({
            next: (data) => {
                console.log('ArtistSchedule: Data fetched', data);
                if (Array.isArray(data)) {
                    // Filter out cancelled unless needed
                    this.appointments = data.filter((a: any) => a.status !== 'cancelled');
                } else {
                    this.appointments = [];
                }
                this.applyFilter();
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('ArtistSchedule: Error', err);
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }

    setFilter(filter: 'today' | 'tomorrow' | 'upcoming' | 'custom') {
        this.activeFilter = filter;
        if (filter === 'today') {
            this.filterDate = new Date();
        } else if (filter === 'tomorrow') {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            this.filterDate = tomorrow;
        }
        // For upcoming/custom, use current filterDate or new Date() if relevant
        this.applyFilter();
    }

    changeDate(offset: number) {
        this.filterDate.setDate(this.filterDate.getDate() + offset);
        this.filterDate = new Date(this.filterDate); // Trigger change
        this.activeFilter = 'custom'; 
        
        // Check if matches today/tomorrow to update highlight
        if (this.isSameDate(this.filterDate, new Date())) this.activeFilter = 'today';
        else if (this.isSameDate(this.filterDate, this.getTomorrow())) this.activeFilter = 'tomorrow';

        this.applyFilter();
    }

    getFormattedDate(date: Date): string {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    onDateSelect(event: any) {
        const selectedValue = event.target.value;
        if (selectedValue) {
            this.filterDate = new Date(selectedValue);
            this.activeFilter = 'custom';
            if (this.isSameDate(this.filterDate, new Date())) this.activeFilter = 'today';
            else if (this.isSameDate(this.filterDate, this.getTomorrow())) this.activeFilter = 'tomorrow';
            
            this.applyFilter();
        }
    }
    
    getTomorrow(): Date {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d;
    }

    applyFilter() {
        this.selectedAppointment = null;
        let filtered: any[] = [];

        if (this.activeFilter === 'upcoming') {
            // Show all future appointments from today onwards
            const today = new Date();
            today.setHours(0,0,0,0);
            filtered = this.appointments.filter(a => new Date(a.date) >= today);
        } else {
            // Filter by specific date (filterDate)
            filtered = this.appointments.filter(a => this.isSameDate(new Date(a.date), this.filterDate));
        }

        this.displayedAppointments = filtered.sort((a, b) => this.getTimeValue(a.time) - this.getTimeValue(b.time));
        this.groupAppointments();
    }

    isSameDate(d1: Date, d2: Date): boolean {
        return d1.getDate() === d2.getDate() &&
               d1.getMonth() === d2.getMonth() &&
               d1.getFullYear() === d2.getFullYear();
    }

    getTimeValue(timeStr: string): number {
        if (!timeStr) return 0;
        let [hours, minutes] = timeStr.replace(/[^0-9:]/g, '').split(':').map(Number);
        const isPM = timeStr.toLowerCase().includes('pm');
        const isAM = timeStr.toLowerCase().includes('am');

        if (isPM && hours < 12) hours += 12;
        if (isAM && hours === 12) hours = 0;

        return hours * 60 + minutes;
    }

    groupAppointments() {
        this.morningAppointments = [];
        this.afternoonAppointments = [];
        this.eveningAppointments = [];

        this.displayedAppointments.forEach(appt => {
            const timeValue = this.getTimeValue(appt.time);
            const hour = Math.floor(timeValue / 60);

            if (hour < 12) {
                this.morningAppointments.push(appt);
            } else if (hour < 17) {
                this.afternoonAppointments.push(appt);
            } else {
                this.eveningAppointments.push(appt);
            }
        });
    }

    selectAppointment(appt: any) {
        this.selectedAppointment = appt;
    }

    getServiceNames(appt: any): string {
        return appt.services?.map((s: any) => s.name).join(', ') || 'Service';
    }

    getNailDesignNames(appt: any): string {
        return appt.nailDesigns?.map((n: any) => n.title).join(', ') || 'None';
    }

    getTotalDuration(appt: any): number {
        return appt.services?.reduce((acc: number, s: any) => acc + (s.duration || 0), 0) || 0;
    }

    updateStatus(id: string, status: string) {
        if (!confirm(`Are you sure you want to mark this request as ${status}?`)) return;
        this.appointmentService.updateAppointmentStatus(id, status).subscribe({
            next: () => {
                // Update local state
                const appt = this.appointments.find(a => a._id === id);
                if (appt) appt.status = status;
                this.applyFilter(); // Re-render lists
                this.cdr.detectChanges();
            },
            error: (err) => alert('Failed to update status')
        });
    }

    isPast(appt: any): boolean {
        if (!appt.date || !appt.time) return false;
        
        const now = new Date();
        const apptDate = new Date(appt.date);
        
        // Check date
        const today = new Date();
        today.setHours(0,0,0,0);
        apptDate.setHours(0,0,0,0);

        if (apptDate.getTime() < today.getTime()) return true;
        if (apptDate.getTime() > today.getTime()) return false;

        // Same day, check time
        const timeValue = this.getTimeValue(appt.time);
        const nowMinutes = now.getHours() * 60 + now.getMinutes();
        
        return timeValue <= nowMinutes;
    }
}
