import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-artist-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-col bg-white dark:bg-gray-800 rounded-[12px] p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full">
        <div class="relative w-32 h-32 mx-auto mb-4">
            <div class="w-full h-full rounded-full overflow-hidden border-4 border-[#fcf8f9] shadow-inner">
                <div class="w-full h-full bg-center bg-cover" 
                     [style.backgroundImage]="'url(' + image + ')'"></div>
            </div>
            <div *ngIf="badgeIcon" class="absolute bottom-0 right-0 bg-white dark:bg-gray-700 rounded-full p-1 shadow-sm">
                <span class="material-symbols-outlined text-primary text-[20px]">{{ badgeIcon }}</span>
            </div>
        </div>
        <div class="flex flex-col items-center gap-1 flex-grow">
            <h3 class="text-text-main dark:text-white text-2xl font-bold font-serif">{{ name }}</h3>
            <div class="bg-[#fae8eb] dark:bg-primary/20 px-3 py-1 rounded-full">
                <span class="text-primary dark:text-primary-light text-xs font-bold uppercase tracking-wide font-display-2">{{ specialty }}</span>
            </div>
            <div class="flex items-center gap-1 mt-2 text-yellow-500">
                <span class="material-symbols-outlined text-xl fill-current">star</span>
                <span class="text-text-main dark:text-white font-bold text-sm font-display-2">{{ rating }}</span>
                <span class="text-text-muted dark:text-gray-400 text-xs font-display-2">({{ reviews }} reviews)</span>
            </div>
        </div>
        <button class="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 font-display-2">
            <span>Book with {{ name.split(' ')[0] }}</span>
        </button>
    </div>
  `
})
export class ArtistCardComponent {
    @Input() name: string = '';
    @Input() specialty: string = '';
    @Input() rating: number = 5.0;
    @Input() reviews: number = 0;
    @Input() image: string = '';
    @Input() badgeIcon?: string;
}
