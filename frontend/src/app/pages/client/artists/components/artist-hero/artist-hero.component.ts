import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-artist-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 md:py-16">
        <div class="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-10">
            <!-- Page Heading -->
            <div class="flex flex-col items-center text-center gap-4 animate-fade-in-up">
                <h1 class="text-text-main dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-serif">
                    Select Your Artist
                </h1>
                <p class="text-text-muted dark:text-gray-300 text-lg font-normal leading-normal max-w-2xl">
                    Choose a specialist to bring your vision to life. Each of our artists has a unique style and expertise.
                </p>
            </div>
        </div>
    </div>
  `,
    // Using inline styles for specific animations if needed, otherwise existing global works.
    styles: [`
    :host {
        display: block;
        width: 100%;
    }
  `]
})
export class ArtistHeroComponent { }
