import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryHeroComponent } from '../gallery/components/gallery-hero/gallery-hero.component';
import { GalleryFilterComponent } from '../gallery/components/gallery-filter/gallery-filter.component';
import { GalleryMasonryComponent } from '../gallery/components/gallery-masonry/gallery-masonry.component';
import { GalleryFooterComponent } from '../gallery/components/gallery-footer/gallery-footer.component';

@Component({
    selector: 'app-client-gallery',
    standalone: true,
    imports: [
        CommonModule,
        GalleryHeroComponent,
        GalleryFilterComponent,
        GalleryMasonryComponent,
        GalleryFooterComponent
    ],
    template: `
    <div class="flex flex-col text-text-main dark:text-[#f3e7ea] font-display antialiased">
        <main class="flex flex-col">
            <!-- Reuse existing gallery components but without the header -->
            <app-gallery-hero></app-gallery-hero>
            <app-gallery-filter 
                [categories]="categories" 
                [activeCategory]="activeCategory"
                (categorySelected)="onCategorySelected($event)">
            </app-gallery-filter>
            <app-gallery-masonry [activeCategory]="activeCategory"></app-gallery-masonry>
            <app-gallery-footer></app-gallery-footer>
        </main>
    </div>
  `
})
export class ClientGalleryComponent {
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
