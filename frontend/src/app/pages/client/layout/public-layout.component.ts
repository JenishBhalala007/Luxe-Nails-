import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingHeaderComponent } from '../landing-page/components/header/header.component';

@Component({
    selector: 'app-public-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, LandingHeaderComponent],
    template: `
    <div class="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-text-main dark:text-[#f4e6e9] font-display antialiased overflow-x-hidden">
        <app-landing-header [theme]="currentTheme"></app-landing-header>
        <main class="flex-1 w-full pt-32">
            <router-outlet></router-outlet>
        </main>
    </div>
    `
})
export class PublicLayoutComponent {
    currentTheme: 'light' | 'dark' | 'cream' = 'cream';

    constructor() {
        // Simple dark mode detection
        if (typeof window !== 'undefined' && window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            this.updateTheme(darkModeQuery.matches);

            darkModeQuery.addEventListener('change', (e) => {
                this.updateTheme(e.matches);
            });
        }
    }

    private updateTheme(isDark: boolean) {
        this.currentTheme = isDark ? 'dark' : 'cream';
    }
}
