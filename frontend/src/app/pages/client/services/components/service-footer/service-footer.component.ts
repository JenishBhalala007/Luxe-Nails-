import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="w-full bg-[#f8f1f3] dark:bg-[#1a0c0f] border-t border-rose-200/50 dark:border-white/10 mt-auto">
        <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <!-- Brand -->
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2 text-primary-bold">
                        <span class="material-symbols-outlined !text-[32px]">spa</span>
                        <span class="text-text-main dark:text-white text-xl font-bold">Luxe Nail Studio</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                        Elevating nail care to an art form. Experience the finest in manicure and pedicure treatments in a serene environment.
                    </p>
                </div>
                <!-- Contact -->
                <div class="flex flex-col gap-4">
                    <h4 class="text-text-main dark:text-white font-bold">Contact Us</h4>
                    <div class="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary-bold text-[20px]">location_on</span>
                            <span>123 Fashion Ave, New York, NY 10001</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary-bold text-[20px]">call</span>
                            <span>(212) 555-0199</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary-bold text-[20px]">mail</span>
                            <span>appointments@luxenailstudio.com</span>
                        </div>
                    </div>
                </div>
                <!-- Hours -->
                <div class="flex flex-col gap-4">
                    <h4 class="text-text-main dark:text-white font-bold">Opening Hours</h4>
                    <div class="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400 max-w-[200px]">
                        <span>Mon - Fri</span>
                        <span class="text-right font-medium">10am - 8pm</span>
                        <span>Saturday</span>
                        <span class="text-right font-medium">9am - 6pm</span>
                        <span>Sunday</span>
                        <span class="text-right font-medium">11am - 5pm</span>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-200 dark:border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
                © 2023 Luxe Nail Studio. All rights reserved.
            </div>
        </div>
    </footer>
  `
})
export class ServicesFooterComponent { }
