import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookingStateService } from '../../../booking/services/booking-state.service';

@Component({
    selector: 'app-services-grid',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div *ngFor="let service of services" class="group relative flex flex-col sm:flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(238,43,88,0.15)] border border-transparent hover:border-primary-bold/20 transition-all duration-300">
                <div class="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-cover bg-center" [style.backgroundImage]="'url(' + (service.imageUrl || 'assets/placeholder-service.jpg') + ')'"></div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <!-- Header: Title vs Price -->
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-text-main dark:text-white">{{ service.name }}</h3>
                            <span class="text-primary-bold font-bold text-lg shrink-0">
                                ₹{{ service.priceRange?.min }}
                                <span *ngIf="service.priceRange?.min !== service.priceRange?.max"> - {{ service.priceRange?.max }}</span>
                            </span>
                        </div>

                        <!-- Sub-Header: Category vs Duration -->
                        <div class="flex justify-between items-center mb-3">
                            <div class="flex flex-wrap gap-1">
                                <span *ngFor="let cat of getAsArray(service.category)" class="px-2 py-1 rounded bg-primary-bold/10 text-primary-bold text-xs font-bold uppercase tracking-wider">{{ cat }}</span>
                            </div>
                            <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm font-medium">
                                <span class="material-symbols-outlined text-[16px]">schedule</span>
                                <span>
                                    {{ service.timeRange?.min }}
                                    <span *ngIf="service.timeRange?.min !== service.timeRange?.max">- {{ service.timeRange?.max }}</span> 
                                    mins
                                </span>
                            </div>
                        </div>

                        <!-- Description -->
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            {{ service.description }}
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <button 
                            (click)="onBook(service)"
                            class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-bold text-primary-bold hover:bg-primary-bold hover:text-white transition-all text-sm font-bold uppercase tracking-wide">
                            <span>Book This</span>
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div *ngIf="services.length === 0" class="col-span-full text-center py-12">
                <p class="text-gray-500 text-lg">No services found in this category.</p>
            </div>
        </div>
    </div>
  `
})
export class ServicesGridComponent {
    @Input() services: any[] = [];
    private bookingState = inject(BookingStateService);
    private router = inject(Router);

    onBook(service: any) {
        this.bookingState.updateState({ services: [service] });
        this.router.navigate(['/client/booking/nails']);
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
