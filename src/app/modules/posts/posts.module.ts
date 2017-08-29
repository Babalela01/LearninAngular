import {ErrorHandler, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PostsComponent} from "./components/posts/posts.component";
import {HttpModule} from "@angular/http";
import {PostComponent} from "./components/post/post.component";
import {NewPostComponent} from "./components/new-post/new-post.component";
import {FormsModule} from "@angular/forms";
import {PostsService} from "./services/posts/posts.service";
import {MyErrorHandler} from "./services/my-error-handler";
import {SinglePostComponent} from "./components/single-post/single-post.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [PostsService,
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
    }],
  declarations: [PostsComponent, PostComponent, NewPostComponent, SinglePostComponent],
  exports: [PostsComponent, SinglePostComponent]
})
export class PostsModule {
}
