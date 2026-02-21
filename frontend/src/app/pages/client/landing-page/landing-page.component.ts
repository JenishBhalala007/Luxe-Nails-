import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


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
        LandingHeroComponent,
        LandingFeaturesComponent,
        LandingGalleryComponent,
        LandingTestimonialsComponent,
        LandingFooterComponent
    ],
    template: `
    <div class="relative flex h-auto w-full flex-col">
        <app-landing-hero></app-landing-hero>
        <app-landing-features></app-landing-features>
        <app-landing-gallery></app-landing-gallery>
        <app-landing-testimonials></app-landing-testimonials>
        <app-landing-footer></app-landing-footer>
        
        <!-- Floating Action Button -->
        <div class="fixed bottom-6 right-6 z-50">
            <button class="flex items-center justify-center size-14 rounded-full bg-primary text-text-main shadow-xl hover:bg-[#ffc1d0] hover:scale-105 transition-all duration-300">
                <span class="material-symbols-outlined">calendar_month</span>
            </button>
    </div>
  `,
    styles: [`
        :host {
            display: block;
            width: 100%;
        }
    `]
})
export class LandingPageComponent {}
