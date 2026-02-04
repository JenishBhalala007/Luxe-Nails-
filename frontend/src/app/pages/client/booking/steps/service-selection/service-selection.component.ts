import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingSummaryComponent } from '../../components/booking-summary/booking-summary.component';

@Component({
    selector: 'app-service-selection',
    standalone: true,
    imports: [CommonModule, BookingSummaryComponent],
    template: `
    <div class="flex-1 w-full bg-booking-bg-light dark:bg-booking-bg-dark">
      <div class="max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-8">
        <!-- Left Column: Service Selection -->
        <main class="flex-1 flex flex-col gap-6">
            <div class="flex flex-col gap-3">
                <div class="flex gap-6 justify-between items-end">
                    <div>
                        <p class="text-booking-primary text-sm font-bold uppercase tracking-wider mb-1">Step 1 of 4</p>
                        <h1 class="text-2xl lg:text-3xl font-bold leading-tight text-[#1c0d10] dark:text-gray-100">Service Selection</h1>
                    </div>
                </div>
                <div class="rounded-full bg-[#e9ced4] dark:bg-white/10 h-2 w-full overflow-hidden">
                    <div class="h-full rounded-full bg-booking-primary transition-all duration-500 ease-out" style="width: 25%;"></div>
                </div>
            </div>
            <h2 class="text-xl font-bold pt-4 text-[#1c0d10] dark:text-gray-100">Select your Treatment</h2>
            
            <!-- Service List -->
            <div class="flex flex-col gap-4">
                <!-- Card 1: Gel Manicure -->
                <div class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-booking-primary/30">
                    <div class="w-full sm:w-32 aspect-[4/3] sm:aspect-square bg-center bg-cover rounded-lg shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNKXHgADqT8dzs_oHWch6WFA5G10D0lLAoWT0cQfr_pTMkidj2_EyGfqOwPZTOCaxRInLreo_vBr1rc2AmLIsHN-1opQ6igTF-FQWnev-aWd_0eygN_DkDxlTluWyWErHdUCxSeXjbbXkyV4Hq9OjoU3XMo5H9P01Pvs8aPOx_JtXH9tTICRgbq6j50GosRykbHQ_1gheGGdwp6T8TwNmNd4wNrkCKbuAGZ-fjoTp-4yF0biuRBcYyq3wHQmUlRSd0LtFHf3yjDUiy");'></div>
                    <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                        <div class="flex justify-between items-start w-full">
                            <h3 class="text-lg font-bold text-[#1c0d10] dark:text-gray-100">Gel Manicure</h3>
                            <div class="hidden sm:block text-right">
                                <span class="text-booking-primary font-bold block">₹1200</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">45 min</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">Long-lasting polish with cuticle care. Includes hand massage and moisturizing treatment.</p>
                        <div class="flex sm:hidden justify-center gap-3 mt-2 text-sm font-medium">
                            <span class="text-booking-primary">₹1200</span>
                            <span class="text-gray-400">|</span>
                            <span class="text-gray-500">45 min</span>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Acrylic Extensions (Selected) -->
                <div class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-[0_4px_20px_rgba(251,81,121,0.15)] ring-2 ring-booking-primary transition-all cursor-pointer">
                    <div class="absolute top-0 right-0 p-2 sm:p-3">
                        <div class="size-6 bg-booking-primary rounded-full flex items-center justify-center text-white shadow-sm">
                            <span class="material-symbols-outlined text-[16px] font-bold">check</span>
                        </div>
                    </div>
                    <div class="w-full sm:w-32 aspect-[4/3] sm:aspect-square bg-center bg-cover rounded-lg shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnEe37T90w6R4N7jdQc3L1odQNiw0J8Rb7cg4Tywa-CPjrDjBS4WTjdf39pO5_W4pD8-tor_cPeUBzm4O1G0Nr4dognwxszO38D_FPIVpxNUk0SSM-iwtTN8TZ_37AyX2BambhwfQKuDuxcl6C94seB8P0bVESwSnTXRV_9pVGoITW0nO4U-JCmB39AGZoBGunpYHjD2GOXlX1mSs07cizdttHpM_fZXqt0TkwSygM1N7wo6pMulaAmsQVvO3zxTOiy9JiH9-CPwyS");'></div>
                    <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                        <div class="flex justify-between items-start w-full pr-8">
                            <h3 class="text-lg font-bold text-booking-primary">Acrylic Extensions</h3>
                            <div class="hidden sm:block text-right">
                                <span class="text-booking-primary font-bold block">₹2500</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">90 min</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">Full set extensions with natural finish. Perfect for adding length and strength to your natural nails.</p>
                        <div class="flex sm:hidden justify-center gap-3 mt-2 text-sm font-medium">
                            <span class="text-booking-primary">₹2500</span>
                            <span class="text-gray-400">|</span>
                            <span class="text-gray-500">90 min</span>
                        </div>
                    </div>
                </div>

                <!-- Card 3: Express Pedicure -->
                <div class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-booking-primary/30">
                    <div class="w-full sm:w-32 aspect-[4/3] sm:aspect-square bg-center bg-cover rounded-lg shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7lcnhj49neZokpSgGbu-CYhq1j7C-BkgMzooNDVehiiIveoOJgaLZlTOtrj2OimymvvuukaRibCWJHha5VHmlQuQmysjKlX_PRBXGGDgKK1LeL8FdDbpNUSaSwyzfdWQGFn7Vi0cI9jSnvsZogHBty_JVITGasmnZ7GyltYZ12e8XbF4pFYbSWd6Qv42Hq424zD-RD_Dd8VJSr0Cn1q9MDEz3h8OX3YJa6vPiR80G8SW4wnglJFI448cKzpPd564fOTuhTxrulCrO");'></div>
                    <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                        <div class="flex justify-between items-start w-full">
                            <h3 class="text-lg font-bold text-[#1c0d10] dark:text-gray-100">Express Pedicure</h3>
                            <div class="hidden sm:block text-right">
                                <span class="text-booking-primary font-bold block">₹800</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">30 min</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">Quick soak, file, and polish change. Ideal for a quick refresh during a busy week.</p>
                        <div class="flex sm:hidden justify-center gap-3 mt-2 text-sm font-medium">
                            <span class="text-booking-primary">₹800</span>
                            <span class="text-gray-400">|</span>
                            <span class="text-gray-500">30 min</span>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Nail Art -->
                <div class="group relative flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#2d151b] shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-booking-primary/30">
                    <div class="w-full sm:w-32 aspect-[4/3] sm:aspect-square bg-center bg-cover rounded-lg shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_B4JcsGbzFml6LdDN9BwFGNiRO2hYh3mgBaBE_4yrHRnz7PaVPlWRYgYoB_JZDQ4DXpO28vEsVFYBiODkxWLpt6xQ3mTvkdG5HVrkkbIv-dZlGsL88mW9np79y-0lmseBBVH_t3lc9odpS-5hdFkjobzeWhK9w4s_ExHsgsX6ZlM6nJhq68p-ExvWf0-T2aTgeT4MpUwpf7FYjL91WMJojPnrRBvbZU9jYIjqB9EkMjTr1rCsq6o9z6D72QSwX2RIDpZakq9gnDm8");'></div>
                    <div class="flex flex-col flex-1 gap-1 w-full text-center sm:text-left">
                        <div class="flex justify-between items-start w-full">
                            <h3 class="text-lg font-bold text-[#1c0d10] dark:text-gray-100">Nail Art (Per Finger)</h3>
                            <div class="hidden sm:block text-right">
                                <span class="text-booking-primary font-bold block">₹150</span>
                                <span class="text-xs text-gray-500 dark:text-gray-400">15 min</span>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto sm:mx-0">Custom design per finger. Choose from our gallery or bring your own inspiration.</p>
                        <div class="flex sm:hidden justify-center gap-3 mt-2 text-sm font-medium">
                            <span class="text-booking-primary">₹150</span>
                            <span class="text-gray-400">|</span>
                            <span class="text-gray-500">15 min</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        <!-- Right Column: Sticky Summary -->
        <aside class="w-full lg:w-[320px] shrink-0 lg:h-[calc(100vh-120px)] lg:sticky lg:top-28">
            <app-booking-summary></app-booking-summary>
        </aside>
      </div>
    </div>
  `
})
export class ServiceSelectionComponent { }
