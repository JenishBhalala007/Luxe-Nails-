import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth.service';
import { LoginRequiredModalComponent } from '../../../../../shared/components/login-required-modal/login-required-modal.component';

@Component({
    selector: 'app-landing-header',
    standalone: true,
    imports: [CommonModule, RouterModule, LoginRequiredModalComponent],
    template: `
    <header class="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <!-- Main Pill Container -->
        <div 
            class="relative w-full max-w-7xl rounded-full shadow-xl border backdrop-blur-xl transition-all duration-300 px-6 py-3 flex items-center justify-between"
            [ngClass]="{
                'bg-[#ffc1d0]/80 border-white/50 shadow-primary/20': theme === 'cream',
                'bg-white/70 border-white/60 shadow-black/5': theme === 'light',
                'bg-background-dark/70 border-white/10 shadow-black/20': theme === 'dark'
            }"
        >
            <!-- Logo Section -->
            <div class="flex items-center gap-3 cursor-pointer" routerLink="/client/landing">
                <div class="text-2xl" [ngClass]="{'text-black': theme !== 'dark', 'text-white': theme === 'dark'}">
                    <span class="material-symbols-outlined text-4xl">spa</span>
                </div>
                <h2 
                    class="text-xl font-serif font-bold tracking-tight"
                    [ngClass]="{'text-black': theme !== 'dark', 'text-white': theme === 'dark'}"
                >
                    Luxe Nails
                </h2>
            </div>

            <!-- Navigation Links (Desktop) -->
            <nav class="hidden md:flex items-center gap-8">
                <a 
                    *ngFor="let item of navItems"
                    [routerLink]="item.route"
                    routerLinkActive="text-primary-bold font-bold"
                    class="text-sm font-medium transition-colors hover:text-primary-bold cursor-pointer"
                    [ngClass]="{
                        'text-gray-800': theme !== 'dark',
                        'text-gray-200': theme === 'dark'
                    }"
                >
                    {{ item.label }}
                </a>
            </nav>

            <!-- Right Actions: Book Btn + Profile -->
            <div class="flex items-center gap-4">
                <button 
                    (click)="handleBookNow()"
                    class="bg-[#ee2b58] hover:bg-[#d61c3b] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    Book Now
                </button>
                
                <!-- Profile Avatar (Visible if Logged In) -->
                <div 
                    *ngIf="isLoggedIn()"
                    (click)="navigateToDashboard()"
                    class="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm cursor-pointer hover:ring-2 hover:ring-primary-bold transition-all flex items-center justify-center bg-[#ee2b58] text-white font-bold text-lg"
                >
                    {{ user?.name?.charAt(0) || 'U' }}
                </div>

                <!-- Log In Button (Visible if Guest) -->
                <button 
                    *ngIf="!isLoggedIn()"
                    routerLink="/auth/login"
                    class="bg-white text-[#ee2b58] hover:bg-gray-50 px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    Log In
                </button>
            </div>
        </div>
    </header>

    <app-login-required-modal 
        *ngIf="showLoginModal" 
        (onClose)="closeLoginModal()"
    ></app-login-required-modal>
  `
})
export class LandingHeaderComponent implements OnInit {
    @Input() theme: 'light' | 'dark' | 'cream' = 'cream';
    showLoginModal = false;
    user: any = null;

    navItems = [
        { label: 'Home', route: '/client/landing' },
        { label: 'Services', route: '/client/services' },
        { label: 'Artists', route: '/client/artists' },
        { label: 'Gallery', route: '/client/gallery-public' },
        { label: 'Contact', route: '/client/contact' }
    ];

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.user$.subscribe(user => {
            this.user = user;
        });
    }

    handleBookNow() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/client/booking/services'], { queryParams: { reset: 'true' } });
        } else {
            this.showLoginModal = true;
        }
    }

    closeLoginModal() {
        this.showLoginModal = false;
    }

    isLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    navigateToDashboard() {
        const user = this.user || JSON.parse(localStorage.getItem('user') || '{}');
        const role = (user.role || '').toLowerCase();
        
        if (role === 'admin') {
            this.router.navigate(['/admin/dashboard']);
        } else if (role === 'artist') {
            this.router.navigate(['/artist/dashboard']);
        } else {
            this.router.navigate(['/client/dashboard']);
        }
    }
}
