import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detail-content',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="px-4 md:px-10 py-6 max-w-[1440px] mx-auto w-full">
        <a href="/client/gallery" class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-rose-gold transition-colors font-medium group font-body">
            <span class="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to Inspiration Gallery
        </a>
    </div>
    <section class="px-4 md:px-10 pb-16 flex justify-center">
        <div class="max-w-[1200px] w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <!-- Left: Image Gallery -->
            <div class="w-full lg:w-[55%] relative group">
                <div class="relative overflow-hidden rounded-[12px] shadow-2xl shadow-[#E0C0C4]/40 aspect-[4/5] lg:aspect-auto lg:h-[700px]">
                    <img alt="High fidelity detail view of Golden Touch minimalist nail art" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFqbsEn4Q128gko-jaPSYpCJqrHmStlX49RVd5o0VRzhBKkWS_X-kTbnIlFP4YfrngL_Zd9bdaWb7ZTJT5OOkaZgQm2CHEneXFd5ahDPNpo2HLMD4lQ-D8_-D1UVKjl7u4ZQRIa6a5igHpY7qe2r51dgrucqiqz9SMoQFZAH6ga6Td8e7Bzojp7AnvcAJleg7JxX26LsnyrjdLh3td-SPjIum-WvjEU0S6pr3HEZ-T6Sf_AVr9t-i7aMv8QawDt1i8iY0JouwoENRV"/>
                    <button class="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-full text-rose-gold hover:text-rose-gold-hover hover:scale-110 transition-all shadow-lg">
                        <span class="material-symbols-outlined text-2xl fill-current">favorite</span>
                    </button>
                </div>
                <!-- Thumbnails -->
                <div class="flex gap-4 mt-6 overflow-x-auto no-scrollbar pb-2">
                    <div class="w-24 h-24 rounded-[12px] overflow-hidden border-2 border-rose-gold cursor-pointer flex-shrink-0">
                        <img alt="Thumbnail 1" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFqbsEn4Q128gko-jaPSYpCJqrHmStlX49RVd5o0VRzhBKkWS_X-kTbnIlFP4YfrngL_Zd9bdaWb7ZTJT5OOkaZgQm2CHEneXFd5ahDPNpo2HLMD4lQ-D8_-D1UVKjl7u4ZQRIa6a5igHpY7qe2r51dgrucqiqz9SMoQFZAH6ga6Td8e7Bzojp7AnvcAJleg7JxX26LsnyrjdLh3td-SPjIum-WvjEU0S6pr3HEZ-T6Sf_AVr9t-i7aMv8QawDt1i8iY0JouwoENRV"/>
                    </div>
                    <div class="w-24 h-24 rounded-[12px] overflow-hidden border border-transparent opacity-60 hover:opacity-100 cursor-pointer transition-opacity flex-shrink-0 bg-soft-nude">
                        <div class="w-full h-full flex items-center justify-center text-rose-gold/50">
                            <span class="material-symbols-outlined">filter_drama</span>
                        </div>
                    </div>
                    <div class="w-24 h-24 rounded-[12px] overflow-hidden border border-transparent opacity-60 hover:opacity-100 cursor-pointer transition-opacity flex-shrink-0 bg-blush-pink">
                        <div class="w-full h-full flex items-center justify-center text-rose-gold/50">
                            <span class="material-symbols-outlined">auto_awesome</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Right: Details -->
            <div class="w-full lg:w-[45%] flex flex-col pt-4 font-body">
                <div class="flex items-center gap-3 mb-4">
                    <span class="px-4 py-1 bg-soft-nude text-[#8a6d4b] text-xs font-bold uppercase tracking-wider rounded-full">Minimalist</span>
                    <span class="px-4 py-1 bg-blush-pink text-text-muted text-xs font-bold uppercase tracking-wider rounded-full">Trending</span>
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-main dark:text-white mb-2 leading-tight">
                    Golden Touch
                </h1>
                <div class="flex items-center gap-4 mb-8 border-b border-[#f3e7ea] dark:border-[#3a2026] pb-8">
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-medium text-gray-500">Artist:</span>
                        <span class="font-display text-xl italic text-rose-gold">Jessica W.</span>
                    </div>
                    <div class="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
                    <div class="flex items-center gap-1 text-yellow-500">
                        <span class="material-symbols-outlined text-lg fill-current">star</span>
                        <span class="material-symbols-outlined text-lg fill-current">star</span>
                        <span class="material-symbols-outlined text-lg fill-current">star</span>
                        <span class="material-symbols-outlined text-lg fill-current">star</span>
                        <span class="material-symbols-outlined text-lg fill-current">star_half</span>
                        <span class="text-xs font-bold text-gray-400 ml-1">(512 reviews)</span>
                    </div>
                </div>
                
                <div class="space-y-6 mb-10">
                    <div>
                        <h3 class="text-lg font-bold font-display mb-2">Technique & Style</h3>
                        <p class="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                            A minimalist masterpiece featuring a sheer nude base coat, perfectly matched to your skin tone, accentuated with hand-painted 24k gold leaf lines. This design utilizes a precision fine-line technique and is sealed with a high-gloss gel top coat for enduring shine. Perfect for everyday elegance or understated special occasions.
                        </p>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold font-display mb-3">Estimated Price</h3>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-bold text-text-main dark:text-white">$85.00</span>
                            <span class="text-sm text-gray-400">/ full set</span>
                        </div>
                        <p class="text-xs text-rose-gold mt-1">*Price may vary based on nail length and add-ons.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-white dark:bg-[#2d1a20] p-4 rounded-[12px] border border-[#f3e7ea] dark:border-[#3a2026]">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="material-symbols-outlined text-rose-gold text-xl">schedule</span>
                                <span class="text-sm font-bold">Duration</span>
                            </div>
                            <p class="text-sm text-gray-500">90 - 105 mins</p>
                        </div>
                        <div class="bg-white dark:bg-[#2d1a20] p-4 rounded-[12px] border border-[#f3e7ea] dark:border-[#3a2026]">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="material-symbols-outlined text-rose-gold text-xl">spa</span>
                                <span class="text-sm font-bold">Products</span>
                            </div>
                            <p class="text-sm text-gray-500">Japanese Gel, 24k Leaf</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex flex-col gap-4">
                    <button class="w-full bg-rose-gold hover:bg-rose-gold-hover text-white text-lg font-display font-bold py-5 rounded-[12px] shadow-xl shadow-rose-gold/20 hover:shadow-rose-gold/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                        <span class="material-symbols-outlined">calendar_month</span>
                        Book This Design
                    </button>
                    <p class="text-center text-xs text-gray-400 font-light">
                        Free cancellation up to 24 hours before your appointment.
                    </p>
                </div>
            </div>
        </div>
    </section>
  `
})
export class DetailContentComponent { }
