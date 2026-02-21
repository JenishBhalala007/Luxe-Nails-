import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray, FormControl } from '@angular/forms';
import { ServiceService } from '../../../../../core/services/service.service';

@Component({
  selector: 'app-create-service-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>

      <div class="relative w-full max-w-2xl bg-white dark:bg-surface-dark rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        <!-- Header -->
        <div class="px-8 pt-8 pb-4 flex justify-between items-center border-b border-border-light/30 dark:border-border-dark/30 shrink-0 bg-white dark:bg-surface-dark z-10">
            <div>
                <h1 class="font-serif text-3xl font-bold text-text-light dark:text-text-dark tracking-tight">{{ service ? 'Edit Service' : 'Create New Service' }}</h1>
                <p class="text-text-muted text-sm mt-1">{{ service ? 'Update service details.' : 'Add a new treatment to your salon menu.' }}</p>
            </div>
            <button (click)="closeModal()" class="text-text-muted hover:text-primary transition-colors p-2 rounded-full hover:bg-background-light dark:hover:bg-background-dark">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <!-- Scrollable Content -->
        <div class="flex-1 overflow-y-auto px-8 py-6">
            <form [formGroup]="serviceForm" class="flex flex-col gap-6">
                <!-- Service Title -->
                <div class="flex flex-col gap-2">
                    <label class="text-text-light dark:text-text-dark text-base font-medium" for="service-title">Service Title</label>
                    <input formControlName="name" class="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="service-title" placeholder="e.g. Royal Gel Manicure" type="text"/>
                </div>

                <!-- Category -->
                <div class="flex flex-col gap-3">
                    <label class="text-text-light dark:text-text-dark text-base font-medium">Categories</label>
                    <div class="flex gap-2">
                        <div class="relative flex-1">
                            <select [formControl]="categoryInput" class="form-select w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer">
                                <option value="" disabled selected>Select category</option>
                                <option *ngFor="let opt of categoryOptions" [value]="opt">{{opt}}</option>
                            </select>
                        </div>
                        <button type="button" (click)="addCategoryFromInput()" class="px-6 rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 font-bold flex items-center gap-2">
                            <span class="material-symbols-outlined text-[20px]">add</span>
                            Add
                        </button>
                    </div>

                    <!-- Selected Categories Tags -->
                    <div class="flex flex-wrap gap-2 min-h-[32px]">
                        <div *ngFor="let cat of categories.controls; let i=index" class="animate-in fade-in zoom-in duration-200">
                             <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-dark dark:text-gray-200 text-sm font-medium shadow-sm group hover:border-red-200 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors cursor-default">
                                <span>{{ cat.value }}</span>
                                <button type="button" (click)="removeCategory(i)" class="w-5 h-5 flex items-center justify-center rounded-full text-text-muted hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors" title="Remove">
                                    <span class="material-symbols-outlined text-[14px]">close</span>
                                </button>
                             </div>
                        </div>
                        <div *ngIf="categories.length === 0" class="text-text-muted text-sm italic px-2 py-1">
                            No categories selected
                        </div>
                    </div>
                </div>

                <!-- Price Range Row -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-text-light dark:text-text-dark text-base font-medium" for="priceMin">Min Price (₹)</label>
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-medium">₹</span>
                            <input formControlName="priceMin" class="w-full h-12 pl-8 pr-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="priceMin" placeholder="0.00" type="number"/>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-text-light dark:text-text-dark text-base font-medium" for="priceMax">Max Price (₹)</label>
                        <div class="relative">
                            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-medium">₹</span>
                            <input formControlName="priceMax" class="w-full h-12 pl-8 pr-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="priceMax" placeholder="0.00" type="number"/>
                        </div>
                    </div>
                </div>

                <!-- Duration Range Row -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-text-light dark:text-text-dark text-base font-medium" for="durationMin">Min Duration (min)</label>
                        <input formControlName="durationMin" class="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="durationMin" placeholder="e.g 30" type="number"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-text-light dark:text-text-dark text-base font-medium" for="durationMax">Max Duration (min)</label>
                        <input formControlName="durationMax" class="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="durationMax" placeholder="e.g 60" type="number"/>
                    </div>
                </div>

                <!-- Image URL -->
                <div class="flex flex-col gap-2">
                    <label class="text-text-light dark:text-text-dark text-base font-medium" for="imageUrl">Image URL</label>
                    <input formControlName="imageUrl" class="w-full h-12 px-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" id="imageUrl" placeholder="https://example.com/image.jpg" type="text"/>
                </div>

                <!-- Description -->
                <div class="flex flex-col gap-2">
                    <label class="text-text-light dark:text-text-dark text-base font-medium" for="description">Description</label>
                    <textarea formControlName="description" class="w-full min-h-[120px] p-4 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark placeholder-text-muted focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" id="description" placeholder="Describe the treatment steps, benefits, and products used..."></textarea>
                </div>
            </form>
        </div>

        <!-- Footer Actions -->
            <div class="px-8 py-6 bg-surface-light dark:bg-surface-dark border-t border-border-light/30 dark:border-border-dark/30 flex justify-between items-center">
                <button (click)="closeModal()" class="px-6 py-3 rounded-xl border border-border-light dark:border-border-dark text-text-muted hover:text-text-light dark:hover:text-text-dark hover:border-text-muted dark:hover:border-text-muted font-semibold transition-all duration-200">
                    Discard
                </button>
                <div class="flex gap-4">
                    <button (click)="onSubmit()" [disabled]="serviceForm.invalid || isSubmitting" class="px-8 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/30 transition-all duration-200 transform active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                        <span *ngIf="!isSubmitting" class="material-symbols-outlined text-[20px]">check</span>
                        <span *ngIf="isSubmitting" class="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                        {{ isSubmitting ? (service ? 'Updating...' : 'Publishing...') : (service ? 'Update Service' : 'Publish Service') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: []
})
export class CreateServiceModalComponent implements OnInit {
    @Input() service: any = null;
    @Output() close = new EventEmitter<void>();
    @Output() refresh = new EventEmitter<void>();

