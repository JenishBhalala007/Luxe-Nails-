import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { AppointmentService } from '../../../core/services/appointment.service';

@Component({
    selector: 'app-admin-bookings',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="flex h-screen w-full bg-luxe-bg text-[#1b0d11] antialiased overflow-hidden font-display">
        <!-- Sidebar -->
        <aside class="w-64 flex-shrink-0 flex flex-col bg-white border-r border-[#f0e6e9] h-full z-20 shadow-soft hidden md:flex">
            <div class="h-20 flex items-center px-8">
                <div class="flex items-center gap-3">
                    <div class="text-2xl text-luxe-text">
                        <span class="material-symbols-outlined text-4xl">spa</span>
                    </div>
                    <h1 class="text-xl font-serif font-bold tracking-tight text-luxe-text">Luxe Nails</h1>
                </div>
            </div>
            
            <nav class="flex-1 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/dashboard">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/bookings">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">calendar_month</span>
                    <span class="text-sm font-semibold">Bookings</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/messages">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">chat_bubble</span>
                    <span class="text-sm font-medium">Messages</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/users">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
                    <span class="text-sm font-medium">Users</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-medium">Services</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/gallery">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">article</span>
                    <span class="text-sm font-medium">Gallery</span>
                </a>
            </nav>
            
            <div class="p-4 border-t border-[#f0e6e9]">
                <button (click)="logout()" class="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-luxe-text-muted hover:bg-gray-50 transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="text-sm font-medium">Log out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col h-full overflow-hidden bg-luxe-bg relative">
            <!-- Mobile Header -->
            <div class="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-100">
                <h1 class="font-serif text-xl font-bold">Luxe Nail Art</h1>
                <button class="text-gray-600">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>
            
            <div class="flex-1 overflow-y-auto p-4 md:p-8 lg:px-12 scroll-smooth">
                <div class="max-w-[1200px] mx-auto flex flex-col gap-8 pb-10">
                    <!-- Header -->
                    <header>
                        <h2 class="font-serif text-4xl font-bold text-[#1b0d11] mb-2">Manage Bookings</h2>
                        <p class="text-gray-500 font-body text-sm">View and manage all salon appointments.</p>
                    </header>
                    
                    <!-- Toolbar -->
                    <div class="bg-white p-4 rounded-2xl shadow-soft flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div class="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
                            <!-- Search -->
                            <div class="relative w-full md:max-w-md">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="material-symbols-outlined text-rose-gold text-[20px]">search</span>
                                </div>
                                <input [(ngModel)]="searchTerm" class="block w-full pl-10 pr-3 py-2.5 border-none bg-luxe-bg rounded-xl text-gray-900 placeholder-rose-gold/60 focus:ring-1 focus:ring-rose-gold/30 sm:text-sm font-body" placeholder="Search Client or Worker" type="text"/>
                            </div>
                            <!-- Date Picker -->
                            <div class="relative w-full md:w-48">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span class="material-symbols-outlined text-rose-gold text-[20px]">calendar_today</span>
                                </div>
                                <input type="date" [(ngModel)]="filterDate" class="block w-full pl-10 pr-3 py-2.5 border-none bg-luxe-bg rounded-xl text-gray-900 focus:ring-1 focus:ring-rose-gold/30 sm:text-sm font-body cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 uppercase tracking-wider text-xs font-bold pt-[11px] pb-[9px]">
                            </div>
                        </div>
                        <!-- Export Button -->
                        <button class="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-rose-gold text-rose-gold hover:bg-rose-gold-light transition-all font-bold text-sm tracking-wide bg-white">
                            <span class="material-symbols-outlined text-[18px]">download</span>
                            <span>Export to CSV</span>
                        </button>
                    </div>
                    
                    <!-- Data Table -->
                    <div class="bg-white rounded-2xl shadow-soft overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full min-w-[800px] text-left border-collapse">
                                <thead>
                                    <tr class="border-b border-gray-100">
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">ID</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Client</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Worker</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Service</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Date / Time</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body">Status</th>
                                        <th class="py-5 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-body text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-50">
                                    <tr *ngIf="loading">
                                        <td colspan="7" class="py-8 text-center text-gray-500">Loading appointments...</td>
                                    </tr>
                                    <tr *ngIf="!loading && filteredAppointments.length === 0">
                                        <td colspan="7" class="py-8 text-center text-gray-500">No appointments found.</td>
                                    </tr>
                                    <tr *ngFor="let appt of filteredAppointments" class="hover:bg-[#fafafa] transition-colors group">
                                        <td class="py-4 px-6 text-sm text-gray-400 font-medium font-body truncate max-w-[100px]" [title]="appt._id">#{{ appt._id | slice:-4 }}</td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                 <!-- Fallback avatar if no image -->
                                                <div class="h-9 w-9 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs ring-2 ring-white shadow-sm">
                                                    {{ appt.client?.name?.charAt(0) || 'U' }}
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-gray-900 font-body">{{ appt.client?.name || 'Unknown' }}</span>
                                                    <span class="text-xs text-gray-500 font-body">{{ appt.client?.email }}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-3">
                                                <div class="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs ring-2 ring-white shadow-sm" *ngIf="!appt.artist?.profileImage">
                                                    {{ appt.artist?.name?.charAt(0) || 'A' }}
                                                </div>
                                                <img *ngIf="appt.artist?.profileImage" [src]="appt.artist.profileImage" class="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm">
                                                <span class="text-sm font-medium text-gray-700 font-body">{{ getArtistDisplayName(appt) }}</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-luxe-bg text-gray-600 border border-gray-100 font-body">
                                                {{ getServiceNames(appt) }}
                                                <span *ngIf="appt.nailDesigns?.length > 0" class="ml-1 text-xs text-gray-400">+ Design</span>
                                            </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <div class="flex flex-col">
                                                <span class="text-sm font-medium text-gray-900 font-body">{{ appt.date | date:'mediumDate' }}</span>
                                                <span class="text-xs text-gray-400 font-body">{{ appt.time }}</span>
                                            </div>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold font-body" [ngClass]="getStatusClass(appt.status)">
                                                {{ appt.status || 'Pending' }}
                                            </span>
                                        </td>
                                        <td class="py-4 px-6 text-right">
                                            <div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <!-- Action buttons (View/Edit/Delete) - logic to be added later -->
                                                <button class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="View Details">
                                                    <span class="material-symbols-outlined text-[18px]">visibility</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <!-- Pagination -->
                        <div class="flex items-center justify-end gap-4 px-6 py-4 border-t border-gray-50 bg-white">
                            <button class="text-gray-400 hover:text-gray-600 text-sm font-medium font-body transition-colors">Previous</button>
                            <div class="flex items-center gap-1">
                                <button class="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold shadow-sm">1</button>
                                <button class="w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 text-sm font-medium transition-colors">2</button>
                                <button class="w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 text-sm font-medium transition-colors">3</button>
                            </div>
                            <button class="text-gray-600 hover:text-primary text-sm font-medium font-body transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `
})
export class AdminBookingsComponent implements OnInit {
    private authService = inject(AuthService);
    private appointmentService = inject(AppointmentService);
    private cdr = inject(ChangeDetectorRef);
    
