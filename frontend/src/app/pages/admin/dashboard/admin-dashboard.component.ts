import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { AdminService } from '../../../core/services/admin.service';
import { ServiceService } from '../../../core/services/service.service';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex h-screen w-full overflow-hidden bg-luxe-bg dark:bg-background-dark font-display text-luxe-text antialiased">
        <!-- Mobile Header -->
        <header class="lg:hidden h-16 bg-white border-b border-[#f0e6e9] flex items-center justify-between px-4 z-10 shrink-0">
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-2xl">spa</span>
                <span class="font-serif font-bold text-lg text-luxe-text">Luxe Nails</span>
            </div>
            <button class="text-luxe-text p-2">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </header>
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
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/dashboard">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">dashboard</span>
                    <span class="text-sm font-semibold">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/bookings">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
                    <span class="text-sm font-medium">Bookings</span>
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
        <main class="flex-1 flex flex-col h-full overflow-hidden relative">
            <!-- Top Header -->
            <header class="h-20 flex items-center justify-between px-10 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                <h2 class="text-2xl font-serif font-bold text-luxe-text tracking-tight">Admin Overview</h2>
                <div class="flex items-center gap-6">
                    <!-- Search -->
                    <div class="relative w-64 hidden md:block">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-luxe-text-muted material-symbols-outlined text-[20px]">search</span>
                        <input class="w-full bg-white border border-[#f0e6e9] rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-luxe-text-muted shadow-sm transition-all" placeholder="Search..." type="text"/>
                    </div>
                    <!-- Notifications -->
                    <button class="relative w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#f0e6e9] text-luxe-text hover:bg-gray-50 transition-colors shadow-sm">
                        <span class="material-symbols-outlined text-[20px]">notifications</span>
                        <span class="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border border-white"></span>
                    </button>
                    <!-- Profile -->
                    <div class="flex items-center gap-3 cursor-pointer">
                        <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-white shadow-sm text-primary font-bold text-lg">
                            {{ getInitials(currentUser?.name || 'Admin') }}
                        </div>
                        <div class="hidden lg:flex flex-col">
                            <span class="text-sm font-bold text-luxe-text leading-tight">{{ currentUser?.name || 'Admin' }}</span>
                            <span class="text-xs text-luxe-text-muted uppercase">{{ currentUser?.role }}</span>
                        </div>
                        <span class="material-symbols-outlined text-luxe-text-muted text-[18px]">expand_more</span>
                    </div>
                </div>
            </header>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto p-10 pb-20">
                <div class="max-w-[1200px] mx-auto flex flex-col gap-8">
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <!-- Total Clients -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Total Clients</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text" *ngIf="!loadingStats">{{ stats?.totalClients || 0 }}</p>
                                <p class="text-2xl font-serif font-bold text-gray-300 animate-pulse" *ngIf="loadingStats">--</p>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#EBF5FE] flex items-center justify-center text-[#3B82F6]">
                                <span class="material-symbols-outlined">group_add</span>
                            </div>
                        </div>
                        <!-- Bookings -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Total Bookings</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text" *ngIf="!loadingStats">{{ stats?.totalBookings || 0 }}</p>
                                <p class="text-2xl font-serif font-bold text-gray-300 animate-pulse" *ngIf="loadingStats">--</p>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#FFEFF3] flex items-center justify-center text-luxe-pink">
                                <span class="material-symbols-outlined">calendar_month</span>
                            </div>
                        </div>
                        <!-- Active Workers -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Total Workers</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text" *ngIf="!loadingStats">{{ stats?.totalWorkers || 0 }}</p>
                                <p class="text-2xl font-serif font-bold text-gray-300 animate-pulse" *ngIf="loadingStats">--</p>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#F3F0FF] flex items-center justify-center text-luxe-lavender">
                                <span class="material-symbols-outlined">group</span>
                            </div>
                        </div>
                        <!-- Pending Actions -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Pending Requests</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text" *ngIf="!loadingStats">{{ stats?.pendingRequests || 0 }}</p>
                                <p class="text-2xl font-serif font-bold text-gray-300 animate-pulse" *ngIf="loadingStats">--</p>
                                <div *ngIf="stats?.pendingRequests > 0" class="flex items-center gap-1 text-[#C4320A] text-xs font-semibold bg-[#FFECE5] w-fit px-2 py-1 rounded-lg">
                                    <span class="material-symbols-outlined text-[14px]">priority_high</span>
                                    <span>Needs Attention</span>
                                </div>
                                <div *ngIf="stats?.pendingRequests === 0" class="flex items-center gap-1 text-[#078859] text-xs font-semibold bg-[#e6f4ed] w-fit px-2 py-1 rounded-lg">
                                    <span class="material-symbols-outlined text-[14px]">check</span>
                                    <span>All Caught Up</span>
                                </div>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#FFF4EC] flex items-center justify-center text-luxe-orange">
                                <span class="material-symbols-outlined">notification_important</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Charts Row -->
                    <div class="flex flex-col lg:flex-row gap-6">
                        <!-- Revenue Curve -->
                        <div class="flex-1 lg:w-[60%] bg-white p-8 rounded-xl shadow-card flex flex-col">
                            <div class="flex items-center justify-between mb-6">
                                <div>
                                    <h3 class="text-lg font-serif font-bold text-luxe-text">Appointment Curve</h3>
                                    <p class="text-sm text-luxe-text-muted">Booking volume over last 7 days</p>
                                </div>
                                <button class="p-2 rounded-lg hover:bg-gray-50 text-luxe-text-muted">
                                    <span class="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div class="flex-1 flex flex-col justify-end min-h-[250px]">
                                <!-- Chart SVG Representation -->
                                <div class="relative w-full h-[200px] mt-4">
                                    <!-- Grid lines -->
                                    <div class="absolute inset-0 flex flex-col justify-between text-xs text-luxe-text-muted opacity-30">
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                    </div>
                                    <!-- The Curve -->
                                    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stop-color="#ec1349" stop-opacity="0.2"></stop>
                                                <stop offset="100%" stop-color="#ec1349" stop-opacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 160 C50 160, 50 80, 100 80 C150 80, 150 120, 200 120 C250 120, 250 40, 300 40 C350 40, 350 90, 400 90 V200 H0 Z" fill="url(#chartGradient)"></path>
                                        <path d="M0 160 C50 160, 50 80, 100 80 C150 80, 150 120, 200 120 C250 120, 250 40, 300 40 C350 40, 350 90, 400 90" fill="none" stroke="#ec1349" stroke-width="3" stroke-linecap="round"></path>
                                        <!-- Active Point -->
                                        <circle cx="300" cy="40" r="6" fill="#ec1349" stroke="white" stroke-width="3"></circle>
                                    </svg>
                                </div>
                                <!-- X Axis Labels -->
                                <div class="flex justify-between mt-4 px-2 text-xs font-medium text-luxe-text-muted uppercase tracking-wide">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Top Services -->
                        <div class="flex-1 lg:w-[40%] bg-white p-8 rounded-xl shadow-card flex flex-col">
                            <div class="flex items-center justify-between mb-6">
                                <div>
                                    <h3 class="text-lg font-serif font-bold text-luxe-text">Top Services</h3>
                                    <p class="text-sm text-luxe-text-muted">Most popular treatments</p>
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col justify-center gap-6">
                                <div class="flex flex-col gap-2" *ngFor="let srv of topServices; let i = index">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm font-bold text-luxe-text">{{ srv.name }}</span>
                                        <span class="text-xs font-semibold text-luxe-text-muted">{{ srv.percentage }}%</span>
                                    </div>
                                    <div class="h-2 w-full bg-[#f3e7ea] rounded-full overflow-hidden">
                                        <div class="h-full rounded-full" [ngClass]="getServiceColorClass(i)" [style.width.%]="srv.percentage"></div>
                                    </div>
                                </div>
                                <div *ngIf="topServices.length === 0" class="text-sm text-luxe-text-muted text-center py-4">
                                    No services available.
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </main>
    </div>
    `
})
export class AdminDashboardComponent implements OnInit {
    currentUser: any;
    stats: any = null;
    loadingStats: boolean = true;
    topServices: any[] = [];
    serviceColors: string[] = ['bg-primary', 'bg-luxe-lavender', 'bg-luxe-gold', 'bg-luxe-orange'];

    constructor(
        private authService: AuthService,
        private adminService: AdminService,
        private serviceService: ServiceService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.authService.user$.subscribe(user => {
            this.currentUser = user;
        });

        this.adminService.getDashboardStats().subscribe({
            next: (data) => {
                console.log('Admin Stats Fetched:', data);
                this.stats = data;
                this.loadingStats = false;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Failed to load admin stats', err);
                this.loadingStats = false;
                this.cdr.detectChanges();
            }
        });

        this.serviceService.getServices().subscribe({
            next: (data) => {
                if (data && Array.isArray(data)) {
                    // Assign hypothetical percentages just to maintain the UI structure
                    const percentages = [45, 30, 15, 10]; 
                    this.topServices = data.slice(0, 4).map((s, index) => ({
                        name: s.name,
                        percentage: percentages[index] || 5
                    }));
                    this.cdr.detectChanges();
                }
            },
            error: (err) => console.error('Error fetching services for dashboard:', err)
        });
    }

    logout() {
        this.authService.logout();
    }

    getInitials(name: string): string {
        return name
            .trim()
            .split(/\s+/)
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    }
    
    getServiceColorClass(index: number): string {
        return this.serviceColors[index % this.serviceColors.length];
    }
}
