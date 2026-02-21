import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-artist-sidebar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
    <aside class="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#1a0b0e] border-r border-[#f4e6e9] dark:border-white/10 h-full z-20 shadow-soft hidden md:flex">
        <div class="h-20 flex items-center px-8">
            <div class="flex items-center gap-3">
                <div class="text-2xl text-luxe-text dark:text-white">
                    <span class="material-symbols-outlined text-4xl">spa</span>
                </div>
                <h1 class="text-xl font-serif font-bold tracking-tight text-luxe-text dark:text-white">Luxe Nails</h1>
            </div>
        </div>
        
        <nav class="flex-1 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
            <a routerLink="/client/landing" 
               class="flex items-center gap-3 px-4 py-2 mb-4 text-text-sub dark:text-gray-400 hover:text-primary transition-colors group">
                <span class="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                <span class="text-sm font-medium">Back to Home</span>
            </a>
            <a routerLink="/artist/dashboard" 
               routerLinkActive="bg-primary text-text-main shadow-sm" 
               [routerLinkActiveOptions]="{exact: true}"
               class="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5">
                <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">dashboard</span>
                <span class="text-sm font-medium">Dashboard</span>
            </a>
            <a routerLink="/artist/schedule" 
               routerLinkActive="bg-primary text-text-main shadow-sm"
               class="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5">
                <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">calendar_month</span>
                <span class="text-sm font-medium">Schedule</span>
            </a>
            <a routerLink="/artist/requests" 
               routerLinkActive="bg-primary text-text-main shadow-sm"
               class="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5">
                <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">inbox</span>
                <span class="text-sm font-medium">Requests</span>
            </a>
            <a routerLink="/artist/reviews" 
               routerLinkActive="bg-primary text-text-main shadow-sm"
               class="flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5">
                <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">reviews</span>
                <span class="text-sm font-medium">Reviews</span>
            </a>

        </nav>

        <div class="p-4 border-t border-[#f4e6e9] dark:border-white/10">
            <button (click)="logout()" class="relative z-50 flex items-center gap-3 px-4 py-3 rounded-xl w-full text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 hover:text-rose-gold transition-colors cursor-pointer">
                <span class="material-symbols-outlined">logout</span>
                <span class="text-sm font-medium">Sign Out</span>
            </button>
        </div>
    </aside>
  `,
    styles: [`
    .active-link {
        @apply bg-primary text-text-main shadow-sm;
    }
  `]
})
export class ArtistSidebarComponent {

    constructor(private authService: AuthService) { }

    logout() {
        console.log('Logout clicked - ArtistSidebarComponent');
        this.authService.logout();
    }
}
