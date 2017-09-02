import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private authService: AuthService, private http: Http, private authHttp: AuthHttp) {
  }

  getOrders() {
    let headers: Headers = new Headers({Authorization: 'Bearer ' + this.authService.getToken()});
    let options = new RequestOptions({ headers: headers });

    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }

  getAuthOrders() {
    return this.authHttp.get('/api/orders',)
      .map(response => response.json());
  }
}
