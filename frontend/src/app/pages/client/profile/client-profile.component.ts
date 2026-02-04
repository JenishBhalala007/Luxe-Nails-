import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-client-profile',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex min-h-screen w-full flex-col md:flex-row bg-background-light dark:bg-background-dark font-display text-[#1b0d10] dark:text-gray-100 overflow-x-hidden antialiased">
        <!-- Sidebar Navigation -->
        <aside class="hidden md:flex w-64 lg:w-72 flex-col justify-between bg-white dark:bg-[#1a0b0e] border-r border-gray-100 dark:border-gray-800 h-screen sticky top-0 z-20">
            <div class="p-6 flex flex-col gap-8">
                <!-- Brand -->
                <div class="flex items-center gap-3 px-2">
                    <div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeInaKqfPdXTkqRYDZmjf0U8NrQ6dChSlCm5GMTnFADCIXlX16d9n1ILMKhuAEgq4mxlX-qLJHvYI1G78TW-gm37e-qeDuvwCwenvcZEjNLl9ATG9XzotphTonWzxUsOvDcE-wh0hHdsQj-yqsZ-5CYJfGpyHtvoIy1d67aIOhnTymKqItrQpXl_PB955REzvLreikLWnJisBHrYnIVbRFQyUp5mQ_mIf1AG2H4jrNIHvvIFuSVZ6R24OpwJ7A_Llj4ZInA5re0CMH");'></div>
                    <div class="flex flex-col">
                        <h1 class="font-serif text-xl font-bold text-gray-900 dark:text-white leading-tight">Luxe Nails</h1>
                        <p class="text-rose-gold dark:text-[#ee2b4b] text-xs font-medium tracking-wide uppercase">Client Portal</p>
                    </div>
                </div>
                <!-- Nav Links -->
                <nav class="flex flex-col gap-2">
                    <a routerLink="/client/dashboard" class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">dashboard</span>
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Dashboard</span>
                    </a>
                    <a routerLink="/client/appointments" class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">calendar_month</span>
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Appointments</span>
                    </a>
                    <a routerLink="/client/gallery" class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
                        <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">photo_library</span>
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">Gallery</span>
                    </a>
                    <a routerLink="/client/settings" class="sidebar-link active flex items-center gap-3 px-4 py-3 rounded-xl bg-[#fdf2f4] dark:bg-[#2a1418]">
                        <span class="material-symbols-outlined text-primary">settings</span>
                        <span class="text-sm font-bold text-gray-900 dark:text-white">Settings</span>
                    </a>
                </nav>
            </div>
            <!-- User Mini Profile -->
            <div class="p-6 border-t border-gray-100 dark:border-gray-800">
                <div class="flex items-center gap-3">
                    <div class="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white dark:ring-gray-800 shadow-md" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3EsAoDcLvRkAUf3fdJb9KPXcFMrCLLv7HIEjg-D3HZTRFIUKrtb-6zH3CFHczsZatAaSfwHFZZRDN1MQMWBwPY_6IjFtZLCFqt815URLAeczXkJ4cnL_ee9w_xML1jiCAxBr5jOfsHh8PW6sk5UOPJ7o4GAldkQ01VdUUYRjrTHCuon3THItARs15d-PdnN1uDw8Lk_UQnoo8NxZSiV1VTnU_6S8jv814_eSJZ-vX3RB0Q30-VZR9yZa3K6BXzJ4twMBft01VDa9m");'></div>
                    <div class="flex flex-col overflow-hidden">
                        <p class="text-sm font-bold text-gray-900 dark:text-white truncate">Sophia Anderson</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 truncate">sophia@example.com</p>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 h-screen overflow-y-auto bg-background-light dark:bg-background-dark relative">
            <!-- Mobile Header (Visible only on small screens) -->
            <div class="md:hidden flex items-center justify-between p-4 bg-white dark:bg-[#1a0b0e] border-b border-gray-100 dark:border-gray-800 sticky top-0 z-30">
                <div class="flex items-center gap-2">
                    <div class="bg-center bg-no-repeat bg-cover rounded-full size-8" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuV8rOLgeT4G6bYvKENAEfzbchxyxc4KoCNhK2GMXBvjRZj93gPfe_zsXq6el6_uNi6ksSPBbTDdj_GgkpZQDwFxN_kdu9mn8g_viaFSWVCZD_1duggl3ElEbJRtrpgOJxjqsthI1875xMfU11J52sjjj6XAs68UadzpeWx8q-JUkV72458QNzIztCiHOxoiD5eCb_KQIBZw896-DAIipohw3t2baA8dGKOHxBRAVOG_yrFwuxsKW68GciyCUnmaii52XfpXW2j4h-");'></div>
                    <span class="font-serif font-bold text-gray-900 dark:text-white">Luxe</span>
                </div>
                <button class="p-2 text-gray-600 dark:text-gray-300">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </div>

            <div class="max-w-[1000px] mx-auto px-4 md:px-12 py-8 md:py-12 flex flex-col gap-10">
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
                                <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-cover bg-center border-[6px] border-blush-pink dark:border-[#3f1d24] shadow-xl" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPuUxrcTffJaX9Xy_qvdaa5PyfyWlec-0gZZIA6RjTTss9FuQAQ_pK0UoHcr8kMMI2X1oRl7D-1XPNSSaXsXv5go34hKzhlhuOYB1KYSZXeYH8WAsK9IILDQw-8oCuaITJk_EtGLYI7w2e7LQirsv5YFxNPHU26jjxXi36OrfJ_3pZhBQ-6rxBfcf6qmyHdRdXE6xCUyWj0Q-f1VPbs8hcCg8qv8FoNxK2nYUkdx4qErI0Frdf5QFqxpMUQd7AikitgR_5qT5me5NC");'></div>
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
                        <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Full Name -->
                            <div class="relative col-span-1 md:col-span-2">
                                <input class="floating-input block px-4 pb-2.5 pt-6 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="fullname" placeholder=" " type="text" value="Sophia Anderson"/>
                                <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="fullname">
                                    Full Name
                                </label>
                            </div>

                            <!-- Phone Number -->
                            <div class="relative col-span-1">
                                <input class="floating-input block px-4 pb-2.5 pt-6 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="phone" placeholder=" " type="tel" value="+1 (555) 000-0000"/>
                                <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="phone">
                                    Phone Number
                                </label>
                            </div>

                            <!-- Email Address -->
                            <div class="relative col-span-1">
                                <input class="floating-input block px-4 pb-2.5 pt-6 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="email" placeholder=" " type="email" value="sophia@example.com"/>
                                <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="email">
                                    Email Address
                                </label>
                            </div>

                            <!-- Location -->
                            <div class="relative col-span-1 md:col-span-2">
                                <input class="floating-input block px-4 pb-2.5 pt-6 w-full text-base text-gray-900 bg-white dark:bg-[#1a0b0e] rounded-xl border-1 border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer shadow-sm h-16 transition-colors" id="location" placeholder=" " type="text" value="New York, USA"/>
                                <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="location">
                                    Location
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
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="relative col-span-1">
                                <input class="floating-input block px-4 pb-2.5 pt-6 w-full text-base text-gray-900 bg-background-light dark:bg-[#2a1418] rounded-xl border-1 border-transparent focus:bg-white dark:focus:bg-[#1a0b0e] border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer h-14 transition-colors" id="current_password" placeholder=" " type="password"/>
                                <label class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-body" for="current_password">
                                    Current Password
                                </label>
                            </div>
                            <div class="relative col-span-1">
                                <input class="floating-input block px-4 pb-2.5 pt-6 w-full text-base text-gray-900 bg-background-light dark:bg-[#2a1418] rounded-xl border-1 border-transparent focus:bg-white dark:focus:bg-[#1a0b0e] border-gray-200 dark:border-gray-700 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer h-14 transition-colors" id="new_password" placeholder=" " type="password"/>
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
                        <button (click)="logout()" class="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-bold font-body text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors focus:ring-4 focus:ring-gray-100" type="button">
                            Logout
                        </button>
                        <button class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-white font-bold font-body text-sm shadow-lg shadow-primary/30 hover:bg-red-600 transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/20" type="submit">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </div>
  `
})
export class ClientProfileComponent {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
