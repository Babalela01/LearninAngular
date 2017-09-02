import { Headers, Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private authService: AuthService, private http: Http) {
  }

  getOrders() {
    let headers: Headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authService.getToken());

    let options = new RequestOptions({ headers: headers });

    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }
}
