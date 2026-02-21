import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-artist-register',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
    templateUrl: './artist-register.component.html',
    styleUrls: ['./artist-register.component.css']
})
export class ArtistRegisterComponent {
    artistForm: FormGroup;
    isLoading = false;
    errorMessage = '';
    showPassword = false;

    skillsList = [
        { name: 'Gel Polish', value: 'Gel Polish' },
        { name: 'Acrylics', value: 'Acrylics' },
        { name: '3D Art', value: '3D Art' },
        { name: 'Manicure', value: 'Manicure' },
        { name: 'Pedicure', value: 'Pedicure' },
        { name: 'Hand Massage', value: 'Hand Massage' },
        { name: 'Extension Removal', value: 'Extension Removal' }
    ];

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private cd: ChangeDetectorRef
    ) {
        this.artistForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            experience: ['', Validators.required],
            skills: this.fb.array([], Validators.required),
            bio: ['', [Validators.required, Validators.maxLength(500)]]
        });
    }

    onCheckboxChange(e: any) {
        const skills: FormArray = this.artistForm.get('skills') as FormArray;
        if (e.target.checked) {
            skills.push(this.fb.control(e.target.value));
        } else {
            let i = 0;
            skills.controls.forEach((item: any) => {
                if (item.value == e.target.value) {
                    skills.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }

    togglePassword() {
        this.showPassword = !this.showPassword;
    }

    onSubmit() {
        if (this.artistForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';

            const formData = {
                ...this.artistForm.value,
                name: `${this.artistForm.value.firstName} ${this.artistForm.value.lastName}`,
                role: 'artist'
            };

            this.authService.register(formData).subscribe({
                next: (res) => {
                    this.isLoading = false;
                    this.router.navigate(['/auth/login']);
                },
                error: (err) => {
                    console.error('Registration error:', err);
                    this.isLoading = false;

                    if (err.error && typeof err.error === 'object' && err.error.message) {
                        this.errorMessage = err.error.message;
                    } else if (typeof err.error === 'string') {
                        this.errorMessage = err.error;
                    } else {
                        this.errorMessage = 'Registration failed. Please try again.';
                    }

                    // Force change detection
                    this.cd.detectChanges();

                    // Scroll to top to show error
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        } else {
            this.artistForm.markAllAsTouched();
            // Scroll to top if form is invalid to show validation errors
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
