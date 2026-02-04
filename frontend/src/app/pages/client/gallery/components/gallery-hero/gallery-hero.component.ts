import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="pt-12 pb-8 px-4 md:px-10 flex justify-center">
        <div class="max-w-[960px] w-full text-center flex flex-col gap-4">
            <p class="text-primary font-bold text-sm tracking-widest uppercase">The Studio Gallery</p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-text-main dark:text-white">
                Nail Art <span class="text-primary">Inspiration</span>
            </h1>
            <p class="text-text-muted dark:text-[#d4aeb8] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Discover curated designs from our top artists for your next luxury appointment. From minimalist chic to avant-garde masterpieces.
            </p>
        </div>
    </section>
  `
})
export class GalleryHeroComponent { }