    appointments: any[] = [];
    loading = true;
    searchTerm = '';
    filterDate = '';

    ngOnInit() {
        this.fetchAppointments();
    }

    get filteredAppointments() {
        let filtered = this.appointments;

        if (this.searchTerm) {
            const term = this.searchTerm.toLowerCase();
            filtered = filtered.filter(appt => {
                const clientMatch = appt.client?.name?.toLowerCase().includes(term) || appt.client?.email?.toLowerCase().includes(term);
                const artistMatch = this.getArtistDisplayName(appt).toLowerCase().includes(term);
                return clientMatch || artistMatch;
            });
        }

        if (this.filterDate) {
            // filterDate is expected to be in YYYY-MM-DD
            filtered = filtered.filter(appt => {
                if (!appt.date) return false;
                const d = new Date(appt.date);
                const apptDateStr = [
                    d.getFullYear(),
                    ('0' + (d.getMonth() + 1)).slice(-2),
                    ('0' + d.getDate()).slice(-2)
                ].join('-');
                return apptDateStr === this.filterDate;
            });
        }

        return filtered;
    }

    fetchAppointments() {
        this.loading = true; // Ensure loading is true before start
        this.appointmentService.getAllAppointments().subscribe({
            next: (data) => {
                console.log('Admin Appointments Fetched:', data);
                // Ensure data is an array
                this.appointments = Array.isArray(data) ? data : [];
                this.loading = false;
                this.cdr.markForCheck(); // Trigger change detection manually
            },
            error: (err) => {
                console.error('Error fetching appointments:', err);
                this.loading = false;
                this.cdr.markForCheck();
            }
        });
    }

    logout() {
        this.authService.logout();
    }
    
    getServiceNames(appt: any): string {
        try {
            if (appt && appt.services && Array.isArray(appt.services) && appt.services.length > 0) {
                return appt.services
                    .filter((s: any) => s && s.name) // Filter out nulls or missing names
                    .map((s: any) => s.name)
                    .join(', ');
            }
        } catch (e) {
            console.warn('Error extracting service names', e);
        }
        return 'No Service';
    }

    getStatusClass(status: string): string {
        const safeStatus = (status || '').toLowerCase();
        switch (safeStatus) {
            case 'completed': return 'bg-green-50 text-green-700';
            case 'pending': return 'bg-amber-50 text-amber-600';
            case 'cancelled': return 'bg-red-50 text-red-600';
            case 'confirmed': return 'bg-blue-50 text-blue-600';
            default: return 'bg-gray-50 text-gray-600';
        }
    }

    getArtistDisplayName(appt: any): string {
        if (!appt) return 'Any Artist';
        if (appt.isBroadcast) {
            return appt.artist?.name ? `Any Artist Available Request (${appt.artist.name})` : 'Any Artist Available Request';
        }
        return appt.artist?.name || 'Any Artist';
    }
}
