import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-client-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
    template: `
    <div class="flex h-screen w-full bg-dashboard-bg-light dark:bg-dashboard-bg-dark text-dashboard-text-main dark:text-white font-display antialiased overflow-hidden">
        <!-- Sidebar Navigation -->
        <aside class="w-80 h-full flex flex-col bg-white dark:bg-[#1a0b0e] border-r border-[#f4e6e9] dark:border-white/10 flex-shrink-0 z-20 hidden md:flex">
            <div class="h-20 flex items-center px-8">
                <div class="flex items-center gap-3">
                    <div class="text-2xl text-dashboard-text-main dark:text-white">
                        <span class="material-symbols-outlined text-4xl text-dashboard-rose-gold dark:text-dashboard-primary">spa</span>
                    </div>
                    <h1 class="text-xl font-serif font-bold tracking-tight text-dashboard-text-main dark:text-white">Luxe Nails</h1>
                </div>
            </div>

            <div class="px-8 pb-4">
                 <a routerLink="/client/landing" class="inline-flex items-center gap-2 text-sm font-medium text-dashboard-text-sub dark:text-gray-400 hover:text-dashboard-rose-gold dark:hover:text-dashboard-primary transition-colors">
                    <span class="material-symbols-outlined" style="font-size: 18px;">arrow_back</span>
                    Back to Home
                </a>
            </div>
            


            <nav class="flex flex-col gap-2 px-6 mt-2 flex-1">
                <a routerLink="/client/dashboard" routerLinkActive="bg-dashboard-primary/40 dark:bg-dashboard-primary/20" [routerLinkActiveOptions]="{exact: true}" class="group flex items-center gap-4 px-6 py-4 rounded-full transition-all duration-300">
                    <span class="material-symbols-outlined text-dashboard-rose-gold dark:text-dashboard-primary" style="font-size: 24px;">dashboard</span>
                    <span class="text-dashboard-text-main dark:text-white text-base font-semibold">Overview</span>
                </a>
                <a routerLink="/client/appointments" routerLinkActive="bg-dashboard-bg-light dark:bg-white/5" class="group flex items-center gap-4 px-6 py-4 rounded-full text-dashboard-text-sub dark:text-gray-400 hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-all duration-300">
                    <span class="material-symbols-outlined group-hover:text-dashboard-rose-gold transition-colors" style="font-size: 24px;">calendar_month</span>
                    <span class="text-base font-medium">Appointments</span>
                </a>
                <a routerLink="/client/settings" routerLinkActive="bg-dashboard-bg-light dark:bg-white/5" class="group flex items-center gap-4 px-6 py-4 rounded-full text-dashboard-text-sub dark:text-gray-400 hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-all duration-300">
                    <span class="material-symbols-outlined group-hover:text-dashboard-rose-gold transition-colors" style="font-size: 24px;">settings</span>
                    <span class="text-base font-medium">Settings</span>
                </a>
                <a routerLink="/client/contact" routerLinkActive="bg-dashboard-bg-light dark:bg-white/5" class="group flex items-center gap-4 px-6 py-4 rounded-full text-dashboard-text-sub dark:text-gray-400 hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-all duration-300">
                    <span class="material-symbols-outlined group-hover:text-dashboard-rose-gold transition-colors" style="font-size: 24px;">contact_support</span>
                    <span class="text-base font-medium">Contact Us</span>
                </a>
            </nav>
            <div class="p-8 border-t border-[#f4e6e9] dark:border-white/10">
                <button (click)="logout()" class="flex items-center gap-3 w-full text-left text-dashboard-text-sub dark:text-gray-400 hover:text-dashboard-rose-gold transition-colors">
                    <span class="material-symbols-outlined" style="font-size: 24px;">logout</span>
                    <span class="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 h-full overflow-y-auto bg-dashboard-bg-light dark:bg-dashboard-bg-dark p-6 md:p-12 lg:px-16">
            <router-outlet></router-outlet>
        </main>
    </div>
    `
})
export class ClientLayoutComponent {
    user: any = null;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.user$.subscribe(user => {
            this.user = user;
        });
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/client/landing']);
    }
}
