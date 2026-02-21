import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-gallery-filter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-rose-200/50 dark:border-white/5 transition-all duration-300" id="filter-bar">
        <div class="px-4 py-4 flex justify-center">
            <div class="flex gap-3 overflow-x-auto no-scrollbar max-w-[1280px] w-full pb-2 justify-start sm:justify-center">
                <button *ngFor="let category of categories"
                    (click)="selectCategory(category)"
                    [class.bg-primary]="activeCategory === category"
                    [class.text-white]="activeCategory === category"
                    [class.shadow-md]="activeCategory === category"
                    [class.shadow-primary/25]="activeCategory === category"
                    [class.ring-2]="activeCategory === category"
                    [class.ring-offset-2]="activeCategory === category"
                    [class.ring-transparent]="activeCategory === category"
                    
                    [class.bg-white]="activeCategory !== category"
                    [class.dark:bg-surface-dark]="activeCategory !== category"
                    [class.hover:bg-rose-100]="activeCategory !== category"
                    [class.dark:hover:bg-[#4a2a33]]="activeCategory !== category"
                    [class.text-text-main]="activeCategory !== category"
                    [class.dark:text-white]="activeCategory !== category"
                    [class.border]="activeCategory !== category"
                    [class.border-rose-100]="activeCategory !== category"
                    [class.dark:border-[#4a2a33]]="activeCategory !== category"
                    
                    class="flex shrink-0 items-center justify-center gap-x-2 rounded-full h-10 px-6 transition-all group active:ring-primary whitespace-nowrap">
                    
                    <!-- Icon Mapping (Optional: You can add a method to get icon based on category if needed, or just text) -->
                    <!-- <span *ngIf="category === 'All'" class="material-symbols-outlined text-[20px]">grid_view</span> -->
                    
                    <span class="text-sm font-bold">{{ category }}</span>
                </button>
            </div>
        </div>
    </section>
  `
})
export class GalleryFilterComponent {
    @Input() categories: string[] = [];
    @Input() activeCategory: string = 'All';
    @Output() categorySelected = new EventEmitter<string>();

    selectCategory(category: string) {
        this.categorySelected.emit(category);
    }
}
