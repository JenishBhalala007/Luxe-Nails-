import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryHeroComponent } from './components/gallery-hero/gallery-hero.component';
import { GalleryFilterComponent } from './components/gallery-filter/gallery-filter.component';
import { GalleryMasonryComponent } from './components/gallery-masonry/gallery-masonry.component';
import { GalleryFooterComponent } from './components/gallery-footer/gallery-footer.component';

@Component({
    selector: 'app-gallery-page',
    standalone: true,
    imports: [
        CommonModule,

        GalleryHeroComponent,
        GalleryFilterComponent,
        GalleryMasonryComponent,
        GalleryFooterComponent
    ],
    template: `
    <div class="flex flex-col font-display overflow-x-hidden antialiased">
        <app-gallery-hero></app-gallery-hero>
        <app-gallery-filter 
            [categories]="categories" 
            [activeCategory]="activeCategory"
            (categorySelected)="onCategorySelected($event)">
        </app-gallery-filter>
        <app-gallery-masonry [activeCategory]="activeCategory"></app-gallery-masonry>
        <app-gallery-footer></app-gallery-footer>
    </div>
  `,
    styles: [`
        :host {
            display: block;
            width: 100%;
        }
    `]
})
export class GalleryPageComponent {
    categories: string[] = [
        'All',
        'Nail Polish',
        'Nail Design',
        'Gel Polish',
        'Gel & Ombre',
        'French Nails',
        'Acrylic Nails',
        'Mylar Nails',
        'Removal & Repair'
    ];
    activeCategory: string = 'All';

    onCategorySelected(category: string) {
        this.activeCategory = category;
    }
}
