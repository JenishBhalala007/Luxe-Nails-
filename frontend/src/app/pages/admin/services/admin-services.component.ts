import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { ServiceService } from '../../../core/services/service.service';
import { CreateServiceModalComponent } from './components/create-service-modal/create-service-modal.component';

@Component({
    selector: 'app-admin-services',
    standalone: true,
    imports: [CommonModule, FormsModule, CreateServiceModalComponent],
    template: `
    <div class="bg-luxe-bg dark:bg-background-dark text-luxe-text font-display h-screen flex overflow-hidden selection:bg-service-rose-gold-light selection:text-service-primary">
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
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-semibold">Services</span>
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
        <main class="flex-1 flex flex-col h-screen overflow-hidden relative">
            <!-- Mobile Header (Visible only on small screens) -->
            <header class="lg:hidden h-16 bg-white dark:bg-[#1a0f10] border-b border-service-rose-gold/10 flex items-center justify-between px-4 z-10 shrink-0">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-service-primary">spa</span>
                    <span class="font-bold text-lg">Luxe Nail Art</span>
                </div>
                <button class="text-luxe-text p-2">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </header>

            <!-- Main Scroll Area -->
            <div class="flex-1 overflow-y-auto bg-luxe-bg dark:bg-background-dark p-4 md:p-8 lg:px-12 lg:py-10">
                <div class="max-w-7xl mx-auto space-y-8">
                    <!-- Page Header -->
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div class="space-y-2">
                            <nav class="flex items-center gap-2 text-sm text-service-text-sub mb-1">
                                <span class="hover:text-service-primary cursor-pointer">Admin</span>
                                <span class="material-symbols-outlined text-[10px]">chevron_right</span>
                                <span class="text-luxe-text font-medium">Services</span>
                            </nav>
                            <h1 class="text-3xl md:text-4xl font-serif font-black text-luxe-text dark:text-white tracking-tight leading-tight">Service Catalog Management</h1>
                            <p class="text-service-text-sub dark:text-gray-400 text-base md:text-lg max-w-2xl">Manage your salon's service offerings, pricing, and durations to keep your menu fresh and up-to-date.</p>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#2a1d20] border border-service-rose-gold/20 text-luxe-text hover:bg-service-rose-gold-light/20 transition-all font-semibold shadow-sm text-sm">
                                <span class="material-symbols-outlined text-lg">filter_list</span>
                                Filter
                            </button>
                            <button (click)="openCreateModal()" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-service-primary text-white hover:bg-service-primary/90 transition-all font-semibold shadow-lg shadow-service-primary/30 text-sm">
                                <span class="material-symbols-outlined text-lg">add</span>
                                Add Category
                            </button>
                        </div>
                    </div>

                    <!-- Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
                        <!-- Card 1: Add New Service -->
                        <div (click)="openCreateModal()" class="group cursor-pointer flex flex-col items-center justify-center min-h-[420px] rounded-xl border-2 border-dashed border-service-rose-gold/30 hover:border-service-rose-gold hover:bg-service-rose-gold/5 dark:hover:bg-service-rose-gold/10 transition-all duration-300 bg-transparent p-6 text-center gap-4">
                            <div class="size-20 rounded-full bg-service-rose-gold-light/30 text-service-rose-gold group-hover:bg-service-rose-gold group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                                <span class="material-symbols-outlined text-4xl">add</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-serif font-bold text-service-rose-gold group-hover:text-service-primary transition-colors">Add New Service</h3>
                                <p class="text-sm text-service-text-sub mt-1 px-4">Create a new offering for your clients</p>
                            </div>
                        </div>

                        <!-- Dynamic Service Cards -->
                        <div *ngFor="let service of services" class="flex flex-col bg-white dark:bg-[#1e1416] rounded-xl shadow-soft hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-service-rose-gold/5 group">
                            <!-- Image -->
                            <div class="relative w-full aspect-[4/3] overflow-hidden">
                                <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" [style.backgroundImage]="'url(' + (service.imageUrl || 'assets/placeholder-service.jpg') + ')'"></div>
                                <!-- Category Badges -->
                                <div class="absolute top-3 left-3 flex flex-wrap gap-1 max-w-[90%]">
                                    <span *ngFor="let cat of getAsArray(service.category)" class="px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold text-luxe-text dark:text-white shadow-sm border border-white/20">
                                        {{ cat }}
                                    </span>
                                </div>
                            </div>
                            <!-- Content -->
                            <div class="p-5 flex flex-col gap-4 flex-1">
                                <!-- Title -->
                                <div class="space-y-1">
                                    <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Service Name</label>
                                    <div class="font-bold text-lg text-luxe-text dark:text-white">{{ service.name }}</div>
                                </div>
                                <div class="flex gap-3">
                                    <!-- Price -->
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Price</label>
                                        <div class="relative">
                                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-service-text-sub text-sm">₹</span>
                                            <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-6 pr-3 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors" type="text" [value]="service.priceRange?.min + (service.priceRange?.min !== service.priceRange?.max ? ' - ' + service.priceRange?.max : '')" readonly/>
                                        </div>
                                    </div>
                                    <!-- Duration -->
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Duration</label>
                                        <div class="relative">
                                            <div class="w-full bg-luxe-bg dark:bg-white/5 border-transparent rounded-lg px-3 py-2 text-luxe-text dark:text-white font-medium text-sm">
                                                {{ service.timeRange?.min }} - {{ service.timeRange?.max }} mins
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Actions -->
                                <div class="mt-auto pt-4 flex items-center justify-between border-t border-service-rose-gold/10">
                                    <button (click)="deleteService(service._id)" class="text-service-primary hover:text-red-700 text-xs font-semibold hover:underline flex items-center gap-1 transition-colors">
                                        <span class="material-symbols-outlined text-sm">delete</span>
                                        Delete
                                    </button>
                                    <button (click)="editService(service)" class="bg-service-rose-gold hover:bg-service-rose-gold/90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-service-rose-gold/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>

    <!-- Create/Edit Modal -->
        <app-create-service-modal 
            *ngIf="showCreateModal" 
            [service]="selectedService"
            (close)="closeModal()" 
            (refresh)="loadServices()">
        </app-create-service-modal>
    </div>
    `
})
export class AdminServicesComponent implements OnInit {
    private authService = inject(AuthService);
    private serviceService = inject(ServiceService);
    private cdr = inject(ChangeDetectorRef);
    
