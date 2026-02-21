import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/services/auth.service';
import { AppointmentService } from '../../../core/services/appointment.service';
import { ArtistSidebarComponent } from '../components/artist-sidebar/artist-sidebar.component';

@Component({
    selector: 'app-artist-dashboard',
    standalone: true,
    imports: [CommonModule, ArtistSidebarComponent],
    template: `
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
        <!-- Sidebar -->
        <app-artist-sidebar></app-artist-sidebar>

        <!-- Main Content -->
        <main class="flex-1 h-full overflow-y-auto bg-background-light dark:bg-background-dark p-8 md:p-12 lg:px-16">
            <div class="max-w-5xl mx-auto flex flex-col gap-10">
                
                <!-- Header -->
                <header class="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-fade-in-up">
                    <div>
                        <p class="text-rose-gold dark:text-primary text-sm font-bold tracking-widest uppercase mb-2">Artist Workspace</p>
                        <h2 class="text-text-main dark:text-white text-4xl md:text-5xl font-serif font-medium leading-tight">Welcome back, {{ userName }}</h2>
                    </div>
                    <div class="flex items-center gap-3 bg-white dark:bg-white/5 p-2 pr-4 rounded-full shadow-soft border border-white dark:border-white/10">
                        <div class="size-10 rounded-full bg-rose-gold/10 dark:bg-primary/20 flex items-center justify-center border-2 border-white dark:border-white/20 text-rose-gold dark:text-primary font-bold text-lg">
                            {{ userInitials }}
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs font-bold text-text-main dark:text-white">{{ userName }}</span>
                            <span class="text-[10px] text-text-sub dark:text-gray-400 uppercase tracking-wide">Master Stylist</span>
                        </div>
                        <button class="ml-2 size-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span class="material-symbols-outlined text-text-sub" style="font-size: 20px;">expand_more</span>
                        </button>
                    </div>
                </header>
                
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white dark:bg-white/5 p-6 rounded-3xl shadow-soft border border-rose-gold/10 dark:border-white/5">
                        <p class="text-text-sub dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Total Appointments</p>
                        <h3 class="text-4xl font-serif font-bold text-rose-gold dark:text-primary">{{ appointments.length }}</h3>
                    </div>
                     <div class="bg-white dark:bg-white/5 p-6 rounded-3xl shadow-soft border border-rose-gold/10 dark:border-white/5">
                        <p class="text-text-sub dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">New Requests</p>
                        <h3 class="text-4xl font-serif font-bold text-rose-gold dark:text-primary">
                            {{ upcomingAppointmentsCount }}
                        </h3>
                    </div>
                    <div class="bg-white dark:bg-white/5 p-6 rounded-3xl shadow-soft border border-rose-gold/10 dark:border-white/5">
                        <p class="text-text-sub dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">Completed</p>
                        <h3 class="text-4xl font-serif font-bold text-rose-gold dark:text-primary">
                            {{ completedAppointmentsCount }}
                        </h3>
                    </div>
                </div>
                
                <!-- Appointments List -->
                <div class="flex flex-col gap-6">
                    <h3 class="text-2xl font-serif font-bold text-text-main dark:text-white">Your Appointments</h3>
                    
                    <div *ngIf="loading" class="text-center py-10 text-gray-500">Loading appointments...</div>
                    <div *ngIf="!loading && todayAppointments.length === 0" class="text-center py-10 text-gray-500 bg-white dark:bg-white/5 rounded-3xl">
                        No appointments found for today.
                    </div>

                    <div *ngFor="let appt of todayAppointments" class="bg-white dark:bg-white/5 p-6 rounded-3xl shadow-soft border border-rose-gold/10 dark:border-white/5 hover:border-rose-gold/30 transition-all group">
                        <div class="flex flex-col md:flex-row justify-between gap-6">
                            <!-- Client Info -->
                            <div class="flex items-start gap-4">
                                <div class="size-12 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-lg">
                                    {{ appt.client?.name?.charAt(0) || 'C' }}
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-text-main dark:text-white">{{ appt.client?.name || 'Client' }}</h4>
                                    <p class="text-sm text-text-sub dark:text-gray-400">{{ appt.client?.email }}</p>
                                    <div class="mt-2 flex flex-wrap gap-2">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-rose-gold/10 text-rose-gold">
                                            {{ getServiceNames(appt) }}
                                        </span>
                                        <span *ngIf="appt.nailDesigns?.length > 0" class="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-purple-50 text-purple-600">
                                            + {{ appt.nailDesigns.length }} Design(s)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- Date & Status -->
                            <div class="flex flex-col items-end gap-3">
                                <div class="flex items-center gap-2 text-text-main dark:text-white font-medium">
                                    <span class="material-symbols-outlined text-rose-gold">calendar_today</span>
                                    <span>{{ appt.date | date:'mediumDate' }}</span>
                                    <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <span>{{ appt.time }}</span>
                                </div>
                                <span class="px-4 py-1.5 rounded-full text-xs font-bold border" [ngClass]="getStatusClass(appt.status)">
                                    {{ appt.status | titlecase }}
                                </span>
                                <div class="font-bold text-lg text-text-main dark:text-white">
                                    &#8377;{{ appt.totalAmount || 0 }}
                                </div>
                            </div>
                        </div>
                        
                        <!-- Actions -->
                        <div class="mt-6 pt-6 border-t border-gray-100 dark:border-white/5 flex justify-end gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                             <button (click)="openDetailsModal(appt)" class="px-4 py-2 rounded-xl text-sm font-bold text-rose-gold hover:bg-rose-gold/10 transition-colors">
                                View Details
                            </button>
                            <button *ngIf="appt.status === 'pending'" (click)="updateStatus(appt._id, 'confirmed')" class="px-4 py-2 rounded-xl text-sm font-bold text-white bg-rose-gold hover:bg-rose-gold-dark shadow-lg shadow-rose-gold/20 transition-all">
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <!-- Appointment Details Modal -->
            <div *ngIf="selectedAppointment" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
                <div class="bg-white dark:bg-[#1a0b0e] rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-full border border-gray-100 dark:border-[#3a1d22]">
                    <!-- Modal Header -->
                    <div class="p-6 border-b border-gray-100 dark:border-[#3a1d22] flex justify-between items-start bg-gray-50 dark:bg-[#251215]">
                        <div class="flex items-center gap-4">
                            <div class="size-14 rounded-full bg-rose-gold/10 flex items-center justify-center text-rose-gold font-bold text-xl shrink-0">
                                {{ selectedAppointment.client?.name?.charAt(0) || 'C' }}
                            </div>
                            <div class="flex flex-col">
                                <h3 class="text-xl font-bold text-text-main dark:text-white">{{ selectedAppointment.client?.name || 'Unknown Client' }}</h3>
                                <p class="text-sm text-text-sub dark:text-gray-400">{{ selectedAppointment.client?.email || 'No email provided' }}</p>
                            </div>
                        </div>
                        <button (click)="closeDetailsModal()" class="text-gray-400 hover:text-red-500 transition-colors shrink-0">
                            <span class="material-symbols-outlined text-2xl">close</span>
                        </button>
                    </div>

                    <!-- Modal Body -->
                    <div class="p-6 flex flex-col gap-6 overflow-y-auto">
                        <!-- Date & Time -->
                        <div class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-gray-800 dark:text-gray-200">
                            <div class="flex-1 flex flex-col items-center border-r border-gray-200 dark:border-gray-700">
                                <span class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Date</span>
                                <span class="font-bold flex items-center gap-1"><span class="material-symbols-outlined text-[18px] text-rose-gold">event</span> {{ selectedAppointment.date | date:'mediumDate' }}</span>
                            </div>
                            <div class="flex-1 flex flex-col items-center border-r border-gray-200 dark:border-gray-700">
                                <span class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Time</span>
                                <span class="font-bold flex items-center gap-1"><span class="material-symbols-outlined text-[18px] text-rose-gold">schedule</span> {{ selectedAppointment.time }}</span>
                            </div>
                            <div class="flex-1 flex flex-col items-center">
                                <span class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Status</span>
                                <span class="font-bold px-3 py-1 rounded-full text-xs uppercase" [ngClass]="getStatusClass(selectedAppointment.status)">
                                    {{ selectedAppointment.status }}
                                </span>
                            </div>
                        </div>

                        <!-- Services & Designs -->
                        <div>
                            <h4 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 border-b border-gray-100 dark:border-[#3a1d22] pb-1">Services Requested</h4>
                            <div class="flex flex-col gap-2">
                                <div *ngIf="!selectedAppointment.services?.length" class="text-sm text-gray-500 italic">No services listed</div>
                                <div *ngFor="let service of selectedAppointment.services" class="flex justify-between items-center py-2 border-b border-gray-50 dark:border-white/5 last:border-0">
                                    <div class="flex items-center gap-3">
                                        <div class="size-8 rounded-lg bg-rose-gold/10 flex items-center justify-center text-rose-gold shrink-0">
                                            <span class="material-symbols-outlined text-[18px]">spa</span>
                                        </div>
                                        <span class="font-medium text-text-main dark:text-gray-200">{{ service.name }}</span>
                                    </div>
                                    <span class="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        <ng-container *ngIf="service.priceRange?.min; else singlePrice">
                                            ₹{{ service.priceRange.min }} - ₹{{ service.priceRange.max }}
                                        </ng-container>
                                        <ng-template #singlePrice>
                                            ₹{{ service.price || 0 }}
                                        </ng-template>
                                    </span>
                                </div>
                            </div>
                            
                            <div *ngIf="selectedAppointment.nailDesigns?.length > 0" class="mt-4">
                                <h4 class="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 border-b border-gray-100 dark:border-[#3a1d22] pb-1">Nail Designs</h4>
                                <div class="flex flex-col gap-2">
                                    <div *ngFor="let design of selectedAppointment.nailDesigns" class="flex justify-between items-center py-2 border-b border-gray-50 dark:border-white/5 last:border-0">
                                        <div class="flex items-center gap-3">
                                             <div class="size-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 shrink-0">
                                                <span class="material-symbols-outlined text-[18px]">palette</span>
                                            </div>
                                            <span class="font-medium text-text-main dark:text-gray-200">{{ design.title }}</span>
                                        </div>
                                        <span class="text-sm text-gray-600 dark:text-gray-400 font-medium">₹{{ design.price || 0 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Notes -->
                        <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-900/50" *ngIf="selectedAppointment.notes">
                            <h4 class="text-xs font-bold uppercase tracking-wider text-orange-800 dark:text-orange-400 flex items-center gap-2 mb-2"><span class="material-symbols-outlined text-[16px]">notes</span> Client Notes</h4>
                            <p class="text-sm text-orange-900 dark:text-orange-200 leading-relaxed">{{ selectedAppointment.notes }}</p>
                        </div>

                        <!-- Summary & Pricing -->
                        <div class="bg-gray-50 dark:bg-[#2a1418] rounded-xl p-5 border border-gray-100 dark:border-[#3a1d22]">
                            <!-- Artist Info -->
                            <div *ngIf="selectedAppointment.artist" class="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 dark:border-[#4a242a]">
                                <div class="flex items-center gap-3">
                                    <img *ngIf="selectedAppointment.artist?.profileImage" [src]="selectedAppointment.artist.profileImage" class="size-10 rounded-full object-cover">
                                    <div *ngIf="!selectedAppointment.artist?.profileImage" class="size-10 rounded-full bg-rose-gold/20 flex items-center justify-center text-rose-gold font-bold">
                                        {{ selectedAppointment.artist?.name?.charAt(0) || 'A' }}
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-sm font-bold text-text-main dark:text-white">
                                            {{ selectedAppointment.isBroadcast ? 'Any Artist Available Request' : (selectedAppointment.artist?.name || 'Assigned Artist') }}
                                        </span>
                                        <span class="text-xs text-text-sub dark:text-gray-400">
                                            {{ selectedAppointment.isBroadcast ? '(' + (selectedAppointment.artist?.name || 'Assigned Artist') + ')' : 'Assigned Artist' }}
                                        </span>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <span class="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-1">Base Price</span>
                                    <span class="font-bold text-text-main dark:text-white">₹{{ selectedAppointment.isBroadcast ? 0 : (selectedAppointment.artist?.basePrice || 200) }}</span>
                                </div>
                            </div>

                            <div class="flex justify-between items-center mb-2">
                                <span class="text-gray-500 dark:text-gray-400 font-medium">Payment Method</span>
                                <span class="font-bold uppercase text-sm text-text-main dark:text-white">{{ selectedAppointment.paymentMethod || 'Pay at Venue' }}</span>
                            </div>
                            <div class="flex justify-between items-center mt-3 pt-3 border-t border-gray-200 dark:border-[#4a242a]">
                                <span class="font-bold text-text-main dark:text-white">Total Amount</span>
                                <span class="text-2xl font-black text-rose-gold">₹{{ selectedAppointment.totalAmount || 0 }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
    `
})
export class ArtistDashboardComponent implements OnInit {
    userName: string = '';
    userInitials: string = '';
    appointments: any[] = [];
    loading: boolean = true;
    selectedAppointment: any | null = null;

