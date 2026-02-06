import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingSummaryComponent } from '../../components/booking-summary/booking-summary.component';
import { ServiceService } from '../../../../../core/services/service.service';
import { BookingStateService } from '../../services/booking-state.service';

@Component({
    selector: 'app-service-selection',
    standalone: true,
    imports: [CommonModule, BookingSummaryComponent],
    template: `
    <div class="flex-1 w-full bg-booking-bg-light dark:bg-booking-bg-dark">
      <div class="max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
        <!-- Left Column: Service Selection -->
        <main class="flex-1 flex flex-col gap-6">
            <div class="flex flex-col gap-3">
                <div class="flex gap-6 justify-between items-end">
                    <div>
                        <p class="text-booking-primary text-sm font-bold uppercase tracking-wider mb-1">Step 1 of 4</p>
                        <h1 class="text-2xl lg:text-3xl font-bold leading-tight text-[#1c0d10] dark:text-gray-100">Service Selection</h1>
                    </div>
                </div>
                <div class="rounded-full bg-[#e9ced4] dark:bg-white/10 h-2 w-full overflow-hidden">
                    <div class="h-full rounded-full bg-booking-primary transition-all duration-500 ease-out" style="width: 25%;"></div>
                </div>
            </div>
            <h2 class="text-xl font-bold pt-4 text-[#1c0d10] dark:text-gray-100">Select your Treatment</h2>
            
            <!-- Service List -->
            <div class="flex flex-col gap-4">
                <div *ngIf="loading" class="text-center py-10">Loading services...</div>
                
                <div *ngFor="let service of services" 
                     (click)="selectService(service)"
                     class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border"
                     [ngClass]="{'border-booking-primary ring-2 ring-booking-primary shadow-[0_4px_20px_rgba(251,81,121,0.15)]': selectedService?._id === service._id, 'border-transparent hover:border-booking-primary/30': selectedService?._id !== service._id}">
                    
                    <div *ngIf="selectedService?._id === service._id" class="absolute top-0 right-0 p-2 sm:p-3">
                        <div class="size-6 bg-booking-primary rounded-full flex items-center justify-center text-white shadow-sm">
                            <span class="material-symbols-outlined text-[16px] font-bold">check</span>
                        </div>
                    </div>

                    <div class="w-full sm:w-32 aspect-[4/3] sm:aspect-square bg-center bg-cover rounded-lg shrink-0" 
                         [style.backgroundImage]="'url(' + (service.imageUrl || 'assets/placeholder-service.jpg') + ')'"></div>
                    
                    <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                        <div class="flex justify-between items-start w-full pr-0 sm:pr-8">
                            <h3 class="text-lg font-bold" [ngClass]="selectedService?._id === service._id ? 'text-booking-primary' : 'text-[#1c0d10] dark:text-gray-100'">{{ service.name }}</h3>
                            <div class="hidden sm:block text-right">
                                <span class="text-booking-primary font-bold block">₹{{ service.price }}</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">{{ service.duration }} min</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">{{ service.description }}</p>
                        <div class="flex sm:hidden justify-center gap-3 mt-2 text-sm font-medium">
                            <span class="text-booking-primary">₹{{ service.price }}</span>
                            <span class="text-gray-400">|</span>
                            <span class="text-gray-500">{{ service.duration }} min</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        <!-- Right Column: Sticky Summary -->
        <aside class="w-full lg:w-[320px] shrink-0 lg:h-[calc(100vh-120px)] lg:sticky lg:top-28">
            <app-booking-summary></app-booking-summary>
        </aside>
      </div>
    </div>
    `
})
export class ServiceSelectionComponent implements OnInit {
    services: any[] = [];
    selectedService: any | null = null;
    loading = true;

    constructor(
        private serviceService: ServiceService,
        private bookingState: BookingStateService,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.serviceService.getServices().subscribe({
            next: (data) => {
                console.log('Services loaded:', data);
                this.services = data;
                this.loading = false;
                this.cdr.detectChanges(); // Force update
                // Restore selection if exists
                const state = this.bookingState.getState();
                if (state.service) {
                    this.selectedService = this.services.find(s => s._id === state.service._id);
                }
            },
            error: (err) => {
                console.error('Failed to load services', err);
                this.loading = false;
            }
        });
    }

    selectService(service: any) {
        this.selectedService = service;
        this.bookingState.updateState({ service: service });
        // Optional: Auto-navigate or let user click formatted button in summary? 
        // The summary usually has the "Continue" button. 
        // But for better UX, usually selecting here updates the state, and summary handles navigation.
        // However, the previous static template didn't have a continue button in the main area, only in summary (which I assume).
        // Let's assume the user clicks the card to select, and then clicks continue in the summary.
        // Or if I look at TimeSelection, the continue button is in the summary side.
        // So just updating state is enough. The summary component should observe the state.
    }
}
