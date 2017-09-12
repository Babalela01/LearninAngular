import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthConfigConsts, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

interface AuthToken {
  name: string,
  roles: string[]
}

@Injectable()
export class AuthService {

  private readonly TOKEN_KEY = AuthConfigConsts.DEFAULT_TOKEN_NAME;
  private readonly AUTH_URL = '/api/authenticate';

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
    /*  let token = this.getToken();

     if (!token) {
     return false;
     }

     let isExpired = this.jwtHelper.isTokenExpired(token);

     return !isExpired;*/
    return tokenNotExpired();

  }

  public getToken(): string {

    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUsername() {
    if (this.isLoggedIn()) {
      let token = this.getToken();
      return this.decodeToken(token).name;
    }
    return null;
  }

  private decodeToken(token: string): AuthToken {
    return this.jwtHelper.decodeToken(token);
  }

  /**
   * Returns true if the user is logged in and has the specified role
   * @param role
   * @return {boolean}
   */
  hasRole(role: string) {
    if (this.isLoggedIn()) {
      let token = this.getToken();
      let roles: string[] = this.decodeToken(token).roles;
      return roles.indexOf(role) > -1
    }
    return false;
  }

  canView(component: string) {
    console.log('Checking view for ' + component);
    return this.hasRole('admin');
  }
}

