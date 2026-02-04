import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-worker-reviews',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="flex h-screen w-full bg-background-light dark:bg-background-dark text-text-main font-display antialiased overflow-hidden">
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
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/requests">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">inbox</span>
                    <span class="text-sm font-medium">Requests</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-primary text-text-main shadow-sm transition-all duration-300 group" routerLink="/worker/reviews">
                    <span class="material-symbols-outlined text-rose-gold group-hover:text-rose-gold transition-colors">reviews</span>
                    <span class="text-sm font-bold">Reviews</span>
                </a>
            </nav>

            <div class="p-4 border-t border-[#f4e6e9] dark:border-white/10">
                <button class="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 hover:text-rose-gold transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 flex flex-col h-full overflow-hidden bg-worker-reviews-bg-content relative">
            <!-- Page Header -->
            <header class="flex-shrink-0 px-8 py-8 md:px-12 md:py-10 max-w-6xl mx-auto w-full">
                <div class="flex flex-wrap justify-between items-end gap-4">
                    <div class="flex flex-col gap-2">
                        <h1 class="text-[#1c1616] text-4xl md:text-5xl font-bold font-serif leading-tight tracking-tight">Client Reviews</h1>
                        <p class="text-[#826467] text-lg font-normal font-body">Overview of your performance &amp; feedback.</p>
                    </div>
                    <!-- Sorting Dropdown -->
                    <div class="relative">
                        <div class="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-[#efebeb] shadow-sm cursor-pointer hover:border-[#e0d7d8] group">
                            <span class="material-symbols-outlined text-[#826467] text-[20px]">sort</span>
                            <span class="text-sm font-medium text-[#171212]">Sort by: <span class="text-worker-reviews-primary">Newest First</span></span>
                            <span class="material-symbols-outlined text-[#826467] text-[20px] group-hover:text-worker-reviews-primary transition-colors">expand_more</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto px-8 md:px-12 pb-12 max-w-6xl mx-auto w-full">
                <!-- Performance Summary Card -->
                <section class="bg-white rounded-xl shadow-soft p-8 mb-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                    <!-- Big Rating Number -->
                    <div class="flex flex-col items-center md:items-start gap-1 min-w-[180px]">
                        <span class="text-6xl md:text-7xl font-bold font-serif text-[#171212]">4.9</span>
                        <div class="flex gap-1 my-2">
                            <span class="material-symbols-outlined text-worker-reviews-gold text-[24px]" style="font-variation-settings:'FILL' 1">star</span>
                            <span class="material-symbols-outlined text-worker-reviews-gold text-[24px]" style="font-variation-settings:'FILL' 1">star</span>
                            <span class="material-symbols-outlined text-worker-reviews-gold text-[24px]" style="font-variation-settings:'FILL' 1">star</span>
                            <span class="material-symbols-outlined text-worker-reviews-gold text-[24px]" style="font-variation-settings:'FILL' 1">star</span>
                            <span class="material-symbols-outlined text-worker-reviews-gold text-[24px]" style="font-variation-settings:'FILL' 1">star_half</span>
                        </div>
                        <p class="text-[#826467] text-sm font-medium">Based on 124 reviews</p>
                    </div>
                    <!-- Divider -->
                    <div class="hidden md:block w-px h-32 bg-[#efebeb]"></div>
                    <!-- Distribution Chart -->
                    <div class="flex-1 w-full grid gap-3">
                        <!-- 5 Star -->
                        <div class="grid grid-cols-[24px_1fr_40px] items-center gap-4 group">
                            <span class="text-[#171212] text-sm font-bold text-right">5</span>
                            <div class="h-2.5 w-full bg-[#f0ebec] rounded-full overflow-hidden">
                                <div class="h-full bg-worker-reviews-primary rounded-full" style="width: 80%"></div>
                            </div>
                            <span class="text-[#826467] text-sm font-medium">80%</span>
                        </div>
                        <!-- 4 Star -->
                        <div class="grid grid-cols-[24px_1fr_40px] items-center gap-4 group">
                            <span class="text-[#171212] text-sm font-bold text-right">4</span>
                            <div class="h-2.5 w-full bg-[#f0ebec] rounded-full overflow-hidden">
                                <div class="h-full bg-worker-reviews-primary/60 rounded-full" style="width: 15%"></div>
                            </div>
                            <span class="text-[#826467] text-sm font-medium">15%</span>
                        </div>
                        <!-- 3 Star -->
                        <div class="grid grid-cols-[24px_1fr_40px] items-center gap-4 group">
                            <span class="text-[#171212] text-sm font-bold text-right">3</span>
                            <div class="h-2.5 w-full bg-[#f0ebec] rounded-full overflow-hidden">
                                <div class="h-full bg-worker-reviews-primary/40 rounded-full" style="width: 2%"></div>
                            </div>
                            <span class="text-[#826467] text-sm font-medium">2%</span>
                        </div>
                        <!-- 2 Star -->
                        <div class="grid grid-cols-[24px_1fr_40px] items-center gap-4 group">
                            <span class="text-[#171212] text-sm font-bold text-right">2</span>
                            <div class="h-2.5 w-full bg-[#f0ebec] rounded-full overflow-hidden">
                                <div class="h-full bg-worker-reviews-primary/30 rounded-full" style="width: 2%"></div>
                            </div>
                            <span class="text-[#826467] text-sm font-medium">2%</span>
                        </div>
                        <!-- 1 Star -->
                        <div class="grid grid-cols-[24px_1fr_40px] items-center gap-4 group">
                            <span class="text-[#171212] text-sm font-bold text-right">1</span>
                            <div class="h-2.5 w-full bg-[#f0ebec] rounded-full overflow-hidden">
                                <div class="h-full bg-worker-reviews-primary/20 rounded-full" style="width: 1%"></div>
                            </div>
                            <span class="text-[#826467] text-sm font-medium">1%</span>
                        </div>
                    </div>
                </section>

                <!-- Reviews List -->
                <div class="flex flex-col gap-5">
                    <!-- Review Card 1 -->
                    <article class="bg-white p-6 md:p-8 rounded-xl shadow-soft flex flex-col gap-4 border border-transparent hover:border-[#f0ebec] transition-all">
                        <div class="flex justify-between items-start">
                            <div class="flex items-center gap-4">
                                <div class="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm" data-alt="Portrait of Sarah Jenkins, a happy client" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnEuG0-b7wtSpgIo6uT0G_gUoRInMR1slQvryt98lFO7potuAUNUT9Soa17w-TUsxT7cpDoEBw2SCNH2PJmE6k02-LZRm1Rn5I8Rp30hH5hvfMxIjkMew8OcI2iuVb0H4fS854WlJR9YfdM7dbLYPBgp1LPpgnDM6S4c-TxnGxbgWtbmZ8IA_vvtjZ_y4XgetA27uWxpFPsUCD2AAIVGx5jx1gF3i2JvxYO_eJue5yYUdEVP5CZiChhvtwtyXrp1o-ajSClSIyWnfW");'>
                                </div>
                                <div>
                                    <h3 class="text-[#171212] text-base font-bold font-display">Sarah Jenkins</h3>
                                    <div class="flex items-center gap-2 mt-0.5">
                                        <div class="flex gap-0.5">
                                            <span class="material-symbols-outlined text-worker-reviews-gold text-[16px]" style="font-variation-settings:'FILL' 1">star</span>
                                            <span class="material-symbols-outlined text-worker-reviews-gold text-[16px]" style="font-variation-settings:'FILL' 1">star</span>
                                            <span class="material-symbols-outlined text-worker-reviews-gold text-[16px]" style="font-variation-settings:'FILL' 1">star</span>
                                            <span class="material-symbols-outlined text-worker-reviews-gold text-[16px]" style="font-variation-settings:'FILL' 1">star</span>
                                            <span class="material-symbols-outlined text-worker-reviews-gold text-[16px]" style="font-variation-settings:'FILL' 1">star</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="text-[#826467] text-sm font-medium">2 days ago</span>
                        </div>
                        <div class="pl-0 md:pl-16">
                            <p class="text-[#4a4142] text-base font-normal leading-relaxed">
                                The best manicure I've ever had. The attention to detail was amazing and the salon felt so luxurious. Will definitely be coming back for my next set!
                            </p>
                            <div class="mt-4 flex items-center gap-4">
                                <button class="text-worker-reviews-primary text-sm font-bold hover:text-[#9e555c] transition-colors flex items-center gap-1 group">
                                    Reply
                                    <span class="material-symbols-outlined text-[16px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </article>
                    
                    <!-- More review cards can be added here following the same pattern -->
                    
                    <!-- Load More -->
                    <div class="py-4 flex justify-center">
                        <button class="px-6 py-3 rounded-xl bg-white border border-[#e0d7d8] text-[#826467] font-medium hover:bg-[#fbf9f9] hover:text-[#171212] transition-colors shadow-sm text-sm">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `
})
export class WorkerReviewsComponent { }
