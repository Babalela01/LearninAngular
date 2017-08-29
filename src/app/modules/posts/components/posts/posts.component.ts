import {Component, OnInit} from "@angular/core";
import {Post} from "../../model/post";
import {PostsService} from "../../services/posts/posts.service";
import {GeneralError} from "../../model/errors";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  errorReason;

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
  }

  setPosts(posts) {
    this.posts = posts;
    this.errorReason = null;
  }

  //Lifecycle hooks. Do some research
  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap.get('page'));

    this.postsService
      .getAllAsPromise()
      .then((postResponse: Post[]) => this.setPosts(postResponse))
      .catch(
        (error: GeneralError) => {
          this.errorReason = error.message;
        });
  }

  showNewPost(post: Post) {
    this.posts.splice(0,0, post);
  }

}
