import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../../../core/services/appointment.service';
import { finalize, timeout } from 'rxjs/operators';

@Component({
    selector: 'app-client-appointments',
    standalone: true,
    imports: [CommonModule, RouterLink, DatePipe],
    template: `
        <div class="mx-auto flex max-w-[900px] flex-col gap-8 animate-fade-in-up">
            <!-- Page Heading -->
            <div class="flex flex-col gap-2">
                <h1 class="font-serif text-4xl font-bold tracking-tight text-appointments-text-main dark:text-white">My Appointments</h1>
                <p class="text-appointments-text-muted dark:text-gray-400">Manage your upcoming sessions and view history</p>
            </div>
            
            <!-- Tabs -->
            <div class="relative z-10 border-b border-[#e7cfd5] dark:border-white/10">
                <div class="flex w-full">
                    <button (click)="activeTab = 'upcoming'" class="relative flex flex-1 items-center justify-center pb-4 pt-2 text-sm font-semibold sm:flex-none sm:px-8 transition-colors"
                            [ngClass]="activeTab === 'upcoming' ? 'text-appointments-text-main dark:text-white' : 'text-appointments-text-muted hover:text-appointments-text-main dark:text-gray-500 dark:hover:text-white'">
                        Upcoming
                        <span *ngIf="activeTab === 'upcoming'" class="absolute bottom-0 h-[3px] w-full rounded-t-full bg-appointments-primary shadow-[0_-2px_6px_rgba(238,43,88,0.4)]"></span>
                    </button>
                    <button (click)="activeTab = 'past'" class="relative flex flex-1 items-center justify-center pb-4 pt-2 text-sm font-medium sm:flex-none sm:px-8 transition-colors"
                            [ngClass]="activeTab === 'past' ? 'text-appointments-text-main dark:text-white' : 'text-appointments-text-muted hover:text-appointments-text-main dark:text-gray-500 dark:hover:text-white'">
                        Past
                        <span *ngIf="activeTab === 'past'" class="absolute bottom-0 h-[3px] w-full rounded-t-full bg-appointments-primary shadow-[0_-2px_6px_rgba(238,43,88,0.4)]"></span>
                    </button>
                </div>
            </div>

            <!-- Content List -->
            <div class="flex flex-col gap-6 pb-12">
                <!-- IMPORTANT: Using *ngIf to toggle visibility based on loading state -->
                <div *ngIf="loading" class="text-center py-10">Loading appointments...</div>
                
                <ng-container *ngIf="!loading">
                    <div *ngIf="(activeTab === 'upcoming' ? upcomingAppointments : pastAppointments).length === 0" class="mt-4 flex flex-col items-center justify-center gap-4 py-8 text-center bg-white dark:bg-white/5 rounded-2xl p-8 shadow-sm">
                        <div class="rounded-full bg-appointments-bg-light p-4 shadow-sm dark:bg-white/5">
                            <span class="material-symbols-outlined text-[32px] text-gray-300 dark:text-gray-600">event_busy</span>
                        </div>
                        <p class="text-sm text-appointments-text-muted dark:text-gray-500">No {{ activeTab }} appointments found.</p>
                        <a *ngIf="activeTab === 'upcoming'" routerLink="/client/booking/service" class="font-semibold text-appointments-primary hover:underline">Book a new appointment</a>
                    </div>

                    <article *ngFor="let appt of (activeTab === 'upcoming' ? upcomingAppointments : pastAppointments)" class="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#1a0b0e] shadow-lg hover:shadow-xl transition-all border border-[#f4e6e9] dark:border-white/5 md:flex-row">
                        <!-- Date Block -->
                        <div class="flex w-full flex-row items-center justify-between bg-appointments-primary/5 p-6 dark:bg-white/5 md:w-32 md:flex-col md:justify-center md:border-r md:border-appointments-primary/10">
                            <span class="font-serif text-4xl font-bold text-appointments-text-main dark:text-white">{{ appt.date | date:'dd' }}</span>
                            <span class="font-serif text-lg font-medium text-appointments-text-muted dark:text-gray-400 uppercase">{{ appt.date | date:'MMM' }}</span>
                        </div>
                        <!-- Info Block -->
                        <div class="flex flex-1 flex-col justify-center gap-1 p-6 md:px-8">
                            <div class="mb-2 flex items-center gap-2">
                                <span class="h-2 w-2 rounded-full" [ngClass]="{
                                    'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]': appt.status === 'confirmed',
                                    'bg-yellow-500': appt.status === 'pending',
                                    'bg-red-500': appt.status === 'cancelled',
                                    'bg-blue-500': appt.status === 'completed'
                                }"></span>
                                <span class="text-xs font-semibold uppercase tracking-wider" [ngClass]="{
                                    'text-green-700 dark:text-green-400': appt.status === 'confirmed',
                                    'text-yellow-700 dark:text-yellow-400': appt.status === 'pending',
                                    'text-red-700 dark:text-red-400': appt.status === 'cancelled',
                                    'text-blue-700 dark:text-blue-400': appt.status === 'completed'
                                }">{{ appt.status }}</span>
                            </div>
                            <h3 class="text-xl font-bold text-appointments-text-main dark:text-white">{{ appt.service?.name }}</h3>
                            <div class="mt-1 flex flex-col gap-1 text-sm text-appointments-text-muted dark:text-gray-400 sm:flex-row sm:items-center sm:gap-4">
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">person</span>
                                    <span>Artist: <span class="font-medium text-appointments-text-main dark:text-white">{{ appt.artist?.name || 'Any Artist' }}</span></span>
                                </div>
                                <div class="hidden h-1 w-1 rounded-full bg-gray-300 sm:block"></div>
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">schedule</span>
                                    <span>{{ appt.time }} ({{ appt.service?.duration }} min)</span>
                                </div>
                            </div>
                        </div>
                        <!-- Action Block -->
                        <div class="flex items-center justify-end gap-4 border-t border-gray-100 bg-gray-50/50 p-4 px-6 dark:border-white/5 dark:bg-white/5 md:border-l md:border-t-0 md:bg-transparent" *ngIf="activeTab === 'upcoming' && appt.status !== 'cancelled'">
                            <button (click)="cancelAppointment(appt._id)" class="text-sm font-medium text-red-500 hover:text-red-700 hover:underline">Cancel</button>
                            <!-- <button class="flex h-10 w-10 items-center justify-center rounded-xl bg-appointments-bg-light text-appointments-text-main transition hover:bg-white hover:shadow-md dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                                <span class="material-symbols-outlined text-[20px]">edit</span>
                            </button> -->
                        </div>
                    </article>
                </ng-container>
            </div>
        </div>
    `
})
export class ClientAppointmentsComponent implements OnInit {
    activeTab: 'upcoming' | 'past' = 'upcoming';
    upcomingAppointments: any[] = [];
    pastAppointments: any[] = [];
    loading = true;

