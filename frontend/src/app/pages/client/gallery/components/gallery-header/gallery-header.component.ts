import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery-header',
    standalone: true,
    imports: [CommonModule],
    template: `
    <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-rose-100 dark:border-[#3a2026]">
        <div class="px-4 md:px-10 py-4 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
            <!-- Logo -->
            <div class="flex items-center gap-3">
                <div class="size-8 bg-primary text-white rounded-full flex items-center justify-center">
                    <span class="material-symbols-outlined text-xl">spa</span>
                </div>
                <h2 class="text-xl font-bold tracking-tight text-text-main dark:text-white">Luxe Nails</h2>
            </div>
            <!-- Desktop Nav Links -->
            <nav class="hidden lg:flex items-center gap-8">
                <a href="#" class="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">Gallery</a>
                <a href="#" class="text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">Services</a>
                <a href="#" class="text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">Artists</a>
                <a href="#" class="text-sm font-medium text-text-main dark:text-white hover:text-primary transition-colors">Membership</a>
            </nav>
            <!-- Actions -->
            <div class="flex items-center gap-4">
                <div class="hidden md:flex relative group w-64">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                        <span class="material-symbols-outlined text-xl">search</span>
                    </div>
                    <input class="block w-full pl-10 pr-3 py-2.5 border-none rounded-full leading-5 bg-rose-100 dark:bg-[#3a2026] text-sm placeholder-text-muted text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-black transition-all" placeholder="Search styles..." type="text"/>
                </div>
                <button class="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-transform hover:scale-105 shadow-lg shadow-primary/30">
                    Book Now
                </button>
            </div>
        </div>
    </header>
  `
})
export class GalleryHeaderComponent { }
