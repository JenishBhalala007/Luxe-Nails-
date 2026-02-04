import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-admin-services',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="bg-luxe-bg dark:bg-background-dark text-luxe-text font-display min-h-screen flex overflow-hidden selection:bg-service-rose-gold-light selection:text-service-primary">
        <!-- Sidebar -->
        <aside class="w-64 flex-shrink-0 flex flex-col bg-white border-r border-[#f0e6e9] h-full z-20 shadow-soft hidden md:flex">
            <div class="h-20 flex items-center px-8">
                <div class="flex items-center gap-3">
                    <div class="text-2xl text-luxe-text">
                        <span class="material-symbols-outlined text-4xl">spa</span>
                    </div>
                    <h1 class="text-xl font-serif font-bold tracking-tight text-luxe-text">Luxe Nails</h1>
                </div>
            </div>
            
            <nav class="flex-1 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/dashboard">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/bookings">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
                    <span class="text-sm font-medium">Bookings</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/users">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
                    <span class="text-sm font-medium">Users</span>
                </a>
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-semibold">Services</span>
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
        <main class="flex-1 flex flex-col h-screen overflow-hidden relative">
            <!-- Mobile Header (Visible only on small screens) -->
            <header class="lg:hidden h-16 bg-white dark:bg-[#1a0f10] border-b border-service-rose-gold/10 flex items-center justify-between px-4 z-10 shrink-0">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-service-primary">spa</span>
                    <span class="font-bold text-lg">Luxe Nail Art</span>
                </div>
                <button class="text-luxe-text p-2">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </header>

            <!-- Main Scroll Area -->
            <div class="flex-1 overflow-y-auto bg-luxe-bg dark:bg-background-dark p-4 md:p-8 lg:px-12 lg:py-10">
                <div class="max-w-7xl mx-auto space-y-8">
                    <!-- Page Header -->
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div class="space-y-2">
                            <nav class="flex items-center gap-2 text-sm text-service-text-sub mb-1">
                                <span class="hover:text-service-primary cursor-pointer">Admin</span>
                                <span class="material-symbols-outlined text-[10px]">chevron_right</span>
                                <span class="text-luxe-text font-medium">Services</span>
                            </nav>
                            <h1 class="text-3xl md:text-4xl font-black text-luxe-text dark:text-white tracking-tight leading-tight">Service Catalog Management</h1>
                            <p class="text-service-text-sub dark:text-gray-400 text-base md:text-lg max-w-2xl">Manage your salon's service offerings, pricing, and durations to keep your menu fresh and up-to-date.</p>
                        </div>
                        <div class="flex gap-3">
                            <button class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#2a1d20] border border-service-rose-gold/20 text-luxe-text hover:bg-service-rose-gold-light/20 transition-all font-semibold shadow-sm text-sm">
                                <span class="material-symbols-outlined text-lg">filter_list</span>
                                Filter
                            </button>
                            <button class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-service-primary text-white hover:bg-service-primary/90 transition-all font-semibold shadow-lg shadow-service-primary/30 text-sm">
                                <span class="material-symbols-outlined text-lg">add</span>
                                Add Category
                            </button>
                        </div>
                    </div>

                    <!-- Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
                        <!-- Card 1: Add New Service -->
                        <div class="group cursor-pointer flex flex-col items-center justify-center min-h-[420px] rounded-xl border-2 border-dashed border-service-rose-gold/30 hover:border-service-rose-gold hover:bg-service-rose-gold/5 dark:hover:bg-service-rose-gold/10 transition-all duration-300 bg-transparent p-6 text-center gap-4">
                            <div class="size-20 rounded-full bg-service-rose-gold-light/30 text-service-rose-gold group-hover:bg-service-rose-gold group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                                <span class="material-symbols-outlined text-4xl">add</span>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-service-rose-gold group-hover:text-service-primary transition-colors">Add New Service</h3>
                                <p class="text-sm text-service-text-sub mt-1 px-4">Create a new offering for your clients</p>
                            </div>
                        </div>

                        <!-- Card 2: Gel Manicure -->
                        <div class="flex flex-col bg-white dark:bg-[#1e1416] rounded-xl shadow-soft hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-service-rose-gold/5 group">
                            <!-- Image -->
                            <div class="relative w-full aspect-[4/3] overflow-hidden">
                                <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Close up of a luxury gel manicure with soft pink polish" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVq6q4vRS7WOJOTHBUl6Oc7L8bSyBhNAfL5a8nU93XRvT-sgyjV0tB71uIBw5xBHydDBf4gzxV9a-CIOeX2TNNSSLwPurUZ1N0CzWplsbJsDtJQFqf7Kterm6rEzX0TkLP6RjH90V-zxDkMOH-OqcVMAfH46ywx3uiw4MEYy_eBw50zOg-_iWoVR0y7wFhHxyCXtYPG15Vp6VeW56BeC9QEj_8QiXNNT9goZaLvKs9mLku7Dqfez0P7srcNfh4bR5-AjQ7wKX7O0N6');"></div>
                                <div class="absolute top-3 left-3">
                                    <span class="px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold text-luxe-text dark:text-white shadow-sm border border-white/20">
                                        Manicure
                                    </span>
                                </div>
                            </div>
                            <!-- Content -->
                            <div class="p-5 flex flex-col gap-4 flex-1">
                                <!-- Title Input -->
                                <div class="space-y-1">
                                    <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Service Name</label>
                                    <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg px-3 py-2 text-luxe-text dark:text-white font-bold text-lg transition-colors placeholder:text-gray-300" type="text" value="Luxury Gel Manicure"/>
                                </div>
                                <div class="flex gap-3">
                                    <!-- Price Input -->
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Price</label>
                                        <div class="relative">
                                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-service-text-sub text-sm">$</span>
                                            <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-6 pr-3 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors" type="text" value="55.00"/>
                                        </div>
                                    </div>
                                    <!-- Duration Select -->
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Duration</label>
                                        <div class="relative">
                                            <select class="w-full appearance-none bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-3 pr-8 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors cursor-pointer">
                                                <option>30 mins</option>
                                                <option selected>45 mins</option>
                                                <option>60 mins</option>
                                                <option>90 mins</option>
                                            </select>
                                            <span class="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-service-text-sub text-lg pointer-events-none">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Actions -->
                                <div class="mt-auto pt-4 flex items-center justify-between border-t border-service-rose-gold/10">
                                    <button class="text-service-primary hover:text-red-700 text-xs font-semibold hover:underline flex items-center gap-1 transition-colors">
                                        <span class="material-symbols-outlined text-sm">delete</span>
                                        Delete
                                    </button>
                                    <button class="bg-service-rose-gold hover:bg-service-rose-gold/90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-service-rose-gold/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3: Rose Petal Pedicure -->
                        <div class="flex flex-col bg-white dark:bg-[#1e1416] rounded-xl shadow-soft hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-service-rose-gold/5 group">
                            <div class="relative w-full aspect-[4/3] overflow-hidden">
                                <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Relaxing spa pedicure bowl with rose petals floating in water" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBcPPG5pKFgHdrwYbjN-F2uybT3qd9DumGRD13F3a-mtUVLt2KAVgfIqT3M9LagZUqzgR0HiFRW0Yicko7dZpTisl80qbwsKNoUlz8iMBlVK4m-ccAkqXyn-6mPcxymuPMMkiGdi4YqIwLTyvhG61T1Hd9p262Q0_x0lSXe9uXzqNnal7f-mj1icGaW5PeEHEHDFlW46rzyItHBrUvpGYP5z977hNzC9aTfzooAgq-n9w3wzJVhdm7GJyqhI-c-E4oOLkX6MOyM5wT');"></div>
                                <div class="absolute top-3 left-3">
                                    <span class="px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold text-luxe-text dark:text-white shadow-sm border border-white/20">
                                        Pedicure
                                    </span>
                                </div>
                            </div>
                            <div class="p-5 flex flex-col gap-4 flex-1">
                                <div class="space-y-1">
                                    <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Service Name</label>
                                    <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg px-3 py-2 text-luxe-text dark:text-white font-bold text-lg transition-colors placeholder:text-gray-300" type="text" value="Rose Petal Pedicure"/>
                                </div>
                                <div class="flex gap-3">
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Price</label>
                                        <div class="relative">
                                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-service-text-sub text-sm">$</span>
                                            <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-6 pr-3 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors" type="text" value="75.00"/>
                                        </div>
                                    </div>
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Duration</label>
                                        <div class="relative">
                                            <select class="w-full appearance-none bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-3 pr-8 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors cursor-pointer">
                                                <option>45 mins</option>
                                                <option selected>60 mins</option>
                                                <option>75 mins</option>
                                            </select>
                                            <span class="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-service-text-sub text-lg pointer-events-none">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-auto pt-4 flex items-center justify-between border-t border-service-rose-gold/10">
                                    <button class="text-service-primary hover:text-red-700 text-xs font-semibold hover:underline flex items-center gap-1 transition-colors">
                                        <span class="material-symbols-outlined text-sm">delete</span>
                                        Delete
                                    </button>
                                    <button class="bg-service-rose-gold hover:bg-service-rose-gold/90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-service-rose-gold/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Card 4: Nail Art Add-on -->
                        <div class="flex flex-col bg-white dark:bg-[#1e1416] rounded-xl shadow-soft hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-service-rose-gold/5 group">
                            <div class="relative w-full aspect-[4/3] overflow-hidden">
                                <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Intricate nail art design being painted with a fine brush" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcC_kKHNDh7UNN6DhJb0tsecwSZZWMqhfht7RAkUoV0RcVeFU75xQySlG-na_axwiThQwG-t-Wg-i5JvdKpbXUwnMboEp5r-uuTysORj1Tr-l4esH4HBCv65JxGKMVymcAK2d60G5MN0u0zPHyiLbCaeSuG6aXpauNmddB5hRZR6lu6xF0GYy6Z5ATIVuBcOn3LbcNshLfSMrbwUOCLxF9u5zc17CvZ2XxQv3wFS80SD0WQ2ScsUYN_eYuiGjj37OCkpNQ_84NUiy2');"></div>
                                <div class="absolute top-3 left-3">
                                    <span class="px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold text-luxe-text dark:text-white shadow-sm border border-white/20">
                                        Add-on
                                    </span>
                                </div>
                            </div>
                            <div class="p-5 flex flex-col gap-4 flex-1">
                                <div class="space-y-1">
                                    <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Service Name</label>
                                    <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg px-3 py-2 text-luxe-text dark:text-white font-bold text-lg transition-colors placeholder:text-gray-300" type="text" value="Intricate Nail Art (Per Finger)"/>
                                </div>
                                <div class="flex gap-3">
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Price</label>
                                        <div class="relative">
                                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-service-text-sub text-sm">$</span>
                                            <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-6 pr-3 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors" type="text" value="5.00"/>
                                        </div>
                                    </div>
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Duration</label>
                                        <div class="relative">
                                            <select class="w-full appearance-none bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-3 pr-8 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors cursor-pointer">
                                                <option selected>15 mins</option>
                                                <option>30 mins</option>
                                                <option>45 mins</option>
                                            </select>
                                            <span class="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-service-text-sub text-lg pointer-events-none">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-auto pt-4 flex items-center justify-between border-t border-service-rose-gold/10">
                                    <button class="text-service-primary hover:text-red-700 text-xs font-semibold hover:underline flex items-center gap-1 transition-colors">
                                        <span class="material-symbols-outlined text-sm">delete</span>
                                        Delete
                                    </button>
                                    <button class="bg-service-rose-gold hover:bg-service-rose-gold/90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-service-rose-gold/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Card 5: Acrylic Full Set -->
                        <div class="flex flex-col bg-white dark:bg-[#1e1416] rounded-xl shadow-soft hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-service-rose-gold/5 group">
                            <div class="relative w-full aspect-[4/3] overflow-hidden">
                                <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Elegant long acrylic nails with nude polish" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAL810rNTqlE1RMm1In6SXrhBMDKRZHNZLBbx8FF4C5f89COTVl6WRkzMO37jUgbw1lFOcvgQ5R0nfN1_szJztYVwgP-VHzaUIxOM1mQbGuaWjdx-mVcapfQ2Ss_cL8PQin-T63Ec4jK3XtT7slwdRBxk0GUAQh-KM4j7oTOc3Rl4PO_Ey9cDsqVorO8BDktLfDQySWwOMKzuRC6uOLbi6CbEBJmqcH_pm-ugoVOSuHADaXqV5r6K58ssG7snkp2aq8IRqNeT_X7OXZ');"></div>
                                <div class="absolute top-3 left-3">
                                    <span class="px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold text-luxe-text dark:text-white shadow-sm border border-white/20">
                                        Acrylics
                                    </span>
                                </div>
                            </div>
                            <div class="p-5 flex flex-col gap-4 flex-1">
                                <div class="space-y-1">
                                    <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Service Name</label>
                                    <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg px-3 py-2 text-luxe-text dark:text-white font-bold text-lg transition-colors placeholder:text-gray-300" type="text" value="Acrylic Full Set (S/M)"/>
                                </div>
                                <div class="flex gap-3">
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Price</label>
                                        <div class="relative">
                                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-service-text-sub text-sm">$</span>
                                            <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-6 pr-3 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors" type="text" value="65.00"/>
                                        </div>
                                    </div>
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Duration</label>
                                        <div class="relative">
                                            <select class="w-full appearance-none bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-3 pr-8 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors cursor-pointer">
                                                <option>60 mins</option>
                                                <option selected>90 mins</option>
                                                <option>120 mins</option>
                                            </select>
                                            <span class="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-service-text-sub text-lg pointer-events-none">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-auto pt-4 flex items-center justify-between border-t border-service-rose-gold/10">
                                    <button class="text-service-primary hover:text-red-700 text-xs font-semibold hover:underline flex items-center gap-1 transition-colors">
                                        <span class="material-symbols-outlined text-sm">delete</span>
                                        Delete
                                    </button>
                                    <button class="bg-service-rose-gold hover:bg-service-rose-gold/90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-service-rose-gold/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Card 6: Paraffin Wax Treatment -->
                        <div class="flex flex-col bg-white dark:bg-[#1e1416] rounded-xl shadow-soft hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-service-rose-gold/5 group">
                            <div class="relative w-full aspect-[4/3] overflow-hidden">
                                <div class="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Hands receiving a warm paraffin wax treatment in a spa" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_C0vj47-guHuUo1PcxBy8nzejS4SdErMguOMZrjqNQKfqX3gncZKFg9n7ZM5waduAz2EucE5LkWzvHa0osZGcteEeWu8j9a6RVJ_bMGgMJtfEfQxniutC0EnT7QshZ08_kf5Eki02FzG5ic1-vT1SZrlPnVA3tNvltiPVNOLsLk96Wzktp0gzm0i3JqF9XSJMcE11Zby3kOrDQjq0rKAyPfGqE_qPspujKQ6cVef4IDisKyv5aTaL0LQ4d57rvK3JUrke3klysDnE');"></div>
                                <div class="absolute top-3 left-3">
                                    <span class="px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-xs font-bold text-luxe-text dark:text-white shadow-sm border border-white/20">
                                        Treatment
                                    </span>
                                </div>
                            </div>
                            <div class="p-5 flex flex-col gap-4 flex-1">
                                <div class="space-y-1">
                                    <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Service Name</label>
                                    <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg px-3 py-2 text-luxe-text dark:text-white font-bold text-lg transition-colors placeholder:text-gray-300" type="text" value="Paraffin Wax Treatment"/>
                                </div>
                                <div class="flex gap-3">
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Price</label>
                                        <div class="relative">
                                            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-service-text-sub text-sm">$</span>
                                            <input class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-6 pr-3 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors" type="text" value="15.00"/>
                                        </div>
                                    </div>
                                    <div class="space-y-1 flex-1">
                                        <label class="text-[10px] uppercase tracking-wider font-bold text-service-text-sub ml-1">Duration</label>
                                        <div class="relative">
                                            <select class="w-full appearance-none bg-luxe-bg dark:bg-white/5 border-transparent focus:border-service-rose-gold focus:ring-0 rounded-lg pl-3 pr-8 py-2 text-luxe-text dark:text-white font-medium text-sm transition-colors cursor-pointer">
                                                <option selected>15 mins</option>
                                                <option>30 mins</option>
                                            </select>
                                            <span class="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-service-text-sub text-lg pointer-events-none">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-auto pt-4 flex items-center justify-between border-t border-service-rose-gold/10">
                                    <button class="text-service-primary hover:text-red-700 text-xs font-semibold hover:underline flex items-center gap-1 transition-colors">
                                        <span class="material-symbols-outlined text-sm">delete</span>
                                        Delete
                                    </button>
                                    <button class="bg-service-rose-gold hover:bg-service-rose-gold/90 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg shadow-service-rose-gold/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </div>
    `
})
export class AdminServicesComponent { }
