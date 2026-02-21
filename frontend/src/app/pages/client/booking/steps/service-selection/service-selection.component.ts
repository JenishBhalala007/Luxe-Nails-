import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../../../../core/services/service.service';
import { BookingStateService } from '../../services/booking-state.service';

@Component({
    selector: 'app-service-selection',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex-1 w-full bg-background-light dark:bg-background-dark font-display text-[#1c0d10] dark:text-gray-100 flex flex-col">
        <!-- Main Content Layout -->
        <div class="flex-1 w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
            <!-- Left Column: Service Selection -->
            <main class="flex-1 flex flex-col gap-6">
                <!-- Heading -->
                <div class="flex flex-col gap-3">
                    <h1 class="text-2xl lg:text-3xl font-bold leading-tight">Service Selection</h1>
                </div>

                <h2 class="text-xl font-bold pt-4">Select your Treatment</h2>
                
                <!-- Service List -->
                <div class="flex flex-col gap-4">
                     <!-- Loading/Empty States -->
                    <div *ngIf="loading" class="py-12 text-center text-gray-500">Loading services...</div>
                    <div *ngIf="!loading && categories.length === 0" class="py-12 text-center text-gray-500">No services available.</div>

                    <ng-container *ngFor="let category of categories">
                        <ng-container *ngFor="let service of category.services">
                             <div 
                                (click)="toggleService(service)"
                                class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl transition-all cursor-pointer"
                                [ngClass]="{
                                    'bg-white dark:bg-[#2d151b] shadow-md ring-2 ring-primary shadow-primary/20': isSelected(service),
                                    'bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md border border-transparent hover:border-gray-300 dark:hover:border-white/30': !isSelected(service)
                                }">
                                
                                <!-- Checkmark (Selected Only) -->
                                <div *ngIf="isSelected(service)" class="absolute top-0 right-0 p-2 sm:p-3 z-10">
                                    <div class="size-6 bg-primary rounded-full flex items-center justify-center text-[#1b0d10] shadow-sm">
                                        <span class="material-symbols-outlined text-[16px] font-bold">check</span>
                                    </div>
                                </div>

                                <!-- Image -->
                                <div class="w-full sm:w-32 aspect-[4/3] sm:aspect-square bg-center bg-cover rounded-lg shrink-0" 
                                     [style.backgroundImage]="'url(' + (service.imageUrl || 'assets/placeholder-service.jpg') + ')'">
                                </div>

                                <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                                    <div class="flex justify-between items-start w-full pr-0 sm:pr-8">
                                        <h3 class="text-lg font-bold" [ngClass]="{'text-[#ea5b7a]': isSelected(service)}">{{ service.name }}</h3>
                                        <div class="hidden sm:block text-right">
                                            <span class="font-bold block" [ngClass]="isSelected(service) ? 'text-[#ea5b7a]' : 'text-gray-900 dark:text-gray-100'">
                                                {{ service.priceRange && service.priceRange.min !== service.priceRange.max 
                                                    ? '₹' + service.priceRange.min + ' - ₹' + service.priceRange.max 
                                                    : '₹' + service.price 
                                                }}
                                            </span>
                                            <span class="text-xs text-gray-500 dark:text-gray-400">
                                                {{ service.timeRange && service.timeRange.min !== service.timeRange.max 
                                                    ? service.timeRange.min + ' - ' + service.timeRange.max 
                                                    : service.duration 
                                                }} min
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <!-- Tags/Categories -->
                                    <div class="flex flex-wrap gap-2 mb-2 justify-center sm:justify-start">
                                        <span *ngFor="let tag of getAsArray(service.category)" class="px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-[#1c0d10] dark:text-gray-200 text-[10px] font-bold uppercase tracking-wider">
                                            {{ tag }}
                                        </span>
                                    </div>

                                    <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">{{ service.description }}</p>
                                    
                                    <!-- Mobile Price/Duration -->
                                    <div class="flex sm:hidden justify-center gap-3 mt-2 text-sm font-medium">
                                        <span class="text-[#ea5b7a]">
                                            {{ service.priceRange && service.priceRange.min !== service.priceRange.max 
                                                ? '₹' + service.priceRange.min + ' - ₹' + service.priceRange.max 
                                                : '₹' + service.price 
                                            }}
                                        </span>
                                        <span class="text-gray-400">|</span>
                                        <span class="text-gray-500">
                                            {{ service.timeRange && service.timeRange.min !== service.timeRange.max 
                                                ? service.timeRange.min + ' - ' + service.timeRange.max 
                                                : service.duration 
                                            }} min
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </ng-container>
                    </ng-container>
                </div>
            </main>

            <!-- Right Column: Sticky Summary -->
            <aside class="w-full lg:w-[320px] shrink-0 lg:h-[calc(100vh-120px)] lg:sticky lg:top-28">
                <div class="glass-panel p-6 rounded-xl shadow-lg flex flex-col h-full lg:max-h-[500px]">
                    <div class="border-b border-gray-200 dark:border-white/10 pb-4 mb-4">
                        <h3 class="text-xl font-bold">Your Booking</h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Review your selected services</p>
                    </div>

                    <div class="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                         <!-- Empty State -->
                         <div *ngIf="selectedServices.length === 0" class="text-center py-4 text-gray-500 text-sm">
                            <p>No services selected yet.</p>
                        </div>

                        <!-- Selected Item -->
                        <div *ngFor="let s of selectedServices" class="flex justify-between items-start group">
                            <div>
                                <p class="font-bold text-sm">{{ s.name }}</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    {{ s.timeRange && s.timeRange.min !== s.timeRange.max 
                                        ? s.timeRange.min + ' - ' + s.timeRange.max 
                                        : s.duration 
                                    }} min
                                </p>
                            </div>
                            <div class="text-right">
                                <p class="font-bold text-sm">
                                    {{ s.priceRange && s.priceRange.min !== s.priceRange.max 
                                        ? '₹' + s.priceRange.min + ' - ₹' + s.priceRange.max 
                                        : '₹' + s.price 
                                    }}
                                </p>
                                <p class="text-[10px] text-gray-500 italic">Pay at Venue</p>
                                <button (click)="toggleService(s); $event.stopPropagation()" class="text-[10px] text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
                            </div>
                        </div>
                    </div>

                    <!-- Total & Action -->
                    <div class="pt-6 mt-4 border-t border-gray-200 dark:border-white/10">
                        <div class="flex justify-between items-center mb-6">
                            <span class="text-gray-600 dark:text-gray-300 font-medium">Total</span>
                            <span class="text-2xl font-bold text-[#ea5b7a]">₹{{ getTotalPrice() }}</span>
                        </div>
                        <button 
                            [routerLink]="selectedServices.length > 0 ? '/client/booking/nails' : null" 
                            [disabled]="selectedServices.length === 0"
                            class="w-full bg-primary hover:bg-[#ffb0c4] text-[#1b0d10] font-bold py-3.5 px-6 rounded-full shadow-lg hover:shadow-primary/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed">
                            <span>Next Step</span>
                            <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <p class="text-center text-[11px] text-gray-400 mt-3">
                            <span class="material-symbols-outlined align-middle text-[14px] mr-1">lock</span>
                            Secure booking
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    </div>
    `,
    styles: [`
        .glass-panel {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }
        :host-context(.dark) .glass-panel {
            background: rgba(35, 15, 20, 0.7);
            border: 1px solid rgba(251, 81, 121, 0.1);
        }
    `]
})
export class ServiceSelectionComponent implements OnInit {
    categories: any[] = [];
    selectedServices: any[] = [];
    loading = true;

    constructor(
        private serviceService: ServiceService,
        private bookingState: BookingStateService,
        private router: Router,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        // Check if we need to reset the state (e.g. user clicked "Book Now")
        this.route.queryParams.subscribe(params => {
            if (params['reset'] === 'true') {
                this.bookingState.reset();
                // Remove the query parameter without triggering a reload
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { reset: null },
                    queryParamsHandling: 'merge',
                    replaceUrl: true
                });
            }
            
            // Load state after potential reset
            const state = this.bookingState.getState();
            this.selectedServices = state.services || [];
        });

        this.serviceService.getServices().subscribe({
            next: (services) => {
                // Map backend data structure (ranges) to UI structure (flat values)
                const mappedServices = services.map(s => ({
                    ...s,
                    price: s.priceRange ? s.priceRange.min : (s.price || 0),
                    duration: s.timeRange ? s.timeRange.min : (s.duration || 0)
                }));
                this.groupServicesByCategory(mappedServices);
                this.loading = false;
                this.cdr.detectChanges(); // Force update
            },
            error: (err) => {
                console.error('Failed to load services', err);
                this.loading = false;
                this.cdr.detectChanges();
            }
        });
    }

    groupServicesByCategory(services: any[]) {
        const groups: {[key: string]: any[]} = {};
        services.forEach(service => {
            // Flatten categories (just use 'Services' or similar if we want a flat list, but preserving categories is safer for data structure)
            // The template nests categories, so this logic is fine.
            const cat = Array.isArray(service.category) ? service.category[0] : (service.category || 'Other');
            if (!groups[cat]) {
                groups[cat] = [];
            }
            groups[cat].push(service);
        });

        this.categories = Object.keys(groups).map(name => ({
            name,
            services: groups[name]
        }));
    }

    toggleService(service: any) {
        // Compare by ID
        const index = this.selectedServices.findIndex(s => s._id === service._id);
        if (index > -1) {
            this.selectedServices.splice(index, 1);
        } else {
            this.selectedServices.push(service);
        }
        this.bookingState.updateState({ services: this.selectedServices });
    }

    isSelected(service: any): boolean {
        return this.selectedServices.some(s => s._id === service._id);
    }

    getTotalPrice(): number {
        return this.bookingState.getBookingTotal();
    }

    getAsArray(val: any): string[] {
        if (Array.isArray(val)) {
             return val.flatMap(item => item.split(',')).map(s => s.trim()).filter(s => s.length > 0);
        }
        if (typeof val === 'string') {
            return val.split(',').map(s => s.trim()).filter(s => s.length > 0);
        }
        return [];
    }
}
