import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-client-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex h-screen w-full bg-dashboard-bg-light dark:bg-dashboard-bg-dark text-dashboard-text-main dark:text-white font-display antialiased overflow-hidden">
        <!-- Sidebar Navigation -->
        <aside class="w-80 h-full flex flex-col bg-white dark:bg-[#1a0b0e] border-r border-[#f4e6e9] dark:border-white/10 flex-shrink-0 z-20 hidden md:flex">
            <div class="p-8 flex items-center gap-3">
                <div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shadow-sm border border-dashboard-rose-gold/20" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwpMe60J5ywVvKHQRXVTvZW57Gdo6CRlTc8R_VAsGnFbdvVJ6kg4kDzdheQGSWIRBR8no_yhGnUJ_U6G5fV0gYHCoFnyCFxGEnjTEA-uxjyu0eYp4h3x_UNTso0-iSZW3DqD-9ZyDBPIIPtwyLpZrL9hutokY6a2CWCOpkOT3O0D-W-M0UitFQCzhZaiQ3sgFIXccwZzvtd4UfK0BAXyACW2wA9IdmxfFZsauhGfPdJrS4sLJTNF0HotMzptICkM_-XEwyE5gVq4gb");'></div>
                <h1 class="text-dashboard-text-main dark:text-white text-xl font-serif font-bold tracking-wide">Luxe Nail Art</h1>
            </div>
            <nav class="flex flex-col gap-2 px-6 mt-4 flex-1">
                <a href="#" class="group flex items-center gap-4 px-6 py-4 rounded-full bg-dashboard-primary/40 dark:bg-dashboard-primary/20 transition-all duration-300">
                    <span class="material-symbols-outlined text-dashboard-rose-gold dark:text-dashboard-primary" style="font-size: 24px;">dashboard</span>
                    <span class="text-dashboard-text-main dark:text-white text-base font-semibold">Overview</span>
                </a>
                <a href="#" class="group flex items-center gap-4 px-6 py-4 rounded-full text-dashboard-text-sub dark:text-gray-400 hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-all duration-300">
                    <span class="material-symbols-outlined group-hover:text-dashboard-rose-gold transition-colors" style="font-size: 24px;">calendar_month</span>
                    <span class="text-base font-medium">Appointments</span>
                </a>
                <a href="#" class="group flex items-center gap-4 px-6 py-4 rounded-full text-dashboard-text-sub dark:text-gray-400 hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-all duration-300">
                    <span class="material-symbols-outlined group-hover:text-dashboard-rose-gold transition-colors" style="font-size: 24px;">image</span>
                    <span class="text-base font-medium">Gallery</span>
                </a>
                <a href="#" class="group flex items-center gap-4 px-6 py-4 rounded-full text-dashboard-text-sub dark:text-gray-400 hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-all duration-300">
                    <span class="material-symbols-outlined group-hover:text-dashboard-rose-gold transition-colors" style="font-size: 24px;">settings</span>
                    <span class="text-base font-medium">Settings</span>
                </a>
            </nav>
            <div class="p-8 border-t border-[#f4e6e9] dark:border-white/10">
                <button class="flex items-center gap-3 w-full text-left text-dashboard-text-sub dark:text-gray-400 hover:text-dashboard-rose-gold transition-colors">
                    <span class="material-symbols-outlined" style="font-size: 24px;">logout</span>
                    <span class="text-sm font-medium">Sign Out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 h-full overflow-y-auto bg-dashboard-bg-light dark:bg-dashboard-bg-dark p-6 md:p-12 lg:px-16">
            <div class="max-w-5xl mx-auto flex flex-col gap-10">
                <!-- Page Heading -->
                <header class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <p class="text-dashboard-rose-gold dark:text-dashboard-primary text-sm font-bold tracking-widest uppercase mb-2">Dashboard</p>
                        <h2 class="text-dashboard-text-main dark:text-white text-4xl md:text-5xl font-serif font-medium leading-tight">Welcome back, Isabella</h2>
                    </div>
                    <div class="flex items-center gap-3 bg-white dark:bg-white/5 p-2 pr-4 rounded-full shadow-lg shadow-black/5 border border-white dark:border-white/10">
                        <div class="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-white/20" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuABFan9uX988X0HXxjgTD8crkyIbVscMtPYCFsyZckgA4gsa6-2zvgoGy-BGJo6opRsczCtjOjeqESUTzgxCU-WD-RawLnS6CT1fPFZteSeJCTQGtPb6s8OIf-G1GkoFXObEGGgive1WtjSjm7ASn72Avzb8UByN1T6sv53nSFWLKsHnPJv4JWVIwvhN7NjKt_P7cT4ukQLKKuiP_vbhm_5Jt1BHAlAQK0sdpqiJVGMH2BMNIfNg3hPUUuMbMa39jkGSp3WZgPqPQ9i");'></div>
                        <div class="flex flex-col">
                            <span class="text-xs font-bold text-dashboard-text-main dark:text-white">Isabella R.</span>
                            <span class="text-[10px] text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wide">Premium Member</span>
                        </div>
                        <button class="ml-2 size-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <span class="material-symbols-outlined text-dashboard-text-sub" style="font-size: 20px;">expand_more</span>
                        </button>
                    </div>
                </header>

                <!-- Active Card: Upcoming Appointment -->
                <section class="w-full">
                    <div class="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#ffe4eb] to-[#fff0f3] dark:from-[#3a1d24] dark:to-[#230f14] shadow-lg shadow-black/5 p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border border-white/50 dark:border-white/5">
                        <!-- Decorative Abstract Shape -->
                        <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
                        <div class="flex flex-col gap-6 relative z-10 w-full md:w-auto">
                            <div>
                                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-sm mb-4">
                                    <span class="size-2 rounded-full bg-dashboard-rose-gold animate-pulse"></span>
                                    <span class="text-xs font-bold text-dashboard-rose-gold dark:text-dashboard-primary uppercase tracking-wider">Upcoming</span>
                                </div>
                                <h3 class="text-2xl md:text-3xl font-serif text-dashboard-text-main dark:text-white mb-2">Next Pampering Session</h3>
                                <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-dashboard-text-sub dark:text-gray-300">
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined" style="font-size: 20px;">event</span>
                                        <span class="font-medium">Feb 14, 2:00 PM</span>
                                    </div>
                                    <div class="hidden md:block w-1 h-1 rounded-full bg-dashboard-rose-gold/50"></div>
                                    <div class="flex items-center gap-2">
                                        <span class="material-symbols-outlined" style="font-size: 20px;">spa</span>
                                        <span class="font-medium">Gel Manicure Deluxe</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="flex -space-x-3 overflow-hidden">
                                    <div class="inline-block size-12 rounded-full ring-2 ring-white dark:ring-[#230f14] bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqpShhAf3NDqbn4OzPMAV2Ku9Q-hERKZSwkUC7tx5BZcCuHwMihlA3JLw6RGbu-Cq3i8OIcT7TX2ICZstJ_SNCc3lhXbbB3iSONKVc-wfhzcYUqCfmSLNjabMVbwlR04Q_Qu00K4IcQrUFND4Wp01JK4_-_7n2wk0RaQQI88gk5mqvB09nHLUZ5l5l25PjZMNNGpHL8OW7-kc3ttMn5s2Ty_HXv2ap_56kJ1lgJghgpJ5TBq2GkfCDmnhiTgp6jLhQYIMcNmWZaJ2t");'></div>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-sm font-bold text-dashboard-text-main dark:text-white">Sarah Jenkins</span>
                                    <span class="text-xs text-dashboard-text-sub dark:text-gray-400">Master Stylist</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center md:self-center relative z-10 w-full md:w-auto">
                            <button class="w-full md:w-auto group flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-dashboard-rose-gold text-dashboard-rose-gold hover:bg-dashboard-rose-gold hover:text-white dark:border-dashboard-primary dark:text-dashboard-primary dark:hover:bg-dashboard-primary dark:hover:text-[#230f14] transition-all duration-300 font-bold tracking-wide text-sm bg-transparent">
                                <span>Reschedule</span>
                                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" style="font-size: 18px;">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Recent History Table -->
                <section>
                    <div class="flex items-center justify-between mb-6 px-2">
                        <h3 class="text-xl font-bold text-dashboard-text-main dark:text-white">Recent History</h3>
                        <a href="#" class="text-sm font-semibold text-dashboard-rose-gold hover:text-dashboard-text-main dark:text-dashboard-primary dark:hover:text-white transition-colors">View All</a>
                    </div>
                    <div class="bg-white dark:bg-[#1a0b0e] rounded-xl md:rounded-2xl shadow-lg shadow-black/5 overflow-hidden border border-[#f4e6e9] dark:border-white/5">
                        <div class="overflow-x-auto">
                            <table class="w-full min-w-[600px]">
                                <thead>
                                    <tr class="border-b border-[#f4e6e9] dark:border-white/5 bg-dashboard-bg-light/50 dark:bg-white/5">
                                        <th class="px-6 py-4 text-left text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Date</th>
                                        <th class="px-6 py-4 text-left text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Service</th>
                                        <th class="px-6 py-4 text-left text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Artist</th>
                                        <th class="px-6 py-4 text-right text-xs font-bold text-dashboard-text-sub dark:text-gray-400 uppercase tracking-wider w-1/4">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-[#f4e6e9] dark:divide-white/5">
                                    <tr class="group hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-colors">
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <div class="flex items-center gap-3">
                                                <div class="bg-dashboard-primary/20 p-2 rounded-full text-dashboard-rose-gold dark:text-dashboard-primary">
                                                    <span class="material-symbols-outlined" style="font-size: 20px;">check_circle</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-dashboard-text-main dark:text-white">Jan 20, 2024</span>
                                                    <span class="text-xs text-dashboard-text-sub dark:text-gray-500">10:00 AM</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <span class="text-sm font-medium text-dashboard-text-sub dark:text-gray-300">Gel Removal & Care</span>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <div class="flex items-center gap-2">
                                                <div class="size-6 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjtuf7crP_wKz3jzxNAZK-PR2gtmaz7--kJFguLw82Vkh7hXMm3k9oqdXKSZoOV7wXiWeoeVRfOmvSWk6l0s0MB7tF9CHI920cTNQWHDJcycoPYlcxeiA0OR5LYqRZt-c_oCVBo49WmOtbFZJ8RXa6a20ztPkuwDKR88duqhjJzrE8F2doX7JvrSCpmzG-LY2O4gVqjLpnZG_Ctp1spPZNu38HWf_5-QU6Gih1OtD0mjnxtET2zbOzPg5lTTidFha4eKzQt0swEVbh");'></div>
                                                <span class="text-sm text-dashboard-text-sub dark:text-gray-300">Sarah</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap text-right">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="group hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-colors">
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <div class="flex items-center gap-3">
                                                <div class="bg-dashboard-primary/20 p-2 rounded-full text-dashboard-rose-gold dark:text-dashboard-primary">
                                                    <span class="material-symbols-outlined" style="font-size: 20px;">check_circle</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-dashboard-text-main dark:text-white">Dec 15, 2023</span>
                                                    <span class="text-xs text-dashboard-text-sub dark:text-gray-500">2:30 PM</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <span class="text-sm font-medium text-dashboard-text-sub dark:text-gray-300">Acrylic Full Set</span>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <div class="flex items-center gap-2">
                                                <div class="size-6 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBs-u91ULWEWmMB32BcdVkeKjFr6rvI_v4r5PCBxAjuhshsV-A1sngPA1W_nvgX4GwEdQIfAqeCi5ZqN-7coItTewpJCUeOViSmWcE1m72k3TzIKXc4_M_3KTHf8zKzbDxAN2tCWk43oyEOzY81DNG740YnSRHHHE9OHcQhBIlvzPZsBRYzUjUAx9ZTinro_E6f_wdBpkxrMBPZuEMpx3POF_OqDbYGefcV6mvmT1f9jRmkyGPw4CSqO3mrJQwjZuVlh5C51BDdqP7_");'></div>
                                                <span class="text-sm text-dashboard-text-sub dark:text-gray-300">Emily</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap text-right">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                    <tr class="group hover:bg-dashboard-bg-light dark:hover:bg-white/5 transition-colors">
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <div class="flex items-center gap-3">
                                                <div class="bg-dashboard-primary/20 p-2 rounded-full text-dashboard-rose-gold dark:text-dashboard-primary">
                                                    <span class="material-symbols-outlined" style="font-size: 20px;">check_circle</span>
                                                </div>
                                                <div class="flex flex-col">
                                                    <span class="text-sm font-bold text-dashboard-text-main dark:text-white">Nov 02, 2023</span>
                                                    <span class="text-xs text-dashboard-text-sub dark:text-gray-500">11:15 AM</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <span class="text-sm font-medium text-dashboard-text-sub dark:text-gray-300">Classic Manicure</span>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap">
                                            <div class="flex items-center gap-2">
                                                <div class="size-6 rounded-full bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCzy-i5KHbPxSw5p3m2jMpKNQ028iPuOpM_Sbc737bsYTNQ_d3aILIkiZsG6286DYoc1Wgf7_fJLLTLTpf7CWpEgrpm2KGEvaSNx3hwp84QnvMqUCTZNwxz2YqOMR2HAv9uXGJIyJmA0q4_XC-_t0OpVFe4p2wLIW9jjNNd0fSqhMcfsy-MeTNgFezRUYmc-bpZ83mi7f9u2Ha8gpcK_HpSLPmLxKk71Pu6jCCe1ixvdslVj3BAM_IE86SzgmvLCjWICuk_cR946Qr");'></div>
                                                <span class="text-sm text-dashboard-text-sub dark:text-gray-300">Sarah</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5 whitespace-nowrap text-right">
                                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-100 dark:border-green-800">
                                                Completed
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
  `
})
export class ClientDashboardComponent { }
