import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services-grid',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Card 1: Gel Manicure -->
            <div class="group relative flex flex-col sm:flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(238,43,88,0.15)] border border-transparent hover:border-primary-bold/20 transition-all duration-300">
                <div class="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjEHfEOXpJrgTezdlWuE3GU90VCYCSIa4UGA9OoG0pdAjajZzjBro0frD43yK8A69nKuiQQPy_Vp1tm08TyBLDtqpaEcXGJKLkMllEEzx72SVAQFdWhKIxNwP5Ya40-n2WIOMf1oEj1DNGJARyNKKphPLWCIltnv2DnXbw_Wc5btAhTZTOHhWW7HaPyw_NXB9aZ1zCgcNOBveZC5oltnr4fcVywapwPUO6yjMxR0Caz-hcN6XG2vHwtdswNREws6CLqXXwJZrNmIsr");'></div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-text-main dark:text-white">Classic Gel Manicure</h3>
                            <span class="text-primary-bold font-bold text-lg">$55</span>
                        </div>
                        <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                            <span class="material-symbols-outlined text-[16px]">schedule</span>
                            45 mins
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            Includes cuticle care, shaping, and long-lasting gel polish application with a high-gloss finish.
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-bold text-primary-bold hover:bg-primary-bold hover:text-white transition-all text-sm font-bold uppercase tracking-wide">
                            <span>Book This</span>
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Card 2: Acrylics -->
            <div class="group relative flex flex-col sm:flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(238,43,88,0.15)] border border-transparent hover:border-primary-bold/20 transition-all duration-300">
                <div class="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIQ9C__rRB9MugHXjpKYNX_JIkGuOuSjxrrl5t45kG8SL-sLMxUYItDA26FilJS4fikOWz6Ovyd8Mv7fN_PwVL2iYhrZBdTqsIE1KdZ_Ucqcsq8RM9uhysxXTxylr6s2rY1d3pE6NjXg0BAiFyUS4TlpuTZihsFxBMDOBfAXIxXo4vbv4jrEs0dyA7wa7DoTbdv7cQbYdaGZU45LDErXNJM_ba0fEA0MjYNkH1yBgPEjbwvaCeNpkv4gjKnubHcfryGUKhY2BQlpTv");'></div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-text-main dark:text-white">Sculpted Acrylics</h3>
                            <span class="text-primary-bold font-bold text-lg">$85</span>
                        </div>
                        <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                            <span class="material-symbols-outlined text-[16px]">schedule</span>
                            90 mins
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            Custom length extensions sculpted to perfection for a flawless, durable, and natural look.
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-bold text-primary-bold hover:bg-primary-bold hover:text-white transition-all text-sm font-bold uppercase tracking-wide">
                            <span>Book This</span>
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Card 3: Nail Art -->
            <div class="group relative flex flex-col sm:flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(238,43,88,0.15)] border border-transparent hover:border-primary-bold/20 transition-all duration-300">
                <div class="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3ebjdCJsXNpRY_5B9bSPQm5Jkhkh4PIIDGLi6uvV78NXrqa9T-DHeVQSkI60_s18Uq0KVL2PMqBP8F1Q0onlw4xG8UMgTUKY4NQxts-rGRaLiZ4rcPyLU_XnfbFls6p43xVXFHvBmOzSJB8V-5cuJZZ__58kGVDsb2BpLPBCdkXGUSPmHFkUgCZGJEJF1nomRXmpO4YIuz86mxC_QAT86HEV6-cR53mr2rBh-2PRXBkAJvYVgtLKwihyFNqaI78jv_pTHPCWeu3IJ");'></div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-text-main dark:text-white">Intricate Nail Art</h3>
                            <span class="text-primary-bold font-bold text-lg">+$20</span>
                        </div>
                        <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                            <span class="material-symbols-outlined text-[16px]">schedule</span>
                            +30 mins
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            Hand-painted designs, chrome powder, gems, or abstract lines. Price varies by complexity.
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-bold text-primary-bold hover:bg-primary-bold hover:text-white transition-all text-sm font-bold uppercase tracking-wide">
                            <span>Book This</span>
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Card 4: Pedicure -->
            <div class="group relative flex flex-col sm:flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(238,43,88,0.15)] border border-transparent hover:border-primary-bold/20 transition-all duration-300">
                <div class="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPBK5vf54Je9gQL7e5kz0BkJbdVQV1gVNy-FHymdTK6lqcD1YJl4d7Ez6bdlIe4NjJ6Oc5MZ5ct6yCwzBP7XwsLelncZkbaEEeuUI73syryJmp3wRHEoe7PUyVgczdwjkksppMRXQoXcApQvnEVVMunY9R_9gOmk7X0dvHt3KmcSMSOa5PpxCHkQBmDaVmVFLvSAvcGWNDYVMLfHu93RgDib085Gy2TczzPxcjX6k2BmTtMubAGcWQVKgkq5ST41rkFXFn0HOrifoW");'></div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-text-main dark:text-white">Luxury Spa Pedicure</h3>
                            <span class="text-primary-bold font-bold text-lg">$75</span>
                        </div>
                        <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                            <span class="material-symbols-outlined text-[16px]">schedule</span>
                            60 mins
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            Soak, exfoliation, mask, massage, and polish. The ultimate relaxation for your feet.
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-bold text-primary-bold hover:bg-primary-bold hover:text-white transition-all text-sm font-bold uppercase tracking-wide">
                            <span>Book This</span>
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Card 5: Hard Gel -->
            <div class="group relative flex flex-col sm:flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(238,43,88,0.15)] border border-transparent hover:border-primary-bold/20 transition-all duration-300">
                <div class="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8mRxc77d4iPb49UqFi2EVpFEqn-2x0YLq9jvvaVFRjs3Y7YTL7aILxUEQUii1lZxKfIAZ0K_2497zDy-Ch3D7D6YF4VuUzxsyk377PyqIS-2QR9oNICSpKBBIqcGgkyGeSOUp9x2TJwZbxr0J9hx22wO9avQ0SGpkbDccAqqC6NYm6cMoCKvxbl7jYIyFvjmFZFVCokOCbA0G3hugLYM0s9dpcihVCnIKle2AtBH_7jxuO8O0t--WLAzWmYaYNJyBXBrNMwEoo_6f");'></div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-text-main dark:text-white">Hard Gel Overlay</h3>
                            <span class="text-primary-bold font-bold text-lg">$65</span>
                        </div>
                        <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                            <span class="material-symbols-outlined text-[16px]">schedule</span>
                            60 mins
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            Strengthen your natural nails with a durable hard gel layer. Perfect for growing out length.
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-bold text-primary-bold hover:bg-primary-bold hover:text-white transition-all text-sm font-bold uppercase tracking-wide">
                            <span>Book This</span>
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Card 6: Removal -->
            <div class="group relative flex flex-col sm:flex-row bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(238,43,88,0.15)] border border-transparent hover:border-primary-bold/20 transition-all duration-300">
                <div class="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-cover bg-center" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgOj_scnNTXK0R0XM2PqC39Jr1lwlpvZ5xM5R4fz5sO7FuCINXBJ5hOfqqWbtIdlHt5aAU5AN4WIdDuXmI_-6N-8ckE5334f3da4kWRPj6A3uU2Yi3RCglVlEbyfdqz9R-1vXnI3tVCf8Uu9bQWES_Xrw1wXRjodpRjspa4p5GwvS1pQ78jVZ6CHXlUVwYXBfSCiROs9WixM0XIST1O6LZkGVpSZOqKFf1vpQB5fZdTASg3m8ZiVQb3Xl3y8VPpWger3fND48wiHFZ");'></div>
                <div class="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-text-main dark:text-white">Gel Removal</h3>
                            <span class="text-primary-bold font-bold text-lg">$15</span>
                        </div>
                        <div class="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mb-3 font-medium">
                            <span class="material-symbols-outlined text-[16px]">schedule</span>
                            20 mins
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                            Safe and gentle removal of gel polish or extensions to preserve your natural nail health.
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <button class="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-bold text-primary-bold hover:bg-primary-bold hover:text-white transition-all text-sm font-bold uppercase tracking-wide">
                            <span>Book This</span>
                            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})
export class ServicesGridComponent { }
