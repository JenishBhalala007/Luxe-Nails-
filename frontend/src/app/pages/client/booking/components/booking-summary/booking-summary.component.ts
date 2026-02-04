import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-booking-summary',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="glass-panel p-6 rounded-xl shadow-lg flex flex-col h-full lg:max-h-[500px] bg-white/70 dark:bg-[#230f14]/70 backdrop-blur-xl border border-white/50 dark:border-booking-primary/10">
        <div class="border-b border-gray-200 dark:border-white/10 pb-4 mb-4">
            <h3 class="text-xl font-bold text-[#1c0d10] dark:text-gray-100">Your Booking</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Review your selected services</p>
        </div>
        <div class="flex-1 overflow-y-auto space-y-4">
            <!-- Selected Item Mock -->
            <div class="flex justify-between items-start group">
                <div>
                    <p class="font-bold text-sm text-[#1c0d10] dark:text-gray-100">Acrylic Extensions</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">90 min</p>
                </div>
                <div class="text-right">
                    <p class="font-bold text-sm text-[#1c0d10] dark:text-gray-100">₹2500</p>
                    <button class="text-[10px] text-red-500 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">Remove</button>
                </div>
            </div>
        </div>
        <!-- Total & Action -->
        <div class="pt-6 mt-4 border-t border-gray-200 dark:border-white/10">
            <div class="flex justify-between items-center mb-6">
                <span class="text-gray-600 dark:text-gray-300 font-medium">Total</span>
                <span class="text-2xl font-bold text-booking-primary">₹2500</span>
            </div>
            <button routerLink="/client/booking/artists" class="w-full bg-booking-primary hover:bg-booking-primary/90 text-white font-bold py-3.5 px-6 rounded-full shadow-lg hover:shadow-booking-primary/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group">
                <span>Next Step</span>
                <span class="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <p class="text-center text-[11px] text-gray-400 mt-3">
                <span class="material-symbols-outlined align-middle text-[14px] mr-1">lock</span>
                Secure booking
            </p>
        </div>
    </div>
  `,
    styles: [`
    /* Inline styles for glass panel if global class isn't sufficient or needs specific overrides */
  `]
})
export class BookingSummaryComponent { }
