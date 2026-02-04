import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from '../landing-page/components/header/header.component';
import { DetailContentComponent } from './components/detail-content/detail-content.component';
import { DetailRelatedComponent } from './components/detail-related/detail-related.component';
import { DetailFooterComponent } from './components/detail-footer/detail-footer.component';

@Component({
    selector: 'app-gallery-detail-page',
    standalone: true,
    imports: [
        CommonModule,
        LandingHeaderComponent,
        DetailContentComponent,
        DetailRelatedComponent,
        DetailFooterComponent
    ],
    template: `
    <div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-main dark:text-[#f3e7ea] font-body overflow-x-hidden antialiased">
        <app-landing-header></app-landing-header>
        <main class="flex flex-col min-h-screen pt-32">
             <!-- Since the HTML content was quite large and monolithic, I've split it:
                  Detail Content covers the breadcrumb + hero/image + info
                  Detail Related covers the 'More by Jessica W.' section
             -->
             <app-detail-content></app-detail-content>
             <app-detail-related></app-detail-related>
             <app-detail-footer></app-detail-footer>
        </main>
    </div>
  `
})
export class GalleryDetailPageComponent { }
