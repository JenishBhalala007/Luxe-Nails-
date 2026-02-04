import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingHeaderComponent } from './components/header/header.component';
import { LandingHeroComponent } from './components/hero/hero.component';
import { LandingFeaturesComponent } from './components/features/features.component';
import { LandingGalleryComponent } from './components/gallery/gallery.component';
import { LandingTestimonialsComponent } from './components/testimonials/testimonials.component';
import { LandingFooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        LandingHeaderComponent,
        LandingHeroComponent,
        LandingFeaturesComponent,
        LandingGalleryComponent,
        LandingTestimonialsComponent,
        LandingFooterComponent
    ],
    template: `
    <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-text-main dark:text-[#f4e6e9] font-display antialiased overflow-x-hidden">
        <app-landing-header [theme]="currentTheme"></app-landing-header>
        <main class="flex-1 w-full pt-32">
            <app-landing-hero></app-landing-hero>
            <app-landing-features></app-landing-features>
            <app-landing-gallery></app-landing-gallery>
            <app-landing-testimonials></app-landing-testimonials>
        </main>
        <app-landing-footer></app-landing-footer>
        
        <!-- Floating Action Button -->
        <div class="fixed bottom-6 right-6 z-50">
            <button class="flex items-center justify-center size-14 rounded-full bg-primary text-text-main shadow-xl hover:bg-[#ffc1d0] hover:scale-105 transition-all duration-300">
                <span class="material-symbols-outlined">calendar_month</span>
            </button>
        </div>
    </div>
  `
})
export class LandingPageComponent {
    currentTheme: 'light' | 'dark' | 'cream' = 'cream';

    constructor() {
        // Simple dark mode detection
        if (typeof window !== 'undefined' && window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            this.updateTheme(darkModeQuery.matches);

            darkModeQuery.addEventListener('change', (e) => {
                this.updateTheme(e.matches);
            });
        }
    }

    private updateTheme(isDark: boolean) {
        this.currentTheme = isDark ? 'dark' : 'cream';
    }
}
