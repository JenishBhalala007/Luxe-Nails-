import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landing-gallery',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-20 px-6">
        <div class="layout-container mx-auto max-w-[1280px]">
            <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                <div class="flex flex-col gap-2">
                    <h2 class="text-3xl md:text-4xl font-black text-text-main dark:text-white">Latest Creations</h2>
                    <p class="text-gray-600 dark:text-gray-300">Follow us on Instagram for daily inspiration.</p>
                </div>
                <a href="#" class="text-accent-rose font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    View All Gallery <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[300px]">
                <div class="col-span-1 md:col-span-2 row-span-2 rounded-lg overflow-hidden relative group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3EvCCDA32bz-iREMlgA8soGA_zzDTS0Z4qo87zkpP_Son3i_Yvftv_2Vm4UIG0bTEbKCLx98_eg0VuAATA_5JhUPEljwPpdfpfCfk3BHrG8LqUy8Tt4hKuI5wXCquPHVcDfAWwZv0F63Nxf7hskogP8vft64r3qXo05mCJdAlLRYpWEdnLiyDshkpZfVJA7d2UULS-tnB7FeJV-IJV9QSqvdXGYLOai8gcIoHY9vgN5iHm5N0c5QUaUjtmQXR0ra1AM6Mb3KN2dF-" 
                        alt="Nail art design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div class="rounded-lg overflow-hidden relative group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvkdSMDg4cEI5zZRNYq7lE0bjvH8II6Em1aZH21MbEhZOEZO8Ix3dzgBSf0sr1HINhhPeANA2w76JzvCQZcPoUVPMEZU3PnOt4X80JDShX_EvOH1yqNDMCFuurAg0xuQOZMhAn-CdBL0qC9kpIVwzqSPQdI-AXfMSrQJkyTY9wcXrtYZNbFsbvJtkDGtP3c37D8uJwRAkc9S18Jp9uHi1t3QzSAi9Pdha1okGJLb91_cOa2TQrQ1U_3K_vIPpDDEkIDn5BXbP-J4nu" 
                        alt="Nail art design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div class="rounded-lg overflow-hidden relative group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHXKL79c12dr4XoPivHaLhstU2cu_mHo_75SZ1Fmk2dAqNKnFrvKsQxRB8F9ZUJAmrVx1836lqmAPZyNw9gIdql8j7pPsCd0ghSJ325NbNudHRIVF3qFFw-lCUbLVxNz7xuMnwoEJQnphxOO02JA8NsiC4RASQedVgWrh2UZ8dYpP8X21yNipcxaLS_97gwoo60c0sXmDMAbNxgYvAToggsyOig0CdpJ-I_7ERCW05Ncqnsfa5GTWIDRHmtGIbhWaePzUCX6CDs1LQ" 
                        alt="Nail art design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div class="col-span-2 md:col-span-2 rounded-lg overflow-hidden relative group">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuANM6LoRkyAgi8n7UB-S5xaZQHaS16N9W2WdFy3YSYwMW8WNJtBnjh5Cbbjc1q98okrYkE8VoEFjvt-TphQWWAcBTquVDIL7SEXjzx6FixrJ5UcXkpI3xTqG-krwffii74daB-1PMQ4O8tN7cOq2uX2mysx4Y7TODjKwWBXc4YKOUYNWgr0KwAJ2Z-kJVagPq14EFASEa7H0xA9_3fVDxNR5aO6p7hng0ssXkIbh8WkU2WbilawPG7qIsSsIShI1NXbUSSoky-cBWCx" 
                        alt="Nail art design" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
            </div>
        </div>
    </section>
  `
})
export class LandingGalleryComponent { }
