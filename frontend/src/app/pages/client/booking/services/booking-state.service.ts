import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BookingState {
    service: any | null;
    artist: any | null;
    date: Date | null;
    time: string | null;
    paymentMethod: 'card' | 'cash' | 'upi' | null;
}

const initialState: BookingState = {
    service: null,
    artist: null,
    date: null,
    time: null,
    paymentMethod: null
};

@Injectable({
    providedIn: 'root'
})
export class BookingStateService {
    private state = new BehaviorSubject<BookingState>(initialState);
    state$ = this.state.asObservable();

    updateState(partialState: Partial<BookingState>) {
        this.state.next({ ...this.state.value, ...partialState });
    }

    getState(): BookingState {
        return this.state.value;
    }

    reset() {
        this.state.next(initialState);
    }
}
