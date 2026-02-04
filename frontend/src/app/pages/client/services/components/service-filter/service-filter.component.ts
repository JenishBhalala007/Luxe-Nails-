import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services-filter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-full sticky top-20 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-rose-200/50 dark:border-white/5 py-4">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar">
            <div class="flex gap-3 min-w-max pb-1">
                <button class="flex h-10 items-center justify-center px-6 rounded-full bg-primary-bold text-white font-medium text-sm shadow-md shadow-primary-bold/20 transition-all">
                    All Services
                </button>
                <button class="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-rose-200 dark:border-white/10 text-text-main dark:text-white font-medium text-sm hover:border-primary-bold hover:text-primary-bold transition-all">
                    Gel Manicure
                </button>
                <button class="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-rose-200 dark:border-white/10 text-text-main dark:text-white font-medium text-sm hover:border-primary-bold hover:text-primary-bold transition-all">
                    Acrylic Extensions
                </button>
                <button class="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-rose-200 dark:border-white/10 text-text-main dark:text-white font-medium text-sm hover:border-primary-bold hover:text-primary-bold transition-all">
                    Pedicures
                </button>
                <button class="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-rose-200 dark:border-white/10 text-text-main dark:text-white font-medium text-sm hover:border-primary-bold hover:text-primary-bold transition-all">
                    Nail Art
                </button>
                <button class="flex h-10 items-center justify-center px-6 rounded-full bg-white dark:bg-surface-dark border border-rose-200 dark:border-white/10 text-text-main dark:text-white font-medium text-sm hover:border-primary-bold hover:text-primary-bold transition-all">
                    Removal & Care
                </button>
            </div>
        </div>
    </div>
  `
})
export class ServicesFilterComponent { }
