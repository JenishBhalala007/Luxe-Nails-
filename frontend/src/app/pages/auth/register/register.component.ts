import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="relative flex h-screen min-h-[800px] w-full flex-col lg:flex-row overflow-hidden bg-background-light dark:bg-background-dark font-display antialiased">
        <!-- Left Side: Artistic Image -->
        <div class="relative w-full h-1/3 lg:h-full lg:w-1/2 overflow-hidden bg-gray-100 group">
            <!-- Background Image -->
            <div class="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOtB4tOFQiIBDDbgAqTUbzT0eFkvs10dkWHmrIU0FVFgLZ7XEl1uDRRyuFbECmX3TbaHkztqLjkeS1JvjYpmNwVsArLSDAAHTSk0I4ZuU8j4Ac07pBcRURH1F9_8ezuDrxw7a4DHFyTH6LMnI4aIt-vUwS-AynqSUG3fK1QlIvfcKy7mGeO-_fo8w-2ppHlYcICNrYQb9z_Mrjru2ujaNwrvefv4nKN3zjP6nGbQ7qQu-vdoeXdw7XAkwVlX8gc74NbFTuUpuhqCzW');">
            </div>
            <!-- Subtle Overlay -->
            <div class="absolute inset-0 bg-[#ffc1d0]/10 dark:bg-black/40 mix-blend-overlay"></div>
            <!-- Optional: Quote or Brand element overlaid on image -->
            <div class="absolute bottom-10 left-10 hidden lg:block">
                <p class="text-white/90 font-serif text-3xl italic leading-tight max-w-md drop-shadow-md">
                    "Beauty is the illumination of your soul."
                </p>
            </div>
        </div>

        <!-- Right Side: Registration Form -->
        <div class="flex w-full flex-1 flex-col justify-center items-center bg-white dark:bg-background-dark px-4 py-8 sm:px-10 lg:w-1/2 lg:px-20 xl:px-32 overflow-y-auto">
            <div class="w-full max-w-[480px] flex flex-col gap-8">
                <!-- Header -->
                <div class="text-center lg:text-left space-y-2">
                    <h1 class="text-[#1c0d10] dark:text-white font-serif text-4xl lg:text-5xl font-semibold tracking-tight">
                        Create Your Account
                    </h1>
                    <p class="text-gray-500 dark:text-gray-300 text-base font-normal">
                        Join our exclusive beauty community today.
                    </p>
                </div>

                <!-- Form -->
                <form class="flex flex-col gap-5 mt-4" (submit)="$event.preventDefault()">
                    <!-- Full Name Field -->
                    <div class="relative">
                        <input class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 pb-3 pt-6 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="fullname" placeholder=" " type="text"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-base text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="fullname">
                            Full Name
                        </label>
                    </div>

                    <!-- Email Field -->
                    <div class="relative">
                        <input class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 pb-3 pt-6 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="email" placeholder=" " type="email"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-base text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="email">
                            Email Address
                        </label>
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <span class="material-symbols-outlined text-[20px]">mail</span>
                        </div>
                    </div>

                    <!-- Password Field -->
                    <div class="relative">
                        <input class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 pb-3 pt-6 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="password" placeholder=" " type="password"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-base text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="password">
                            Create Password
                        </label>
                        <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ffc1d0] dark:hover:text-white transition-colors" type="button">
                            <span class="material-symbols-outlined text-[20px]">visibility</span>
                        </button>
                    </div>

                    <!-- Terms Checkbox -->
                    <div class="flex items-center gap-3 py-2">
                        <div class="flex h-5 items-center">
                            <input class="h-4 w-4 rounded border-gray-300 text-[#ffc1d0] focus:ring-[#ffc1d0] dark:border-gray-600 dark:bg-gray-700" id="terms" type="checkbox"/>
                        </div>
                        <div class="text-sm">
                            <label class="text-gray-500 dark:text-gray-300" for="terms">I agree to the <a href="#" class="font-medium text-[#ffc1d0] hover:underline">Terms of Service</a></label>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col gap-4">
                        <button class="flex w-full items-center justify-center rounded-xl bg-[#ffc1d0] h-14 px-8 text-base font-bold text-[#1c0d10] shadow-lg shadow-[#ffc1d0]/20 transition-all hover:bg-[#ffc1d0]/90 hover:shadow-[#ffc1d0]/30 active:scale-[0.98]" type="submit">
                            Create Account
                        </button>
                        <div class="relative flex items-center py-2">
                            <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                            <span class="flex-shrink-0 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Or continue with</span>
                            <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <button class="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white h-14 px-8 text-base font-semibold text-[#1c0d10] shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-800" type="button">
                            <!-- Google SVG Icon -->
                            <svg aria-hidden="true" class="h-5 w-5" viewbox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            Sign up with Google
                        </button>
                    </div>
                </form>

                <!-- Footer -->
                <div class="text-center">
                    <p class="text-gray-500 dark:text-gray-400 text-sm">
                        Already have an account? 
                        <a routerLink="/auth/login" class="font-semibold text-[#1c0d10] hover:text-[#ffc1d0] transition-colors dark:text-white dark:hover:text-[#ffc1d0]">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  `
})
export class RegisterComponent { }
