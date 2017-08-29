import {Component, OnInit} from "@angular/core";
import {PostsService} from "../../services/posts/posts.service";
import {Post} from "../../model/post";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Post;
  errorReason;
  id: number;

  constructor(private postsService: PostsService, private route: ActivatedRoute,) {
  }

  setPost(post) {
    this.post = post;
    this.errorReason = null;
  }


  //Lifecycle hooks. Do some research
  ngOnInit() {
    console.log("Oninit");
    //Use this.route.snapshot.paramMap for non-observable version

    Observable
      .combineLatest([
        this.route.paramMap,
        this.route.queryParamMap,
      ])
      .switchMap(combined => {
        this.id = +combined[0].get('id');
        return this.postsService.getObservableById(this.id);
      }) //Normal map returns  Observable<Observable<T>>
        //SwitchMap or FlatMap works here
      //.catch((error) => this.errorReason = error.message)
      .subscribe((postResponse: Post) => this.setPost(postResponse));

  }

}
