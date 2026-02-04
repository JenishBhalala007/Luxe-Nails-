import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="mt-auto border-t border-[#f3e7ea] dark:border-[#3a2026] bg-white dark:bg-[#2d1a20]">
        <div class="max-w-[1440px] mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex flex-col gap-1 items-center md:items-start">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-primary">spa</span>
                    <span class="font-bold text-lg text-text-main dark:text-white">Luxe Nails</span>
                </div>
                <p class="text-sm text-text-muted dark:text-[#d4aeb8]">© 2024 Luxe Nails Studio. All rights reserved.</p>
            </div>
            <div class="flex gap-6">
                <a class="text-text-main dark:text-white hover:text-primary transition-colors text-sm font-semibold" href="#">Privacy Policy</a>
                <a class="text-text-main dark:text-white hover:text-primary transition-colors text-sm font-semibold" href="#">Terms of Service</a>
                <a class="text-text-main dark:text-white hover:text-primary transition-colors text-sm font-semibold" href="#">Instagram</a>
            </div>
        </div>
    </footer>
  `
})
export class GalleryFooterComponent { }
