import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistHeroComponent } from './components/artist-hero/artist-hero.component';
import { ArtistGridComponent } from './components/artist-grid/artist-grid.component';
import { ArtistFooterComponent } from './components/artist-footer/artist-footer.component';

@Component({
    selector: 'app-artists-page',
    standalone: true,
    imports: [
        CommonModule,

        ArtistHeroComponent,
        ArtistGridComponent,
        ArtistFooterComponent
    ],
    template: `
    <div class="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden font-display">
        <app-artist-hero></app-artist-hero>
        <div class="flex-1 p-0 w-full">
             <app-artist-grid></app-artist-grid>
             <div class="h-20"></div> <!-- Spacer to ensure grid padding bottom -->
        </div>
        <app-artist-footer></app-artist-footer>
    </div>
  `,
    styles: [`
        :host {
            display: block;
            width: 100%;
        }
    `]
})
export class ArtistsPageComponent { }
