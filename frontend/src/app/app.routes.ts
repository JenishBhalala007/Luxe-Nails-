import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export class RoleGuard {
    // Placeholder for RoleGuard
    static forRole(role: string) {
        return (route: any) => {
            // simplified logic
            return true;
        }
    }
}


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'client/landing',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'client',
        loadChildren: () => import('./pages/client/client.routes').then(m => m.CLIENT_ROUTES)
    },
    {
        path: 'artist',
        canActivate: [AuthGuard], // Add RoleGuard here later
        loadChildren: () => import('./pages/artist/artist.routes').then(m => m.ARTIST_ROUTES)
    },
    {
        path: 'admin',
        canActivate: [AuthGuard], // Add RoleGuard here later
        loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    }
];
