import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-client-appointments',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex min-h-screen w-full flex-row overflow-hidden bg-appointments-bg-light dark:bg-background-dark font-display text-appointments-text-main antialiased selection:bg-appointments-primary/20 selection:text-appointments-primary transition-colors duration-300">
        <!-- Sidebar (25% Width) -->
        <aside class="hidden w-1/4 min-w-[280px] max-w-[320px] flex-col justify-between border-r border-[#eaddde] bg-appointments-card-light dark:bg-appointments-card-dark dark:border-[#3d2b30] p-6 lg:flex sticky top-0 h-screen z-10">
            <div class="flex flex-col gap-8">
                <!-- Branding -->
                <div class="flex items-center gap-3 px-2">
                    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-appointments-primary/10 text-appointments-primary">
                        <span class="material-symbols-outlined">spa</span>
                    </div>
                    <span class="font-serif text-2xl font-bold tracking-tight text-appointments-text-main dark:text-white">Lux Nails</span>
                </div>
                <!-- User Profile Summary -->
                <div class="flex items-center gap-3 rounded-2xl bg-appointments-bg-light/50 dark:bg-white/5 p-3 border border-transparent dark:border-white/10">
                    <div class="h-12 w-12 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTmj4QH2flgy2oK80YvBmdGisdvAGg3KKn3XuiKP5kwhl2Q9tFZc6FqrYZHKWoaeilBroG6Is9Hqt9d6O0DQiAIXDyVgFhkr1B5XlFi_2tOCF2sqqHt1eI8GueKQQWRFlEyq6w6cHqi1uMLY65rleaqU6ciXUP5LggT2tefBQj53jyuemwT9CQuwSuK3oNnO3PHJmHCkcdx2trz26zxgwKLe5lu9jMhHD4BJNAKMUjbpoXwAMmGdQgKzottGDC8KqXNjp80VPYwF2_');"></div>
                    <div class="flex flex-col">
                        <span class="text-sm font-semibold text-appointments-text-main dark:text-white">Julia Roberts</span>
                        <span class="text-xs text-appointments-text-muted">Premium Member</span>
                    </div>
                </div>
                <!-- Navigation -->
                <nav class="flex flex-col gap-2">
                    <a routerLink="/client/dashboard" class="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-appointments-text-muted hover:bg-appointments-bg-light hover:text-appointments-text-main dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white transition-all duration-200">
                        <span class="material-symbols-outlined text-[24px]">dashboard</span>
                        Dashboard
                    </a>
                    <a routerLink="/client/appointments" class="group flex items-center gap-4 rounded-xl bg-appointments-primary/10 px-4 py-3 text-sm font-medium text-appointments-primary dark:bg-appointments-primary/20 dark:text-appointments-primary transition-all duration-200">
                        <span class="material-symbols-outlined icon-filled text-[24px]">calendar_month</span>
                        My Appointments
                    </a>
                    <a href="#" class="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-appointments-text-muted hover:bg-appointments-bg-light hover:text-appointments-text-main dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white transition-all duration-200">
                        <span class="material-symbols-outlined text-[24px]">favorite</span>
                        Favorites
                    </a>
                    <a routerLink="/client/gallery" class="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-appointments-text-muted hover:bg-appointments-bg-light hover:text-appointments-text-main dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white transition-all duration-200">
                        <span class="material-symbols-outlined text-[24px]">photo_library</span>
                        Gallery
                    </a>
                    <a href="#" class="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium text-appointments-text-muted hover:bg-appointments-bg-light hover:text-appointments-text-main dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white transition-all duration-200">
                        <span class="material-symbols-outlined text-[24px]">settings</span>
                        Settings
                    </a>
                </nav>
            </div>
            <div class="flex flex-col gap-4">
                <!-- CTA -->
                <button routerLink="/client/booking/services" class="flex w-full items-center justify-center gap-2 rounded-xl bg-appointments-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-appointments-primary/30 transition hover:bg-appointments-primary/90 hover:shadow-appointments-primary/40 focus:outline-none focus:ring-2 focus:ring-appointments-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark cursor-pointer">
                    <span class="material-symbols-outlined text-[20px]">add</span>
                    Book New
                </button>
            </div>
        </aside>

        <!-- Main Content (75% Width) -->
        <main class="flex-1 overflow-y-auto px-6 py-10 sm:px-12 md:px-16 lg:px-24">
            <div class="mx-auto flex max-w-[900px] flex-col gap-8">
                <!-- Page Heading -->
                <div class="flex flex-col gap-2">
                    <h1 class="font-serif text-4xl font-bold tracking-tight text-appointments-text-main dark:text-white">My Appointments</h1>
                    <p class="text-appointments-text-muted dark:text-gray-400">Manage your upcoming sessions and view history</p>
                </div>
                
                <!-- Tabs -->
                <div class="sticky top-0 z-20 -mx-6 bg-appointments-bg-light/95 px-6 pb-2 pt-2 backdrop-blur-sm dark:bg-background-dark/95 sm:-mx-12 sm:px-12 md:-mx-16 md:px-16 lg:-mx-24 lg:px-24">
                    <div class="flex w-full border-b border-[#e7cfd5] dark:border-white/10">
                        <button class="relative flex flex-1 items-center justify-center pb-4 pt-2 text-sm font-semibold text-appointments-text-main dark:text-white sm:flex-none sm:px-8">
                            Upcoming
                            <span class="absolute bottom-0 h-[3px] w-full rounded-t-full bg-appointments-primary shadow-[0_-2px_6px_rgba(238,43,88,0.4)]"></span>
                        </button>
                        <button class="relative flex flex-1 items-center justify-center pb-4 pt-2 text-sm font-medium text-appointments-text-muted hover:text-appointments-text-main dark:text-gray-500 dark:hover:text-white sm:flex-none sm:px-8 transition-colors">
                            Past
                            <span class="absolute bottom-0 h-[3px] w-full scale-x-0 rounded-t-full bg-transparent transition-transform group-hover:bg-gray-300"></span>
                        </button>
                    </div>
                </div>

                <!-- Content List -->
                <div class="flex flex-col gap-6 pb-12">
                    <!-- Card 1: Confirmed -->
                    <article class="group flex flex-col overflow-hidden rounded-2xl bg-appointments-card-light shadow-lg hover:shadow-xl transition-all dark:bg-appointments-card-dark md:flex-row">
                        <!-- Date Block -->
                        <div class="flex w-full flex-row items-center justify-between bg-appointments-primary/5 p-6 dark:bg-white/5 md:w-32 md:flex-col md:justify-center md:border-r md:border-appointments-primary/10">
                            <span class="font-serif text-4xl font-bold text-appointments-text-main dark:text-white">12</span>
                            <span class="font-serif text-lg font-medium text-appointments-text-muted dark:text-gray-400">FEB</span>
                        </div>
                        <!-- Info Block -->
                        <div class="flex flex-1 flex-col justify-center gap-1 p-6 md:px-8">
                            <div class="mb-2 flex items-center gap-2">
                                <span class="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                <span class="text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">Confirmed</span>
                            </div>
                            <h3 class="text-xl font-bold text-appointments-text-main dark:text-white">Acrylic Extensions & Nail Art</h3>
                            <div class="mt-1 flex flex-col gap-1 text-sm text-appointments-text-muted dark:text-gray-400 sm:flex-row sm:items-center sm:gap-4">
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">person</span>
                                    <span>Artist: <span class="font-medium text-appointments-text-main dark:text-white">Sarah Jenkins</span></span>
                                </div>
                                <div class="hidden h-1 w-1 rounded-full bg-gray-300 sm:block"></div>
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">schedule</span>
                                    <span>2:00 PM - 3:30 PM</span>
                                </div>
                            </div>
                        </div>
                        <!-- Action Block -->
                        <div class="flex items-center justify-end gap-4 border-t border-gray-100 bg-gray-50/50 p-4 px-6 dark:border-white/5 dark:bg-white/5 md:border-l md:border-t-0 md:bg-transparent">
                            <a href="#" class="text-sm font-medium text-appointments-primary decoration-appointments-primary/30 underline-offset-4 hover:underline">Cancel</a>
                            <button class="flex h-10 w-10 items-center justify-center rounded-xl bg-appointments-bg-light text-appointments-text-main transition hover:bg-white hover:shadow-md dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                                <span class="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                        </div>
                    </article>

                    <!-- Card 2: Pending -->
                    <article class="group flex flex-col overflow-hidden rounded-2xl bg-appointments-card-light shadow-lg hover:shadow-xl transition-all dark:bg-appointments-card-dark md:flex-row">
                        <!-- Date Block -->
                        <div class="flex w-full flex-row items-center justify-between bg-gray-50 p-6 dark:bg-white/5 md:w-32 md:flex-col md:justify-center md:border-r md:border-gray-100 dark:md:border-white/10">
                            <span class="font-serif text-4xl font-bold text-appointments-text-main dark:text-white">28</span>
                            <span class="font-serif text-lg font-medium text-appointments-text-muted dark:text-gray-400">FEB</span>
                        </div>
                        <!-- Info Block -->
                        <div class="flex flex-1 flex-col justify-center gap-1 p-6 md:px-8">
                            <div class="mb-2 flex items-center gap-2">
                                <span class="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></span>
                                <span class="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Pending Approval</span>
                            </div>
                            <h3 class="text-xl font-bold text-appointments-text-main dark:text-white">Gel Manicure & Removal</h3>
                            <div class="mt-1 flex flex-col gap-1 text-sm text-appointments-text-muted dark:text-gray-400 sm:flex-row sm:items-center sm:gap-4">
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">person</span>
                                    <span>Artist: <span class="italic text-appointments-text-muted/70">Pending Assignment</span></span>
                                </div>
                                <div class="hidden h-1 w-1 rounded-full bg-gray-300 sm:block"></div>
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">schedule</span>
                                    <span>10:00 AM - 11:00 AM</span>
                                </div>
                            </div>
                        </div>
                        <!-- Action Block -->
                        <div class="flex items-center justify-end gap-4 border-t border-gray-100 bg-gray-50/50 p-4 px-6 dark:border-white/5 dark:bg-white/5 md:border-l md:border-t-0 md:bg-transparent">
                            <a href="#" class="text-sm font-medium text-appointments-primary decoration-appointments-primary/30 underline-offset-4 hover:underline">Cancel</a>
                            <button class="flex h-10 w-10 items-center justify-center rounded-xl bg-appointments-bg-light text-appointments-text-main transition hover:bg-white hover:shadow-md dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                                <span class="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                        </div>
                    </article>

                    <!-- Card 3: Upcoming -->
                    <article class="group flex flex-col overflow-hidden rounded-2xl bg-appointments-card-light shadow-lg hover:shadow-xl transition-all dark:bg-appointments-card-dark md:flex-row opacity-80 hover:opacity-100">
                        <!-- Date Block -->
                        <div class="flex w-full flex-row items-center justify-between bg-appointments-primary/5 p-6 dark:bg-white/5 md:w-32 md:flex-col md:justify-center md:border-r md:border-appointments-primary/10">
                            <span class="font-serif text-4xl font-bold text-appointments-text-main dark:text-white">15</span>
                            <span class="font-serif text-lg font-medium text-appointments-text-muted dark:text-gray-400">MAR</span>
                        </div>
                        <!-- Info Block -->
                        <div class="flex flex-1 flex-col justify-center gap-1 p-6 md:px-8">
                            <div class="mb-2 flex items-center gap-2">
                                <span class="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                                <span class="text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">Confirmed</span>
                            </div>
                            <h3 class="text-xl font-bold text-appointments-text-main dark:text-white">Pedicure Spa Deluxe</h3>
                            <div class="mt-1 flex flex-col gap-1 text-sm text-appointments-text-muted dark:text-gray-400 sm:flex-row sm:items-center sm:gap-4">
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">person</span>
                                    <span>Artist: <span class="font-medium text-appointments-text-main dark:text-white">Emily Rose</span></span>
                                </div>
                                <div class="hidden h-1 w-1 rounded-full bg-gray-300 sm:block"></div>
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[18px]">schedule</span>
                                    <span>4:00 PM - 5:00 PM</span>
                                </div>
                            </div>
                        </div>
                        <!-- Action Block -->
                        <div class="flex items-center justify-end gap-4 border-t border-gray-100 bg-gray-50/50 p-4 px-6 dark:border-white/5 dark:bg-white/5 md:border-l md:border-t-0 md:bg-transparent">
                            <a href="#" class="text-sm font-medium text-appointments-primary decoration-appointments-primary/30 underline-offset-4 hover:underline">Cancel</a>
                            <button class="flex h-10 w-10 items-center justify-center rounded-xl bg-appointments-bg-light text-appointments-text-main transition hover:bg-white hover:shadow-md dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                                <span class="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                        </div>
                    </article>

                    <!-- Add New / Empty State Hint -->
                    <div class="mt-4 flex flex-col items-center justify-center gap-4 py-8 text-center">
                        <div class="rounded-full bg-white p-4 shadow-sm dark:bg-white/5">
                            <span class="material-symbols-outlined text-[32px] text-gray-300 dark:text-gray-600">event_available</span>
                        </div>
                        <p class="text-sm text-appointments-text-muted dark:text-gray-500">Looking for more? <a routerLink="/client/booking/services" class="font-semibold text-appointments-primary hover:underline">Book a new appointment</a></p>
                    </div>
                </div>
            </div>
        </main>
    </div>
  `
})
export class ClientAppointmentsComponent { }
