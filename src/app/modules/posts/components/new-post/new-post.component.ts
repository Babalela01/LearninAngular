import {Component, EventEmitter, Output} from "@angular/core";
import {PostsService} from "../../services/posts/posts.service";
import {Post} from "../../model/post";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(private postService: PostsService, private router: Router) {
  }

  @Output() postAdded = new EventEmitter();

  submit(form: FormGroup) {
    let post = form.value;
    this.postService
      .createPost(post)
      .then((postIdResponse) => {
        form.reset();
        post.id = postIdResponse.id;
        this.postAdded.emit(post as Post);
        return post;
      })
      // .then((post) => { //To programattically navigate
      //   this.router.navigate(['/app.modules.posts', post.id], {
      //     queryParams: {'q': 1}
      //   })
      // });
  }
}
