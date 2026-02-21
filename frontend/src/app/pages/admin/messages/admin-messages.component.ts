import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MessageService, Message } from '../../../core/services/message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-messages',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="flex h-screen w-full bg-[#F9F8F6] text-[#181113] antialiased overflow-hidden font-sans">
      <!-- Sidebar -->
      <aside class="w-64 h-full bg-white border-r border-gray-100 flex flex-col shrink-0 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)] hidden md:flex">
        <div class="p-6 flex items-center gap-3 border-b border-gray-50 h-20">
          <div class="flex items-center gap-2">
             <span class="material-symbols-outlined text-4xl text-[#eb477e]">spa</span>
             <div>
                <h1 class="text-[#181113] text-base font-bold tracking-tight font-serif">Luxe Salon</h1>
                <p class="text-[#88636f] text-xs font-medium uppercase tracking-wider">Admin Panel</p>
             </div>
          </div>
        </div>
        
        <nav class="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2">
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#88636f] hover:bg-gray-50 hover:text-[#eb477e] transition-all group" routerLink="/admin/dashboard">
            <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">dashboard</span>
            <span class="font-medium text-sm">Dashboard</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#88636f] hover:bg-gray-50 hover:text-[#eb477e] transition-all group" routerLink="/admin/bookings">
            <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">calendar_month</span>
            <span class="font-medium text-sm">Appointments</span>
          </a>
          <!-- Active Messages Link -->
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#fcebef] text-[#eb477e] font-medium transition-all shadow-sm" routerLink="/admin/messages">
            <span class="material-symbols-outlined text-xl filled">chat_bubble</span>
            <span class="font-medium text-sm">Messages</span>
            <span class="ml-auto bg-[#eb477e] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full" *ngIf="unreadCount > 0">{{ unreadCount }}</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#88636f] hover:bg-gray-50 hover:text-[#eb477e] transition-all group" routerLink="/admin/users">
            <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">groups</span>
            <span class="font-medium text-sm">Users</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#88636f] hover:bg-gray-50 hover:text-[#eb477e] transition-all group" routerLink="/admin/services">
             <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">content_cut</span>
             <span class="font-medium text-sm">Services</span>
          </a>
          <a class="flex items-center gap-3 px-4 py-3 rounded-xl text-[#88636f] hover:bg-gray-50 hover:text-[#eb477e] transition-all group" routerLink="/admin/gallery">
              <span class="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">article</span>
              <span class="font-medium text-sm">Gallery</span>
           </a>
        </nav>
        
        <div class="p-3 mt-auto border-t border-gray-50">
          <button (click)="logout()" class="w-full mt-4 px-4 py-3 bg-gray-50 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
            <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-[#eb477e] font-bold">
               {{ getInitials(currentUser?.name || 'Admin') }}
            </div>
            <div class="flex flex-col items-start">
              <span class="text-xs font-bold text-[#181113]">{{ currentUser?.name || 'Admin' }}</span>
              <span class="text-[10px] text-[#88636f]">{{ currentUser?.role || 'Administrator' }}</span>
            </div>
            <span class="material-symbols-outlined text-[#88636f] text-lg ml-auto">logout</span>
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 flex flex-col h-full overflow-hidden bg-[#F9F8F6] relative">
        <!-- Header Area -->
        <div class="sticky top-0 z-10 bg-[#F9F8F6]/95 backdrop-blur-sm pt-8 pb-4 px-8 w-full max-w-6xl mx-auto">
          <!-- Mobile Header (Visible only on small screens) -->
          <div class="md:hidden flex items-center justify-between mb-4">
             <div class="flex items-center gap-2">
                 <span class="material-symbols-outlined text-[#eb477e] text-2xl">spa</span>
                 <span class="font-serif font-bold text-lg text-[#181113]">Luxe Salon</span>
             </div>
             <button class="text-[#181113]">
                 <span class="material-symbols-outlined">menu</span>
             </button>
          </div>

          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 class="text-3xl md:text-4xl font-serif font-bold text-[#181113] mb-2">All Messages & Inquiries</h2>
              <p class="text-[#88636f] font-normal">Manage client communications and inquiries.</p>
            </div>
            <button (click)="loadMessages()" class="bg-[#eb477e] hover:bg-pink-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-[#eb477e]/20 flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">refresh</span>
              Refresh
            </button>
          </div>
          
          <!-- Action Bar -->
          <div class="bg-white rounded-xl shadow-[0_4px_20px_-2px_rgba(235,71,126,0.05)] p-2 flex flex-col md:flex-row items-center gap-2">
            <!-- Search -->
            <div class="relative flex-1 w-full">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span class="material-symbols-outlined text-[#88636f] text-xl">search</span>
              </div>
              <input [(ngModel)]="searchTerm" (input)="filterMessages()" class="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-gray-50 text-[#181113] placeholder-[#88636f] focus:ring-2 focus:ring-[#eb477e]/20 focus:bg-white transition-all text-sm" placeholder="Search name, email, or keyword..." type="text"/>
            </div>
            <div class="h-8 w-px bg-gray-200 hidden md:block mx-1"></div>
            <!-- Filters -->
            <div class="flex items-center gap-2 w-full md:w-auto">
              <select [(ngModel)]="subjectFilter" (change)="filterMessages()" class="form-select border-none bg-gray-50 text-[#181113] text-sm font-medium rounded-lg py-2.5 pl-3 pr-8 focus:ring-2 focus:ring-[#eb477e]/20 cursor-pointer hover:bg-gray-100 transition-colors w-full md:w-40">
                <option value="all">All Subjects</option>
                <option value="Appointment Booking">Appointment Booking</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Messages List Scroll Area -->
        <div class="flex-1 overflow-y-auto px-8 pb-8 w-full max-w-6xl mx-auto">
          <div class="flex flex-col gap-4">
            
            <div *ngIf="filteredMessages.length === 0" class="text-center py-10">
              <span class="material-symbols-outlined text-4xl text-gray-300 mb-2">inbox</span>
              <p class="text-[#88636f]">No messages found.</p>
            </div>

            <!-- Message Card -->
            <div *ngFor="let message of filteredMessages" 
                 class="group relative w-full bg-white rounded-2xl shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_-2px_rgba(235,71,126,0.05)] transition-all duration-300 overflow-hidden cursor-pointer border border-transparent hover:border-[#eb477e]/10"
                 [ngClass]="{'opacity-90 hover:opacity-100': message.status === 'read'}">
              
              <!-- Unread Stripe -->
              <div *ngIf="message.status === 'unread'" class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#eb477e]"></div>
              
              <div class="flex flex-col md:flex-row items-start md:items-center p-5 pl-7 gap-5">
                <!-- Avatar & Sender Info -->
                <div class="flex items-center gap-4 min-w-[200px]">
                  <div class="relative">
                    <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-[#eb477e] font-bold text-lg">
                      {{ getInitials(message.name) }}
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <h3 class="text-[#181113] font-bold text-base leading-tight group-hover:text-[#eb477e] transition-colors">{{ message.name }}</h3>
                    <span class="text-xs text-[#88636f] font-medium">{{ message.email }}</span>
                    <span *ngIf="message.phone" class="text-[10px] text-gray-400">{{ message.phone }}</span>
                  </div>
                </div>
                
                <!-- Message Preview -->
                <div class="flex-1 min-w-0 pr-4">
                  <div class="flex items-center gap-2 mb-1">
                    <h4 class="text-[#181113] text-sm" [ngClass]="{'font-bold': message.status === 'unread', 'font-semibold': message.status !== 'unread'}">{{ message.subject }}</h4>
                    <span *ngIf="message.status === 'unread'" class="h-2 w-2 rounded-full bg-[#eb477e] shrink-0"></span>
                  </div>
                  <p class="text-[#181113] text-sm leading-relaxed line-clamp-2 font-medium break-words">{{ message.message }}</p>
                </div>
                
                <!-- Metadata & Actions -->
                <div class="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-3 md:gap-1 mt-2 md:mt-0 pl-0 md:pl-4 border-t md:border-t-0 border-gray-100 pt-3 md:pt-0">
                  <span class="text-[#88636f] text-xs font-medium whitespace-nowrap">{{ message.createdAt | date:'MMM d, h:mm a' }}</span>
                  <div class="flex items-center gap-4 mt-1">
                    <button (click)="deleteMessage(message._id!); $event.stopPropagation()" class="text-gray-300 hover:text-red-400 transition-colors p-1 rounded-full hover:bg-red-50" title="Delete">
                      <span class="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <!-- Pagination (Static for now) -->
          <div class="flex items-center justify-between mt-8 mb-4 pt-4 border-t border-gray-200" *ngIf="filteredMessages.length > 0">
            <p class="text-sm text-[#88636f]">Showing <span class="font-bold text-[#181113]">{{ filteredMessages.length }}</span> messages</p>
          </div>
        </div>
      </main>
    </div>
  `
})
export class AdminMessagesComponent implements OnInit {
  currentUser: any;
  messages: Message[] = [];
  filteredMessages: Message[] = [];
  searchTerm: string = '';
  subjectFilter: string = 'all';
  unreadCount: number = 0;
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    this.authService.user$.subscribe(user => {
        this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.messageService.getMessages().subscribe({
      next: (data) => {
        this.messages = data || [];
        this.filterMessages();
        this.updateUnreadCount();
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading messages:', error);
      }
    });
  }

  filterMessages() {
    this.filteredMessages = this.messages.filter(msg => {
      const matchesSearch = (msg.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                             msg.email?.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                             msg.subject?.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                             msg.message?.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesSubject = this.subjectFilter === 'all' || msg.subject === this.subjectFilter;
      
      return matchesSearch && matchesSubject;
    });
  }

  updateUnreadCount() {
    this.unreadCount = this.messages.filter(m => m.status === 'unread').length;
  }

  markAsRead(id: string) {
    this.messageService.updateStatus(id, 'read').subscribe({
      next: (updatedMsg) => {
        const index = this.messages.findIndex(m => m._id === id);
        if (index !== -1) {
          this.messages[index].status = 'read';
          this.filterMessages();
          this.updateUnreadCount();
        }
      },
      error: (err) => console.error('Error marking as read', err)
    });
  }

  markAsUnread(id: string) {
    this.messageService.updateStatus(id, 'unread').subscribe({
      next: (updatedMsg) => {
        const index = this.messages.findIndex(m => m._id === id);
        if (index !== -1) {
          this.messages[index].status = 'unread';
          this.filterMessages();
          this.updateUnreadCount();
        }
      },
      error: (err) => console.error('Error marking as unread', err)
    });
  }

  deleteMessage(id: string) {
    if (confirm('Are you sure you want to delete this message?')) {
      this.messageService.deleteMessage(id).subscribe({
        next: () => {
          this.messages = this.messages.filter(m => m._id !== id);
          this.filterMessages();
          this.updateUnreadCount();
        },
        error: (err) => console.error('Error deleting message', err)
      });
    }
  }

  logout() {
    this.authService.logout();
  }

  getInitials(name: string): string {
    return name
        .trim()
        .split(/\s+/)
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
  }
}
