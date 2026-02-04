import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-required-modal',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" (click)="close()">
      <div class="bg-white dark:bg-[#1a0b0e] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100" (click)="$event.stopPropagation()">
        <!-- Modal Content -->
        <div class="p-8 flex flex-col items-center text-center">
          <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-3xl text-primary">lock</span>
          </div>
          
          <h3 class="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">Login Required</h3>
          <p class="text-gray-500 dark:text-gray-400 mb-8 font-body">
            Please log in to book an appointment. It only takes a moment!
          </p>

          <div class="flex flex-col gap-3 w-full">
            <button (click)="login()" class="w-full py-3.5 rounded-xl bg-primary text-white font-bold font-body text-sm shadow-lg shadow-primary/30 hover:bg-primary-bold transition-all transform hover:-translate-y-0.5">
              Log In
            </button>
            <button (click)="close()" class="w-full py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold font-body text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LoginRequiredModalComponent {
    @Output() onClose = new EventEmitter<void>();

    constructor(private router: Router) { }

    login() {
        this.router.navigate(['/auth/login']);
        this.onClose.emit();
    }

    close() {
        this.onClose.emit();
    }
}
