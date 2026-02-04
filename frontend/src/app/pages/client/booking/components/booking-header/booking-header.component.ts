import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-booking-header',
    standalone: true,
    imports: [CommonModule],
    template: `
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4e6ea] dark:border-b-booking-primary/20 px-6 lg:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
        <div class="flex items-center gap-4">
            <div class="size-8 text-booking-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fill-rule="evenodd"></path>
                </svg>
            </div>
            <h2 class="text-lg font-bold leading-tight tracking-[-0.015em] text-[#1c0d10] dark:text-gray-100">Luxe Nails</h2>
        </div>
        <div class="flex items-center gap-8">
            <button class="flex items-center gap-2 text-sm font-medium hover:text-booking-primary transition-colors text-[#1c0d10] dark:text-gray-100">
                <span class="material-symbols-outlined text-[20px]">help</span>
                <span class="hidden sm:inline">Help</span>
            </button>
            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-booking-primary/20" data-alt="User profile avatar showing a smiling woman" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuByEN7OHdCYU7P9BM5QC8dEXi7F2L-KZsh9LhyHwWPU1fJ5g7XnFQUugK0ef0bQm15QhQ9IbZXx9-7uA7OtONaef1YSEemeENsNsKpfYRFtpQp2AeOM-XVHk15k4aOSiP_Dr_FYlZYTCNlss2CO3SOAWfCf2R4wBe99xflMeJJY905V7Ih4Ych7OmTr7apl3QLEU6a8XNbwwDOry8JuPUc9EnKKlx2IT1sz1deapQuceL5XY1pr89tCEoc7eIS1h0eT0dhnaz7ONAXi");'></div>
        </div>
    </header>
  `
})
export class BookingHeaderComponent { }
