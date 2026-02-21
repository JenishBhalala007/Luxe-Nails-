import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistService } from '../../../core/services/artist.service';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-admin-users',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="flex h-screen w-full bg-luxe-bg dark:bg-background-dark text-luxe-text antialiased overflow-hidden font-display">
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
                <!-- Active Link -->
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-[#FFDDE5] text-luxe-text transition-colors group" href="/admin/users">
                    <span class="material-symbols-outlined text-primary group-hover:text-primary transition-colors">group</span>
                    <span class="text-sm font-semibold">Users</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/services">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">content_cut</span>
                    <span class="text-sm font-medium">Services</span>
                </a>
                <a class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-luxe-text-muted hover:bg-[#fff0f4] hover:text-primary transition-colors group" href="/admin/gallery">
                    <span class="material-symbols-outlined group-hover:text-primary transition-colors">article</span>
                    <span class="text-sm font-medium">Gallery</span>
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
        <main class="flex-1 flex flex-col h-full overflow-hidden bg-luxe-bg dark:bg-background-dark relative">
            <!-- Header Section -->
            <header class="flex-none px-8 py-8 md:px-12 md:py-10">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <h1 class="font-serif text-4xl font-bold text-luxe-text dark:text-white mb-2">User Management</h1>
                        <p class="text-luxe-text-secondary text-base">Manage your salon staff access and clientele.</p>
                    </div>
                    <button *ngIf="activeTab === 'artists'" (click)="showAddArtistModal = true" class="bg-primary hover:bg-[#d01140] text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95">
                        <span class="material-symbols-outlined" style="font-size: 20px;">add</span>
                        <span>Add New Artist</span>
                    </button>
                </div>
            </header>

            <!-- Tabs and Search -->
            <div class="flex-none px-8 md:px-12 pb-6">
                <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center border-b border-[#e7cfd5] dark:border-white/10 gap-4">
                    <!-- Tabs -->
                    <div class="flex gap-8">
                        <button (click)="activeTab = 'artists'" [class.border-primary]="activeTab === 'artists'" [class.border-transparent]="activeTab !== 'artists'" class="pb-4 px-2 border-b-[3px] text-luxe-text dark:text-white font-serif font-semibold text-lg transition-colors">
                            Artists
                        </button>
                        <button (click)="activeTab = 'clients'" [class.border-primary]="activeTab === 'clients'" [class.border-transparent]="activeTab !== 'clients'" class="pb-4 px-2 border-b-[3px] text-luxe-text-secondary hover:text-primary transition-colors font-serif font-medium text-lg">
                            Clients
                        </button>
                    </div>
                    <!-- Search -->
                    <div class="relative w-full md:w-80 mb-2">
                        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-luxe-text-secondary" style="font-size: 20px;">search</span>
                        <input [(ngModel)]="searchTerm" class="w-full bg-white dark:bg-[#2a141a] border-none rounded-2xl pl-11 pr-4 py-3 text-sm text-luxe-text shadow-soft focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-luxe-text-secondary/60" placeholder="Search..." type="text"/>
                    </div>
                </div>
            </div>

            <!-- Scrollable Content Grid -->
            <div class="flex-1 overflow-y-auto px-8 md:px-12 pb-12">
                <div class="max-w-7xl mx-auto">
                    
                    <!-- Workers View -->
                    <div *ngIf="activeTab === 'artists'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div *ngFor="let artist of filteredArtists" class="bg-white dark:bg-[#2a141a] p-6 rounded-[20px] shadow-card hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-primary/10 flex flex-col relative h-full">
                            <div class="absolute top-4 right-4">
                                <span class="material-symbols-outlined text-green-500 bg-green-50 dark:bg-green-900/20 p-1 rounded-full text-xs" title="Active">check_circle</span>
                            </div>
                            
                            <!-- Avatar Logic -->
                            <div class="flex flex-col items-center text-center mb-4">
                                <div *ngIf="artist.imageUrl" class="w-24 h-24 rounded-full bg-cover bg-center mb-4 shadow-md ring-4 ring-luxe-primary-light dark:ring-primary/10" [style.background-image]="'url(' + artist.imageUrl + ')'"></div>
                                <div *ngIf="!artist.imageUrl" class="w-24 h-24 rounded-full bg-rose-gold-hover dark:bg-rose-gold-hover/80 flex items-center justify-center mb-4 shadow-md ring-4 ring-luxe-primary-light dark:ring-primary/10">
                                    <span class="text-3xl font-serif font-bold text-white">{{ artist.name.charAt(0).toUpperCase() }}</span>
                                </div>

                                <h3 class="font-serif text-xl font-bold text-luxe-text dark:text-white mb-1">{{artist.name}}</h3>
                                <span class="inline-flex items-center px-3 py-1 rounded-full bg-luxe-primary-light dark:bg-primary/20 text-primary text-xs font-semibold">
                                    {{artist.specialty}}
                                </span>
                            </div>

                            <div class="w-full border-t border-gray-100 dark:border-white/5 my-2"></div>

                            <!-- Details -->
                            <div class="flex flex-col gap-2 mb-4 text-sm text-center">
                                <p class="text-luxe-text-secondary">
                                    <span class="font-bold text-luxe-text dark:text-gray-200">Email:</span> {{artist.email}}
                                </p>
                                <p *ngIf="artist.bio" class="text-luxe-text-secondary line-clamp-3 italic">
                                    "{{artist.bio}}"
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Clients View -->
                    <div *ngIf="activeTab === 'clients'" class="bg-white dark:bg-[#2a141a] rounded-[20px] shadow-soft overflow-hidden">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="border-b border-gray-100 dark:border-white/10">
                                    <th class="py-5 px-6 text-xs font-bold text-luxe-text-secondary uppercase tracking-wider font-display">Name</th>
                                    <th class="py-5 px-6 text-xs font-bold text-luxe-text-secondary uppercase tracking-wider font-display">Email</th>
                                    <th class="py-5 px-6 text-xs font-bold text-luxe-text-secondary uppercase tracking-wider font-display">Phone</th>
                                    <th class="py-5 px-6 text-xs font-bold text-luxe-text-secondary uppercase tracking-wider font-display">Address</th>
                                    <th class="py-5 px-6 text-xs font-bold text-luxe-text-secondary uppercase tracking-wider font-display text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-50 dark:divide-white/5">
                                <tr *ngFor="let client of filteredClients" class="hover:bg-[#fafafa] dark:hover:bg-white/5 transition-colors group">
                                    <td class="py-4 px-6 text-sm font-bold text-luxe-text dark:text-white font-display">{{client.name}}</td>
                                    <td class="py-4 px-6 text-sm text-luxe-text-secondary font-display">{{client.email}}</td>
                                    <td class="py-4 px-6 text-sm text-luxe-text-secondary font-display">{{client.phone || '-'}}</td>
                                    <td class="py-4 px-6 text-sm text-luxe-text-secondary font-display">{{client.address || '-'}}</td>
                                    <td class="py-4 px-6 text-right">
                                        <button (click)="deleteUser(client._id)" class="text-red-400 hover:text-red-600 font-bold text-xs">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div *ngIf="filteredClients.length === 0" class="p-8 text-center text-luxe-text-secondary">
                            No clients found.
                        </div>
                    </div>

                </div>
            </div>
        </main>

        <!-- Add Worker Modal -->
        <div *ngIf="showAddArtistModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div class="bg-white dark:bg-[#2a141a] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
                <div class="px-8 py-6 border-b border-gray-100 dark:border-white/10 flex items-center justify-between bg-luxe-bg/50">
                    <h2 class="text-2xl font-serif font-bold text-luxe-text dark:text-white">Add New Artist</h2>
                    <button (click)="showAddArtistModal = false" class="text-luxe-text-secondary hover:text-primary transition-colors">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div class="p-8 space-y-5">
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-luxe-text-secondary mb-1.5">Full Name</label>
                        <input [(ngModel)]="newArtist.name" class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 py-3 text-luxe-text dark:text-white font-medium transition-colors placeholder:text-gray-400" placeholder="e.g. Sarah Jones" type="text"/>
                    </div>
                    <div>
                        <label class="block text-xs font-bold uppercase tracking-wider text-luxe-text-secondary mb-1.5">Specialty</label>
                        <input [(ngModel)]="newArtist.specialty" class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 py-3 text-luxe-text dark:text-white font-medium transition-colors placeholder:text-gray-400" placeholder="e.g. Nail Art Expert" type="text"/>
                    </div>
                    <!-- Image URL Field Removed -->
                    <div>
                         <label class="block text-xs font-bold uppercase tracking-wider text-luxe-text-secondary mb-1.5">Bio</label>
                        <textarea [(ngModel)]="newArtist.bio" class="w-full bg-luxe-bg dark:bg-white/5 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 py-3 text-luxe-text dark:text-white font-medium transition-colors placeholder:text-gray-400 min-h-[100px]" placeholder="Brief description..."></textarea>
                    </div>
                </div>
                <div class="px-8 py-6 bg-gray-50 dark:bg-white/5 flex justify-end gap-3">
                    <button (click)="showAddArtistModal = false" class="px-6 py-2.5 rounded-xl font-bold text-luxe-text-secondary hover:bg-gray-100 transition-colors">Cancel</button>
                    <button (click)="addArtist()" class="px-6 py-2.5 rounded-xl font-bold text-white bg-primary hover:bg-[#d01140] shadow-lg shadow-primary/20 transition-all transform hover:scale-105 active:scale-95">Save Artist</button>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
        .toggle-checkbox:checked {
            right: 0;
            border-color: #ec1349;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #ec1349;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translate3d(0, 20px, 0); }
            to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.3s ease-out;
        }
    `]
})
export class AdminUsersComponent implements OnInit {
    activeTab: 'artists' | 'clients' = 'artists';
    showAddArtistModal = false;

    artists: any[] = [];
    clients: any[] = [];
    searchTerm: string = '';

    newArtist = {
        name: '',
        specialty: '',
        imageUrl: '',
        bio: ''
    };

    constructor(private artistService: ArtistService, private userService: UserService, private authService: AuthService, private cdr: ChangeDetectorRef) { }

    ngOnInit() {
        this.loadArtists();
        this.loadClients();
    }

    get filteredArtists() {
        if (!this.searchTerm) return this.artists;
        const term = this.searchTerm.toLowerCase();
        return this.artists.filter(artist => 
            artist.name?.toLowerCase().includes(term) || 
            artist.email?.toLowerCase().includes(term) ||
            artist.specialty?.toLowerCase().includes(term)
        );
    }

    get filteredClients() {
        if (!this.searchTerm) return this.clients;
        const term = this.searchTerm.toLowerCase();
        return this.clients.filter(client => 
            client.name?.toLowerCase().includes(term) || 
            client.email?.toLowerCase().includes(term) ||
            client.phone?.toLowerCase().includes(term)
        );
    }

    loadArtists() {
        this.artistService.getArtists().subscribe({
            next: (data) => {
                this.artists = data;
                this.cdr.markForCheck();
            },
            error: (err) => {
                console.error('Error loading artists:', err);
            }
        });
    }

    loadClients() {
        this.userService.getUsers().subscribe({
            next: (data) => {
                console.log('AdminUsersComponent: Received users:', data);
                this.clients = data.filter(user => user.role === 'client');
                console.log('AdminUsersComponent: Filtered clients:', this.clients);
                this.cdr.markForCheck();
            },
            error: (err) => {
                console.error('Error loading clients:', err);
                if (err.status === 401) {
                    // Token might be expired
                    this.authService.logout();
                }
            }
        });
    }

    addArtist() {
        this.artistService.createArtist(this.newArtist).subscribe({
            next: (res) => {
                // Manually add to list for immediate UI feedback
                this.artists.push(res);
                this.cdr.detectChanges(); // Force update

                this.showAddArtistModal = false;
                // Reset form
                this.newArtist = { name: '', specialty: '', imageUrl: '', bio: '' };
                alert('Artist added successfully!');

                // Reload in background to ensure consistency
                this.loadArtists();
            },
            error: (err) => {
                console.error('Error adding worker:', err);
                alert('Failed to add worker: ' + (err.error?.message || err.statusText || 'Unknown error'));
            }
        });
    }

    deleteUser(id: string) {
        if (confirm('Are you sure you want to delete this user?')) {
            this.userService.deleteUser(id).subscribe(() => {
                this.loadClients();
            });
        }
    }

    logout() {
        this.authService.logout();
    }
}
