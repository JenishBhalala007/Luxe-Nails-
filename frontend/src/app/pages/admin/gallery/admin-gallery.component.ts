import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { GalleryService } from '../../../core/services/gallery.service';
import { AddPhotoModalComponent } from './components/add-photo-modal/add-photo-modal.component';

@Component({
    selector: 'app-admin-gallery',
    standalone: true,
    imports: [CommonModule, AddPhotoModalComponent],
    template: `
    <div class="bg-background-warm dark:bg-background-dark text-luxe-text font-display antialiased overflow-hidden h-screen flex w-full selection:bg-gallery-rose-gold-light selection:text-gallery-primary">
        <!-- Sidebar -->
        <aside class="w-64 flex-shrink-0 flex flex-col bg-white border-r border-[#f0e6e9] h-full z-20 shadow-soft hidden md:flex">
            <div class="h-20 flex items-center px-8">
                <div class="flex items-center gap-3">
                    <div class="text-2xl text-luxe-text">
                        <span class="material-symbols-outlined text-4xl">spa</span>
                    </div>
                    <h1 class="text-xl font-serif font-bold tracking-tight text-luxe-text">Luxe Nails</h1>
                </div>
            </div>
            
            <nav class="flex-1 flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/dashboard">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
                    <span class="text-sm font-medium">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/bookings">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">calendar_month</span>
                    <span class="text-sm font-medium">Bookings</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/messages">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">chat_bubble</span>
                    <span class="text-sm font-medium">Messages</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/users">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
                    <span class="text-sm font-medium">Users</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-medium">Services</span>
                </a>
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/gallery">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">article</span>
                    <span class="text-sm font-semibold">Gallery</span>
                </a>
            </nav>
            
            <div class="p-4 border-t border-[#f0e6e9]">
                <button (click)="logout()" class="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-luxe-text-muted hover:bg-gray-50 transition-colors">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="text-sm font-medium">Log out</span>
                </button>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col h-full bg-background-warm dark:bg-[#1a0f10] overflow-y-auto relative">
            <!-- Mobile Header -->
            <header class="lg:hidden h-16 bg-white dark:bg-[#2a1718] border-b border-[#f0e6e7] flex items-center justify-between px-4 z-10 shrink-0">
                <div class="flex items-center gap-2">
                    <span class="material-symbols-outlined text-gallery-primary text-2xl">spa</span>
                    <span class="font-serif font-bold text-lg">Luxe Nails</span>
                </div>
                <button class="text-text-dark p-2">
                    <span class="material-symbols-outlined">menu</span>
                </button>
            </header>

            <!-- Content Container -->
            <div class="max-w-[1400px] w-full mx-auto p-8 lg:p-12 flex flex-col gap-8">
                <!-- Header Section -->
                <header class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div class="flex flex-col gap-2">
                        <h2 class="font-serif text-4xl lg:text-5xl font-medium text-luxe-text dark:text-white tracking-tight">Gallery Management</h2>
                        <p class="text-gallery-text-muted dark:text-rose-200/70 font-medium">Curate your portfolio and showcase your finest work.</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button (click)="openAddModal()" class="flex h-12 items-center justify-center gap-2 rounded-full bg-gallery-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-gallery-primary/90">
                            <span class="material-symbols-outlined text-[20px]">add</span>
                            Add New
                        </button>
                    </div>
                </header>



                <!-- Filters & Grid -->
                <section class="flex flex-col gap-6">
                    <div class="flex items-center justify-between">
                        <h3 class="font-serif font-bold text-2xl text-luxe-text dark:text-white tracking-tight">All Images</h3>
                    </div>
                    <!-- Chips Navigation -->
                    <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        <button (click)="setCategory('All Images')"
                                [ngClass]="activeCategory === 'All Images' ? 'bg-luxe-text text-white shadow-md' : 'bg-white dark:bg-[#2a1718] border border-[#e7d0d2] dark:border-[#3a2223] text-luxe-text dark:text-gray-300 hover:border-gallery-rose-gold'"
                                class="flex h-10 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-medium transition">
                            All Images
                        </button>
                        <button *ngFor="let cat of categories" 
                                (click)="setCategory(cat)"
                                [ngClass]="activeCategory === cat ? 'bg-luxe-text text-white shadow-md' : 'bg-white dark:bg-[#2a1718] border border-[#e7d0d2] dark:border-[#3a2223] text-luxe-text dark:text-gray-300 hover:border-gallery-rose-gold'"
                                class="flex h-10 shrink-0 items-center gap-2 rounded-full px-5 text-sm font-medium transition">
                            {{ cat }}
                        </button>
                    </div>

                    <!-- Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <!-- Dynamic Card -->
                        <div *ngFor="let photo of filteredPhotos" class="relative group rounded-xl overflow-hidden bg-white dark:bg-[#2a1718] shadow-soft hover:shadow-lg transition-all duration-300">
                            <div class="relative overflow-hidden aspect-square">
                                <img [src]="photo.imageUrl" [alt]="photo.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                <!-- Hover Overlay -->
                                <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <button (click)="openEditModal(photo)" class="h-10 w-10 rounded-full bg-white text-text-dark hover:bg-gallery-rose-gold hover:text-white transition flex items-center justify-center shadow-lg" title="Edit Details">
                                        <span class="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button (click)="deletePhoto(photo._id)" class="h-10 w-10 rounded-full bg-white text-gallery-primary hover:bg-gallery-primary hover:text-white transition flex items-center justify-center shadow-lg" title="Delete Image">
                                        <span class="material-symbols-outlined text-[20px]">delete</span>
                                    </button>
                                </div>
                            </div>
                            <div class="p-4 flex flex-col gap-3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1 rounded-full bg-gallery-rose-gold-light dark:bg-gallery-rose-gold/20 text-text-dark dark:text-rose-100 text-xs font-bold uppercase tracking-wider">{{ photo.category }}</span>
                                </div>
                                <div class="flex justify-between items-center text-xs text-gallery-text-muted">
                                    <span>{{ photo.title }}</span>
                                    <span class="font-medium text-text-dark dark:text-white" *ngIf="photo.artist">by {{ photo.artist }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination / Footer -->
                    <div class="flex justify-center pt-8 pb-12">
                        <button class="flex items-center gap-2 text-sm font-bold text-gallery-text-muted hover:text-text-dark transition">
                            <span class="material-symbols-outlined text-[20px]">autorenew</span>
                            Load More Images
                        </button>
                    </div>
                </section>
            </div>
        </main>
    </div>
    <app-add-photo-modal *ngIf="showAddModal" [photoToEdit]="selectedPhoto" (close)="closeAddModal()" (refresh)="loadGallery()"></app-add-photo-modal>
    `
})
export class AdminGalleryComponent implements OnInit {
    private authService = inject(AuthService);
    private galleryService = inject(GalleryService);

