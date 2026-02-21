import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-artist-filter',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex flex-wrap justify-center gap-3 mb-8">
        <button *ngFor="let filter of filters"
            (click)="selectFilter(filter)"
            [ngClass]="activeFilter === filter ? 'bg-primary text-white shadow-md hover:scale-105' : 'bg-white dark:bg-gray-800 text-text-main dark:text-white shadow-sm hover:shadow-md hover:scale-105'"
            class="group flex h-10 items-center justify-center gap-x-2 rounded-full pl-5 pr-5 transition-all">
            <span class="text-sm font-medium font-display-2">{{ filter }}</span>
        </button>
    </div>
  `
})
export class ArtistFilterComponent { 
    @Input() activeFilter: string = 'All Artists';
    @Output() filterChange = new EventEmitter<string>();

    filters = ['All Artists', '3D Art', 'Minimalist', 'French Tips', 'Gel X', 'Gel Polish', 'Pedicure'];

    selectFilter(filter: string) {
        this.filterChange.emit(filter);
    }
}
