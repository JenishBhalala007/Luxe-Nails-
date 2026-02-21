import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services-filter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-full sticky top-20 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-rose-200/50 dark:border-white/5 py-4">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto hide-scrollbar">
            <div class="flex gap-3 min-w-max pb-1">
                <button *ngFor="let category of categories"
                    (click)="selectCategory(category)"
                    [class.bg-primary-bold]="activeCategory === category"
                    [class.text-white]="activeCategory === category"
                    [class.hover:text-white]="activeCategory === category"
                    [class.shadow-md]="activeCategory === category"
                    [class.border-transparent]="activeCategory === category"
                    
                    [class.bg-white]="activeCategory !== category"
                    [class.dark:bg-surface-dark]="activeCategory !== category"
                    [class.text-text-main]="activeCategory !== category"
                    [class.dark:text-white]="activeCategory !== category"
                    [class.hover:text-primary-bold]="activeCategory !== category"
                    [class.hover:border-primary-bold]="activeCategory !== category"
                    
                    class="flex h-10 items-center justify-center px-6 rounded-full border border-rose-200 dark:border-white/10 font-medium text-sm transition-all">
                    {{ category }}
                </button>
            </div>
        </div>
    </div>
  `
})
export class ServicesFilterComponent {
    @Input() categories: string[] = [];
    @Input() activeCategory: string = 'All';
    @Output() categorySelected = new EventEmitter<string>();

    selectCategory(category: string) {
        this.categorySelected.emit(category);
    }
}
