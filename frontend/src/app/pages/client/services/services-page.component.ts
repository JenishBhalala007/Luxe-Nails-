import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ServicesHeroComponent } from './components/service-hero/service-hero.component';
import { ServicesFilterComponent } from './components/service-filter/service-filter.component';
import { ServicesGridComponent } from './components/service-grid/service-grid.component';
import { ServicesFooterComponent } from './components/service-footer/service-footer.component';
import { ServiceService } from '../../../core/services/service.service';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [
        CommonModule,

        ServicesHeroComponent,
        ServicesFilterComponent,
        ServicesGridComponent,
        ServicesFooterComponent
    ],
    template: `
    <div class="flex flex-col items-center w-full">
        <app-services-hero></app-services-hero>
        <app-services-filter 
            [categories]="categories" 
            [activeCategory]="activeCategory"
            (categorySelected)="filterServices($event)">
        </app-services-filter>
        <app-services-grid [services]="filteredServices"></app-services-grid>
        <app-services-footer></app-services-footer>
    </div>
  `,
    styles: [`
    :host {
        display: block;
        width: 100%;
    }
    /* Subtly animated gradient background */
    :host {
        display: block;
        background: radial-gradient(circle at 0% 0%, var(--color-background-light) 0%, #f5f0f1 100%);
    }
    .dark :host {
         background: var(--color-background-dark);
    }
  `]
})
export class ServicesPageComponent implements OnInit {
    services: any[] = [];
    filteredServices: any[] = [];
    categories: string[] = ['All'];
    activeCategory: string = 'All';

    constructor(
        private serviceService: ServiceService,
        private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.serviceService.getServices().subscribe({
            next: (data) => {
                this.services = data;
                this.filteredServices = [...data];
                
                // Extract unique categories correctly (handling arrays and comma-separated strings)
                const allCategories = data.flatMap(service => {
                    const cat = service.category;
                    if (Array.isArray(cat)) {
                        return cat.flatMap(c => c.split(','));
                    }
                    if (typeof cat === 'string') {
                        return cat.split(',');
                    }
                    return [];
                }).map(c => c.trim()).filter(c => c.length > 0);

                const diverseCategories = new Set(allCategories);
                this.categories = ['All', ...Array.from(diverseCategories)];

                // Force update
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Error fetching services:', err)
        });
    }

    filterServices(category: string) {
        this.activeCategory = category;
        if (category === 'All') {
            this.filteredServices = [...this.services];
        } else {
            this.filteredServices = this.services.filter(service => {
                const serviceCats = Array.isArray(service.category) 
                    ? service.category.flatMap((c: string) => c.split(',')) 
                    : (typeof service.category === 'string' ? service.category.split(',') : []);
                
                const cleanedCats = serviceCats.map((c: string) => c.trim());
                return cleanedCats.includes(category);
            });
        }
        this.cdr.detectChanges();
    }
}
