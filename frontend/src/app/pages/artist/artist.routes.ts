import { Routes } from '@angular/router';
import { ArtistDashboardComponent } from './artist-dashboard/artist-dashboard.component';
import { ArtistScheduleComponent } from './artist-schedule/artist-schedule.component';
import { ArtistRequestsComponent } from './artist-requests/artist-requests.component';
import { ArtistReviewsComponent } from './artist-reviews/artist-reviews.component';

export const ARTIST_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: ArtistDashboardComponent },
    { path: 'schedule', component: ArtistScheduleComponent },
    { path: 'requests', component: ArtistRequestsComponent },
    { path: 'reviews', component: ArtistReviewsComponent },
];
