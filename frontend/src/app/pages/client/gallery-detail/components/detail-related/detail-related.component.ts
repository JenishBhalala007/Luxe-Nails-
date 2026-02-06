import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detail-related',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="bg-white dark:bg-[#2d1a20] py-16 px-4 md:px-10 border-t border-[#f3e7ea] dark:border-[#3a2026]">
        <div class="max-w-[1200px] mx-auto">
            <div class="flex justify-between items-end mb-8">
                <div>
                    <h3 class="text-2xl font-display font-bold text-text-main dark:text-white mb-2">More by Jessica W.</h3>
                    <p class="text-gray-500 text-sm font-body">Explore other styles from this artist</p>
                </div>
                <!-- Using inline href="#" as per HTML, ideally this should be routerLink -->
                <a href="#" class="text-rose-gold hover:text-rose-gold-hover font-bold text-sm flex items-center gap-1 group font-body">
                    View Portfolio <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
                <div class="group cursor-pointer">
                    <div class="rounded-[12px] overflow-hidden mb-3 aspect-[4/5]">
                        <img alt="Related design 1" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLentUdEMVUiNUEB6Iq4mKOeszBI_qaCSTJg__YU-WT6efsHxK2a5pq_ZG2oW_8ID7OpnY0rmKvNVufYuOYA4U3rR4x1rEkVtRgsq_19SVXW35BR6Bh1dzuPUsCvzQAf804eXLAkyf1EBcXigg8pzNIacPC6iJMBCksMuqL6P-P1ypYBQ4byYUGM7Xb0PAuIJp7aOK75k69Lu2fg2vuaVQ5ckL-Qcm7iMGnESCTiO_KOUQO1uj1dU63B2Il_qPiCpTRhy6jFe3fxyN"/>
                    </div>
                    <h4 class="font-display font-bold text-lg group-hover:text-rose-gold transition-colors text-text-main dark:text-white">Stardust</h4>
                    <p class="text-xs text-gray-400">₹95.00</p>
                </div>
                <div class="group cursor-pointer">
                    <div class="rounded-[12px] overflow-hidden mb-3 aspect-[4/5]">
                        <img alt="Related design 2" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGqxZJKdwBfIE5szL_-aVopb-3BO-HebkHJS9oU_n7l1JTTJXxmrm-UpaTgpWMBUJveNKyNT24Hu0lSKMClAhL99KJXOFy5cS5Cp8KIAsxF4F0MDCgLRVApdDxk_ksZEqVSBUHzuZUw4kJU4RNRE9Oux-DLwFpL4UumZqbnXyGDMODPct7BWqBFGsl7ms8NTd_QKIsYOk8OBBKHuXlpJoNrYj81nXKflb-Aot9F0Hgidzm_q5tzJMqjMcY9GF9qiWyiYdHqPqMKxVD"/>
                    </div>
                    <h4 class="font-display font-bold text-lg group-hover:text-rose-gold transition-colors text-text-main dark:text-white">Bridal Lace</h4>
                    <p class="text-xs text-gray-400">₹120.00</p>
                </div>
                <div class="group cursor-pointer">
                    <div class="rounded-[12px] overflow-hidden mb-3 aspect-[4/5]">
                        <img alt="Related design 3" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2z0vYTN3ThDtJRfKTm82FrD8gHDTbmbWY497pBsFzAqmQUDRIOKwSsjCGQ1yoL315gDRu6Qh9mCgB-XaMxHpDI69DuGQGcxq-qDZuSZ3VDMGzdWpnXRQBb3lZLXkicWnXJA08ABX86ce52oVHAmf3a8GLAefpepBONH_Mvd0TTmE26bpfVEPfygMa6wgn7BYUdYy8CYZhYR1BDFCnIum7ufjxprr5ERBnDwcbViZINOFm-jPxr2ItO7_ECYBxLNIBpNfmb0WCo8M3"/>
                    </div>
                    <h4 class="font-display font-bold text-lg group-hover:text-rose-gold transition-colors text-text-main dark:text-white">Rose Quartz</h4>
                    <p class="text-xs text-gray-400">₹85.00</p>
                </div>
            </div>
        </div>
    </section>
  `
})
export class DetailRelatedComponent { }
