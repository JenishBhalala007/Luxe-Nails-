import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-worker-requests',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex h-screen w-full flex-row overflow-hidden bg-background-light dark:bg-background-dark text-[#171212] dark:text-gray-100 transition-colors duration-200 font-display">
        <!-- Sidebar -->
        <!-- Sidebar -->
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
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/dashboard">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">dashboard</span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/schedule">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">calendar_month</span>
                    <span class="text-sm font-medium">Schedule</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-primary text-text-main shadow-sm transition-all duration-300 group" routerLink="/worker/requests">
                    <span class="material-symbols-outlined text-rose-gold group-hover:text-rose-gold transition-colors">inbox</span>
                    <span class="text-sm font-bold">Requests</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/reviews">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">reviews</span>
                    <span class="text-sm font-medium">Reviews</span>
                </a>
            </nav>

            <div class="p-4 border-t border-[#f4e6e9] dark:border-white/10">
                <button class="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 hover:text-rose-gold transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8 md:p-12 lg:px-20 lg:py-16">
            <div class="max-w-[1100px] mx-auto flex flex-col gap-10">
                <!-- Page Heading -->
                <header class="flex flex-col gap-3 animate-fade-in-up">
                    <h2 class="text-4xl md:text-5xl font-black font-serif text-[#171212] dark:text-white tracking-tight leading-tight">New Requests</h2>
                    <p class="text-[#826467] dark:text-gray-400 text-lg font-normal leading-relaxed">
                        You have <span class="font-semibold text-worker-requests-primary">3 pending inquiries</span> waiting for your review.
                    </p>
                </header>

                <!-- Grid of Request Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    <!-- Card 1 -->
                    <div class="group bg-card-light dark:bg-worker-requests-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-transparent hover:border-worker-requests-primary/10 relative flex flex-col items-center text-center gap-6">
                        <!-- New Badge -->
                        <div class="absolute top-6 right-6 bg-worker-requests-accent-orange text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                            New
                        </div>
                        <!-- Avatar -->
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full bg-cover bg-center border-4 border-background-light dark:border-background-dark shadow-sm" data-alt="Portrait of client Sophia Miller smiling" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDi59U989AhNOrXJL1Qdc7vxx0i8HuQPeHypUNega-EyQw58SP51l8j1XaCpfVEx3i0x-7dmqRo7Kebg0KoZoQ4K6tvQHfsVOOWJTfPZcSzymSbIbso7Toqzl45z_34HhrvkFrO5Dz3XaSZUscoDHBcm2UPZFQAjWFSfrxbCm9kiIFBeQqAeSQeMWUhwv16r-BakvnlQH_6UMDCYO0TdGwbR5BykrdLG58QG0ua3LIaCbYVsxX5e8dLmc9TfQqsU9Hm9ujKjNX0Kvqk');">
                            </div>
                            <div class="absolute bottom-0 right-1 w-6 h-6 bg-white dark:bg-worker-requests-card-dark rounded-full flex items-center justify-center shadow-sm">
                                <span class="material-symbols-outlined text-worker-requests-primary text-[16px]">verified</span>
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="flex flex-col gap-2 w-full">
                            <h3 class="text-2xl font-bold font-serif text-gray-900 dark:text-white">Sophia Miller</h3>
                            <p class="text-[#826467] dark:text-gray-400 font-medium">Gel Manicure &amp; Custom Art</p>
                        </div>
                        <!-- Chips -->
                        <div class="flex flex-wrap justify-center gap-3 w-full">
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">calendar_month</span>
                                Feb 14
                            </div>
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">schedule</span>
                                10:00 AM
                            </div>
                        </div>
                        <!-- Divider -->
                        <div class="w-full h-px bg-gray-100 dark:bg-white/10 my-1"></div>
                        <!-- Actions -->
                        <div class="flex gap-3 w-full mt-auto">
                            <button class="flex-1 h-12 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                Decline
                            </button>
                            <button class="flex-1 h-12 rounded-xl bg-worker-requests-primary hover:bg-[#a05a60] text-white font-medium shadow-md shadow-worker-requests-primary/20 transition-all active:scale-[0.98]">
                                Accept
                            </button>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="group bg-card-light dark:bg-worker-requests-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-transparent hover:border-worker-requests-primary/10 relative flex flex-col items-center text-center gap-6">
                        <!-- New Badge -->
                        <div class="absolute top-6 right-6 bg-worker-requests-accent-orange text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                            New
                        </div>
                        <!-- Avatar -->
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full bg-cover bg-center border-4 border-background-light dark:border-background-dark shadow-sm" data-alt="Portrait of client Emma Watson looking elegant" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgogvEeE2hR2ITt8dlXPF3z4gSaB6eOKUCYp4kqsbqO5rrEwtbIKP_3P0vJkpMQstVL7-C3w-eGeDsTqfWSUyD9Owj2s-9pKPEtPpG5H6cWTuMDNTQub8HPJlNoDK7BnuU0cB8lNim52W4dyzAiyMv77Pr0ACzz2WnbTJXs23JDc7Ky2bmpVk6llDC9JE_8DEKLu_pIwcDdlUBC_yPv4gnEniSkfdpFy8RWLFrPVItaPIt0NfXWbB3ClLrGYsyjKijJsmRFCV8ObwY');">
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="flex flex-col gap-2 w-full">
                            <h3 class="text-2xl font-bold font-serif text-gray-900 dark:text-white">Emma Watson</h3>
                            <p class="text-[#826467] dark:text-gray-400 font-medium">Acrylic Full Set &amp; Removal</p>
                        </div>
                        <!-- Chips -->
                        <div class="flex flex-wrap justify-center gap-3 w-full">
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">calendar_month</span>
                                Feb 15
                            </div>
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">schedule</span>
                                2:30 PM
                            </div>
                        </div>
                        <!-- Divider -->
                        <div class="w-full h-px bg-gray-100 dark:bg-white/10 my-1"></div>
                        <!-- Actions -->
                        <div class="flex gap-3 w-full mt-auto">
                            <button class="flex-1 h-12 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                Decline
                            </button>
                            <button class="flex-1 h-12 rounded-xl bg-worker-requests-primary hover:bg-[#a05a60] text-white font-medium shadow-md shadow-worker-requests-primary/20 transition-all active:scale-[0.98]">
                                Accept
                            </button>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="group bg-card-light dark:bg-worker-requests-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-transparent hover:border-worker-requests-primary/10 relative flex flex-col items-center text-center gap-6 opacity-90">
                        <!-- Avatar -->
                        <div class="relative">
                            <div class="w-24 h-24 rounded-full bg-cover bg-center border-4 border-background-light dark:border-background-dark shadow-sm grayscale-[0.3]" data-alt="Portrait of client Olivia Brown with short hair" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYg6yh_COsvqmWCViLDRn7QRMRB81d6OkTf_be-ix1SmRNpwRuhLdu5wcP8LTWisILq90zGV0WXbG1zVvU3m4goiuA1KvAY1SXQdrB07Us_uh-3YFbKHLjvUKr2B7GfCo8QBva5nxfxHBtpJf-fJwg5lc_ONZNaljkCvtwtJZ2g8znT6vpPvsBbfYkkvHnVssYhX42gYsLWxmwZm_MTae3DR7WSKWwn3L3gIhCuvXkI92KJyTjRY8tUMi4Uv9JJfGnrlhoBxRlP8MB');">
                            </div>
                        </div>
                        <!-- Info -->
                        <div class="flex flex-col gap-2 w-full">
                            <h3 class="text-2xl font-bold font-serif text-gray-900 dark:text-white">Olivia Brown</h3>
                            <p class="text-[#826467] dark:text-gray-400 font-medium">Classic Pedicure</p>
                        </div>
                        <!-- Chips -->
                        <div class="flex flex-wrap justify-center gap-3 w-full">
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">calendar_month</span>
                                Feb 16
                            </div>
                            <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5F5F5] dark:bg-white/5 text-gray-600 dark:text-gray-300 text-sm">
                                <span class="material-symbols-outlined text-[16px]">schedule</span>
                                11:15 AM
                            </div>
                        </div>
                        <!-- Divider -->
                        <div class="w-full h-px bg-gray-100 dark:bg-white/10 my-1"></div>
                        <!-- Actions -->
                        <div class="flex gap-3 w-full mt-auto">
                            <button class="flex-1 h-12 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                Decline
                            </button>
                            <button class="flex-1 h-12 rounded-xl bg-worker-requests-primary hover:bg-[#a05a60] text-white font-medium shadow-md shadow-worker-requests-primary/20 transition-all active:scale-[0.98]">
                                Accept
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Load More / Footer Area -->
                <div class="mt-8 flex justify-center pb-8">
                    <button class="text-gray-400 hover:text-worker-requests-primary transition-colors text-sm font-medium flex items-center gap-1">
                        View past requests <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                </div>
            </div>
        </main>
    </div>
    `
})
export class WorkerRequestsComponent { }
