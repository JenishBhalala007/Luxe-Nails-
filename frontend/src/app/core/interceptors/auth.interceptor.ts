import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token');

    console.log(`AuthInterceptor: API Call to ${req.url}`);

    if (token) {
        console.log('AuthInterceptor: Token found. Attaching to header.');
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(cloned);
    } else {
        console.warn('AuthInterceptor: No token found in localStorage for request', req.url);
    }

    return next(req);
};