    constructor(
        private authService: AuthService,
        private appointmentService: AppointmentService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.authService.user$.subscribe(user => {
            if (user) {
                console.log('ArtistDashboard: User loaded', user);
                this.userName = user.name;
                this.userInitials = this.getInitials(user.name);
                this.fetchAppointments();
            }
        });
    }

    fetchAppointments() {
        this.loading = true;
        this.appointmentService.getMyAppointments().subscribe({
            next: (data) => {
                console.log('ArtistDashboard: Appointments Fetched:', data);
                const appts = Array.isArray(data) ? data : [];
                // Sort ascending by date so newest/upcoming are logically ordered
                this.appointments = appts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                this.loading = false;
                this.cdr.detectChanges(); // Force update
            },
            error: (err) => {
                console.error('ArtistDashboard: Error fetching appointments:', err);
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }

    get todayAppointments(): any[] {
        const today = new Date();
        return this.appointments.filter(a => {
            const apptDate = new Date(a.date);
            return apptDate.getDate() === today.getDate() &&
                   apptDate.getMonth() === today.getMonth() &&
                   apptDate.getFullYear() === today.getFullYear();
        });
    }

    get upcomingAppointmentsCount(): number {
        return this.appointments.filter(a => a.status === 'pending').length;
    }

    get completedAppointmentsCount(): number {
        const now = new Date();
        return this.appointments.filter(a => {
            if (a.status === 'completed') return true;
            if (a.status === 'confirmed') {
                // If it's confirmed but the time has passed, treat it as completed
                const apptDateTime = new Date(a.date);
                // Try to parse time intelligently or just use date
                // time format is like "10:00 AM" or "14:30"
                if (a.time) {
                    const timeMatch = a.time.match(/(\d+):(\d+)\s*(AM|PM)?/i);
                    if (timeMatch) {
                        let hours = parseInt(timeMatch[1]);
                        const mins = parseInt(timeMatch[2]);
                        const period = timeMatch[3];
                        
                        if (period) {
                            if (period.toUpperCase() === 'PM' && hours < 12) hours += 12;
                            if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;
                        }
                        
                        apptDateTime.setHours(hours, mins, 0, 0);
                    }
                }
                return apptDateTime < now;
            }
            return false;
        }).length;
    }

    logout() {
        this.authService.logout();
    }

    getInitials(name: string): string {
        if (!name) return '';
        const names = name.trim().split(/\s+/);
        if (names.length >= 2) {
            return (names[0][0] + names[1][0]).toUpperCase();
        }
        return name[0].toUpperCase();
    }

    getServiceNames(appt: any): string {
        if (appt.services && appt.services.length > 0) {
            return appt.services.map((s: any) => s.name).join(', ');
        }
        return 'No Service';
    }

    getStatusClass(status: string): string {
        switch (status?.toLowerCase()) {
            case 'completed': return 'bg-green-100 text-green-700 border-green-200';
            case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
            case 'confirmed': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-gray-100 text-gray-600 border-gray-200';
        }
    }

    updateStatus(id: string, status: string) {
        if (!confirm(`Are you sure you want to mark this appointment as ${status}?`)) return;
        
        this.appointmentService.updateAppointmentStatus(id, status).subscribe({
            next: (res) => {
                console.log('Status updated', res);
                this.fetchAppointments(); // Refresh list
                
                // Update selected appointment if modal is open
                if (this.selectedAppointment && this.selectedAppointment._id === id) {
                    this.selectedAppointment.status = status;
                }
            },
            error: (err) => {
                console.error('Error updating status', err);
                alert('Failed to update status');
            }
        });
    }

    openDetailsModal(appointment: any) {
        this.selectedAppointment = appointment;
    }

    closeDetailsModal() {
        this.selectedAppointment = null;
    }
}
