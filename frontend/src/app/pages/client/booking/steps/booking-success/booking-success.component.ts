import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-booking-success',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex-1 w-full bg-booking-beige-lux dark:bg-booking-bg-dark flex justify-center items-center py-10 px-4 lg:px-40 min-h-[calc(100vh-64px)]">
        <div class="flex flex-col max-w-[640px] w-full flex-1 items-center gap-8">
            <!-- Hero Section -->
            <div class="flex flex-col items-center text-center gap-6">
                <div class="size-24 rounded-full bg-white dark:bg-white/5 flex items-center justify-center check-glow mb-2">
                    <span class="material-symbols-outlined text-6xl text-primary animate-pulse">check_circle</span>
                </div>
                <h1 class="text-[#1b0d10] dark:text-white text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-[500px]">
                    All Set! Your nails are going to look fabulous
                </h1>
                <p class="text-[#1b0d10]/70 dark:text-white/70 text-base font-medium max-w-[480px]">
                    We've sent a confirmation email to your inbox.
                </p>
            </div>

            <!-- Receipt Card (Glassmorphism) -->
            <div class="w-full bg-white/65 dark:bg-[#221013]/70 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-xl p-8 shadow-sm">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-[#e7cfd3] dark:border-white/10">
                    <span class="material-symbols-outlined text-primary">receipt_long</span>
                    <h3 class="text-[#1b0d10] dark:text-white text-lg font-bold">Booking Receipt</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                    <div class="flex flex-col gap-1">
                        <p class="text-[#9a4c59] dark:text-rose-200 text-xs font-semibold uppercase tracking-wider">Booking ID</p>
                        <p class="text-[#1b0d10] dark:text-white text-base font-medium">#839201</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[#9a4c59] dark:text-rose-200 text-xs font-semibold uppercase tracking-wider">Date & Time</p>
                        <p class="text-[#1b0d10] dark:text-white text-base font-medium">Oct 24, 2023 at 4:00 PM</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[#9a4c59] dark:text-rose-200 text-xs font-semibold uppercase tracking-wider">Service</p>
                        <p class="text-[#1b0d10] dark:text-white text-base font-medium">Gel Manicure + Custom Art</p>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-[#9a4c59] dark:text-rose-200 text-xs font-semibold uppercase tracking-wider">Artist</p>
                        <div class="flex items-center gap-2">
                            <div class="size-6 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                                <span class="material-symbols-outlined text-sm text-primary">person</span>
                            </div>
                            <p class="text-[#1b0d10] dark:text-white text-base font-medium">Sarah Jenkins</p>
                        </div>
                    </div>
                </div>
                <div class="mt-8 pt-4 border-t border-dashed border-[#e7cfd3] dark:border-white/10 flex justify-between items-center">
                    <span class="text-sm text-[#1b0d10]/60 dark:text-white/60">Total Estimated</span>
                    <span class="text-xl font-bold text-primary">₹85.00</span>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex w-full flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                <button class="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 border border-primary text-primary bg-transparent hover:bg-primary/5 dark:hover:bg-primary/20 transition-colors duration-200 text-base font-bold leading-normal tracking-[0.015em]">
                    <span class="material-symbols-outlined mr-2 text-[20px]">calendar_today</span>
                    <span class="truncate">Add to Calendar</span>
                </button>
                <button routerLink="/client/landing" class="flex w-full sm:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary hover:bg-rose-600 transition-colors duration-200 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30">
                    <span class="truncate">Go to My Dashboard</span>
                    <span class="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
                </button>
            </div>
            
            <div class="mt-8 text-center">
                <a href="#" class="text-sm text-[#9a4c59] hover:text-primary dark:text-rose-200/80 dark:hover:text-white transition-colors underline decoration-dashed underline-offset-4">Need to reschedule?</a>
            </div>
        </div>
    </div>
  `
})
export class BookingSuccessComponent { }
