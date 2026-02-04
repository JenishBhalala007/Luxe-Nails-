import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery-filter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-transparent transition-all duration-300" id="filter-bar">
        <div class="px-4 py-4 flex justify-center">
            <div class="flex gap-3 overflow-x-auto no-scrollbar max-w-[960px] w-full pb-2">
                <!-- Active Filter -->
                <button class="flex shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white h-10 pl-4 pr-5 transition-all hover:shadow-md hover:shadow-primary/25 ring-2 ring-offset-2 ring-transparent active:ring-primary">
                    <span class="material-symbols-outlined text-[20px]">grid_view</span>
                    <span class="text-sm font-bold">All</span>
                </button>
                <!-- Inactive Filters -->
                <button class="flex shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark hover:bg-rose-100 dark:hover:bg-[#4a2a33] text-text-main dark:text-white h-10 pl-4 pr-5 border border-rose-100 dark:border-[#4a2a33] transition-all group">
                    <span class="material-symbols-outlined text-[20px] text-primary group-hover:scale-110 transition-transform">favorite</span>
                    <span class="text-sm font-medium">Bridal</span>
                </button>
                <button class="flex shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark hover:bg-rose-100 dark:hover:bg-[#4a2a33] text-text-main dark:text-white h-10 pl-4 pr-5 border border-rose-100 dark:border-[#4a2a33] transition-all group">
                    <span class="material-symbols-outlined text-[20px] text-primary group-hover:scale-110 transition-transform">auto_awesome</span>
                    <span class="text-sm font-medium">Abstract</span>
                </button>
                <button class="flex shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark hover:bg-rose-100 dark:hover:bg-[#4a2a33] text-text-main dark:text-white h-10 pl-4 pr-5 border border-rose-100 dark:border-[#4a2a33] transition-all group">
                    <span class="material-symbols-outlined text-[20px] text-primary group-hover:scale-110 transition-transform">wb_sunny</span>
                    <span class="text-sm font-medium">Pastel</span>
                </button>
                <button class="flex shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark hover:bg-rose-100 dark:hover:bg-[#4a2a33] text-text-main dark:text-white h-10 pl-4 pr-5 border border-rose-100 dark:border-[#4a2a33] transition-all group">
                    <span class="material-symbols-outlined text-[20px] text-primary group-hover:scale-110 transition-transform">bolt</span>
                    <span class="text-sm font-medium">Neon</span>
                </button>
                <button class="flex shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-surface-dark hover:bg-rose-100 dark:hover:bg-[#4a2a33] text-text-main dark:text-white h-10 pl-4 pr-5 border border-rose-100 dark:border-[#4a2a33] transition-all group">
                    <span class="material-symbols-outlined text-[20px] text-primary group-hover:scale-110 transition-transform">circle</span>
                    <span class="text-sm font-medium">Minimalist</span>
                </button>
            </div>
        </div>
    </section>
  `
})
export class GalleryFilterComponent { }
