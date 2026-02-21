import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-landing-hero',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <section class="relative w-full py-12 md:py-24 overflow-hidden">
        <!-- Background decorative blob -->
        <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-accent-nude/30 dark:bg-accent-nude/10 rounded-full blur-[100px] -z-10"></div>
        <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/5 rounded-full blur-[80px] -z-10"></div>
        <div class="layout-container mx-auto max-w-[1280px] px-6 md:px-10">
            <div class="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                <!-- Left Content -->
                <div class="flex flex-col gap-6 md:w-1/2 items-start text-left z-10">
                    <div class="flex flex-col gap-4">
                        <span class="text-accent-rose font-bold tracking-widest text-xs uppercase">Elevate Your Style</span>
                        <h1 class="text-text-main dark:text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                            Art for Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-rose to-[#d48c99]">Fingertips</span>
                        </h1>
                        <p class="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-[500px]">
                            Experience luxury manicures and intricate designs tailored to your unique style in a serene environment.
                        </p>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                        <button routerLink="/client/booking/services" [queryParams]="{reset: 'true'}" class="bg-primary hover:bg-[#ffc1d0] text-text-main px-8 py-3.5 rounded-lg text-base font-bold shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 min-w-[160px]">
                            Book Appointment
                        </button>
                        <button class="bg-white dark:bg-white/10 hover:bg-gray-50 border border-gray-200 dark:border-white/10 text-text-main dark:text-white px-8 py-3.5 rounded-lg text-base font-bold shadow-sm hover:shadow-md transition-all duration-300 min-w-[160px]">
                            View Gallery
                        </button>
                    </div>
                    <div class="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200/60 dark:border-white/10 w-full">
                        <div class="flex -space-x-3">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuByNJOsoXcVefqOY9w-EXx7N1R3QCwBuHn-eDz1UcYIhq-bLfViOKIEjZVEilI1l0ZO3XuXHWY_MmPrvt1dH9S6UCSusCbQR-2jCbG3LoKC_Oj7-dCsGdxiZD4IGRDcKoa6OX_pSwFq4eZCALPUKxJ2ap0e6HhkFKkao8PR2Z3GtY7_efSBRSp3_xE-Zf5JUS0PeC4L5D-xtyhchh05eSr82_4MRx4hIEkP9v7b8-7VG1kYdBTnlnExayrHuxs2tNQEiSvPIAvx9SgE" 
                                alt="Client portrait" class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" />
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQAVGLXOHjoxahyV6P1_iho3L8Au-Liqv5xP1C-ib4_EVmESiJz80gzUaOom2G4zRXcgLYq9j-1lkAx0PlEla8uv_qtONyzhYh2urDpzWRrfLSU7gOrXkb0KDsdW8-e-J-NzBcpPfxGN5C37_CFiCO2Qq7BjqNJw74iDcAAwzxMMB_gzdSgWvT5aqTMxARY65VJZCLezSfAbKXOhb5z2698HoOa2UX7YrsAczI2CuGYCO7Gd9RNKoGnAxQ5QJrSOuZn8oBvaLKtRS_" 
                                alt="Client portrait" class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" />
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw2eVWjttbXUmzcpqkP9jbSLVg97aIhAIowTswbHbZNyYGmNBmyuSxiPIqXdhKr8NXV4k_ZbKjtTLgmByEMHHpbiImPAPMS6WqNr6ZHQpuNTiPSfPI-bq5vAApcEuiGyU-35FobKwkXoQBYX2mr-LYO7Wr5m-_MnMc4GmXcA2YrIFf4ytuG_giCSeGZBtkioA5q90_NpprhLikNXND0Lx983ADk00uH2exNLQnufJCyIJUM2zjuGb9G0ogT8-QJdzGVyCbthpwPkWn" 
                                alt="Client portrait" class="w-10 h-10 rounded-full border-2 border-white dark:border-background-dark object-cover" />
                        </div>
                        <div class="flex flex-col">
                            <div class="flex text-yellow-400 text-sm">
                                <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                                <span class="material-symbols-outlined text-[16px] fill-current">star</span>
                            </div>
                            <span class="text-xs font-semibold text-gray-500 dark:text-gray-400">Loved by 2,000+ clients</span>
                        </div>
                    </div>
                </div>
                <!-- Right Content (Image) -->
                <div class="relative md:w-1/2 flex justify-center items-center">
                    <!-- Abstract circle behind image -->
                    <div class="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent-nude/40 rounded-full blur-3xl transform scale-90"></div>
                    <div class="relative z-10 w-full max-w-[500px] aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBOMTTB45uqIITW9pzekqDWrB6XeIvX_wKUNTQZVCQ1sb1smGu-jrY-7I_4YeDPibzWUYWmKNIXTPCgbOJqFbALRcHkGR2s14UZvw-3psplRTDycWX1uD3O4DMzy2scvcqk-XYknsF6DF0thmnju8EtfyrdlU3Ra8Zgs_77-fa7HGh_5KnsGbIyKNimlmopHb1CEFTp3oLo575ALdm4XIGItiGbzIcXA2FmkLVFJgiOb8nJ1c1aG-LAw9462nwTwKbRr4TiF7hP5LR" 
                            alt="Close up of elegant female hand with detailed nail art" class="w-full h-full object-cover" />
                    </div>
                    <!-- Floating Badge -->
                    <div class="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style="animation-duration: 3s;">
                        <div class="bg-accent-rose/10 p-2 rounded-full text-accent-rose">
                            <span class="material-symbols-outlined">verified</span>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Certified</p>
                            <p class="text-sm font-bold text-text-main dark:text-white">Top Rated Studio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `
})
export class LandingHeroComponent { }
