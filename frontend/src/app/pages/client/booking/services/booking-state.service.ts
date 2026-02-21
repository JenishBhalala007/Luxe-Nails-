import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BookingState {
    services: any[];
    nailDesigns: any[];
    artist: any | null;
    date: Date | null;
    time: string | null;
    paymentMethod: 'card' | 'cash' | 'upi' | null;
}

const initialState: BookingState = {
    services: [],
    nailDesigns: [],
    artist: null,
    date: null,
    time: null,
    paymentMethod: null
};

@Injectable({
    providedIn: 'root'
})
export class BookingStateService {
    private loadState(): BookingState {
        const saved = localStorage.getItem('bookingState');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Restore Date objects if needed because JSON.parse makes them strings
                if (parsed.date) parsed.date = new Date(parsed.date);
                return parsed;
            } catch (e) {
                console.error('Failed to load booking state', e);
            }
        }
        return initialState;
    }

    private state = new BehaviorSubject<BookingState>(this.loadState());
    state$ = this.state.asObservable();

    updateState(partialState: Partial<BookingState>) {
        const newState = { ...this.state.value, ...partialState };
        this.state.next(newState);
        localStorage.setItem('bookingState', JSON.stringify(newState));
    }

    getState(): BookingState {
        return this.state.value;
    }

    getBookingTotal(): number {
        const state = this.state.value;
        const designsTotal = state.nailDesigns.reduce((sum, d) => sum + (d.price || 0), 0);
        const artistFee = state.artist ? (state.artist.basePrice || 200) : 0;
        
        return designsTotal + artistFee;
    }

    reset() {
        this.state.next(initialState);
        localStorage.removeItem('bookingState');
    }
}
