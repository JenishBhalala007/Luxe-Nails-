import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AppointmentService } from '../../../core/services/appointment.service';
import { finalize, timeout } from 'rxjs/operators';

@Component({
    selector: 'app-client-dashboard',
    standalone: true,
    imports: [CommonModule, DatePipe, RouterLink],
    template: `
        <div class="max-w-5xl mx-auto flex flex-col gap-10 animate-fade-in-up">
            <!-- Page Heading -->
            <header class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <p class="text-dashboard-rose-gold dark:text-dashboard-primary text-sm font-bold tracking-widest uppercase mb-2">Dashboard</p>
                    <h2 class="text-dashboard-text-main dark:text-white text-4xl md:text-5xl font-serif font-medium leading-tight">Welcome back, {{ user?.name || 'Client' }}</h2>
                </div>
                <div class="flex items-center gap-3 bg-white dark:bg-white/5 p-2 pr-4 rounded-full shadow-lg shadow-black/5 border border-white dark:border-white/10">
                    <div class="size-10 rounded-full bg-dashboard-rose-gold/10 dark:bg-white/10 flex items-center justify-center border-2 border-white dark:border-white/20 text-dashboard-rose-gold dark:text-white font-bold text-lg">
                        {{ user?.name?.charAt(0) || 'U' }}
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs font-bold text-dashboard-text-main dark:text-white">{{ user?.name || 'User' }}</span>
                        <span class="text-xs text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wide px-1">Member</span>
                    </div>
                </div>
            </header>

            <!-- Active Card: Upcoming Appointment -->
             <section class="w-full" *ngIf="upcomingAppointment">
                <div class="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#ffe4eb] to-[#fff0f3] dark:from-[#3a1d24] dark:to-[#230f14] shadow-lg shadow-black/5 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border border-white/50 dark:border-white/5">
                    <!-- Decorative Abstract Shape -->
                    <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
                    <div class="flex flex-col gap-6 relative z-10 w-full md:w-auto">
                        <div>
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm mb-4">
                                <span class="size-2 rounded-full bg-dashboard-rose-gold animate-pulse"></span>
                                <span class="text-xs font-bold text-dashboard-rose-gold dark:text-dashboard-primary uppercase tracking-wider">Upcoming</span>
                            </div>
                            <h3 class="text-2xl md:text-3xl font-serif text-dashboard-text-main dark:text-white mb-2">Next Pampering Session</h3>
                            <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-dashboard-text-sub dark:text-gray-300">
                                <div class="flex items-center gap-2">
                                    <span class="material-symbols-outlined" style="font-size: 20px;">event</span>
                                    <span class="font-medium">{{ upcomingAppointment.date | date:'mediumDate' }}, {{ upcomingAppointment.time }}</span>
                                </div>
                                <div class="hidden md:block w-1 h-1 rounded-full bg-dashboard-rose-gold/50"></div>
                                <div class="flex items-center gap-2">
                                    <span class="material-symbols-outlined" style="font-size: 20px;">spa</span>
                                    <span class="font-medium">{{ getServiceNames(upcomingAppointment) }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center gap-4" *ngIf="upcomingAppointment.artist">
                            <div class="flex -space-x-3 overflow-hidden">
                                <div class="inline-block size-12 rounded-full ring-2 ring-white dark:ring-[#230f14] bg-cover bg-center" [style.backgroundImage]="'url(' + (upcomingAppointment.artist?.profileImage || 'assets/placeholder-user.svg') + ')'"></div>
                            </div>
                            <div class="flex flex-col">
                                <span class="text-sm font-bold text-dashboard-text-main dark:text-white">{{ getArtistDisplayName(upcomingAppointment) }}</span>
                                <span class="text-xs text-dashboard-text-sub dark:text-gray-400">Your Artist</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center md:self-center relative z-10 w-full md:w-auto">
                        <!-- Actions could go here -->
                    </div>
                </div>
            </section>
            
            <section class="w-full text-center py-10" *ngIf="!upcomingAppointment && !loading">
                <p class="text-gray-500">No upcoming appointments found.</p>
                <a routerLink="/client/booking/services" [queryParams]="{reset: 'true'}" class="text-dashboard-rose-gold font-bold hover:underline mt-2 inline-block">Book Now</a>
            </section>

            <!-- Profile Details Card -->
            <section class="w-full" *ngIf="user">
                <div class="bg-white dark:bg-[#1a0b0e] rounded-xl md:rounded-2xl shadow-lg shadow-black/5 overflow-hidden border border-[#f4e6e9] dark:border-white/5 p-6 md:p-8">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-xl font-bold text-dashboard-text-main dark:text-white">Profile Details</h3>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="flex flex-col gap-1">
                            <span class="text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider">Full Name</span>
                            <span class="text-base font-medium text-dashboard-text-main dark:text-white">{{ user.name }}</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span class="text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider">Email Address</span>
                            <span class="text-base font-medium text-dashboard-text-main dark:text-white">{{ user.email }}</span>
                        </div>
                         <div class="flex flex-col gap-1">
                            <span class="text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider">Phone Number</span>
                            <span class="text-base font-medium text-dashboard-text-main dark:text-white">{{ user.phone || 'Not provided' }}</span>
                        </div>
                         <div class="flex flex-col gap-1 md:col-span-2">
                             <span class="text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider">Address</span>
                             <span class="text-base font-medium text-dashboard-text-main dark:text-white">{{ user.address || 'Not provided' }}</span>
                        </div>
                    </div>
                </div>
            </section>

             <!-- Recent Appointments Table -->
            <section>
                <div class="flex items-center justify-between mb-6 px-2">
                    <h3 class="text-xl font-bold text-dashboard-text-main dark:text-white">Recent Appointments</h3>
                    <a routerLink="/client/appointments" class="text-sm font-semibold text-dashboard-rose-gold hover:text-dashboard-text-main dark:text-dashboard-primary dark:hover:text-white transition-colors">View All</a>
                </div>
                <div class="bg-white dark:bg-[#1a0b0e] rounded-xl md:rounded-2xl shadow-lg shadow-black/5 overflow-hidden border border-[#f4e6e9] dark:border-white/5">
                    <div class="overflow-x-auto">
                        <table class="w-full min-w-[600px]">
                            <thead>
                                <tr class="border-b border-[#f4e6e9] dark:border-white/5 bg-dashboard-bg-light/50 dark:bg-white/5">
                                    <th class="px-6 py-4 text-left text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Date</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Service</th>
                                    <th class="px-6 py-4 text-left text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Artist</th>
                                    <th class="px-6 py-4 text-right text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[#f4e6e9] dark:divide-white/5">
                                <tr *ngFor="let appt of recentAppointments" class="group hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-colors">
                                    <td class="px-6 py-5 whitespace-nowrap">
                                        <div class="flex items-center gap-3">
                                            <div class="bg-dashboard-primary/20 p-2 rounded-full text-dashboard-rose-gold dark:text-dashboard-primary">
                                                <span class="material-symbols-outlined" style="font-size: 20px;">check_circle</span>
                                            </div>
                                            <div class="flex flex-col">
                                                <span class="text-sm font-bold text-dashboard-text-main dark:text-white">{{ appt.date | date:'mediumDate' }}</span>
                                                <span class="text-xs text-dashboard-text-sub dark:text-gray-500">{{ appt.time }}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5 whitespace-nowrap">
                                        <span class="text-sm font-medium text-dashboard-text-sub dark:text-gray-300">{{ getServiceNames(appt) }}</span>
                                    </td>
                                    <td class="px-6 py-5 whitespace-nowrap">
                                        <div class="flex items-center gap-2">
                                            <div class="size-6 rounded-full bg-cover bg-center" [style.backgroundImage]="'url(' + (appt.artist?.profileImage || 'assets/placeholder-user.svg') + ')'"></div>
                                            <span class="text-sm text-dashboard-text-sub dark:text-gray-300">{{ getArtistDisplayName(appt) }}</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-5 whitespace-nowrap text-right">
                                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800 capitalize">
                                            {{ appt.status }}
                                        </span>
                                    </td>
                                </tr>
                                <tr *ngIf="recentAppointments.length === 0">
                                    <td colspan="4" class="px-6 py-8 text-center text-gray-500">No recent history.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    `
})
export class ClientDashboardComponent implements OnInit {
    user: any = null;
    upcomingAppointment: any = null;
    recentAppointments: any[] = [];
    loading = true;

