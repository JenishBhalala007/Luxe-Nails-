import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './bookings/admin-bookings.component';
import { AdminUsersComponent } from './users/admin-users.component';
import { AdminServicesComponent } from './services/admin-services.component';
import { AdminGalleryComponent } from './gallery/admin-gallery.component';

export const ADMIN_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'bookings', component: AdminBookingsComponent },
    { path: 'users', component: AdminUsersComponent },
    { path: 'services', component: AdminServicesComponent },
    { path: 'gallery', component: AdminGalleryComponent },
    { path: 'messages', loadComponent: () => import('./messages/admin-messages.component').then(m => m.AdminMessagesComponent) },
];
