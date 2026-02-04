import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landing-features',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-20 px-6 bg-white dark:bg-white/5 relative">
        <div class="layout-container mx-auto max-w-[1280px]">
            <div class="flex flex-col items-center text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4">Our Promise to You</h2>
                <p class="text-gray-600 dark:text-gray-300 max-w-2xl">We prioritize your health, beauty, and relaxation with top-tier industry standards and premium care.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="glass-card p-8 rounded-lg flex flex-col items-start gap-4 hover:shadow-xl transition-shadow duration-300 group">
                    <div class="w-14 h-14 rounded-full bg-accent-nude/50 flex items-center justify-center text-accent-rose group-hover:scale-110 transition-transform duration-300">
                        <span class="material-symbols-outlined text-3xl">sanitizer</span>
                    </div>
                    <h3 class="text-xl font-bold text-text-main dark:text-white">Sanitization</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Hospital-grade sterilization protocols and single-use tools for your complete safety and peace of mind.</p>
                </div>
                <!-- Card 2 -->
                <div class="glass-card p-8 rounded-lg flex flex-col items-start gap-4 hover:shadow-xl transition-shadow duration-300 group">
                    <div class="w-14 h-14 rounded-full bg-accent-nude/50 flex items-center justify-center text-accent-rose group-hover:scale-110 transition-transform duration-300">
                        <span class="material-symbols-outlined text-3xl">palette</span>
                    </div>
                    <h3 class="text-xl font-bold text-text-main dark:text-white">Expert Artists</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">Certified technicians with an eye for detail, specializing in intricate nail art and modern techniques.</p>
                </div>
                <!-- Card 3 -->
                <div class="glass-card p-8 rounded-lg flex flex-col items-start gap-4 hover:shadow-xl transition-shadow duration-300 group">
                    <div class="w-14 h-14 rounded-full bg-accent-nude/50 flex items-center justify-center text-accent-rose group-hover:scale-110 transition-transform duration-300">
                        <span class="material-symbols-outlined text-3xl">diamond</span>
                    </div>
                    <h3 class="text-xl font-bold text-text-main dark:text-white">Premium Polish</h3>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">We exclusively use long-lasting, non-toxic gels and lacquers from the world's leading luxury brands.</p>
                </div>
            </div>
        </div>
    </section>
  `
})
export class LandingFeaturesComponent { }