    serviceForm: FormGroup;
    categoryInput = new FormControl('');
    isSubmitting = false;

    categoryOptions = [
        'Nail Polish', 'Nail Design', 'Gel Polish', 'Gel & Ombre', 
        'French Nails', 'Acrylic Nails', 'Mylar Nails', 'Removal & Repair'
    ];

    constructor(
        private fb: FormBuilder,
        private serviceService: ServiceService
    ) {
        this.serviceForm = this.fb.group({
            name: ['', Validators.required],
            category: this.fb.array([], Validators.required), // Initialize empty
            priceMin: ['', [Validators.required, Validators.min(0)]],
            priceMax: ['', [Validators.required, Validators.min(0)]],
            durationMin: ['', [Validators.required, Validators.min(0)]],
            durationMax: ['', [Validators.required, Validators.min(0)]],
            imageUrl: [''],
            description: ['', Validators.required]
        });
    }

    get categories() {
        return this.serviceForm.get('category') as FormArray;
    }

    addCategoryFromInput() {
        const val = this.categoryInput.value;
        if (val && !this.categories.value.includes(val)) {
            this.categories.push(this.fb.control(val));
            this.categoryInput.setValue(''); // Reset input
        }
    }

    removeCategory(index: number) {
        this.categories.removeAt(index);
    }

    ngOnInit() {
        if (this.service) {
            this.serviceForm.patchValue({
                name: this.service.name,
                priceMin: this.service.priceRange?.min,
                priceMax: this.service.priceRange?.max,
                durationMin: this.service.timeRange?.min,
                durationMax: this.service.timeRange?.max,
                imageUrl: this.service.imageUrl,
                description: this.service.description
            });

            // Handle categories
            this.categories.clear();
            if (Array.isArray(this.service.category)) {
                this.service.category.forEach((cat: string) => {
                    this.categories.push(this.fb.control(cat));
                });
            } else if (typeof this.service.category === 'string') {
                // Backward compatibility for old single-string categories (split by comma if needed)
                const parts = this.service.category.split(',').map((s: string) => s.trim()).filter((s: string) => s.length > 0);
                parts.forEach((cat: string) => this.categories.push(this.fb.control(cat)));
            }
        }
    }

    closeModal() {
        this.close.emit();
    }

    onSubmit() {
        if (this.serviceForm.valid) {
            this.isSubmitting = true;
            
            const formVal = this.serviceForm.value;
            const serviceData = {
                name: formVal.name,
                category: formVal.category,
                description: formVal.description,
                priceRange: { min: formVal.priceMin, max: formVal.priceMax },
                timeRange: { min: formVal.durationMin, max: formVal.durationMax },
                imageUrl: formVal.imageUrl || (this.service ? this.service.imageUrl : '') // Use form value, valid existing, or empty
            };

            if (this.service && this.service._id) {
                this.serviceService.updateService(this.service._id, serviceData).subscribe({
                    next: (res) => {
                        console.log('Service updated', res);
                        this.isSubmitting = false;
                        this.refresh.emit();
                        this.closeModal();
                    },
                    error: (err) => {
                        console.error('Error updating service', err);
                        this.isSubmitting = false;
                    }
                });
            } else {
                this.serviceService.createService(serviceData).subscribe({
                    next: (res) => {
                        console.log('Service created', res);
                        this.isSubmitting = false;
                        this.refresh.emit();
                        this.closeModal();
                    },
                    error: (err) => {
                        console.error('Error creating service', err);
                        this.isSubmitting = false;
                    }
                });
            }
        }
    }
}
