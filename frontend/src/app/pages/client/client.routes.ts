import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const CLIENT_ROUTES: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./layout/client-layout.component').then(m => m.ClientLayoutComponent),
        children: [
            { path: 'dashboard', loadComponent: () => import('./dashboard/client-dashboard.component').then(m => m.ClientDashboardComponent) },
            { path: 'appointments', loadComponent: () => import('./appointments/client-appointments.component').then(m => m.ClientAppointmentsComponent) },
            { path: 'gallery', loadComponent: () => import('./gallery/client-gallery.component').then(m => m.ClientGalleryComponent) },
            { path: 'settings', loadComponent: () => import('./profile/client-profile.component').then(m => m.ClientProfileComponent) }
        ]
    },
    {
        path: '',
        loadComponent: () => import('./layout/public-layout.component').then(m => m.PublicLayoutComponent),
        children: [
            { path: 'landing', component: LandingPageComponent },
            {
                path: 'services',
                loadComponent: () => import('./services/services-page.component').then(m => m.ServicesPageComponent)
            },
            {
                path: 'artists',
                loadComponent: () => import('./artists/artists-page.component').then(m => m.ArtistsPageComponent)
            },
            {
                path: 'gallery-public',
                loadComponent: () => import('./gallery/gallery-page.component').then(m => m.GalleryPageComponent)
            },
            {
                path: 'contact',
                loadComponent: () => import('./contact/contact-page.component').then(m => m.ContactPageComponent)
            },
            {
                path: 'gallery/:id',
                loadComponent: () => import('./gallery-detail/gallery-detail-page.component').then(m => m.GalleryDetailPageComponent)
            }
        ]
    },
    {
        path: 'booking',
        loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent),
        children: [
            { path: '', redirectTo: '/client/booking/services', pathMatch: 'full' },
            {
                path: 'services',
                loadComponent: () => import('./booking/steps/service-selection/service-selection.component').then(m => m.ServiceSelectionComponent)
            },
            {
                path: 'nails',
                loadComponent: () => import('./booking/steps/nails-selection/nails-selection.component').then(m => m.NailsSelectionComponent)
            },
            {
                path: 'artists',
                loadComponent: () => import('./booking/steps/artist-selection/artist-selection.component').then(m => m.ArtistSelectionComponent)
            },
            {
                path: 'time',
                loadComponent: () => import('./booking/steps/time-selection/time-selection.component').then(m => m.TimeSelectionComponent)
            },
            {
                path: 'review',
                loadComponent: () => import('./booking/steps/review-selection/review-selection.component').then(m => m.ReviewSelectionComponent)
            },
            {
                path: 'success',
                loadComponent: () => import('./booking/steps/booking-success/booking-success.component').then(m => m.BookingSuccessComponent)
            }
        ]
    }
];
