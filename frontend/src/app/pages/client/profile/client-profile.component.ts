import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-client-profile',
    standalone: true,
    imports: [CommonModule],
    // Simplified template inheriting layout
    template: `
        <div class="max-w-[1000px] mx-auto flex flex-col gap-10 animate-fade-in-up">
            <!-- Page Heading -->
            <div class="flex flex-col gap-2">
                <h2 class="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Profile Settings</h2>
                <p class="font-body text-gray-500 dark:text-gray-400 text-base md:text-lg">Manage your personal details and security preferences.</p>
            </div>

            <form class="flex flex-col gap-8" (submit)="$event.preventDefault()">
                <!-- Top Section: Avatar & Personal Info -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <!-- Avatar Section -->
                    <div class="lg:col-span-4 flex flex-col items-center justify-center p-6">
                        <div class="relative group cursor-pointer">
                            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-dashboard-rose-gold/10 dark:bg-white/10 flex items-center justify-center border-[6px] border-blush-pink dark:border-[#3f1d24] text-dashboard-rose-gold dark:text-white font-bold text-6xl shadow-xl">
                                {{ user?.name?.charAt(0) || 'U' }}
                            </div>
                            <div class="absolute bottom-1 right-1 bg-white dark:bg-[#2a1418] p-2.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-rose-gold dark:text-primary transition-transform group-hover:scale-110">
                                <span class="material-symbols-outlined text-[20px]">photo_camera</span>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <p class="text-sm font-semibold text-primary dark:text-rose-400 cursor-pointer hover:underline">Change Photo</p>
                            <p class="text-xs text-gray-400 mt-1">JPG, GIF or PNG. Max size 800K</p>
                        </div>
                    </div>

                    <!-- Personal Info Fields -->
                    <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <!-- Full Name -->
                        <div class="relative col-span-1 md:col-span-2">
                            <input class="floating-input block px-4 py-5 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="fullname" placeholder=" " type="text" [value]="user?.name || ''"/>
                            <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="fullname">
                                Full Name
                            </label>
                        </div>

                        <!-- Phone Number -->
                        <div class="relative col-span-1">
                            <input class="floating-input block px-4 py-5 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="phone" placeholder=" " type="tel" [value]="user?.phone || ''"/>
                            <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="phone">
                                Phone Number
                            </label>
                        </div>

                        <!-- Email Address -->
                        <div class="relative col-span-1">
                            <input class="floating-input block px-4 py-5 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="email" placeholder=" " type="email" [value]="user?.email || ''" readonly/>
                            <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="email">
                                Email Address
                            </label>
                        </div>

                        <!-- Location -->
                        <div class="relative col-span-1 md:col-span-2">
                            <input class="floating-input block px-4 py-5 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="location" placeholder=" " type="text" [value]="user?.address || ''" readonly/>
                            <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="location">
                                Address
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Divider -->
                <hr class="border-gray-200 dark:border-gray-800 my-2"/>

                <!-- Security Section Card -->
                <div class="bg-white dark:bg-[#1a0b0e] rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <span class="material-symbols-outlined text-primary">lock</span>
                        </div>
                        <h3 class="text-xl font-bold font-serif text-gray-900 dark:text-white">Security</h3>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div class="relative col-span-1">
                            <input class="floating-input block px-4 py-4 w-full text-base text-gray-900 bg-background-light dark:bg-[#2a1418] rounded-xl border-1 border-transparent focus:bg-white dark:focus:bg-[#1a0b0e] border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer h-14 transition-colors" id="current_password" placeholder=" " type="password"/>
                            <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="current_password">
                                Current Password
                            </label>
                        </div>
                        <div class="relative col-span-1">
                            <input class="floating-input block px-4 py-4 w-full text-base text-gray-900 bg-background-light dark:bg-[#2a1418] rounded-xl border-1 border-transparent focus:bg-white dark:focus:bg-[#1a0b0e] border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer h-14 transition-colors" id="new_password" placeholder=" " type="password"/>
                            <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="new_password">
                                New Password
                            </label>
                        </div>
                    </div>
                    <div class="mt-4 flex items-center justify-between">
                        <p class="text-sm text-gray-500 italic">Password must be at least 8 characters</p>
                        <a href="#" class="text-sm font-semibold text-primary hover:underline">Forgot Password?</a>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 mt-4 pb-12">
                   <!-- <button (click)="logout()" class="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold font-body text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors focus:ring-4 focus:ring-gray-100" type="button">
                        Logout
                    </button> -->
                    <button class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-bold font-body text-sm shadow-lg shadow-primary/30 hover:bg-red-600 transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/20" type="submit">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    `
})
export class ClientProfileComponent {
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
        this.router.navigate(['/auth/login']);
    }
}
