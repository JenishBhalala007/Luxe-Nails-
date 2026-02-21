
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from '../../../core/services/message.service';
import { LandingFooterComponent } from '../landing-page/components/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LandingFooterComponent],
  template: `
    <!-- Contact Page Layout -->
    <div class="font-display text-slate-900 dark:text-slate-100 antialiased">
      
      <!-- Main Content -->
      <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        <!-- Page Header -->
        <div class="text-center mb-16 space-y-4">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get in <span class="text-primary italic">Touch</span>
          </h1>
          <p class="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Book an appointment or ask us anything about our luxury nail treatments.
          </p>
        </div>

        <!-- Split Layout -->
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          <!-- Left Column: Info Card (40%) -->
          <div class="w-full lg:w-2/5 flex flex-col gap-8">
            <div class="bg-white/80 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 h-full border border-primary/20">
              
              <!-- Contact Details List -->
              <div class="space-y-8">
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                
                <!-- Phone -->
                <div class="flex items-start gap-5 group">
                  <div class="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    <span class="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Phone</p>
                    <p class="text-slate-700 dark:text-slate-200 font-medium text-lg leading-tight group-hover:text-primary transition-colors">(555) 123-4567</p>
                  </div>
                </div>
                
                <!-- Email -->
                <div class="flex items-start gap-5 group">
                  <div class="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    <span class="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Email</p>
                    <p class="text-slate-700 dark:text-slate-200 font-medium text-lg leading-tight group-hover:text-primary transition-colors">hello@luxenails.com</p>
                  </div>
                </div>
                
                <!-- Address -->
                <div class="flex items-start gap-5 group">
                  <div class="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                    <span class="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Location</p>
                    <p class="text-slate-700 dark:text-slate-200 font-medium text-lg leading-tight">123 Luxury Lane<br/>Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>

              <hr class="border-slate-100 dark:border-slate-700 my-8"/>
              
              <!-- Opening Hours -->
              <div class="space-y-4">
                <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-xl">schedule</span>
                  Opening Hours
                </h4>
                <div class="flex justify-between text-sm text-slate-600 dark:text-slate-300 border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                  <span>Monday - Friday</span>
                  <span class="font-semibold text-slate-800 dark:text-white">9:00 AM - 7:00 PM</span>
                </div>
                <div class="flex justify-between text-sm text-slate-600 dark:text-slate-300 border-b border-dashed border-slate-200 dark:border-slate-700 pb-2">
                  <span>Saturday</span>
                  <span class="font-semibold text-slate-800 dark:text-white">10:00 AM - 5:00 PM</span>
                </div>
                <div class="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                  <span>Sunday</span>
                  <span class="font-semibold text-primary">Closed</span>
                </div>
              </div>

              <!-- Map Widget -->
              <div class="mt-8 h-48 w-full rounded-xl overflow-hidden shadow-inner map-container relative">
                <iframe allowfullscreen="" 
                  data-alt="Map showing the location of the salon in Beverly Hills" 
                  data-location="Beverly Hills, CA" 
                  height="100%" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220363989!2d-118.40035632363102!3d34.07604381775823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1714856031206!5m2!1sen!2sus" 
                  style="border:0;" 
                  title="Google Map of Location" 
                  width="100%">
                </iframe>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none drop-shadow-lg">
                  <span class="material-symbols-outlined text-4xl text-primary animate-bounce">location_on</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Form Card (60%) -->
          <div class="w-full lg:w-3/5">
            <div class="bg-white/80 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 border-2 border-primary/20 h-full flex flex-col justify-center relative overflow-hidden group">
              <div class="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
                <span class="material-symbols-outlined text-9xl text-primary rotate-12">mail</span>
              </div>
              <div class="mb-10">
                <h3 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">Send us a Message</h3>
                <p class="text-slate-500 dark:text-slate-400">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Name Input -->
                  <div class="relative">
                    <input formControlName="name" class="peer block w-full appearance-none border-0 border-b border-slate-300 dark:border-slate-600 bg-transparent px-0 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-base placeholder-transparent transition-all duration-300 outline-none ring-0" id="name" placeholder="Full Name" type="text"/>
                    <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full"></div>
                    <label class="absolute top-3 left-0 pointer-events-none origin-[0] -translate-y-6 scale-75 transform text-base text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-slate-400 peer-focus:dark:text-primary font-medium" for="name">Full Name</label>
                  </div>
                  <!-- Email Input -->
                  <div class="relative">
                    <input formControlName="email" class="peer block w-full appearance-none border-0 border-b border-slate-300 dark:border-slate-600 bg-transparent px-0 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-base placeholder-transparent transition-all duration-300 outline-none ring-0" id="email" placeholder="Email Address" type="email"/>
                    <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full"></div>
                    <label class="absolute top-3 left-0 pointer-events-none origin-[0] -translate-y-6 scale-75 transform text-base text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-slate-400 peer-focus:dark:text-primary font-medium" for="email">Email Address</label>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Phone Input -->
                  <div class="relative">
                    <input formControlName="phone" class="peer block w-full appearance-none border-0 border-b border-slate-300 dark:border-slate-600 bg-transparent px-0 py-2.5 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-base placeholder-transparent transition-all duration-300 outline-none ring-0" id="phone" placeholder="Phone Number" type="tel"/>
                    <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full"></div>
                    <label class="absolute top-3 left-0 pointer-events-none origin-[0] -translate-y-6 scale-75 transform text-base text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-slate-400 peer-focus:dark:text-primary font-medium" for="phone">Phone Number</label>
                  </div>
                  
                  <!-- Subject Custom Dropdown -->
                  <div class="relative">
                    <input type="hidden" formControlName="subject">
                    
                    <button 
                      type="button" 
                      (click)="toggleDropdown()"
                      class="peer block w-full text-left border-0 border-b border-slate-300 dark:border-slate-600 bg-transparent px-0 py-2.5 text-base focus:border-primary focus:outline-none focus:ring-0 transition-all duration-300 relative z-10"
                      [class.text-slate-900]="contactForm.get('subject')?.value"
                      [class.dark:text-white]="contactForm.get('subject')?.value"
                      [class.text-transparent]="!contactForm.get('subject')?.value">
                      {{ contactForm.get('subject')?.value ? getSelectedLabel() : 'Select a subject' }}
                    </button>
                    
                    <div class="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 peer-focus:w-full" [class.w-full]="dropdownOpen"></div>
                    
                    <label 
                      class="absolute top-3 left-0 pointer-events-none origin-[0] transform text-base text-slate-500 duration-300 font-medium z-0"
                      [class.-translate-y-6]="contactForm.get('subject')?.value || dropdownOpen"
                      [class.scale-75]="contactForm.get('subject')?.value || dropdownOpen"
                      [class.text-primary]="dropdownOpen">
                      Subject
                    </label>
                    
                    <div class="absolute right-0 top-3 pointer-events-none text-slate-500 transition-transform duration-300" [class.rotate-180]="dropdownOpen">
                      <span class="material-symbols-outlined text-xl">expand_more</span>
                    </div>

                    <!-- Dropdown Menu -->
                    <div 
                      *ngIf="dropdownOpen" 
                      class="absolute top-full left-0 w-full mt-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200 origin-top">
                      <div class="py-1">
                        <button 
                          *ngFor="let option of subjectOptions"
                          type="button"
                          (click)="selectSubject(option.value)"
                          class="w-full text-left px-4 py-3 text-sm hover:bg-primary/10 hover:text-primary transition-colors flex items-center justify-between group"
                          [class.bg-primary-50]="contactForm.get('subject')?.value === option.value"
                          [class.text-primary]="contactForm.get('subject')?.value === option.value"
                          [class.text-slate-700]="contactForm.get('subject')?.value !== option.value"
                          [class.dark:text-slate-200]="contactForm.get('subject')?.value !== option.value">
                          <span class="font-medium">{{ option.label }}</span>
                          <span *ngIf="contactForm.get('subject')?.value === option.value" class="material-symbols-outlined text-lg">check</span>
                        </button>
                      </div>
                    </div>
                    
                    <!-- Backdrop to close on click outside -->
                    <div *ngIf="dropdownOpen" (click)="closeDropdown()" class="fixed inset-0 z-0 cursor-default"></div>
                  </div>
                </div>
                
                <!-- Message Textarea -->
                <div class="relative mt-4">
                  <textarea formControlName="message" class="peer block w-full appearance-none rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50 px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 text-base resize-none transition-colors outline-none ring-0" id="message" placeholder=" " rows="5"></textarea>
                  <label class="absolute top-3 left-4 pointer-events-none origin-[0] -translate-y-8 scale-75 transform text-base bg-surface dark:bg-slate-800 px-1 text-slate-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-primary dark:text-slate-400 peer-focus:dark:text-primary font-medium" for="message">Your Message</label>
                </div>
                
                <!-- Alert Message -->
                <div *ngIf="submitStatus" class="p-4 rounded-lg" [ngClass]="submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
                  {{ submitMessage }}
                </div>

                <!-- Submit Button -->
                <button type="submit" [disabled]="contactForm.invalid || isSubmitting" class="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-primary p-4 text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:opacity-70 disabled:cursor-not-allowed">
                  <span class="absolute right-0 translate-x-full transition-transform duration-300 group-hover:-translate-x-4">
                    <span class="material-symbols-outlined">{{ isSubmitting ? 'hourglass_empty' : 'send' }}</span>
                  </span>
                  <span class="transition-transform duration-300 group-hover:-translate-x-2">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <app-landing-footer></app-landing-footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class ContactPageComponent {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);
  
  contactForm: FormGroup;
  dropdownOpen = false;
  isSubmitting = false;
  submitStatus: 'success' | 'error' | null = null;
  submitMessage = '';
  
  subjectOptions = [
    { value: 'Appointment Booking', label: 'Appointment Booking' },
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Feedback', label: 'Feedback' }
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectSubject(value: string) {
    this.contactForm.patchValue({ subject: value });
    this.dropdownOpen = false;
  }

  getSelectedLabel(): string {
    const value = this.contactForm.get('subject')?.value;
    const option = this.subjectOptions.find(opt => opt.value === value);
    return option ? option.label : '';
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitStatus = null;
      
      this.messageService.sendMessage(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitStatus = 'success';
          this.submitMessage = 'Your message has been sent successfully! We will get back to you soon.';
          this.contactForm.reset();
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            this.submitStatus = null;
            this.submitMessage = '';
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitStatus = 'error';
          this.submitMessage = 'Failed to send message. Please try again later.';
          console.error('Error sending message:', error);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
