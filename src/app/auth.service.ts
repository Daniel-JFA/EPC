import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/login';
  private registerUrl = 'http://localhost:3000/register';
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post(this.loginUrl, { username, password });
  }

  register(username: string, password: string) {
    return this.http.post(this.registerUrl, { username, password });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
