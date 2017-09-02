import { Provider } from '@angular/core';
import { BaseRequestOptions, Http, RequestMethod, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend,
                                   options: BaseRequestOptions) {

  //Valid jwt (json web token) -- see jwt.io
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJlbmV0dGUiLCJhZG1pbiI6dHJ1ZX0.wfKXAPjHDHX6S9DCXO_mpsS4bspn6GGUpadtAPIaGSI';

  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an
    // asynchronous call to the server that takes 1 second.
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());

        if (body.email === 'renetter@discovery.co.za' && body.password === 'Password1') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: {token: token, success: true}
            })));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({status: 200, body: {success: false}})
          ));
        }
      }


      //
      // Fake implementation of /api/orders
      //
      if (connection.request.url.endsWith('/api/orders') &&
        connection.request.method === RequestMethod.Get) {
        if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
          connection.mockRespond(new Response(
            new ResponseOptions({status: 200, body: [1, 2, 3]})
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({status: 401})
          ));
        }
      }


    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider: Provider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
