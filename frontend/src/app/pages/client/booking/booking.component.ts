import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingHeaderComponent } from '../landing-page/components/header/header.component';

@Component({
    selector: 'app-booking',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        LandingHeaderComponent
    ],
    template: `
    <div class="min-h-screen flex flex-col font-display text-[#1c0d10] dark:text-gray-100 bg-background-light dark:bg-background-dark">
        <app-landing-header></app-landing-header>
        <div class="pt-32 flex-1 w-full">
            <router-outlet></router-outlet>
        </div>
    </div>
  `
})
export class BookingComponent { }
