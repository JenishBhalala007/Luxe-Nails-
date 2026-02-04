import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-time-selection',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex-1 w-full bg-booking-bg-light dark:bg-booking-bg-dark">
        <!-- Main Content Layout -->
        <div class="w-full max-w-[1200px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-12">
            <!-- Left Column: Calendar & Time -->
            <main class="flex-1 flex flex-col gap-10">
                <!-- Stepper -->
                <div class="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
                    <div class="flex w-full items-center justify-center gap-2 md:w-auto">
                        <div class="flex items-center gap-2">
                            <div class="flex size-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <span class="material-symbols-outlined text-lg">check</span>
                            </div>
                            <span class="text-sm font-semibold text-[#1b0d10] dark:text-gray-200">Service</span>
                        </div>
                        <div class="h-px w-12 bg-gray-200 dark:bg-white/10"></div>
                        <div class="flex items-center gap-2">
                            <div class="flex size-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <span class="material-symbols-outlined text-lg">check</span>
                            </div>
                            <span class="text-sm font-semibold text-[#1b0d10] dark:text-gray-200">Artist</span>
                        </div>
                        <div class="h-px w-12 bg-gray-200 dark:bg-white/10"></div>
                        <div class="flex items-center gap-2">
                            <div class="flex size-8 items-center justify-center rounded-full bg-booking-step3-primary text-white shadow-lg shadow-booking-step3-primary/30">
                                <span class="text-sm font-bold">3</span>
                            </div>
                            <span class="text-sm font-bold text-booking-step3-primary">Time</span>
                        </div>
                        <div class="h-px w-12 bg-gray-200 dark:bg-white/10"></div>
                        <div class="flex items-center gap-2 opacity-50">
                            <div class="flex size-8 items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-transparent text-gray-400">
                                <span class="text-sm font-bold">4</span>
                            </div>
                            <span class="text-sm font-medium text-[#1b0d10] dark:text-gray-400">Details</span>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="flex flex-col gap-10">
                    <!-- Heading -->
                    <div class="flex flex-col gap-2">
                        <h1 class="text-3xl font-extrabold tracking-tight text-[#1b0d10] dark:text-gray-100 sm:text-4xl">Schedule Your Appointment</h1>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Choose a date and time for your Gel Manicure with Priya Patel.</p>
                    </div>

                    <!-- Calendar Widget -->
                    <div class="overflow-hidden rounded-xl border border-[#f3e7e9] dark:border-white/10 bg-white dark:bg-[#2d151b] shadow-sm">
                        <div class="flex items-center justify-between border-b border-[#f3e7e9] dark:border-white/10 p-6">
                            <span class="text-lg font-bold text-[#1b0d10] dark:text-gray-100">February 2024</span>
                            <div class="flex gap-2">
                                <button class="flex size-9 items-center justify-center rounded-full border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-[#1b0d10] dark:text-gray-200 transition-colors">
                                    <span class="material-symbols-outlined text-lg">chevron_left</span>
                                </button>
                                <button class="flex size-9 items-center justify-center rounded-full border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 text-[#1b0d10] dark:text-gray-200 transition-colors">
                                    <span class="material-symbols-outlined text-lg">chevron_right</span>
                                </button>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="grid grid-cols-7 mb-4">
                                <span class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">Sun</span>
                                <span class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">Mon</span>
                                <span class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">Tue</span>
                                <span class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">Wed</span>
                                <span class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">Thu</span>
                                <span class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">Fri</span>
                                <span class="text-center text-xs font-bold uppercase tracking-wider text-gray-400">Sat</span>
                            </div>
                            <div class="grid grid-cols-7 gap-y-4 gap-x-2">
                                <!-- Empty cells -->
                                <div></div><div></div><div></div><div></div>
                                <!-- Days -->
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 disabled:opacity-30">1</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">2</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">3</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">4</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">5</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">6</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">7</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">8</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">9</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">10</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">11</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">12</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">13</button>
                                <!-- Selected Day -->
                                <button class="relative flex h-10 w-full items-center justify-center rounded-full bg-booking-step3-primary text-sm font-bold text-white shadow-md shadow-booking-step3-primary/20 hover:bg-booking-step3-primary/90">
                                    14
                                </button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">15</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">16</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">17</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">18</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">19</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">20</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">21</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">22</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">23</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">24</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">25</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">26</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">27</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">28</button>
                                <button class="flex h-10 w-full items-center justify-center rounded-full text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5">29</button>
                            </div>
                        </div>
                    </div>

                    <!-- Time Slots -->
                    <div class="flex flex-col gap-4">
                        <h3 class="text-xl font-bold text-[#1b0d10] dark:text-gray-100">Available Slots for February 14</h3>
                        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                            <!-- Disabled -->
                            <button class="flex h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-transparent bg-gray-100 dark:bg-white/5 px-4 text-sm font-medium text-gray-400" disabled>
                                09:00 AM
                            </button>
                            <!-- Available -->
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                09:30 AM
                            </button>
                            <!-- Selected -->
                            <button class="flex h-12 w-full items-center justify-center rounded-full bg-booking-step3-primary px-4 text-sm font-bold text-white shadow-lg shadow-booking-step3-primary/25 ring-2 ring-booking-step3-primary ring-offset-2 dark:ring-offset-[#230f14]">
                                10:00 AM
                            </button>
                            <!-- Available -->
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                10:30 AM
                            </button>
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                11:00 AM
                            </button>
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                11:30 AM
                            </button>
                            <button class="flex h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-transparent bg-gray-100 dark:bg-white/5 px-4 text-sm font-medium text-gray-400" disabled>
                                12:00 PM
                            </button>
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                12:30 PM
                            </button>
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                01:00 PM
                            </button>
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                01:30 PM
                            </button>
                            <button class="flex h-12 w-full cursor-not-allowed items-center justify-center rounded-full border border-transparent bg-gray-100 dark:bg-white/5 px-4 text-sm font-medium text-gray-400" disabled>
                                02:00 PM
                            </button>
                            <button class="group flex h-12 w-full items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2d151b] px-4 text-sm font-medium text-[#1b0d10] dark:text-gray-200 transition-all hover:border-booking-step3-primary hover:text-booking-step3-primary">
                                02:30 PM
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            
            <!-- Right Column: Sidebar -->
            <aside class="lg:col-span-4 lg:w-[350px]">
                <div class="sticky top-28 backdrop-blur-md bg-booking-beige-lux/40 dark:bg-[#2d151b]/40 rounded-2xl p-6 shadow-xl border border-white/50 dark:border-white/10">
                    <h2 class="mb-6 text-xl font-bold text-[#1b0d10] dark:text-gray-100">Your Booking</h2>
                    <div class="flex flex-col gap-6">
                        <!-- Service Info -->
                        <div class="flex items-start justify-between border-b border-gray-200/50 dark:border-white/10 pb-4">
                            <div class="flex flex-col gap-1">
                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Service</span>
                                <span class="text-lg font-bold text-[#1b0d10] dark:text-gray-100">Gel Manicure</span>
                                <span class="text-sm text-gray-600 dark:text-gray-300">60 mins</span>
                            </div>
                            <span class="font-bold text-[#1b0d10] dark:text-gray-100">$45</span>
                        </div>
                        
                        <!-- Artist Info -->
                        <div class="flex items-start gap-4 border-b border-gray-200/50 dark:border-white/10 pb-4">
                            <div class="size-12 overflow-hidden rounded-full border-2 border-white dark:border-white/10 shadow-sm">
                                <img alt="Priya Patel nail artist portrait" class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnwHP4VGMiWcoKmve6jX62Sk9ksTbEmJ4qF1beWsE-6op1ueSzLamUS_hJt_XXcZj1PjY_c6stIQSOKi0VxwIJ4fawxBz7sBKGEzu1effD2j4eSbv0rDsCbNMmv7j5l_ufKdk3A0pnxsVCGPkvu9srVohgcCfAkNYa4g3QTComt-5VIxGVl5arJf735vSOjX1xkb9ib842qelVpcT6PNVZbuQ2NJJBOTaXS1X9tc64RsiKhGsV4MwRSYQoMdPF8DEw67MaL4sk3oMR"/>
                            </div>
                            <div class="flex flex-col gap-0.5">
                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Artist</span>
                                <span class="font-bold text-[#1b0d10] dark:text-gray-100">Priya Patel</span>
                                <div class="flex items-center gap-1">
                                    <span class="material-symbols-outlined text-sm text-yellow-500 fill-current">star</span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-400">4.9 (124 reviews)</span>
                                </div>
                            </div>
                        </div>

                        <!-- Date & Time Selection -->
                        <div class="flex flex-col gap-3 rounded-xl bg-white/60 dark:bg-white/10 p-4">
                            <div class="flex items-center gap-3">
                                <div class="flex size-8 items-center justify-center rounded-full bg-booking-step3-primary/10 text-booking-step3-primary">
                                    <span class="material-symbols-outlined text-lg">calendar_month</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Date</span>
                                    <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">Feb 14, 2024</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="flex size-8 items-center justify-center rounded-full bg-booking-step3-primary/10 text-booking-step3-primary">
                                    <span class="material-symbols-outlined text-lg">schedule</span>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-xs font-medium text-gray-500 dark:text-gray-400">Time</span>
                                    <span class="text-sm font-bold text-[#1b0d10] dark:text-gray-100">10:00 AM</span>
                                </div>
                            </div>
                        </div>

                        <!-- Total -->
                        <div class="flex items-center justify-between pt-2">
                            <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Total</span>
                            <span class="text-2xl font-black text-[#1b0d10] dark:text-gray-100">$45.00</span>
                        </div>

                        <!-- Action -->
                        <button routerLink="/client/booking/review" class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-booking-step3-primary py-4 text-base font-bold text-white shadow-lg shadow-booking-step3-primary/30 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            <span>Continue to Details</span>
                            <span class="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    </div>
  `
})
export class TimeSelectionComponent { }
