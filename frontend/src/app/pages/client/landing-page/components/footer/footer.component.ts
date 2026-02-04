import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landing-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="bg-background-dark text-white py-12 border-t border-white/10">
        <div class="layout-container mx-auto max-w-[1280px] px-6">
            <div class="flex flex-col md:flex-row justify-between gap-10">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2">
                        <div class="size-6 text-accent-rose">
                            <span class="material-symbols-outlined">spa</span>
                        </div>
                        <h3 class="font-bold text-xl">Luxe Nails</h3>
                    </div>
                    <p class="text-gray-400 text-sm max-w-xs">Elevating nail care to an art form. Join us for a moment of luxury.</p>
                    <div class="flex gap-4 mt-2">
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors"><span class="material-symbols-outlined">thumb_up</span></a>
                        <a href="#" class="text-gray-400 hover:text-primary transition-colors"><span class="material-symbols-outlined">photo_camera</span></a>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-10 sm:gap-20">
                    <div class="flex flex-col gap-3">
                        <h4 class="font-bold text-accent-rose text-sm uppercase tracking-wide">Studio</h4>
                        <a href="#" class="text-gray-300 hover:text-white text-sm">Services</a>
                        <a href="#" class="text-gray-300 hover:text-white text-sm">Our Artists</a>
                        <a href="#" class="text-gray-300 hover:text-white text-sm">Gallery</a>
                        <a href="#" class="text-gray-300 hover:text-white text-sm">Gift Cards</a>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h4 class="font-bold text-accent-rose text-sm uppercase tracking-wide">Contact</h4>
                        <p class="text-gray-300 text-sm">123 Luxury Lane, Beverly Hills</p>
                        <p class="text-gray-300 text-sm">(555) 123-4567</p>
                        <p class="text-gray-300 text-sm">hello@luxenails.com</p>
                    </div>
                </div>
            </div>
            <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p class="text-xs text-gray-500">© 2024 Luxe Nails Studio. All rights reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
                    <a href="#" class="text-xs text-gray-500 hover:text-white">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  `
})
export class LandingFooterComponent { }
