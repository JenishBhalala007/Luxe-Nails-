import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from '../landing-page/components/header/header.component';
import { GalleryHeroComponent } from './components/gallery-hero/gallery-hero.component';
import { GalleryFilterComponent } from './components/gallery-filter/gallery-filter.component';
import { GalleryMasonryComponent } from './components/gallery-masonry/gallery-masonry.component';
import { GalleryFooterComponent } from './components/gallery-footer/gallery-footer.component';

@Component({
    selector: 'app-gallery-page',
    standalone: true,
    imports: [
        CommonModule,
        LandingHeaderComponent,
        GalleryHeroComponent,
        GalleryFilterComponent,
        GalleryMasonryComponent,
        GalleryFooterComponent
    ],
    template: `
    <div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-[#f3e7ea] font-display overflow-x-hidden antialiased">
        <app-landing-header></app-landing-header>
        <main class="flex flex-col min-h-screen pt-32">
            <app-gallery-hero></app-gallery-hero>
            <app-gallery-filter></app-gallery-filter>
            <app-gallery-masonry></app-gallery-masonry>
            <app-gallery-footer></app-gallery-footer>
        </main>
    </div>
  `
})
export class GalleryPageComponent { }
