import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-booking-progress-bar',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-full max-w-3xl mx-auto py-8 px-4">
        <div class="flex items-center justify-between relative">
            <!-- connecting lines -->
            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-[2px] bg-[#f4e6e9] dark:bg-white/10 -z-10"></div>
            
            <!-- Step 1: Service -->
            <div 
                class="flex items-center gap-3 bg-background-light dark:bg-background-dark pr-2 transition-opacity duration-200"
                [class.cursor-pointer]="isCompleted('services')"
                (click)="navigateToStep('services')"
            >
                <div 
                    class="size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                    [ngClass]="{
                        'bg-[#dcfce7] text-[#16a34a]': isCompleted('services'),
                        'bg-primary text-[#1b0d10] shadow-lg shadow-primary/30': isActive('services'),
                        'bg-white dark:bg-white/5 text-text-sub dark:text-gray-400 border border-[#f4e6e9] dark:border-white/10': isFuture('services')
                    }"
                >
                    <span *ngIf="isCompleted('services')" class="material-symbols-outlined text-[20px]">check</span>
                    <span *ngIf="!isCompleted('services')">1</span>
                </div>
                <span 
                    class="text-sm font-medium hidden sm:block transition-colors duration-300"
                    [ngClass]="{
                        'text-[#16a34a]': isCompleted('services'),
                        'text-primary font-bold': isActive('services'),
                        'text-text-sub dark:text-gray-400': isFuture('services')
                    }"
                >Service</span>
            </div>

            <!-- Step 2: Nails -->
            <div 
                class="flex items-center gap-3 bg-background-light dark:bg-background-dark px-2 transition-opacity duration-200"
                [class.cursor-pointer]="isCompleted('nails')"
                (click)="navigateToStep('nails')"
            >
                <div 
                    class="size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                    [ngClass]="{
                        'bg-[#dcfce7] text-[#16a34a]': isCompleted('nails'),
                        'bg-primary text-[#1b0d10] shadow-lg shadow-primary/30': isActive('nails'),
                        'bg-white dark:bg-white/5 text-text-sub dark:text-gray-400 border border-[#f4e6e9] dark:border-white/10': isFuture('nails')
                    }"
                >
                    <span *ngIf="isCompleted('nails')" class="material-symbols-outlined text-[20px]">check</span>
                    <span *ngIf="!isCompleted('nails')">2</span>
                </div>
                <span 
                    class="text-sm font-medium hidden sm:block transition-colors duration-300"
                    [ngClass]="{
                        'text-[#16a34a]': isCompleted('nails'),
                        'text-primary font-bold': isActive('nails'),
                        'text-text-sub dark:text-gray-400': isFuture('nails')
                    }"
                >Nails</span>
            </div>

            <!-- Step 3: Artist -->
            <div 
                class="flex items-center gap-3 bg-background-light dark:bg-background-dark px-2 transition-opacity duration-200"
                [class.cursor-pointer]="isCompleted('artists')"
                (click)="navigateToStep('artists')"
            >
                <div 
                    class="size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                    [ngClass]="{
                        'bg-[#dcfce7] text-[#16a34a]': isCompleted('artists'),
                        'bg-primary text-[#1b0d10] shadow-lg shadow-primary/30': isActive('artists'),
                        'bg-white dark:bg-white/5 text-text-sub dark:text-gray-400 border border-[#f4e6e9] dark:border-white/10': isFuture('artists')
                    }"
                >
                    <span *ngIf="isCompleted('artists')" class="material-symbols-outlined text-[20px]">check</span>
                    <span *ngIf="!isCompleted('artists')">3</span>
                </div>
                <span 
                    class="text-sm font-medium hidden sm:block transition-colors duration-300"
                    [ngClass]="{
                        'text-[#16a34a]': isCompleted('artists'),
                        'text-primary font-bold': isActive('artists'),
                        'text-text-sub dark:text-gray-400': isFuture('artists')
                    }"
                >Artist</span>
            </div>

            <!-- Step 3: Time -->
            <div 
                class="flex items-center gap-3 bg-background-light dark:bg-background-dark px-2 transition-opacity duration-200"
                [class.cursor-pointer]="isCompleted('time')"
                (click)="navigateToStep('time')"
            >
                <div 
                    class="size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                    [ngClass]="{
                        'bg-[#dcfce7] text-[#16a34a]': isCompleted('time'),
                        'bg-primary text-[#1b0d10] shadow-lg shadow-primary/30': isActive('time'),
                        'bg-white dark:bg-white/5 text-text-sub dark:text-gray-400 border border-[#f4e6e9] dark:border-white/10': isFuture('time')
                    }"
                >
                    <span *ngIf="isCompleted('time')" class="material-symbols-outlined text-[20px]">check</span>
                    <span *ngIf="!isCompleted('time')">4</span>
                </div>
                <span 
                    class="text-sm font-medium hidden sm:block transition-colors duration-300"
                    [ngClass]="{
                        'text-[#16a34a]': isCompleted('time'),
                        'text-primary font-bold': isActive('time'),
                        'text-text-sub dark:text-gray-400': isFuture('time')
                    }"
                >Time</span>
            </div>

            <!-- Step 4: Details -->
            <div 
                class="flex items-center gap-3 bg-background-light dark:bg-background-dark pl-2 transition-opacity duration-200"
                [class.cursor-pointer]="isCompleted('review')"
                (click)="navigateToStep('review')"
            >
                <div 
                    class="size-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
                    [ngClass]="{
                        'bg-[#dcfce7] text-[#16a34a]': isCompleted('review'),
                        'bg-primary text-[#1b0d10] shadow-lg shadow-primary/30': isActive('review'),
                        'bg-white dark:bg-white/5 text-text-sub dark:text-gray-400 border border-[#f4e6e9] dark:border-white/10': isFuture('review')
                    }"
                >
                    <span *ngIf="isCompleted('review')" class="material-symbols-outlined text-[20px]">check</span>
                    <span *ngIf="!isCompleted('review')">5</span>
                </div>
                <span 
                    class="text-sm font-medium hidden sm:block transition-colors duration-300"
                    [ngClass]="{
                        'text-[#16a34a]': isCompleted('review'),
                        'text-primary font-bold': isActive('review'),
                        'text-text-sub dark:text-gray-400': isFuture('review')
                    }"
                >Details</span>
            </div>
        </div>
    </div>
    `
})
export class BookingProgressBarComponent implements OnInit {
    currentRoute: string = '';
    
    // Order of steps
    steps = ['services', 'nails', 'artists', 'time', 'review', 'success'];

    constructor(private router: Router) {}

    ngOnInit() {
        this.currentRoute = this.getStepFromUrl(this.router.url);
        
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            this.currentRoute = this.getStepFromUrl(event.urlAfterRedirects);
        });
    }

    getStepFromUrl(url: string): string {
        const parts = url.split('/');
        return parts[parts.length - 1];
    }

    isActive(step: string): boolean {
        return this.currentRoute === step;
    }

    isCompleted(step: string): boolean {
        const currentIndex = this.steps.indexOf(this.currentRoute);
        const stepIndex = this.steps.indexOf(step);
        return stepIndex < currentIndex;
    }

    isFuture(step: string): boolean {
        const currentIndex = this.steps.indexOf(this.currentRoute);
        const stepIndex = this.steps.indexOf(step);
        return stepIndex > currentIndex;
    }

    navigateToStep(step: string) {
        if (this.isCompleted(step)) {
            // Check specific logic if needed, e.g. for 'artists' check if service is selected
            // But since it's completed, previous steps must be valid.
            this.router.navigate(['/client/booking', step]);
        }
    }
}
