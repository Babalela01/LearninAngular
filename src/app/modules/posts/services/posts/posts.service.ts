import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Post} from "../../model/post";
import {NotFoundError, GeneralError} from "../../model/post-error";


import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";

import "rxjs/add/observable/throw"

@Injectable()
export class PostsService {

  POST_URL = "https://jsonplaceholder.typicode.com/posts/404";

  constructor(private http: Http) {
  }

  errorHandler(err: Response) {
    if (err.status == 404) {
      return Observable.throw(new NotFoundError(err))
    }
    return Observable.throw(new GeneralError(err))
  };

  public getAllAsPromise(): Promise<Post[]> {

    return this.http
      .get(this.POST_URL)
      .map(response => response.json()) //Need to import separately
      .catch(this.errorHandler)
      .toPromise();
  }

  public getAllAsObservable(): Observable<Post[]> {
    return this.http
      .get(this.POST_URL)
      .map(response => response.json()) //Need to import separately
      .catch(this.errorHandler)
    /*.subscribe(
     (resp) => console.log("did something"),
     (err) => console.log(err)
     )*/
  }

  public createPost(input): Promise<any> {
    return this.http
      .post(this.POST_URL, input)
      .map(response => response.json())
      .catch(this.errorHandler)
      .toPromise();
  }
}
