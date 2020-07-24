import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'http://app2.test.planohero.com/api/auth/token/get/';

  constructor(
    private http: HttpClient, 
    private router: Router
    ) { }

  loginUser(user) {
    return this.http.post<any>(this.url, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/auth'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

} 