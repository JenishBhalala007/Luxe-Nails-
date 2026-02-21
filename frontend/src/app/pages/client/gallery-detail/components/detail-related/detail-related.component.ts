import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-detail-related',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-16 px-4 md:px-10 max-w-[1440px] mx-auto w-full border-t border-[#f3e7ea] dark:border-[#3a2026]">
        <h2 class="text-3xl font-display font-bold text-text-main dark:text-white mb-10 text-center">You May Also Like</h2>
        
        <!-- Placeholder for related items until backend supports it -->
        <div class="text-center text-gallery-text-muted py-8">
            <p>More designs coming soon!</p>
        </div>
    </section>
  `
})
export class DetailRelatedComponent {
    relatedItems: any[] = [];
}
