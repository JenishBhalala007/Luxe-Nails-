import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-artist-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="bg-white dark:bg-background-dark border-t border-[#f3e7ea] dark:border-white/10 py-10">
        <div class="layout-container flex justify-center">
            <div class="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
                <div class="flex flex-col gap-6 text-center">
                    <div class="flex items-center justify-center gap-2 mb-4">
                        <span class="material-symbols-outlined text-primary text-3xl">spa</span>
                        <span class="text-lg font-bold font-serif text-text-main dark:text-white">Luxe Nails</span>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                        <a href="#" class="text-text-muted hover:text-primary transition-colors text-base font-normal leading-normal font-display-2">Privacy Policy</a>
                        <a href="#" class="text-text-muted hover:text-primary transition-colors text-base font-normal leading-normal font-display-2">Terms of Service</a>
                        <a href="#" class="text-text-muted hover:text-primary transition-colors text-base font-normal leading-normal font-display-2">Instagram</a>
                        <a href="#" class="text-text-muted hover:text-primary transition-colors text-base font-normal leading-normal font-display-2">TikTok</a>
                    </div>
                    <p class="text-text-muted/60 text-sm font-normal leading-normal mt-4 font-display-2">© 2023 Luxe Nail Studio. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class ArtistFooterComponent { }
