import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-worker-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
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
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-primary text-text-main shadow-sm transition-all duration-300 group" routerLink="/worker/dashboard">
                    <span class="material-symbols-outlined text-rose-gold group-hover:text-rose-gold transition-colors">dashboard</span>
                    <span class="text-sm font-bold">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/schedule">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">calendar_month</span>
                    <span class="text-sm font-medium">Schedule</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/requests">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">inbox</span>
                    <span class="text-sm font-medium">Requests</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/reviews">
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
        <main class="flex-1 h-full overflow-y-auto bg-background-light dark:bg-background-dark p-8 md:p-12 lg:px-16">
            <div class="max-w-5xl mx-auto flex flex-col gap-10">
                
                <!-- Header -->
                <header class="flex flex-col md:flex-row md:items-end justify-between gap-4 animate-fade-in-up">
                    <div>
                        <p class="text-rose-gold dark:text-primary text-sm font-bold tracking-widest uppercase mb-2">Artist Workspace</p>
                        <h2 class="text-text-main dark:text-white text-4xl md:text-5xl font-serif font-medium leading-tight">Welcome back, Sarah</h2>
                    </div>
                    <div class="flex items-center gap-3 bg-white dark:bg-white/5 p-2 pr-4 rounded-full shadow-soft border border-white dark:border-white/10">
                        <div class="size-10 rounded-full bg-rose-gold/10 dark:bg-primary/20 flex items-center justify-center border-2 border-white dark:border-white/20 text-rose-gold dark:text-primary font-bold text-lg">
                            SJ
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs font-bold text-text-main dark:text-white">Sarah Jenkins</span>
                            <span class="text-[10px] text-text-sub dark:text-gray-400 uppercase tracking-wide">Master Stylist</span>
                        </div>
                        <button class="ml-2 size-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span class="material-symbols-outlined text-text-sub" style="font-size: 20px;">expand_more</span>
                        </button>
                    </div>
                </header>

                <!-- Stats Cards -->
                <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white dark:bg-[#1a0b0e] p-6 rounded-[16px] shadow-soft flex items-center gap-5 border border-white dark:border-white/5">
                        <div class="size-14 rounded-full bg-primary/20 flex items-center justify-center text-rose-gold">
                            <span class="material-symbols-outlined" style="font-size: 28px;">calendar_today</span>
                        </div>
                        <div>
                            <h3 class="text-3xl font-serif font-bold text-text-main dark:text-white">4</h3>
                            <p class="text-sm font-medium text-text-sub dark:text-gray-400">Today's Appointments</p>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-[#1a0b0e] p-6 rounded-[16px] shadow-soft flex items-center gap-5 border border-white dark:border-white/5">
                        <div class="size-14 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-400">
                            <span class="material-symbols-outlined" style="font-size: 28px;">notifications</span>
                        </div>
                        <div>
                            <h3 class="text-3xl font-serif font-bold text-text-main dark:text-white">3</h3>
                            <p class="text-sm font-medium text-text-sub dark:text-gray-400">Pending Requests</p>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-[#1a0b0e] p-6 rounded-[16px] shadow-soft flex items-center gap-5 border border-white dark:border-white/5">
                        <div class="size-14 rounded-full bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-500">
                            <span class="material-symbols-outlined" style="font-size: 28px;">star</span>
                        </div>
                        <div>
                            <h3 class="text-3xl font-serif font-bold text-text-main dark:text-white">4.9</h3>
                            <p class="text-sm font-medium text-text-sub dark:text-gray-400">Average Rating</p>
                        </div>
                    </div>
                </section>

                <!-- Timeline -->
                <section class="w-full">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-2xl font-serif text-text-main dark:text-white">Today's Timeline</h3>
                        <button class="text-sm font-bold text-rose-gold hover:text-rose-gold/80 transition-colors uppercase tracking-wider flex items-center gap-1">
                            View Full Schedule
                            <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
                        </button>
                    </div>
                    
                    <div class="flex flex-col gap-4">
                        <!-- Item 1 -->
                        <div class="bg-white dark:bg-[#1a0b0e] p-6 rounded-[16px] shadow-soft flex flex-col md:flex-row md:items-center gap-6 border border-white dark:border-white/5 hover:border-primary/50 transition-colors duration-300">
                            <div class="md:w-32 flex-shrink-0 border-l-4 border-green-200 pl-4">
                                <span class="block text-2xl font-serif font-medium text-text-main dark:text-white">09:00</span>
                                <span class="text-sm text-text-sub dark:text-gray-400 uppercase tracking-wider font-bold">AM</span>
                            </div>
                            <div class="flex-1 flex items-center gap-4">
                                <div class="size-12 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-white/10" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuABFan9uX988X0HXxjgTD8crkyIbVscMtPYCFsyZckgA4gsa6-2zvgoGy-BGJo6opRsczCtjOjeqESUTzgxCU-WD-RawLnS6CT1fPFZteSeJCTQGtPb6s8OIf-G1GkoFXObEGGgive1WtjSjm7ASn72Avzb8UByN1T6sv53nSFWLKsHnPJv4JWVIwvhN7NjKt_P7cT4ukQLKKuiP_vbhm_5Jt1BHAlAQK0sdpqiJVGMH2BMNIfNg3hPUUuMbMa39jkGSp3WZgPqPQ9i");'></div>
                                <div class="flex flex-col">
                                    <h4 class="text-lg font-bold text-text-main dark:text-white">Isabella R.</h4>
                                    <p class="text-sm text-text-sub dark:text-gray-400">Gel Removal &amp; Care</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800">
                                    Completed
                                </span>
                                <button class="px-5 py-2 rounded-full border border-rose-gold/30 text-rose-gold text-sm font-bold hover:bg-rose-gold hover:text-white transition-all duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Item 2 -->
                        <div class="bg-white dark:bg-[#1a0b0e] p-6 rounded-[16px] shadow-soft flex flex-col md:flex-row md:items-center gap-6 border border-l-[6px] border-l-rose-gold border-y-white border-r-white dark:border-y-white/5 dark:border-r-white/5 relative overflow-hidden">
                            <div class="absolute right-0 top-0 w-32 h-32 bg-rose-gold/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                            <div class="md:w-32 flex-shrink-0 pl-4">
                                <span class="block text-2xl font-serif font-medium text-text-main dark:text-white">11:00</span>
                                <span class="text-sm text-text-sub dark:text-gray-400 uppercase tracking-wider font-bold">AM</span>
                            </div>
                            <div class="flex-1 flex items-center gap-4 relative z-10">
                                <div class="size-12 rounded-full bg-cover bg-center ring-2 ring-rose-gold ring-offset-2 ring-offset-white dark:ring-offset-[#1a0b0e]" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs-u91ULWEWmMB32BcdVkeKjFr6rvI_v4r5PCBxAjuhshsV-A1sngPA1W_nvgX4GwEdQIfAqeCi5ZqN-7coItTewpJCUeOViSmWcE1m72k3TzIKXc4_M_3KTHf8zKzbDxAN2tCWk43oyEOzY81DNG740YnSRHHHE9OHcQhBIlvzPZsBRYzUjUAx9ZTinro_E6f_wdBpkxrMBPZuEMpx3POF_OqDbYGefcV6mvmT1f9jRmkyGPw4CSqO3mrJQwjZuVlh5C51BDdqP7_");'></div>
                                <div class="flex flex-col">
                                    <h4 class="text-lg font-bold text-text-main dark:text-white">Emily T.</h4>
                                    <p class="text-sm text-text-sub dark:text-gray-400">Acrylic Full Set</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0 relative z-10">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                                    In Progress
                                </span>
                                <button class="px-5 py-2 rounded-full bg-rose-gold text-white text-sm font-bold shadow-lg hover:bg-rose-gold/90 transition-all duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Item 3 -->
                        <div class="bg-white dark:bg-[#1a0b0e] p-6 rounded-[16px] shadow-soft flex flex-col md:flex-row md:items-center gap-6 border border-white dark:border-white/5 hover:border-primary/50 transition-colors duration-300">
                            <div class="md:w-32 flex-shrink-0 border-l-4 border-gray-200 dark:border-gray-700 pl-4">
                                <span class="block text-2xl font-serif font-medium text-text-main dark:text-white">02:00</span>
                                <span class="text-sm text-text-sub dark:text-gray-400 uppercase tracking-wider font-bold">PM</span>
                            </div>
                            <div class="flex-1 flex items-center gap-4">
                                <div class="size-12 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-white/10" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjtuf7crP_wKz3jzxNAZK-PR2gtmaz7--kJFguLw82Vkh7hXMm3k9oqdXKSZoOV7wXiWeoeVRfOmvSWk6l0s0MB7tF9CHI920cTNQWHDJcycoPYlcxeiA0OR5LYqRZt-c_oCVBo49WmOtbFZJ8RXa6a20ztPkuwDKR88duqhjJzrE8F2doX7JvrSCpmzG-LY2O4gVqjLpnZG_Ctp1spPZNu38HWf_5-QU6Gih1OtD0mjnxtET2zbOzPg5lTTidFha4eKzQt0swEVbh");'></div>
                                <div class="flex flex-col">
                                    <h4 class="text-lg font-bold text-text-main dark:text-white">Sophia L.</h4>
                                    <p class="text-sm text-text-sub dark:text-gray-400">Classic Manicure</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto mt-4 md:mt-0">
                                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                    Upcoming
                                </span>
                                <button class="px-5 py-2 rounded-full border border-rose-gold/30 text-rose-gold text-sm font-bold hover:bg-rose-gold hover:text-white transition-all duration-300">
                                    View Details
                                </button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    </div>
  `
})
export class WorkerDashboardComponent { }