    constructor(
        private authService: AuthService,
        private appointmentService: AppointmentService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.authService.user$.subscribe(user => {
            this.user = user;
        });

        this.fetchAppointments();
    }

    fetchAppointments() {
        this.loading = true;
        // Fallback safety
        const safetyTimeout = setTimeout(() => {
            if (this.loading) {
                this.loading = false;
                this.cdr.detectChanges();
            }
        }, 5000);

        this.appointmentService.getMyAppointments()
            .pipe(
                timeout(8000),
                finalize(() => {
                    clearTimeout(safetyTimeout);
                    this.loading = false;
                    this.cdr.detectChanges();
                })
            )
            .subscribe({
                next: (appointments) => {
                    if (!appointments) appointments = [];

                    // Sort by date desc (Newest/Furthest Future first)
                    const sorted = appointments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                    // For upcoming card, we want the NEAREST future date.
                    // Filter future dates
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);

                    // Filter strictly for future dates/times
                    const upcomingSorted = [...appointments].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

                    const future = upcomingSorted.filter(a => {
                        if (a.status === 'cancelled' || a.status === 'completed') return false;
                        return !this.isPast(a.date, a.time);
                    });

                    if (future.length > 0) {
                        this.upcomingAppointment = future[0];
                    } else {
                        this.upcomingAppointment = null;
                    }

                    // Recent Appointments Table: Show the last 5 appointments from the main sorted list (Date Desc)
                    // This includes upcoming and past, showing the "latest" entries on user's calendar.
                    this.recentAppointments = sorted.slice(0, 5);

                    this.loading = false;
                },
                error: (err) => {
                    console.error(err);
                    this.loading = false;
                }
            });
    }

    isPast(dateStr: string, timeStr: string): boolean {
        const now = new Date();
        const apptDate = new Date(dateStr);
        
        // Normalize dates to midnight for comparison
        const today = new Date();
        today.setHours(0,0,0,0);
        
        const targetDate = new Date(apptDate);
        targetDate.setHours(0,0,0,0);
        
        // If date is before today, it is past
        if (targetDate.getTime() < today.getTime()) return true;
        // If date is after today, it is future
        if (targetDate.getTime() > today.getTime()) return false;
        
        // If same day, check time
        if (!timeStr) return false; 

        // Parse time (handle "14:30" or "2:30 PM")
        let [hours, minutes] = timeStr.replace(/[^0-9:]/g, '').split(':').map(Number);
        const isPM = timeStr.toLowerCase().includes('pm');
        const isAM = timeStr.toLowerCase().includes('am');

        if (isPM && hours < 12) hours += 12;
        if (isAM && hours === 12) hours = 0;

        const apptTime = new Date(today); // Use today's date
        apptTime.setHours(hours, minutes, 0, 0);
        
        // Compare full timestamps
        return apptTime.getTime() < now.getTime();
    }

    getServiceNames(appt: any): string {
        if (appt.services && Array.isArray(appt.services) && appt.services.length > 0) {
            return appt.services.map((s: any) => s.name).join(', ');
        }
        return appt.service?.name || 'Service'; // Fallback for legacy data
    }

    getArtistDisplayName(appt: any): string {
        if (!appt) return 'Any Artist';
        if (appt.isBroadcast) {
            return appt.artist?.name ? `Any Artist Available Request (${appt.artist.name})` : 'Any Artist Available Request';
        }
        return appt.artist?.name || 'Any Artist';
    }
}
