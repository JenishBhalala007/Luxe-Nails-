import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-artist-selection',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex-1 w-full bg-[#F5E6CA] dark:bg-booking-bg-dark">
        <!-- Main Content Layout -->
        <div class="w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
            <!-- Left Column: Artist Selection -->
            <main class="flex-1 flex flex-col gap-6">
                <!-- Progress Bar -->
                <div class="flex flex-col gap-3">
                    <div class="flex gap-6 justify-between items-end">
                        <div>
                            <p class="text-booking-step2-primary text-sm font-bold uppercase tracking-wider mb-1">Step 2 of 4</p>
                            <h1 class="text-2xl lg:text-3xl font-bold leading-tight text-[#1c0d10] dark:text-gray-100">Artist Selection</h1>
                        </div>
                    </div>
                    <div class="rounded-full bg-white/50 dark:bg-white/10 h-2 w-full overflow-hidden">
                        <div class="h-full rounded-full bg-booking-step2-primary transition-all duration-500 ease-out" style="width: 50%;"></div>
                    </div>
                </div>
                
                <h2 class="text-xl font-bold pt-4 text-[#1c0d10] dark:text-gray-100">Choose your Artist</h2>
                
                <!-- Artist List -->
                <div class="flex flex-col gap-4">
                    <!-- Artist 1: Default (Any Artist) -->
                    <div class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-booking-step2-primary/30">
                        <div class="w-full sm:w-24 aspect-square bg-[#f0f0f0] dark:bg-white/5 rounded-full flex items-center justify-center text-gray-400">
                            <span class="material-symbols-outlined text-[40px]">groups</span>
                        </div>
                        <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                            <div class="flex justify-between items-start w-full">
                                <h3 class="text-lg font-bold text-[#1c0d10] dark:text-gray-100">Any Available Artist</h3>
                                <div class="hidden sm:block text-right">
                                    <span class="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">Fastest Booking</span>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">Select this option for maximum availability. We'll assign the best available artist for your selected service.</p>
                        </div>
                    </div>

                    <!-- Artist 2: Sarah (Selected) -->
                    <div class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-[0_4px_20px_rgba(236,19,91,0.15)] ring-2 ring-booking-step2-primary transition-all cursor-pointer">
                        <div class="absolute top-0 right-0 p-2 sm:p-3">
                            <div class="size-6 bg-booking-step2-primary rounded-full flex items-center justify-center text-white shadow-sm">
                                <span class="material-symbols-outlined text-[16px] font-bold">check</span>
                            </div>
                        </div>
                        <div class="w-full sm:w-24 aspect-square bg-center bg-cover rounded-full shrink-0 border-2 border-booking-step2-primary" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuByEN7OHdCYU7P9BM5QC8dEXi7F2L-KZsh9LhyHwWPU1fJ5g7XnFQUugK0ef0bQm15QhQ9IbZXx9-7uA7OtONaef1YSEemeENsNsKpfYRFtpQp2AeOM-XVHk15k4aOSiP_Dr_FYlZYTCNlss2CO3SOAWfCf2R4wBe99xflMeJJY905V7Ih4Ych7OmTr7apl3QLEU6a8XNbwwDOry8JuPUc9EnKKlx2IT1sz1deapQuceL5XY1pr89tCEoc7eIS1h0eT0dhnaz7ONAXi");'></div>
                        <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                            <div class="flex justify-between items-start w-full pr-8">
                                <div>
                                    <h3 class="text-lg font-bold text-booking-step2-primary">Priya Patel</h3>
                                    <div class="flex items-center justify-center sm:justify-start gap-1 text-sm text-yellow-500 font-bold mt-0.5">
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span>4.9</span>
                                        <span class="text-gray-400 font-normal text-xs ml-1">(120 reviews)</span>
                                    </div>
                                </div>
                                <div class="hidden sm:block text-right">
                                    <span class="text-xs font-bold text-booking-step2-primary bg-booking-step2-primary/10 px-2 py-1 rounded-full">Nail Art Specialist</span>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0 mt-2">Specializes in intricate nail art and acrylic extensions. Known for her attention to detail and creative designs.</p>
                        </div>
                    </div>

                    <!-- Artist 3: Michael -->
                    <div class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-booking-step2-primary/30">
                        <div class="w-full sm:w-24 aspect-square bg-center bg-cover rounded-full shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuATo4y1Wlq6zS3qI-uW54vTgec2K1T1nN5n3c3s9e32L8-9D2g6o2X4j8m5r7q6p4l3n8z9y7x1c3v5b7n4m1k2l5j8h3g6f9d2s4a6c8e1b3d5f7g9h1j3k5l7m9n1o3p5q7r9s1u3w5y7a9c1b3e5g7i9k1m3o5q7s9u1w3y5");'></div>
                        <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                            <div class="flex justify-between items-start w-full">
                                <div>
                                    <h3 class="text-lg font-bold text-[#1c0d10] dark:text-gray-100">Michael Chang</h3>
                                    <div class="flex items-center justify-center sm:justify-start gap-1 text-sm text-yellow-500 font-bold mt-0.5">
                                        <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                        <span>4.8</span>
                                        <span class="text-gray-400 font-normal text-xs ml-1">(98 reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0 mt-2">Expert in gel manicures and pedicures. Creates a relaxing and comfortable experience for every client.</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <!-- Right Column: Sticky Summary -->
            <aside class="w-full lg:w-[320px] shrink-0 lg:h-[calc(100vh-120px)] lg:sticky lg:top-28">
                <div class="bg-white dark:bg-[#2d151b] rounded-2xl p-6 shadow-lg flex flex-col gap-6 sticky top-6 border-t-4 border-booking-step2-primary">
                    <div>
                        <h3 class="text-lg font-bold mb-4 text-[#1c0d10] dark:text-gray-100">Your Booking</h3>
                        <div class="flex flex-col gap-4">
                            <!-- Selected Service -->
                            <div class="flex gap-3 items-start pb-4 border-b border-gray-100 dark:border-white/10">
                                <div class="size-10 rounded-lg bg-gray-100 bg-center bg-cover shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNKXHgADqT8dzs_oHWch6WFA5G10D0lLAoWT0cQfr_pTMkidj2_EyGfqOwPZTOCaxRInLreo_vBr1rc2AmLIsHN-1opQ6igTF-FQWnev-aWd_0eygN_DkDxlTluWyWErHdUCxSeXjbbXkyV4Hq9OjoU3XMo5H9P01Pvs8aPOx_JtXH9tTICRgbq6j50GosRykbHQ_1gheGGdwp6T8TwNmNd4wNrkCKbuAGZ-fjoTp-4yF0biuRBcYyq3wHQmUlRSd0LtFHf3yjDUiy");'></div>
                                <div>
                                    <p class="text-sm font-bold text-[#1c0d10] dark:text-gray-100">Gel Manicure</p>
                                    <p class="text-xs text-gray-500">45 min • ₹1200</p>
                                </div>
                                <button class="ml-auto text-xs text-gray-400 hover:text-booking-step2-primary">Edit</button>
                            </div>
                            
                            <!-- Selected Artist (Preview) -->
                            <div class="flex gap-3 items-start">
                                <div class="size-10 rounded-full bg-booking-step2-primary/10 text-booking-step2-primary flex items-center justify-center shrink-0">
                                    <span class="material-symbols-outlined text-[20px]">person</span>
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-[#1c0d10] dark:text-gray-100">Priya Patel</p>
                                    <p class="text-xs text-booking-step2-primary">Artist Selected</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 border-t border-dashed border-gray-200 dark:border-white/20">
                        <div class="flex justify-between items-end mb-1">
                            <span class="text-gray-500 text-sm">Total</span>
                            <span class="text-2xl font-bold text-booking-step2-primary">₹1200</span>
                        </div>
                        <p class="text-xs text-gray-400">Includes all taxes</p>
                    </div>

                    <button routerLink="/client/booking/time" class="w-full py-3.5 px-6 bg-booking-step2-primary hover:bg-[#d01150] text-white font-bold rounded-xl shadow-[0_4px_14px_rgba(236,19,91,0.4)] hover:shadow-[0_6px_20px_rgba(236,19,91,0.6)] transform hover:-translate-y-0.5 transition-all text-sm flex items-center justify-center gap-2">
                        <span>Continue to Date & Time</span>
                        <span class="material-symbols-outlined text-lg">arrow_forward</span>
                    </button>
                </div>
            </aside>
        </div>
    </div>
  `
})
export class ArtistSelectionComponent { }
