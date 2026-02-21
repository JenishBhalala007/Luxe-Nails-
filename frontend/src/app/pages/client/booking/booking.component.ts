import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingHeaderComponent } from '../landing-page/components/header/header.component';
import { BookingProgressBarComponent } from './components/booking-progress-bar/booking-progress-bar.component';
import { ServiceService } from '../../../core/services/service.service';

@Component({
    selector: 'app-booking',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        LandingHeaderComponent,
        BookingProgressBarComponent
    ],
    template: `
    <div class="min-h-screen flex flex-col font-display text-[#1c0d10] dark:text-gray-100 bg-background-light dark:bg-background-dark">
        <app-landing-header></app-landing-header>
        <div class="pt-24 flex-1 w-full flex flex-col">
            <app-booking-progress-bar></app-booking-progress-bar>
            <div class="flex-1 w-full">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
  `
})
export class BookingComponent { 
    constructor(private serviceService: ServiceService) {
        // Pre-fetch services to ensure they are loaded by the time the user reaches the selection step
        this.serviceService.getServices().subscribe();
    }
}
