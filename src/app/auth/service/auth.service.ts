import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private http: HttpClient, 
    private router: Router) { }

  loginUser(user) {
    const url = 'http://app5.test.planohero.com//api/auth/token/get/';
    return this.http.post<any>(url, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
} 