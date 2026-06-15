import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginRequest } from "../models/login-request.model";
import { Observable } from "rxjs";
import { AuthResponse } from "../models/auth-response.model";
import {API_CONFIG, API_ENDPOINTS} from "shared-config";
import { SignupRequest } from "../models/signup-request.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
     private http = inject(HttpClient);

     login(payload: LoginRequest): Observable<any> {
        return this.http.post(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.LOGIN}`, payload)
     }

     signup(payload: SignupRequest): Observable<any> {
        return this.http.post(`${API_CONFIG.BASE_URL}${API_ENDPOINTS.SIGN_UP}`, payload)
     }


}