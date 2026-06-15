import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    private readonly TOKEN_KEY = 'access_token';

    isLoggedIn = signal<boolean>(
    !!localStorage.getItem(this.TOKEN_KEY)
    );

    setToken(token: string) : void {
        localStorage.setItem(this.TOKEN_KEY, token);
        this.isLoggedIn.set(true);
    }

    getToken() : string|null{
        return localStorage.getItem(this.TOKEN_KEY);
    }

    clearToken(): void{
        localStorage.removeItem(this.TOKEN_KEY);
        this.isLoggedIn.set(false);
    }
}