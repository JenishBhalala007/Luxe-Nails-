import { Component, EventEmitter, Output, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GalleryService } from '../../../../../core/services/gallery.service';

@Component({
  selector: 'app-add-photo-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>

      <div class="relative w-full max-w-lg bg-white dark:bg-[#2a1718] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        <!-- Header -->
        <div class="px-8 pt-8 pb-4 flex justify-between items-center border-b border-[#f0e6e9] dark:border-[#3a2223] shrink-0 bg-white dark:bg-[#2a1718] z-10">
            <div>
                <h1 class="font-serif text-2xl font-bold text-luxe-text dark:text-white tracking-tight">{{ isEditing ? 'Edit Photo' : 'Add New Photo' }}</h1>
                <p class="text-gallery-text-muted text-sm mt-1">{{ isEditing ? 'Update photo details.' : 'Add a new photo to your gallery.' }}</p>
            </div>
            <button (click)="closeModal()" class="text-gallery-text-muted hover:text-gallery-primary transition-colors p-2 rounded-full hover:bg-[#fff0f4] dark:hover:bg-[#3a2223]">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <!-- content -->
        <div class="flex-1 overflow-y-auto px-8 py-6">
            <form [formGroup]="photoForm" class="flex flex-col gap-6">
                <!-- Name -->
                <div class="flex flex-col gap-2">
                    <label class="text-luxe-text dark:text-white text-base font-medium" for="photo-name">Photo Name</label>
                    <input formControlName="title" class="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#1a0f10] border border-[#f0e6e9] dark:border-[#3a2223] text-luxe-text dark:text-white placeholder-gallery-text-muted focus:ring-2 focus:ring-gallery-primary/20 focus:border-gallery-primary outline-none transition-all" id="photo-name" placeholder="e.g. Summer Breeze" type="text"/>
                    <div *ngIf="photoForm.get('title')?.invalid && photoForm.get('title')?.touched" class="text-red-500 text-sm">Name is required</div>
                </div>

                <!-- Artist Name -->
                <div class="flex flex-col gap-2">
                    <label class="text-luxe-text dark:text-white text-base font-medium" for="artist-name">Artist Name</label>
                    <input formControlName="artist" class="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#1a0f10] border border-[#f0e6e9] dark:border-[#3a2223] text-luxe-text dark:text-white placeholder-gallery-text-muted focus:ring-2 focus:ring-gallery-primary/20 focus:border-gallery-primary outline-none transition-all" id="artist-name" placeholder="e.g. Sarah J." type="text"/>
                </div>

                <!-- Image URL -->
                <div class="flex flex-col gap-2">
                    <label class="text-luxe-text dark:text-white text-base font-medium" for="image-url">Image URL</label>
                    <input formControlName="imageUrl" class="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#1a0f10] border border-[#f0e6e9] dark:border-[#3a2223] text-luxe-text dark:text-white placeholder-gallery-text-muted focus:ring-2 focus:ring-gallery-primary/20 focus:border-gallery-primary outline-none transition-all" id="image-url" placeholder="https://..." type="text"/>
                    <div *ngIf="photoForm.get('imageUrl')?.invalid && photoForm.get('imageUrl')?.touched" class="text-red-500 text-sm">Image URL is required</div>
                </div>

                <!-- Tag (Category) -->
                <div class="flex flex-col gap-2">
                    <label class="text-luxe-text dark:text-white text-base font-medium" for="tag">Category</label>
                    <div class="relative">
                        <select formControlName="category" class="form-select w-full h-12 px-4 rounded-xl bg-white dark:bg-[#1a0f10] border border-[#f0e6e9] dark:border-[#3a2223] text-luxe-text dark:text-white appearance-none focus:ring-2 focus:ring-gallery-primary/20 focus:border-gallery-primary outline-none transition-all cursor-pointer" id="tag">
                            <option class="text-gallery-text-muted" value="" disabled selected>Select category</option>
                            <option value="Nail Polish">Nail Polish</option>
                            <option value="Nail Design">Nail Design</option>
                            <option value="Gel Polish">Gel Polish</option>
                            <option value="Gel & Ombre">Gel & Ombre</option>
                            <option value="French Nails">French Nails</option>
                            <option value="Acrylic Nails">Acrylic Nails</option>
                            <option value="Mylar Nails">Mylar Nails</option>
                            <option value="Removal & Repair">Removal & Repair</option>
                        </select>
                    </div>
                    <div *ngIf="photoForm.get('category')?.invalid && photoForm.get('category')?.touched" class="text-red-500 text-sm">Category is required</div>
                </div>

                <!-- Tags (Comma separated) -->
                <div class="flex flex-col gap-2">
                    <label class="text-luxe-text dark:text-white text-base font-medium" for="tags">Tags (comma separated)</label>
                    <input formControlName="tags" class="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#1a0f10] border border-[#f0e6e9] dark:border-[#3a2223] text-luxe-text dark:text-white placeholder-gallery-text-muted focus:ring-2 focus:ring-gallery-primary/20 focus:border-gallery-primary outline-none transition-all" id="tags" placeholder="e.g. glossy, red, summer" type="text"/>
                </div>

                <!-- Duration & Price -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-luxe-text dark:text-white text-base font-medium" for="duration">Duration (min, optional)</label>
                        <input formControlName="duration" class="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#1a0f10] border border-[#f0e6e9] dark:border-[#3a2223] text-luxe-text dark:text-white placeholder-gallery-text-muted focus:ring-2 focus:ring-gallery-primary/20 focus:border-gallery-primary outline-none transition-all" id="duration" placeholder="e.g 45" type="number"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-luxe-text dark:text-white text-base font-medium" for="price">Price Add-on (₹, optional)</label>
                        <input formControlName="price" class="w-full h-12 px-4 rounded-xl bg-white dark:bg-[#1a0f10] border border-[#f0e6e9] dark:border-[#3a2223] text-luxe-text dark:text-white placeholder-gallery-text-muted focus:ring-2 focus:ring-gallery-primary/20 focus:border-gallery-primary outline-none transition-all" id="price" placeholder="e.g 200" type="number"/>
                    </div>
                </div>
            </form>
        </div>

        <!-- Footer -->
        <div class="px-8 py-6 bg-white dark:bg-[#2a1718] border-t border-[#f0e6e9] dark:border-[#3a2223] flex justify-end gap-4">
            <button (click)="closeModal()" class="px-6 py-3 rounded-xl border border-[#f0e6e9] dark:border-[#3a2223] text-gallery-text-muted hover:text-luxe-text dark:hover:text-white hover:border-gallery-text-muted font-semibold transition-all duration-200">
                Cancel
            </button>
            <button (click)="onSubmit()" [disabled]="photoForm.invalid || isSubmitting" class="px-8 py-3 rounded-xl bg-gallery-primary hover:bg-gallery-primary/90 text-white font-bold shadow-lg shadow-primary/30 transition-all duration-200 transform active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                 <span *ngIf="isSubmitting" class="material-symbols-outlined text-[20px] animate-spin">refresh</span>
                 {{ isSubmitting ? (isEditing ? 'Updating...' : 'Uploading...') : (isEditing ? 'Update Photo' : 'Add Photo') }}
            </button>
        </div>

      </div>
    </div>
  `
})
export class AddPhotoModalComponent implements OnInit {
    @Input() photoToEdit: any = null;
    @Output() close = new EventEmitter<void>();
    @Output() refresh = new EventEmitter<void>();
    
    photoForm: FormGroup;
    isSubmitting = false;
    isEditing = false;

    private fb = inject(FormBuilder);
    private galleryService = inject(GalleryService);

    constructor() {
        this.photoForm = this.fb.group({
            title: ['', Validators.required],
            artist: [''], // Added artist field
            imageUrl: ['', Validators.required],
            category: ['', Validators.required],
            tags: [''],
            duration: [''],
            price: ['']
        });
    }

    ngOnInit() {
        if (this.photoToEdit) {
            this.isEditing = true;
            this.photoForm.patchValue({
                title: this.photoToEdit.title,
                artist: this.photoToEdit.artist,
                imageUrl: this.photoToEdit.imageUrl,
                category: this.photoToEdit.category,
                tags: this.photoToEdit.tags ? this.photoToEdit.tags.join(', ') : '',
                duration: this.photoToEdit.duration,
                price: this.photoToEdit.price
            });
        }
    }

    closeModal() {
        this.close.emit();
    }

    onSubmit() {
        if (this.photoForm.valid) {
            this.isSubmitting = true;
            
            const val = this.photoForm.value;
            // Process tags from string to array
            const tagsArray = val.tags ? val.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0) : [];

            const photoData = {
                title: val.title,
                artist: val.artist, // Include artist
                imageUrl: val.imageUrl,
                category: val.category,
                tags: tagsArray,
                duration: val.duration || null,
                price: val.price || null
            };

            if (this.isEditing) {
                 this.galleryService.updatePhoto(this.photoToEdit._id, photoData).subscribe({
                    next: (res) => {
                        console.log('Photo updated', res);
                        this.isSubmitting = false;
                        this.refresh.emit();
                        setTimeout(() => {
                            this.closeModal();
                        }, 300);
                    },
                    error: (err) => {
                        console.error('Error updating photo', err);
                        this.isSubmitting = false;
                    }
                });
            } else {
                this.galleryService.addPhoto(photoData).subscribe({
                    next: (res) => {
                        console.log('Photo added', res);
                        this.isSubmitting = false;
                        this.refresh.emit();
                        setTimeout(() => {
                            this.closeModal();
                        }, 300);
                    },
                    error: (err) => {
                        console.error('Error adding photo', err);
                        this.isSubmitting = false;
                    }
                });
            }
        }
    }
}
