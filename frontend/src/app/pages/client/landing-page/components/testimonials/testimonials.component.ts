import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landing-testimonials',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-accent-nude/20 dark:bg-white/5 overflow-hidden">
        <div class="layout-container mx-auto max-w-[1280px] px-6">
            <div class="flex flex-col gap-4 mb-10 text-center">
                <h2 class="text-3xl md:text-4xl font-black text-text-main dark:text-white">Client Love</h2>
            </div>
            <!-- Scrolling Container -->
            <div class="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory">
                <!-- Review 1 -->
                <div class="min-w-[300px] md:min-w-[400px] snap-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-6">
                    <div class="flex items-center gap-4">
                        <div class="size-12 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYt49qIT1o9Dukh6RWuJzDyhKKZcWrKE8cZIRWS7LUWAD4PuLuqLvi_bgO_AaQ6FIqcEudInRM55b1noNB2oXPwrdt0woKbF2J3LX8tkQ2ygtkMvoS4Is7fNHOfbR5tx9Ph0AaEVZIBCjZF9hwmQAEGUXtsXRFcYMza2ZfNMrn8J8Pl_rgUg8i4o20CWAN6Y9J_or95Mu_JsvXxxYRgp1JliUTJMM6E7zYTxQ8O0xWlDRaVlpGm_X93Mq7io7gxOqQxKLsIc2udBys');"></div>
                        <div>
                            <h4 class="font-bold text-text-main dark:text-white">Sarah J.</h4>
                            <p class="text-xs text-gray-500">2 days ago</p>
                        </div>
                    </div>
                    <div class="flex text-yellow-400">
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 italic">"The best manicure I've ever had! The attention to detail is unmatched and the atmosphere is so relaxing."</p>
                </div>
                <!-- Review 2 -->
                <div class="min-w-[300px] md:min-w-[400px] snap-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-6">
                    <div class="flex items-center gap-4">
                        <div class="size-12 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpvQBym4G3VdFinjtqIE5KgRJHtc15Skwb8w1ZDGB8vGEpSZJ97ZVN81lJqoInG7mKgMWpiNRgdl2E2V2rWRCB3_MAVBuutCvJlHdyfLJGtxnQg-HQVNhbXA0feBmYXOBPcYbii84t5bljXVhmHKWtbUEqfzZsaGqz3vyhO4GfjNej_QqueXi6mTtjdoLDDpJMwCb2SY-BVh67zZgSRbj510kCM8WXfkjjnFT-Bynd-HD8xjXhY5u1Cr8egl_2AYCbe3xgb57EcD0Y');"></div>
                        <div>
                            <h4 class="font-bold text-text-main dark:text-white">Emily R.</h4>
                            <p class="text-xs text-gray-500">1 week ago</p>
                        </div>
                    </div>
                    <div class="flex text-yellow-400">
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 italic">"Absolutely stunning designs. My gel nails lasted for 3 weeks without a single chip. Highly recommend!"</p>
                </div>
                <!-- Review 3 -->
                <div class="min-w-[300px] md:min-w-[400px] snap-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-6">
                    <div class="flex items-center gap-4">
                        <div class="size-12 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5T24KIGoqmvg2qaotuJ7Eb7-0HosKTT1e7bC20yYIPuxtD9VV38Kv2St2pg-oPpoKaPqNrXadRoGjL-hRFW8RWfxL63mKCRLthLkWj8uJ_Rt6h-QPfMUsGWnPCrzTWKZBQ9W55sMG8-SfbSpYcYXbQGUKubEPdrNzrQQohb2aN8cdFlS2eKpbo2iZ7PqD2Go9pGTx06ZAwMsWBdmD1ESPbJevy4bkxUrwF_IZcg0Kt5XNsxe812VlRWEMjdtUSD2inFqgWEyTxZzE');"></div>
                        <div>
                            <h4 class="font-bold text-text-main dark:text-white">Jessica T.</h4>
                            <p class="text-xs text-gray-500">2 weeks ago</p>
                        </div>
                    </div>
                    <div class="flex text-yellow-400">
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 italic">"Finally found a place that takes sanitization seriously. Plus, the color selection is endless."</p>
                </div>
                <!-- Review 4 -->
                <div class="min-w-[300px] md:min-w-[400px] snap-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-6">
                    <div class="flex items-center gap-4">
                        <div class="size-12 rounded-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfl1tMoQ__XoQQVhpUxThWc66D9zDWYLZfZcrXkY9aROiEm9n9-HcN9-y8FimO-Dr0Y2CwY1OpMPenWCMEc2LDwFo8_xlkhHHhuxAwWs0I8euBefYn9ew8Lz1-CIPuYZ-py-LEaGb9ci8U_x38lfF5Jvt61PipTaCcxrjr443MZQncVDEW5YjG7_DUMzH97l1BPOxTwmnY5iHGZz4IY0_fgMEIctWhLLjBs3mCa3BMfuvBc0TLqu8YMZGw1EAK6_DnThjwrn-Yrt7x');"></div>
                        <div>
                            <h4 class="font-bold text-text-main dark:text-white">Amanda L.</h4>
                            <p class="text-xs text-gray-500">3 weeks ago</p>
                        </div>
                    </div>
                    <div class="flex text-yellow-400">
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                        <span class="material-symbols-outlined fill-current">star</span>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 italic">"The technicians are true artists. I brought in a complex design from Pinterest and they nailed it!"</p>
                </div>
            </div>
        </div>
    </section>
  `
})
export class LandingTestimonialsComponent { }
