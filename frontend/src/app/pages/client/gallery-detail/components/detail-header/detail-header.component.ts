import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detail-header',
    standalone: true,
    imports: [CommonModule],
    template: `
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#f3e7ea] dark:border-[#3a2026]">
        <div class="px-4 md:px-10 py-4 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="size-8 bg-rose-gold text-white rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined text-xl">spa</span>
                </div>
                <!-- Note: HTML asked for font-display (Playfair) here -->
                <h2 class="text-xl font-bold tracking-tight font-display text-text-main dark:text-white">Luxe Nails</h2>
            </div>
            <nav class="hidden lg:flex items-center gap-8">
                <a href="#" class="text-sm font-semibold text-rose-gold hover:text-rose-gold-hover transition-colors font-body">Gallery</a>
                <a href="#" class="text-sm font-medium hover:text-rose-gold transition-colors font-body text-text-main dark:text-white">Services</a>
                <a href="#" class="text-sm font-medium hover:text-rose-gold transition-colors font-body text-text-main dark:text-white">Artists</a>
                <a href="#" class="text-sm font-medium hover:text-rose-gold transition-colors font-body text-text-main dark:text-white">Membership</a>
            </nav>
            <div class="flex items-center gap-4">
                <button class="bg-rose-gold hover:bg-rose-gold-hover text-white text-sm font-bold py-2.5 px-6 rounded-full transition-transform hover:scale-105 shadow-lg shadow-rose-gold/30 font-body">
                    Book Appointment
                </button>
            </div>
        </div>
    </header>
  `
})
export class DetailHeaderComponent { }
