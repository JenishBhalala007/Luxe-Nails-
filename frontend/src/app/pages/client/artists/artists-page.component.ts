import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from '../landing-page/components/header/header.component';
import { ArtistHeroComponent } from './components/artist-hero/artist-hero.component';
import { ArtistGridComponent } from './components/artist-grid/artist-grid.component';
import { ArtistFooterComponent } from './components/artist-footer/artist-footer.component';

@Component({
    selector: 'app-artists-page',
    standalone: true,
    imports: [
        CommonModule,
        LandingHeaderComponent,
        ArtistHeroComponent,
        ArtistGridComponent,
        ArtistFooterComponent
    ],
    template: `
    <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-text-main">
        <app-landing-header></app-landing-header>
        <main class="flex-1 p-0 pt-32 w-full">
             <app-artist-hero></app-artist-hero>
             <app-artist-grid></app-artist-grid>
             <div class="h-20"></div> <!-- Spacer to ensure grid padding bottom -->
        </main>
        <app-artist-footer></app-artist-footer>
    </div>
  `
})
export class ArtistsPageComponent { }
