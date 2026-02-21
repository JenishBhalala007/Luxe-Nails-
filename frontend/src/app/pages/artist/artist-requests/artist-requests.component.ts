import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { AppointmentService } from '../../../core/services/appointment.service';
import { ArtistSidebarComponent } from '../components/artist-sidebar/artist-sidebar.component';

@Component({
    selector: 'app-artist-requests',
    standalone: true,
    imports: [CommonModule, ArtistSidebarComponent],
    template: `
    <div class="flex h-screen w-full flex-row overflow-hidden bg-background-light dark:bg-background-dark text-[#171212] dark:text-gray-100 transition-colors duration-200 font-display">
        <!-- Sidebar -->
        <app-artist-sidebar></app-artist-sidebar>

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8 md:p-12 lg:px-20 lg:py-16">
            <div class="max-w-[1100px] mx-auto flex flex-col gap-10">
                <!-- Page Heading -->
                <header class="flex flex-col gap-3 animate-fade-in-up">
                    <h2 class="text-4xl md:text-5xl font-black font-serif text-[#171212] dark:text-white tracking-tight leading-tight">New Requests</h2>
                    <p class="text-[#826467] dark:text-gray-400 text-lg font-normal leading-relaxed">
                        You have <span class="font-semibold text-artist-requests-primary">{{ pendingRequests.length }} pending inquiries</span> waiting for your review.
                    </p>
                </header>

                <div *ngIf="loading" class="text-center py-10 text-gray-500">Loading requests...</div>
                <div *ngIf="!loading && pendingRequests.length === 0" class="text-center py-10 text-gray-500 bg-white dark:bg-white/5 rounded-3xl">
                    No new requests found.
                </div>

                <!-- Grid of Request Cards -->
                <div *ngIf="!loading && pendingRequests.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    <div *ngFor="let req of pendingRequests" class="group bg-card-light dark:bg-artist-requests-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-transparent hover:border-artist-requests-primary/10 relative flex flex-col items-center text-center gap-6">
                        <!-- New Badge -->
                        <div class="absolute top-6 right-6 bg-artist-requests-accent-orange text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                            New
                        </div>
                        <!-- Avatar -->
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full bg-rose-gold/10 flex items-center justify-center text-3xl font-bold text-rose-gold border-4 border-background-light dark:border-background-dark shadow-sm">
                                {{ req.client?.name?.charAt(0) || 'C' }}
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="flex flex-col gap-2 w-full">
                            <h3 class="text-2xl font-bold font-serif text-gray-900 dark:text-white">{{ req.client?.name || 'Unknown Client' }}</h3>
                            <p class="text-[#826467] dark:text-gray-400 font-medium overflow-hidden text-ellipsis whitespace-nowrap" [title]="getServiceNames(req)">
                                {{ getServiceNames(req) }}
                            </p>
                             <p *ngIf="req.nailDesigns?.length > 0" class="text-xs text-purple-500 font-medium">
                                + {{ req.nailDesigns.length }} Design(s)
                            </p>
                        </div>
                        <!-- Chips -->
                        <div class="flex flex-wrap justify-center gap-3 w-full">
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">calendar_month</span>
                                {{ req.date | date:'MMM d' }}
                            </div>
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">schedule</span>
                                {{ req.time }}
                            </div>
                        </div>
                        <!-- Divider -->
                        <div class="w-full h-px bg-gray-100 dark:bg-white/10 my-1"></div>
                        <!-- Actions -->
                        <div class="flex gap-3 w-full mt-auto p-4 pt-0">
                            <button (click)="declineRequest(req._id)" class="flex-1 h-12 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                Decline
                            </button>
                            <button (click)="acceptRequest(req._id)" class="flex-1 h-12 rounded-xl bg-artist-requests-primary hover:bg-[#a05a60] text-white font-medium shadow-md shadow-artist-requests-primary/20 transition-all active:scale-[0.98]">
                                Accept
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `
})
export class ArtistRequestsComponent implements OnInit {
    pendingRequests: any[] = [];
    loading: boolean = true;

    constructor(
        private authService: AuthService,
        private appointmentService: AppointmentService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.fetchRequests();
    }

    fetchRequests() {
        this.loading = true;
        this.appointmentService.getMyAppointments().subscribe({
            next: (data) => {
                console.log('Artist Requests Fetched:', data);
                if (Array.isArray(data)) {
                    this.pendingRequests = data.filter(appt => appt.status === 'pending');
                } else {
                    this.pendingRequests = [];
                }
                this.loading = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Error fetching requests:', err);
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }

    acceptRequest(id: string) {
        if (!confirm('Are you sure you want to accept this request?')) return;
        this.updateStatus(id, 'confirmed');
    }

    declineRequest(id: string) {
        if (!confirm('Are you sure you want to decline this request?')) return;
        this.updateStatus(id, 'cancelled');
    }

    updateStatus(id: string, status: string) {
        this.appointmentService.updateAppointmentStatus(id, status).subscribe({
            next: () => {
                // Remove from local list
                this.pendingRequests = this.pendingRequests.filter(req => req._id !== id);
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Error updating status:', err);
                alert('Failed to update status');
            }
        });
    }

    getServiceNames(appt: any): string {
        if (appt.services && appt.services.length > 0) {
            return appt.services.map((s: any) => s.name).join(', ');
        }
        return 'No Service';
    }
}
