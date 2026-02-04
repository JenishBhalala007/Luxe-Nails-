import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-admin-gallery',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="bg-background-warm dark:bg-background-dark text-luxe-text font-display antialiased overflow-hidden h-screen flex w-full selection:bg-gallery-rose-gold-light selection:text-gallery-primary">
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
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-medium">Services</span>
                </a>
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/gallery">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">article</span>
                    <span class="text-sm font-semibold">Gallery</span>
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
        <main class="flex-1 flex flex-col h-full bg-background-warm dark:bg-[#1a0f10] overflow-y-auto relative">
            <!-- Mobile Header -->
            <header class="lg:hidden h-16 bg-white dark:bg-[#2a1718] border-b border-[#f0e6e7] flex items-center justify-between px-4 z-10 shrink-0">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-gallery-primary text-2xl">spa</span>
                    <span class="font-serif font-bold text-lg">Luxe Nails</span>
                </div>
                <button class="text-text-dark p-2">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </header>

            <!-- Content Container -->
            <div class="max-w-[1400px] w-full mx-auto p-8 lg:p-12 flex flex-col gap-8">
                <!-- Header Section -->
                <header class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div class="flex flex-col gap-2">
                        <h2 class="font-serif text-4xl lg:text-5xl font-medium text-luxe-text dark:text-white tracking-tight">Gallery Management</h2>
                        <p class="text-gallery-text-muted dark:text-rose-200/70 font-medium">Curate your portfolio and showcase your finest work.</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="flex h-12 items-center justify-center gap-2 rounded-full border border-[#e7d0d2] bg-white dark:bg-[#2a1718] dark:border-[#3a2223] px-6 text-sm font-bold text-luxe-text dark:text-white shadow-soft transition hover:bg-[#fcf8f9]">
                            <span class="material-symbols-outlined text-[20px]">filter_list</span>
                            Filter
                        </button>
                        <button class="flex h-12 items-center justify-center gap-2 rounded-full bg-gallery-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-gallery-primary/90">
                            <span class="material-symbols-outlined text-[20px]">add</span>
                            Add New
                        </button>
                    </div>
                </header>

                <!-- Upload Zone -->
                <section class="w-full">
                    <div class="relative group flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-gallery-rose-gold/60 dark:border-gallery-rose-gold/30 bg-white dark:bg-[#2a1718] px-6 py-12 transition-all hover:border-gallery-primary hover:bg-gallery-rose-gold-light/20 cursor-pointer shadow-soft">
                        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/10 text-gallery-primary">
                            <span class="material-symbols-outlined text-[32px]">cloud_upload</span>
                        </div>
                        <div class="flex flex-col items-center gap-1 text-center">
                            <p class="text-lg font-bold text-luxe-text dark:text-white">Drag & Drop Nail Photos Here</p>
                            <p class="text-sm text-gallery-text-muted">High resolution recommended (JPG, PNG)</p>
                        </div>
                        <button class="mt-2 rounded-full bg-luxe-text dark:bg-white text-white dark:text-luxe-text px-6 py-2.5 text-sm font-bold transition hover:opacity-90">
                            Browse Files
                        </button>
                    </div>
                </section>

                <!-- Filters & Grid -->
                <section class="flex flex-col gap-6">
                    <div class="flex items-center justify-between">
                        <h3 class="font-serif font-bold text-2xl text-luxe-text dark:text-white tracking-tight">All Images</h3>
                        <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-primary/20 text-gallery-primary text-xs font-bold">24 ITEMS</span>
                    </div>
                    <!-- Chips Navigation -->
                    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-luxe-text text-white px-5 text-sm font-medium transition shadow-md hover:bg-black">
                            All Images
                        </button>
                        <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-white dark:bg-[#2a1718] border border-[#e7d0d2] dark:border-[#3a2223] text-luxe-text dark:text-gray-300 px-5 text-sm font-medium transition hover:border-gallery-rose-gold">
                            Bridal
                        </button>
                        <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-white dark:bg-[#2a1718] border border-[#e7d0d2] dark:border-[#3a2223] text-luxe-text dark:text-gray-300 px-5 text-sm font-medium transition hover:border-gallery-rose-gold">
                            Seasonal Trends
                        </button>
                        <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-white dark:bg-[#2a1718] border border-[#e7d0d2] dark:border-[#3a2223] text-luxe-text dark:text-gray-300 px-5 text-sm font-medium transition hover:border-gallery-rose-gold">
                            Gel Polish
                        </button>
                        <button class="flex h-10 shrink-0 items-center gap-2 rounded-full bg-white dark:bg-[#2a1718] border border-[#e7d0d2] dark:border-[#3a2223] text-luxe-text dark:text-gray-300 px-5 text-sm font-medium transition hover:border-gallery-rose-gold">
                            Nail Extensions
                        </button>
                    </div>

                    <!-- Masonry Grid -->
                    <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        <!-- Card 1 -->
                        <div class="break-inside-avoid relative group rounded-xl overflow-hidden bg-white dark:bg-[#2a1718] shadow-soft hover:shadow-lg transition-all duration-300">
                            <div class="relative overflow-hidden aspect-[3/4]">
                                <img alt="Elegant nude nails with subtle gold accents" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP4zlgNnF-qQENfb-kIEdd-7orj1St4bRlyRLx1d_P2jB6Aav2fpgchuE6yoq5BS80kW8IL9iZxXo21QQXv21GsAKCxwxvsrPf_fhoUCK7X7IbqPVQ60vwp4JAGNvKpigtVt9IJ_GmGKkoPNBhedqcPKQQgZqncbAMA2b_b11fXR1e1i1uqimuAoBWeSoNhvDvUPLOf_oo9bHvTX31tZ69foRMpx_KsOjiXft3RnMg8um_GwvIIoB_e2dCKjTBOjv200uJV88eyzCa"/>
                                <!-- Hover Overlay -->
                                <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button class="h-10 w-10 rounded-full bg-white text-text-dark hover:bg-gallery-rose-gold hover:text-white transition flex items-center justify-center shadow-lg" title="Edit Details">
                                        <span class="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button class="h-10 w-10 rounded-full bg-white text-gallery-primary hover:bg-gallery-primary hover:text-white transition flex items-center justify-center shadow-lg" title="Delete Image">
                                        <span class="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col gap-3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Minimalist</span>
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Gold</span>
                                </div>
                                <div class="flex justify-between items-center text-xs text-gallery-text-muted">
                                    <span>Uploaded Oct 24</span>
                                    <span class="font-medium text-text-dark dark:text-white">2.4k views</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Card 2 -->
                        <div class="break-inside-avoid relative group rounded-xl overflow-hidden bg-white dark:bg-[#2a1718] shadow-soft hover:shadow-lg transition-all duration-300">
                            <div class="relative overflow-hidden aspect-[4/5]">
                                <img alt="Classic red gel manicure close up" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkbobtehOupRsKoTAl7mSfcoIb4TsrotU3EjKHLHR0G8gWwEr4c2syJlpg5pvv86NCGYjQPqF4dNBl6MGaohr6fhOpEs8oQr79bBNJjyJmTFLQu3W7J_WOP6nNGxce4PeyBUk7SDkSAusxnUuVZ7B6jBHFI8XkJlsHUXQ7jtAP9vfaTn8SyfusgTiydl9nkDT2gIJMJPrzJgaA9O1n_0sZvli5lrPnubPUEkYW4QgStFZqYdNVkwbSrfeqGqGWwCf0KDGN5gWyWXrH"/>
                                <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button class="h-10 w-10 rounded-full bg-white text-text-dark hover:bg-gallery-rose-gold hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button class="h-10 w-10 rounded-full bg-white text-gallery-primary hover:bg-gallery-primary hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col gap-3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Classic Red</span>
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Gel</span>
                                </div>
                                <div class="flex justify-between items-center text-xs text-gallery-text-muted">
                                    <span>Uploaded Oct 22</span>
                                    <span class="font-medium text-text-dark dark:text-white">1.1k views</span>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="break-inside-avoid relative group rounded-xl overflow-hidden bg-white dark:bg-[#2a1718] shadow-soft hover:shadow-lg transition-all duration-300">
                            <div class="relative overflow-hidden aspect-square">
                                <img alt="Complex floral nail art design" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOg2lBJdjYGRihdHUAZVhYQYahh8TVX05rCM7yMcYzIeaiQ5ZVDGxa54ypSzt5la7LNx0tWzN54Mln693yhbAjw2mPdObxnDfK3CTWvFn6YU3HChlnW_fussaRd2I7E2QreBfhFm90oHePlRqhL-qz1GSHHEVhWujQFQpeUiuNeWurzSrbdMeHh4hSLJt9kinTJK-vMetPNKHjzqudDmXu-00qXaBk8w9F-5NzFD5756yntaRbKWgsDOcqBNT-ndUMoaF4J3XR08ZZ"/>
                                <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button class="h-10 w-10 rounded-full bg-white text-text-dark hover:bg-gallery-rose-gold hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button class="h-10 w-10 rounded-full bg-white text-gallery-primary hover:bg-gallery-primary hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col gap-3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Floral</span>
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Spring</span>
                                </div>
                                <div class="flex justify-between items-center text-xs text-gallery-text-muted">
                                    <span>Uploaded Oct 20</span>
                                    <span class="font-medium text-text-dark dark:text-white">856 views</span>
                                </div>
                            </div>
                        </div>

                        <!-- Card 4 -->
                        <div class="break-inside-avoid relative group rounded-xl overflow-hidden bg-white dark:bg-[#2a1718] shadow-soft hover:shadow-lg transition-all duration-300">
                            <div class="relative overflow-hidden aspect-[3/4]">
                                <img alt="Abstract pastel swirls nail design" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVedjH-JAvZKaJ9ILY0uYjrcLB8kaqBB2-6ANcFj57AvXGgZVkdKhBd4WOUgJGaolGlK4Ao1naLpFN9mx8IbLc_F_ynjXGJhF54EC4w8VHB_JDOjw0z4eJ8VwoZQtdIV7bb5NfN2x60iiyvRsbL_Jkcx7d5tWUqsxMD5BRzt_qn-t8QKxf5voLe4pdVwwHX0U2ybhSioLjvArjY-lzsONCt0h-5gu_BeF8CFxuYQla6BygkwZAzCM3OOpVUEokV8iv93X86THG6XnM"/>
                                <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button class="h-10 w-10 rounded-full bg-white text-text-dark hover:bg-gallery-rose-gold hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button class="h-10 w-10 rounded-full bg-white text-gallery-primary hover:bg-gallery-primary hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col gap-3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Abstract</span>
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Pastel</span>
                                </div>
                                <div class="flex justify-between items-center text-xs text-gallery-text-muted">
                                    <span>Uploaded Oct 18</span>
                                    <span class="font-medium text-text-dark dark:text-white">3.2k views</span>
                                </div>
                            </div>
                        </div>

                         <!-- Card 5 -->
                        <div class="break-inside-avoid relative group rounded-xl overflow-hidden bg-white dark:bg-[#2a1718] shadow-soft hover:shadow-lg transition-all duration-300">
                            <div class="relative overflow-hidden aspect-[4/3]">
                                <img alt="Dark moody nail art with glitter" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGaUPoRF9vrb1q-G_nZQrXxq769uvwsTk7XTRgSj_BobbFNE3cwPuS9MsYQzN0_EHpLXNqCKDbFCcGn1mEJmiUGoibHEguFhcuH1YcG3WGCT8eM_1Wg71mXcyiqUD9oO6AB4SdM14yb5R_E5b-WFz1Ltfww8Kyvc2oG4oIZJg2W02-_qhQJBfe2QR80TMaiuZQsLh4z153KhMsEqGCvKngA988IaFm697rPgzmElLZ3DFaahxss7yjUu_e5ID1W1ZnfZwDzewl6_bF"/>
                                <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button class="h-10 w-10 rounded-full bg-white text-text-dark hover:bg-gallery-rose-gold hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button class="h-10 w-10 rounded-full bg-white text-gallery-primary hover:bg-gallery-primary hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col gap-3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Party</span>
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Glitter</span>
                                </div>
                                <div class="flex justify-between items-center text-xs text-gallery-text-muted">
                                    <span>Uploaded Oct 15</span>
                                    <span class="font-medium text-text-dark dark:text-white">1.8k views</span>
                                </div>
                            </div>
                        </div>

                        <!-- Card 6 -->
                        <div class="break-inside-avoid relative group rounded-xl overflow-hidden bg-white dark:bg-[#2a1718] shadow-soft hover:shadow-lg transition-all duration-300">
                            <div class="relative overflow-hidden aspect-[3/4]">
                                <img alt="French tip manicure with modern twist" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPQnkIDE4D12H0Dm_dagUc04QQdG5E6l9n__9qravSpiLejB08nN2MWxUwFMZ-eYjfLZu-MrD0Vv_HP0_o3zz3-pUBu6God5rJefLQWfbtuZjQU_dDED0R3Wn_PZ1x4a3WdQ0fdqjkdf2ymctu7HTHXJXp11D-p4kM2kt7w1FyEopuEe4msfqfFCsKx_nrDedaMiD7ZwZSNUblTSOz-xYhqBbM8k90SDYxYs9KD3peIFSbWh9DO2y57JsOEKIctRLN6ScnTPmX-kJi"/>
                                <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button class="h-10 w-10 rounded-full bg-white text-text-dark hover:bg-gallery-rose-gold hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button class="h-10 w-10 rounded-full bg-white text-gallery-primary hover:bg-gallery-primary hover:text-white transition flex items-center justify-center shadow-lg">
                                        <span class="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col gap-3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">French Tip</span>
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">Modern</span>
                                </div>
                                <div class="flex justify-between items-center text-xs text-gallery-text-muted">
                                    <span>Uploaded Oct 12</span>
                                    <span class="font-medium text-text-dark dark:text-white">4.1k views</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Pagination / Footer -->
                    <div class="flex justify-center pt-8 pb-12">
                        <button class="flex items-center gap-2 text-sm font-bold text-gallery-text-muted hover:text-text-dark transition">
                            <span class="material-symbols-outlined text-[20px]">autorenew</span>
                            Load More Images
                        </button>
                    </div>
                </section>
            </div>
        </main>
    </div>
    `
})
export class AdminGalleryComponent { }