    private cd = inject(ChangeDetectorRef);

    galleryPhotos: any[] = [];
    filteredPhotos: any[] = [];
    showAddModal = false;
    selectedPhoto: any = null;
    activeCategory: string = 'All Images';
    categories: string[] = ['Nail Polish', 'Nail Design', 'Gel Polish', 'Gel & Ombre', 'French Nails', 'Acrylic Nails', 'Mylar Nails', 'Removal & Repair'];

    ngOnInit() {
        this.loadGallery();
    }

    loadGallery() {
        this.galleryService.getGallery().subscribe({
            next: (photos) => {
                this.galleryPhotos = photos;
                this.filterGallery(); // Apply filtering right away
                this.cd.detectChanges();
            },
            error: (err) => console.error('Error fetching gallery', err)
        });
    }

    setCategory(category: string) {
        this.activeCategory = category;
        this.filterGallery();
    }

    filterGallery() {
        if (this.activeCategory === 'All Images') {
            this.filteredPhotos = [...this.galleryPhotos];
        } else {
            const lowerCat = this.activeCategory.toLowerCase();
            this.filteredPhotos = this.galleryPhotos.filter(photo => {
                const categoryMatch = photo.category && photo.category.toLowerCase().includes(lowerCat);
                const tagMatch = photo.tags && photo.tags.some((tag: string) => tag.toLowerCase().includes(lowerCat));
                return categoryMatch || tagMatch;
            });
        }
    }

    openAddModal() {
        this.showAddModal = true;
    }

    closeAddModal() {
        this.showAddModal = false;
        this.selectedPhoto = null;
    }

    openEditModal(photo: any) {
        this.selectedPhoto = photo;
        this.showAddModal = true;
    }

    deletePhoto(id: string) {
        if (confirm('Are you sure you want to delete this photo?')) {
            this.galleryService.deletePhoto(id).subscribe({
                next: () => {
                    this.loadGallery();
                },
                error: (err) => console.error('Error deleting photo', err)
            });
        }
    }

    logout() {
        this.authService.logout();
    }
}
