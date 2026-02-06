import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    template: `
    <div class="flex min-h-screen w-full flex-row bg-background-light dark:bg-background-dark font-display antialiased overflow-x-hidden">
        <!-- Left Section: Image (Hidden on mobile, 50% width on large screens) -->
        <div class="hidden lg:flex w-1/2 relative overflow-hidden bg-white">
            <div class="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQXRnrJyYLV4OB8ixsmwZlPJ-Uk_qoEYHa4buqaDX4DHK9rDLMG1mwedP0FGtKgrASJ9UDWRxAubeuyeJKDDECaqzLx3TzMwih1BtxeEY8bw-R5V8E5xbfHJYeRjxWgDDxFlkMZN2fetnGdfmJ11KfmgUhkysPbbqPGK7UpE3eEr31UCB34A0Pq5zxIWF8iNxZcjWoO68R7883tscjcFIrhs6U3YxM22Ryez390blJ84VCN7kLjwoKBwGD_WFI9GWhOYEqgW2B82GL");'>
                <div class="absolute inset-0 bg-[#ffc1d0]/20 mix-blend-overlay"></div> <!-- Subtle pink tint overlay -->
            </div>
            <div class="absolute bottom-10 left-10 p-6 backdrop-blur-md bg-white/10 rounded-xl border border-white/20 text-white max-w-sm shadow-xl">
                <p class="font-serif text-2xl italic">"Elegance is the only beauty that never fades."</p>
            </div>
        </div>

        <!-- Right Section: Login Form -->
        <div class="flex w-full lg:w-1/2 flex-col justify-center items-center p-6 sm:p-12 lg:p-24 bg-white dark:bg-background-dark relative">
            <div class="w-full max-w-[420px] flex flex-col gap-8 animate-fade-in-up">
                <!-- Header -->
                <div class="flex flex-col gap-2 text-center lg:text-left">
                    <span class="material-symbols-outlined text-4xl text-[#ffc1d0] mb-2">spa</span>
                    <h1 class="text-[#1c0d10] dark:text-white text-4xl lg:text-5xl font-serif font-bold tracking-tight">Welcome Back</h1>
                    <p class="text-gray-500 dark:text-gray-400 text-base font-medium">Please enter your details to sign in to your sanctuary.</p>
                </div>

                <!-- Form -->
                <form class="flex flex-col gap-5" (ngSubmit)="login()">
                    <!-- Email Field -->
                    <div class="relative group">
                        <input [(ngModel)]="email" name="email" class="floating-input peer block w-full rounded-lg border border-gray-200 bg-white dark:bg-gray-800/50 px-4 pt-6 pb-2 text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:ring-1 focus:ring-[#ffc1d0] focus:outline-none placeholder-transparent h-14 shadow-sm transition-all" id="email" placeholder="name@example.com" type="email" required/>
                        <label class="floating-label absolute left-4 top-4 z-10 origin-[0] -translate-y-0 scale-100 text-gray-400 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-85 pointer-events-none" for="email">
                            Email Address
                        </label>
                    </div>

                    <!-- Password Field -->
                    <div class="relative group">
                        <input [(ngModel)]="password" name="password" class="floating-input peer block w-full rounded-lg border border-gray-200 bg-white dark:bg-gray-800/50 px-4 pt-6 pb-2 text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:ring-1 focus:ring-[#ffc1d0] focus:outline-none placeholder-transparent h-14 shadow-sm transition-all" id="password" placeholder="Password" type="password" required/>
                        <label class="floating-label absolute left-4 top-4 z-10 origin-[0] -translate-y-0 scale-100 text-gray-400 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-85 pointer-events-none" for="password">
                            Password
                        </label>
                        <button class="absolute right-4 top-3.5 text-gray-400 hover:text-[#ffc1d0] transition-colors" type="button">
                            <span class="material-symbols-outlined text-xl">visibility_off</span>
                        </button>
                    </div>

                    <!-- Forgot Password Link -->
                    <div class="flex justify-end">
                        <a href="#" class="text-sm font-medium text-gray-500 hover:text-[#ffc1d0] transition-colors">Forgot Password?</a>
                    </div>

                    <!-- Sign In Button -->
                    <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-[#ffc1d0] h-12 px-6 text-[#1c0d10] text-base font-bold shadow-soft hover:bg-[#ffc1d0]/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                        Sign In
                    </button>

                    <!-- Divider -->
                    <div class="relative flex py-2 items-center">
                        <div class="flex-grow border-t border-gray-200"></div>
                        <span class="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-widest">Or</span>
                        <div class="flex-grow border-t border-gray-200"></div>
                    </div>

                    <!-- Google Sign In Button -->
                    <button type="button" class="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white dark:bg-transparent h-12 px-6 text-[#1c0d10] dark:text-white text-base font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group">
                        <svg class="h-5 w-5" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                            <path d="M12.24 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path>
                            <path d="M5.50253 14.3003C5.00236 12.8199 5.00236 11.1799 5.50253 9.69951V6.60861H1.5166C-0.18551 10.0056 -0.18551 13.9945 1.5166 17.3915L5.50253 14.3003Z" fill="#FBBC05"></path>
                            <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.60861L5.50253 9.69951C6.45064 6.86154 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path>
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                </form>

                <!-- Footer -->
                <div class="text-center mt-4">
                    <p class="text-gray-500 text-sm">Don't have an account? <a routerLink="/auth/register" class="font-bold text-[#1c0d10] dark:text-white hover:text-[#ffc1d0] underline decoration-2 decoration-transparent hover:decoration-[#ffc1d0] underline-offset-4 transition-all cursor-pointer">Sign up</a></p>
                </div>
            </div>
        </div>
    </div>
  `
})
export class LoginComponent {
    email = '';
    password = '';

    constructor(private authService: AuthService, private router: Router) { }

    login() {
        if (this.email && this.password) {
            this.authService.login({ email: this.email, password: this.password }).subscribe({
                next: (res) => {
                    console.log('Login successful', res);
                    // Check user role and redirect accordingly
                    const role = res.role;
                    if (role === 'admin') {
                        this.router.navigate(['/admin/dashboard']);
                    } else if (role === 'worker') {
                        this.router.navigate(['/worker/dashboard']);
                    } else {
                        // Default to home page for clients
                        this.router.navigate(['/client/landing']);
                        // Or if you prefer the home page for clients: 
                        // this.router.navigate(['/client/landing']);
                    }
                },
                error: (err) => {
                    console.error('Login failed', err);
                    // Handle error (e.g., show message)
                    alert('Login failed. Please check your credentials.');
                }
            });
        }
    }
}
