import { Injectable, signal, WritableSignal } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppState {
  private userSignal: WritableSignal<User | null> = signal(null);

  user = this.userSignal.asReadonly();

  setUser(user: User | null) {
    this.userSignal.set(user);
  }

  clearUser() {
    this.userSignal.set(null);
  }
}
