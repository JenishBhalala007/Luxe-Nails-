import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-artist-filter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button class="group flex h-10 items-center justify-center gap-x-2 rounded-full bg-primary text-white pl-5 pr-5 shadow-md hover:scale-105 transition-transform">
            <span class="text-sm font-medium font-display-2">All Artists</span>
        </button>
        <button class="group flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 text-text-main dark:text-white pl-5 pr-5 shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <span class="text-sm font-medium font-display-2">3D Art</span>
        </button>
        <button class="group flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 text-text-main dark:text-white pl-5 pr-5 shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <span class="text-sm font-medium font-display-2">Minimalist</span>
        </button>
        <button class="group flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 text-text-main dark:text-white pl-5 pr-5 shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <span class="text-sm font-medium font-display-2">French Tips</span>
        </button>
        <button class="group flex h-10 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 text-text-main dark:text-white pl-5 pr-5 shadow-sm hover:shadow-md hover:scale-105 transition-all">
            <span class="text-sm font-medium font-display-2">Gel X</span>
        </button>
    </div>
  `
})
export class ArtistFilterComponent { }
