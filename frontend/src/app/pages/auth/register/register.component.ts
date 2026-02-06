import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
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
                    <p *ngIf="errorMessage" class="text-red-500 text-sm font-medium mt-2">{{ errorMessage }}</p>
                </div>

                <!-- Form -->
                <form class="flex flex-col gap-9 mt-4" [formGroup]="registerForm" (ngSubmit)="onSubmit()">
                    <!-- Full Name Field -->
                    <div class="relative">
                        <input formControlName="name" class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 py-4 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="fullname" placeholder=" " type="text"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="fullname">
                            Full Name
                        </label>
                    </div>
                    <div *ngIf="registerForm.get('name')?.touched && registerForm.get('name')?.errors?.['required']" class="text-red-500 text-xs ml-4">
                        Name is required
                    </div>

                    <!-- Email Field -->
                    <div class="relative">
                        <input formControlName="email" class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 py-4 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="email" placeholder=" " type="email"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="email">
                            Email Address
                        </label>
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <span class="material-symbols-outlined text-[20px]">mail</span>
                        </div>
                    </div>
                     <div *ngIf="registerForm.get('email')?.touched && registerForm.get('email')?.errors?.['required']" class="text-red-500 text-xs ml-4">
                        Email is required
                    </div>
                    <div *ngIf="registerForm.get('email')?.touched && registerForm.get('email')?.errors?.['email']" class="text-red-500 text-xs ml-4">
                        Please enter a valid email
                    </div>

                    <!-- Phone Field -->
                    <div class="relative">
                        <input formControlName="phone" class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 py-4 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="phone" placeholder=" " type="tel"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="phone">
                            Phone Number
                        </label>
                         <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <span class="material-symbols-outlined text-[20px]">phone</span>
                        </div>
                    </div>
                    <div *ngIf="registerForm.get('phone')?.touched && registerForm.get('phone')?.errors?.['required']" class="text-red-500 text-xs ml-4">
                        Phone number is required
                    </div>

                    <!-- Address Field -->
                    <div class="relative">
                        <input formControlName="address" class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 py-4 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="address" placeholder=" " type="text"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="address">
                            Address
                        </label>
                        <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <span class="material-symbols-outlined text-[20px]">location_on</span>
                        </div>
                    </div>
                    <div *ngIf="registerForm.get('address')?.touched && registerForm.get('address')?.errors?.['required']" class="text-red-500 text-xs ml-4">
                        Address is required
                    </div>


                    <!-- Password Field -->
                    <div class="relative">
                        <input formControlName="password" class="floating-input peer block w-full appearance-none rounded-xl border border-gray-200 bg-transparent px-4 py-4 text-base text-[#1c0d10] dark:text-white focus:border-[#ffc1d0] focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-[#ffc1d0] h-[60px]" id="password" placeholder=" " [type]="showPassword ? 'text' : 'password'"/>
                        <label class="pointer-events-none absolute left-4 top-4 z-10 origin-[0] -translate-y-0 text-sm text-gray-500 duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-[#ffc1d0] dark:text-gray-400" for="password">
                            Create Password
                        </label>
                        <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#ffc1d0] dark:hover:text-white transition-colors" type="button" (click)="togglePassword()">
                            <span class="material-symbols-outlined text-[20px]">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                        </button>
                    </div>
                     <div *ngIf="registerForm.get('password')?.touched && registerForm.get('password')?.errors?.['required']" class="text-red-500 text-xs ml-4">
                        Password is required
                    </div>
                    <div *ngIf="registerForm.get('password')?.touched && registerForm.get('password')?.errors?.['minlength']" class="text-red-500 text-xs ml-4">
                        Password must be at least 6 characters
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
                        <button [disabled]="registerForm.invalid || isLoading" class="flex w-full items-center justify-center rounded-xl bg-[#ffc1d0] h-14 px-8 text-base font-bold text-[#1c0d10] shadow-lg shadow-[#ffc1d0]/20 transition-all hover:bg-[#ffc1d0]/90 hover:shadow-[#ffc1d0]/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
                            <span *ngIf="!isLoading">Create Account</span>
                            <span *ngIf="isLoading">Creating...</span>
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
export class RegisterComponent {
    registerForm: FormGroup;
    isLoading = false;
    errorMessage = '';
    showPassword = false;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        if (this.registerForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';

            this.authService.register(this.registerForm.value).subscribe({
                next: (res) => {
                    this.isLoading = false;
                    // Navigate to home page on success
                    this.router.navigate(['/client/landing']);
                },
                error: (err) => {
                    this.isLoading = false;
                    this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
                }
            });
        } else {
            this.registerForm.markAllAsTouched();
        }
    }
}
