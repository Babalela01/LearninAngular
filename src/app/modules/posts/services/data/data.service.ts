import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {GeneralError, NotFoundError} from "../../model/errors";

import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

export class DataService<T> {

  constructor(private http: Http, private url: string) {
  }

  handleError(err: Response) {
    if (err.status == 404) {
      return Observable.throw(new NotFoundError(err))
    }
    return Observable.throw(new GeneralError(err))
  };

  public getAllAsPromise(): Promise<T[]> {
    return this.getAllAsObservable()
      .toPromise();
  }

  public getPromiseById(id: number): Promise<T> {
    return this.getObservableById(id)
      .toPromise();
  }

  public getObservableById(id: number): Observable<T> {
    return this.http
      .get(this.url + "/" + id)
      .retry(3)
      .map(response => response.json())
      .catch(this.handleError)
  }


  public getAllAsObservable(): Observable<T[]> {
    return this.http
      .get(this.url)
      .retry(3)
      .map(response => response.json() as T[])
      .catch(this.handleError)
    /*.subscribe(
     (resp) => console.log("did something"),
     (err) => console.log(err)
     ).unsubscribe(); */
  }

  public createPost(input: T): Promise<T> {
    return this.http
      .post(this.url, input)
      .map(response => response.json())
      .catch(this.handleError)
      .toPromise();
  }

  //Observables are lazy - If you do not subscribe to an observable nothing happens!!!!
  //  * Observable subscriptions can be cancelled
  //  * Many more operators than promises
  //  * Can unsubscribe to cancel operation
  //Promises are eager.

}
