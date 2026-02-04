import { Routes } from '@angular/router';
import { WorkerDashboardComponent } from './worker-dashboard/worker-dashboard.component';
import { WorkerScheduleComponent } from './schedule/worker-schedule.component';
import { WorkerRequestsComponent } from './requests/worker-requests.component';
import { WorkerReviewsComponent } from './reviews/worker-reviews.component';

export const WORKER_ROUTES: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: WorkerDashboardComponent },
    { path: 'schedule', component: WorkerScheduleComponent },
    { path: 'requests', component: WorkerRequestsComponent },
    { path: 'reviews', component: WorkerReviewsComponent },
];