    services: any[] = [];
    showCreateModal = false;
    selectedService: any = null;

    ngOnInit() {
        this.loadServices();
    }

    loadServices() {
        this.serviceService.getServices().subscribe({
            next: (data) => {
                this.services = data;
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Error fetching services:', err)
        });
    }

    openCreateModal() {
        this.selectedService = null;
        this.showCreateModal = true;
    }

    editService(service: any) {
        this.selectedService = service;
        this.showCreateModal = true;
    }

    deleteService(id: string) {
        if (confirm('Are you sure you want to delete this service?')) {
            this.serviceService.deleteService(id).subscribe({
                next: () => {
                    this.loadServices();
                },
                error: (err) => console.error('Error deleting service', err)
            });
        }
    }

    closeModal() {
        this.showCreateModal = false;
        this.selectedService = null;
    }

    logout() {
        this.authService.logout();
    }

    getAsArray(val: any): string[] {
        if (Array.isArray(val)) {
            // Handle edge case where array contains comma-separated strings (e.g. ["Cat1,Cat2"])
            return val.flatMap(item => item.split(',')).map(s => s.trim()).filter(s => s.length > 0);
        }
        if (typeof val === 'string') {
            return val.split(',').map(s => s.trim()).filter(s => s.length > 0);
        }
        return [];
    }
}
