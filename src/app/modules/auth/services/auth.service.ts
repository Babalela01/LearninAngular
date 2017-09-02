import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private TOKEN_KEY = 'token';
  private AUTH_URL = '/api/authenticate';

  private jwtHelper = new JwtHelper();

  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post(this.AUTH_URL,
      JSON.stringify(credentials)).map(response => {
      let result = response.json();
      if (result.success && result.token) {
        localStorage.setItem(this.TOKEN_KEY, result.token);
        return true;
      }
      return false;
    });
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn() {
   /* let token = this.getToken();

    if (!token) {
      return false;
    }

    let isExpired = this.jwtHelper.isTokenExpired(token);

    return !isExpired;*/
    return tokenNotExpired();

  }

  private getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUsername() {
    let token = this.getToken();
    return this.jwtHelper.decodeToken(token).name;
  }
}

