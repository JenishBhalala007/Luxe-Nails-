import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-6">
        <div class="relative w-full rounded-2xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center">
            <!-- Background Image with Overlay -->
            <div class="absolute inset-0 z-0 bg-cover bg-center" 
                 style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBqDFRJA56ICJU2HhlpGiMVuuqURd7wd5BFB5lHLmNfp6ERcK4A_tkrJXrsgfzf0CLo2pE-UrsY801-__nrplbDYOEGtY0R_YUXJst8cdgDqxGylJja1Y224sRYoh3eftLfjlgwcGSY1oYNNpS3N-lxc5GN432wQWShBgCK5iBQDEFJjJhRZvDkZ_UITF9h1n-0zOUMOkeqHldjod_Q-BwvuBc5L3QhKrL0XgBcePXQryDPVNpJ-1uTXPAtEXTn5K2Bl9ik9LQo_SmH");'>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
            <!-- Hero Content -->
            <div class="relative z-20 text-center px-4 max-w-2xl flex flex-col gap-6 items-center">
                <h2 class="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-sm">
                    Exquisite Nail Artistry
                </h2>
                <p class="text-white/90 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                    Immerse yourself in luxury. Select a treatment below to begin your journey to perfection.
                </p>
                <div class="flex gap-4 mt-2">
                    <button class="bg-white text-primary-bold hover:bg-gray-50 h-12 px-8 rounded-lg font-bold text-sm md:text-base shadow-xl transition-transform hover:-translate-y-0.5 whitespace-nowrap">
                        View Menu
                    </button>
                </div>
            </div>
        </div>
    </div>
  `
})
export class ServicesHeroComponent { }
