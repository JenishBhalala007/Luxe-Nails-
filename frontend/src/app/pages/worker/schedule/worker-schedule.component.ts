import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-worker-schedule',
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
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/dashboard">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">dashboard</span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-primary text-text-main shadow-sm transition-all duration-300 group" routerLink="/worker/schedule">
                    <span class="material-symbols-outlined text-rose-gold group-hover:text-rose-gold transition-colors">calendar_month</span>
                    <span class="text-sm font-bold">Schedule</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-text-sub dark:text-gray-400 hover:bg-background-light dark:hover:bg-white/5 transition-colors group" routerLink="/worker/requests">
                    <span class="material-symbols-outlined group-hover:text-rose-gold transition-colors">inbox</span>
                    <span class="text-sm font-medium">Requests</span>
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

        <!-- Main Content Area -->
        <main class="flex-1 flex flex-col h-full overflow-hidden relative">
            <!-- Header & Toolbar -->
            <header class="px-8 pt-8 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
                <div>
                    <h2 class="font-serif text-4xl font-black text-text-main leading-tight mb-1">Your Schedule</h2>
                    <div class="flex items-center gap-2 text-worker-text-muted">
                        <span class="material-symbols-outlined text-lg">calendar_today</span>
                        <span class="text-lg">February 2026</span>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <!-- View Toggle -->
                    <div class="bg-white p-1 rounded-full shadow-sm border border-gray-100 flex">
                        <button class="px-5 py-2 rounded-full bg-worker-primary text-white text-sm font-bold shadow-md transition-all">Week View</button>
                        <button class="px-5 py-2 rounded-full text-worker-text-muted hover:text-text-main hover:bg-gray-50 text-sm font-medium transition-all">Month View</button>
                    </div>
                    <!-- Date Actions -->
                    <div class="flex gap-2">
                        <button class="size-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-main hover:bg-gray-50 hover:shadow-md transition-all">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button class="px-4 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-main text-sm font-bold hover:bg-gray-50 hover:shadow-md transition-all">
                            Today
                        </button>
                        <button class="size-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-main hover:bg-gray-50 hover:shadow-md transition-all">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- Calendar & Details Container -->
            <div class="flex-1 px-8 pb-8 overflow-hidden flex gap-6">
                <!-- Calendar Grid -->
                <div class="flex-1 bg-worker-surface rounded-[20px] shadow-soft border border-gray-100 flex flex-col overflow-hidden relative">
                    <!-- Days Header -->
                    <div class="flex border-b border-gray-100 bg-white z-10 sticky top-0">
                        <div class="w-20 shrink-0 border-r border-gray-50"></div> <!-- Time column spacer -->
                        <div class="flex-1 grid grid-cols-7 divide-x divide-gray-50">
                            <div class="p-4 text-center">
                                <span class="block text-xs font-bold text-worker-text-muted uppercase tracking-wider">Mon</span>
                                <span class="block text-xl font-serif font-bold text-text-main mt-1">12</span>
                            </div>
                            <div class="p-4 text-center bg-worker-primary-light/30">
                                <span class="block text-xs font-bold text-worker-primary uppercase tracking-wider">Tue</span>
                                <span class="block text-xl font-serif font-bold text-worker-primary mt-1">13</span>
                            </div>
                            <div class="p-4 text-center">
                                <span class="block text-xs font-bold text-worker-text-muted uppercase tracking-wider">Wed</span>
                                <span class="block text-xl font-serif font-bold text-text-main mt-1">14</span>
                            </div>
                            <div class="p-4 text-center">
                                <span class="block text-xs font-bold text-worker-text-muted uppercase tracking-wider">Thu</span>
                                <span class="block text-xl font-serif font-bold text-text-main mt-1">15</span>
                            </div>
                            <div class="p-4 text-center">
                                <span class="block text-xs font-bold text-worker-text-muted uppercase tracking-wider">Fri</span>
                                <span class="block text-xl font-serif font-bold text-text-main mt-1">16</span>
                            </div>
                            <div class="p-4 text-center">
                                <span class="block text-xs font-bold text-worker-text-muted uppercase tracking-wider">Sat</span>
                                <span class="block text-xl font-serif font-bold text-text-main mt-1">17</span>
                            </div>
                            <div class="p-4 text-center">
                                <span class="block text-xs font-bold text-worker-text-muted uppercase tracking-wider">Sun</span>
                                <span class="block text-xl font-serif font-bold text-text-main mt-1">18</span>
                            </div>
                        </div>
                    </div>

                    <!-- Scrollable Grid Area -->
                    <div class="flex-1 overflow-y-auto relative">
                        <!-- Current Time Line (Absolute positioned for demo) -->
                        <div class="absolute top-[175px] left-0 w-full z-10 flex items-center pointer-events-none">
                            <div class="w-20 text-right pr-2 text-xs font-bold text-worker-primary">10:45 AM</div>
                            <div class="flex-1 h-px bg-worker-primary relative">
                                <div class="absolute left-0 -top-1 size-2 rounded-full bg-worker-primary"></div>
                            </div>
                        </div>

                        <!-- Time Slots -->
                        <div class="flex min-h-[600px]"> <!-- Grid Wrapper -->
                            <!-- Time Column -->
                            <div class="w-20 shrink-0 flex flex-col border-r border-gray-50 bg-white text-xs text-worker-text-muted font-medium text-right">
                                <div class="h-24 pr-4 pt-2 border-b border-gray-50 border-dashed">9 AM</div>
                                <div class="h-24 pr-4 pt-2 border-b border-gray-50 border-dashed">10 AM</div>
                                <div class="h-24 pr-4 pt-2 border-b border-gray-50 border-dashed">11 AM</div>
                                <div class="h-24 pr-4 pt-2 border-b border-gray-50 border-dashed">12 PM</div>
                                <div class="h-24 pr-4 pt-2 border-b border-gray-50 border-dashed">1 PM</div>
                                <div class="h-24 pr-4 pt-2 border-b border-gray-50 border-dashed">2 PM</div>
                                <div class="h-24 pr-4 pt-2 border-b border-gray-50 border-dashed">3 PM</div>
                            </div>
                            
                            <!-- Days Columns Wrapper -->
                            <div class="flex-1 grid grid-cols-7 divide-x divide-gray-50 relative">
                                <!-- Monday -->
                                <div class="relative group">
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <!-- Appointment Block -->
                                    <div class="absolute top-[20px] left-1 right-1 h-[80px] rounded-xl bg-worker-primary shadow-md p-3 cursor-pointer hover:bg-[#9d5d66] transition-colors z-0">
                                        <p class="text-white text-xs font-bold truncate">Alice M.</p>
                                        <p class="text-white/80 text-[10px] truncate">Gel Manicure</p>
                                    </div>
                                </div>
                                
                                <!-- Tuesday (Active Day) -->
                                <div class="relative bg-worker-primary-light/10">
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <!-- Appointment Block (Selected) -->
                                    <div class="absolute top-[100px] left-1 right-1 h-[140px] rounded-xl bg-worker-primary shadow-lg ring-4 ring-worker-primary/20 p-3 cursor-pointer z-10 flex flex-col justify-between">
                                        <div>
                                            <div class="flex justify-between items-start">
                                                <p class="text-white text-xs font-bold truncate">Clara B.</p>
                                                <span class="material-symbols-outlined text-white text-[16px]">verified</span>
                                            </div>
                                            <p class="text-white/90 text-[11px] leading-tight mt-1">Full Set &amp; Art</p>
                                        </div>
                                        <div class="flex items-center gap-1 text-white/80 text-[10px]">
                                            <span class="material-symbols-outlined text-[12px]">schedule</span>
                                            <span>10:00 - 11:30</span>
                                        </div>
                                    </div>
                                    <!-- Another Appointment -->
                                    <div class="absolute top-[300px] left-1 right-1 h-[60px] rounded-xl bg-gray-200 p-2 cursor-pointer hover:bg-gray-300 transition-colors">
                                        <p class="text-text-main text-xs font-bold truncate">Break</p>
                                    </div>
                                </div>
                                
                                <!-- Wednesday -->
                                <div class="relative">
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="absolute top-[220px] left-1 right-1 h-[90px] rounded-xl bg-worker-primary shadow-md p-3 cursor-pointer hover:bg-[#9d5d66] transition-colors">
                                        <p class="text-white text-xs font-bold truncate">Jessica T.</p>
                                        <p class="text-white/80 text-[10px] truncate">Polish Change</p>
                                    </div>
                                </div>

                                <!-- Thursday -->
                                <div class="relative">
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                </div>

                                <!-- Friday -->
                                <div class="relative">
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="absolute top-[10px] left-1 right-1 h-[180px] rounded-xl bg-worker-primary shadow-md p-3 cursor-pointer hover:bg-[#9d5d66] transition-colors">
                                        <p class="text-white text-xs font-bold truncate">Sarah J.</p>
                                        <p class="text-white/80 text-[10px] truncate">Extension Removal</p>
                                        <p class="text-white/80 text-[10px] truncate">+ New Set</p>
                                    </div>
                                </div>
                                
                                <!-- Saturday -->
                                <div class="relative bg-gray-50/50">
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                </div>
                                
                                <!-- Sunday -->
                                <div class="relative bg-gray-50/50">
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                    <div class="h-24 border-b border-gray-50 border-dashed"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Mini-Sidebar: Quick Look Panel -->
                <aside class="w-[340px] shrink-0 flex flex-col gap-6">
                    <!-- Appointment Details Card -->
                    <div class="bg-worker-surface rounded-[20px] shadow-soft p-6 border border-gray-100 flex flex-col gap-6 sticky top-0">
                        <div class="flex justify-between items-start">
                            <h3 class="text-worker-text-muted text-xs font-bold uppercase tracking-wider">Quick Look</h3>
                            <button class="text-worker-text-muted hover:text-worker-primary transition-colors">
                                <span class="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                        <!-- Client Profile -->
                        <div class="flex flex-col items-center gap-3 text-center -mt-2">
                            <div class="relative">
                                <div class="size-24 rounded-full bg-cover bg-center shadow-md border-4 border-white" data-alt="Portrait of client Clara B." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAK_5Kqa5lr6MdzW7SM0MbVel9msQRVOWlywrcyGa3PJsgTboqj0v-L7g3YIsW733cD0xMx_zax4GW8wo8mTj0P31BnC-W7LvhIZjwxdIO5tzWFohj8ErXBR67kgA3ycQrU0jCZUG8-hGZh7IyK7Iqd8bEALGFzsWhxj4qrCc6peB8LAghXjKfecUjUhlrMUI7NdKLv9dD7H3ekf7QjLEfScyj3dhMhTE3fl7AJxmwzCO73i7wIE-eiCxPUFPJJXpMSyllrgA7L1oSs');"></div>
                                <div class="absolute bottom-0 right-0 bg-green-500 size-4 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h4 class="font-serif text-2xl font-bold text-text-main">Clara B.</h4>
                                <p class="text-sm text-worker-text-muted">Loyal Client • 12 Visits</p>
                            </div>
                        </div>
                        <div class="h-px bg-gray-100 w-full"></div>
                        <!-- Service Details -->
                        <div class="space-y-4">
                            <div class="flex gap-3">
                                <div class="size-10 rounded-full bg-worker-primary-light flex items-center justify-center text-worker-primary shrink-0">
                                    <span class="material-symbols-outlined">spa</span>
                                </div>
                                <div>
                                    <p class="text-xs text-worker-text-muted font-bold uppercase">Service</p>
                                    <p class="text-text-main font-bold">Full Set &amp; Nail Art</p>
                                    <p class="text-sm text-worker-text-muted">Acrylics, Medium Length</p>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <div class="size-10 rounded-full bg-worker-primary-light flex items-center justify-center text-worker-primary shrink-0">
                                    <span class="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <p class="text-xs text-worker-text-muted font-bold uppercase">Time</p>
                                    <p class="text-text-main font-bold">10:00 AM - 11:30 AM</p>
                                    <p class="text-sm text-worker-text-muted">90 Minutes</p>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <div class="size-10 rounded-full bg-worker-primary-light flex items-center justify-center text-worker-primary shrink-0">
                                    <span class="material-symbols-outlined">attach_money</span>
                                </div>
                                <div>
                                    <p class="text-xs text-worker-text-muted font-bold uppercase">Price</p>
                                    <p class="text-text-main font-bold">₹85.00</p>
                                    <p class="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full w-fit mt-1">Paid Deposit</p>
                                </div>
                            </div>
                        </div>
                        <!-- Notes Box -->
                        <div class="bg-background-light rounded-2xl p-4">
                            <p class="text-xs text-worker-text-muted font-bold uppercase mb-2 flex items-center gap-1">
                                <span class="material-symbols-outlined text-sm">sticky_note_2</span>
                                Notes
                            </p>
                            <p class="text-sm text-text-main leading-relaxed italic">"Needs matte finish on ring finger. Allergies to latex."</p>
                        </div>
                        <!-- Actions -->
                        <div class="grid grid-cols-2 gap-3 mt-2">
                            <button class="flex items-center justify-center gap-2 py-3 rounded-full border border-gray-200 text-text-main font-bold text-sm hover:bg-gray-50 transition-colors">
                                <span class="material-symbols-outlined text-lg">chat</span>
                                Message
                            </button>
                            <button class="flex items-center justify-center gap-2 py-3 rounded-full bg-worker-primary text-white font-bold text-sm hover:opacity-90 transition-colors shadow-lg shadow-worker-primary/30">
                                <span class="material-symbols-outlined text-lg">edit</span>
                                Edit
                            </button>
                        </div>
                    </div>
                    <!-- Next Up Widget (Optional filler for layout balance) -->
                    <div class="bg-worker-surface rounded-[20px] shadow-soft p-5 border border-gray-100 flex items-center gap-4 opacity-60">
                        <div class="size-12 rounded-full bg-gray-100 flex items-center justify-center text-worker-text-muted">
                            <span class="material-symbols-outlined">coffee</span>
                        </div>
                        <div>
                            <p class="text-xs text-worker-text-muted font-bold uppercase">Up Next</p>
                            <p class="text-text-main font-bold">Lunch Break</p>
                            <p class="text-xs text-worker-text-muted">12:00 PM</p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    </div>
    `
})
export class WorkerScheduleComponent { }
