import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex h-screen w-full overflow-hidden bg-luxe-bg dark:bg-background-dark font-display text-luxe-text antialiased">
        <!-- Mobile Header -->
        <header class="lg:hidden h-16 bg-white border-b border-[#f0e6e9] flex items-center justify-between px-4 z-10 shrink-0">
            <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-2xl">spa</span>
                <span class="font-serif font-bold text-lg text-luxe-text">Luxe Nails</span>
            </div>
            <button class="text-luxe-text p-2">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </header>
        <!-- Sidebar -->
        <aside class="w-64 flex-shrink-0 flex flex-col bg-white border-r border-[#f0e6e9] h-full z-20 shadow-soft">
            <div class="h-20 flex items-center px-8">
                <div class="flex items-center gap-3">
                    <div class="text-2xl text-luxe-text">
                        <span class="material-symbols-outlined text-4xl">spa</span>
                    </div>
                    <h1 class="text-xl font-serif font-bold tracking-tight text-luxe-text">Luxe Nails</h1>
                </div>
            </div>
            
            <nav class="flex-1 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/dashboard">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">dashboard</span>
                    <span class="text-sm font-semibold">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/bookings">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
                    <span class="text-sm font-medium">Bookings</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/users">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
                    <span class="text-sm font-medium">Users</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-medium">Services</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/gallery">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">article</span>
                    <span class="text-sm font-medium">Gallery</span>
                </a>
            </nav>
            
            <div class="p-4 border-t border-[#f0e6e9]">
                <button class="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-luxe-text-muted hover:bg-gray-50 transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="text-sm font-medium">Log out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col h-full overflow-hidden relative">
            <!-- Top Header -->
            <header class="h-20 flex items-center justify-between px-10 bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                <h2 class="text-2xl font-serif font-bold text-luxe-text tracking-tight">Admin Overview</h2>
                <div class="flex items-center gap-6">
                    <!-- Search -->
                    <div class="relative w-64 hidden md:block">
                        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-luxe-text-muted material-symbols-outlined text-[20px]">search</span>
                        <input class="w-full bg-white border border-[#f0e6e9] rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-luxe-text-muted shadow-sm transition-all" placeholder="Search..." type="text"/>
                    </div>
                    <!-- Notifications -->
                    <button class="relative w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#f0e6e9] text-luxe-text hover:bg-gray-50 transition-colors shadow-sm">
                        <span class="material-symbols-outlined text-[20px]">notifications</span>
                        <span class="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border border-white"></span>
                    </button>
                    <!-- Profile -->
                    <div class="flex items-center gap-3 cursor-pointer">
                        <div class="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 border-2 border-white shadow-sm" data-alt="Portrait of admin user" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBt7p2KQScb5r0jhvmtUEYbYXhSUaXOJ1UHmOpkDk0jNz0hPgo8LAEkNIYCrk3zXr9gY4Wu1bTRri3wUsSnCWP9cxt85aw2Ad-Wdx4uS_9zdYBul-cbxecBObuokOMhMI-Y7VnOSy_dSrV47fzUoaRMZ-Pyf52LTfHFeXcI0gzUDbwq6u4p-DYvga2HkPeH-nT6V8vOQoNE-hRWFECQNH3TjNIgtqjK9QlYt_rrVD6mE2TTSEnfmG4LPPDJcD6PkV6pJq3WjI51J5h5");'></div>
                        <div class="hidden lg:flex flex-col">
                            <span class="text-sm font-bold text-luxe-text leading-tight">Sarah Jenkins</span>
                            <span class="text-xs text-luxe-text-muted">Manager</span>
                        </div>
                        <span class="material-symbols-outlined text-luxe-text-muted text-[18px]">expand_more</span>
                    </div>
                </div>
            </header>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto p-10 pb-20">
                <div class="max-w-[1200px] mx-auto flex flex-col gap-8">
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <!-- Revenue -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Total Revenue</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text">₹45,000</p>
                                <div class="flex items-center gap-1 text-[#078859] text-xs font-semibold bg-[#e6f4ed] w-fit px-2 py-1 rounded-lg">
                                    <span class="material-symbols-outlined text-[14px]">trending_up</span>
                                    <span>+12%</span>
                                </div>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#FFF9EB] flex items-center justify-center text-luxe-gold">
                                <span class="material-symbols-outlined">payments</span>
                            </div>
                        </div>
                        <!-- Bookings -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Total Bookings</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text">128</p>
                                <div class="flex items-center gap-1 text-[#078859] text-xs font-semibold bg-[#e6f4ed] w-fit px-2 py-1 rounded-lg">
                                    <span class="material-symbols-outlined text-[14px]">trending_up</span>
                                    <span>+5%</span>
                                </div>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#FFEFF3] flex items-center justify-center text-luxe-pink">
                                <span class="material-symbols-outlined">calendar_month</span>
                            </div>
                        </div>
                        <!-- Active Workers -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Active Workers</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text">8</p>
                                <div class="flex items-center gap-1 text-luxe-text-muted text-xs font-semibold bg-gray-100 w-fit px-2 py-1 rounded-lg">
                                    <span class="material-symbols-outlined text-[14px]">remove</span>
                                    <span>0%</span>
                                </div>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#F3F0FF] flex items-center justify-center text-luxe-lavender">
                                <span class="material-symbols-outlined">group</span>
                            </div>
                        </div>
                        <!-- Pending Actions -->
                        <div class="bg-white p-6 rounded-xl shadow-card flex items-start justify-between group hover:-translate-y-1 transition-transform duration-300">
                            <div class="flex flex-col gap-2">
                                <p class="text-luxe-text-muted text-sm font-medium">Pending Actions</p>
                                <p class="text-2xl font-serif font-bold text-luxe-text">5</p>
                                <div class="flex items-center gap-1 text-[#078859] text-xs font-semibold bg-[#e6f4ed] w-fit px-2 py-1 rounded-lg">
                                    <span class="material-symbols-outlined text-[14px]">trending_up</span>
                                    <span>+2%</span>
                                </div>
                            </div>
                            <div class="w-12 h-12 rounded-full bg-[#FFF4EC] flex items-center justify-center text-luxe-orange">
                                <span class="material-symbols-outlined">notification_important</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Charts Row -->
                    <div class="flex flex-col lg:flex-row gap-6">
                        <!-- Revenue Curve -->
                        <div class="flex-1 lg:w-[60%] bg-white p-8 rounded-xl shadow-card flex flex-col">
                            <div class="flex items-center justify-between mb-6">
                                <div>
                                    <h3 class="text-lg font-serif font-bold text-luxe-text">Revenue Curve</h3>
                                    <p class="text-sm text-luxe-text-muted">Sales performance over last 7 days</p>
                                </div>
                                <button class="p-2 rounded-lg hover:bg-gray-50 text-luxe-text-muted">
                                    <span class="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div class="flex-1 flex flex-col justify-end min-h-[250px]">
                                <!-- Chart SVG Representation -->
                                <div class="relative w-full h-[200px] mt-4">
                                    <!-- Grid lines -->
                                    <div class="absolute inset-0 flex flex-col justify-between text-xs text-luxe-text-muted opacity-30">
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                        <div class="border-b border-dashed border-gray-300 w-full h-0"></div>
                                    </div>
                                    <!-- The Curve -->
                                    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 200">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stop-color="#ec1349" stop-opacity="0.2"></stop>
                                                <stop offset="100%" stop-color="#ec1349" stop-opacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 160 C50 160, 50 80, 100 80 C150 80, 150 120, 200 120 C250 120, 250 40, 300 40 C350 40, 350 90, 400 90 V200 H0 Z" fill="url(#chartGradient)"></path>
                                        <path d="M0 160 C50 160, 50 80, 100 80 C150 80, 150 120, 200 120 C250 120, 250 40, 300 40 C350 40, 350 90, 400 90" fill="none" stroke="#ec1349" stroke-width="3" stroke-linecap="round"></path>
                                        <!-- Active Point -->
                                        <circle cx="300" cy="40" r="6" fill="#ec1349" stroke="white" stroke-width="3"></circle>
                                    </svg>
                                </div>
                                <!-- X Axis Labels -->
                                <div class="flex justify-between mt-4 px-2 text-xs font-medium text-luxe-text-muted uppercase tracking-wide">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Top Services -->
                        <div class="flex-1 lg:w-[40%] bg-white p-8 rounded-xl shadow-card flex flex-col">
                            <div class="flex items-center justify-between mb-6">
                                <div>
                                    <h3 class="text-lg font-serif font-bold text-luxe-text">Top Services</h3>
                                    <p class="text-sm text-luxe-text-muted">Most popular treatments</p>
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col justify-center gap-6">
                                <!-- Item 1 -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm font-bold text-luxe-text">Gel Manicure</span>
                                        <span class="text-xs font-semibold text-luxe-text-muted">45%</span>
                                    </div>
                                    <div class="h-2 w-full bg-[#f3e7ea] rounded-full overflow-hidden">
                                        <div class="h-full bg-primary rounded-full w-[45%]"></div>
                                    </div>
                                </div>
                                <!-- Item 2 -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm font-bold text-luxe-text">Acrylics</span>
                                        <span class="text-xs font-semibold text-luxe-text-muted">30%</span>
                                    </div>
                                    <div class="h-2 w-full bg-[#f3e7ea] rounded-full overflow-hidden">
                                        <div class="h-full bg-luxe-lavender rounded-full w-[30%]"></div>
                                    </div>
                                </div>
                                <!-- Item 3 -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm font-bold text-luxe-text">Pedicure Deluxe</span>
                                        <span class="text-xs font-semibold text-luxe-text-muted">15%</span>
                                    </div>
                                    <div class="h-2 w-full bg-[#f3e7ea] rounded-full overflow-hidden">
                                        <div class="h-full bg-luxe-gold rounded-full w-[15%]"></div>
                                    </div>
                                </div>
                                <!-- Item 4 -->
                                <div class="flex flex-col gap-2">
                                    <div class="flex justify-between items-center">
                                        <span class="text-sm font-bold text-luxe-text">Nail Art</span>
                                        <span class="text-xs font-semibold text-luxe-text-muted">10%</span>
                                    </div>
                                    <div class="h-2 w-full bg-[#f3e7ea] rounded-full overflow-hidden">
                                        <div class="h-full bg-luxe-orange rounded-full w-[10%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Recent Activity Table -->
                    <div class="bg-white rounded-xl shadow-card overflow-hidden">
                        <div class="p-6 border-b border-[#f0e6e9] flex justify-between items-center">
                            <h3 class="text-lg font-serif font-bold text-luxe-text">Live Activity Feed</h3>
                            <button class="text-sm text-primary font-bold hover:underline">View All</button>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead class="bg-[#faf8f9]">
                                    <tr>
                                        <th class="px-6 py-4 text-left text-xs font-bold text-luxe-text-muted uppercase tracking-wider">Event</th>
                                        <th class="px-6 py-4 text-left text-xs font-bold text-luxe-text-muted uppercase tracking-wider">User / Client</th>
                                        <th class="px-6 py-4 text-left text-xs font-bold text-luxe-text-muted uppercase tracking-wider">Time</th>
                                        <th class="px-6 py-4 text-left text-xs font-bold text-luxe-text-muted uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-[#f0e6e9]">
                                    <tr class="hover:bg-[#faf8f9] transition-colors">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-[16px]">book_online</span>
                                                </div>
                                                <span class="text-sm font-semibold text-luxe-text">New Booking</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">Emily Rose</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">2 mins ago</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Confirmed</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-[#faf8f9] transition-colors">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-[16px]">person_add</span>
                                                </div>
                                                <span class="text-sm font-semibold text-luxe-text">New User</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">Jessica M.</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">15 mins ago</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">Pending</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-[#faf8f9] transition-colors">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-[16px]">reviews</span>
                                                </div>
                                                <span class="text-sm font-semibold text-luxe-text">New Review</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">Sarah Connor</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">1 hour ago</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">New</span>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-[#faf8f9] transition-colors">
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="flex items-center gap-3">
                                                <div class="w-8 h-8 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-[16px]">cancel</span>
                                                </div>
                                                <span class="text-sm font-semibold text-luxe-text">Cancellation</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">Monica Hall</td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-luxe-text-muted">3 hours ago</td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">Refunded</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `
})
export class AdminDashboardComponent { }