    constructor(
        private appointmentService: AppointmentService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.loadAppointments();
    }

    loadAppointments() {
        this.loading = true;
        // Fallback safety: If backend doesn't respond in 5s, force stop loading
        const safetyTimeout = setTimeout(() => {
            if (this.loading) {
                console.warn('Safety timeout triggered: Forcing loading=false');
                this.loading = false;
                this.cdr.detectChanges();
            }
        }, 5000);

        this.appointmentService.getMyAppointments()
            .pipe(
                timeout(8000), // Force error if request takes > 8s
                finalize(() => {
                    console.log('Finalize: Setting loading to false');
                    clearTimeout(safetyTimeout);
                    this.loading = false;
                    this.cdr.detectChanges(); // Force UI update
                })
            )
            .subscribe({
                next: (data) => {
                    console.log('Appointments loaded:', data);
                    try {
                        if (!data || !Array.isArray(data)) { data = []; }
                        const now = new Date();
                        now.setHours(0, 0, 0, 0); // Normalize to start of day

                        // Simple sort
                        const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                        this.upcomingAppointments = sorted.filter(a => {
                            const d = new Date(a.date);
                            // Compare timestamps for strict >= (with 24h buffer for timezone safety)
                            const yesterday = now.getTime() - (24 * 60 * 60 * 1000);
                            return d.getTime() >= yesterday && a.status !== 'cancelled' && a.status !== 'completed';
                        }).reverse(); // Nearest first

                        this.pastAppointments = sorted.filter(a => {
                            const d = new Date(a.date);
                            return d.getTime() < now.getTime() || a.status === 'completed' || a.status === 'cancelled';
                        });
                    } catch (e) {
                        console.error('Error processing appointments data:', e);
                    }
                },
                error: (err) => {
                    console.error('Error fetching appointments:', err);
                }
            });
    }

    cancelAppointment(id: string) {
        if (!confirm('Are you sure you want to cancel this appointment?')) return;

        this.appointmentService.cancelAppointment(id).subscribe({
            next: () => {
                // Refresh list
                this.loadAppointments();
            },
            error: (err) => {
                console.error('Failed to cancel appointment', err);
                alert('Failed to cancel appointment');
            }
        });
    }
}
