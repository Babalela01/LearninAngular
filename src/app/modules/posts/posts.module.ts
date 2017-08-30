import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NewPostComponent } from './components/new-post/new-post.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { MyErrorHandler } from './services/my-error-handler';
import { PostsService } from './services/posts/posts.service';

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
