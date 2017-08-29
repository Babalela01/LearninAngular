import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {CoursesModule} from "./modules/courses/courses.module";
import {PostsModule} from "./modules/posts/posts.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {PostsComponent} from "./modules/posts/components/posts/posts.component";
import {SinglePostComponent} from "./modules/posts/components/single-post/single-post.component";
import {CoursesComponent} from "./modules/courses/components/courses/courses.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    PostsModule,
    RouterModule.forRoot([ //Probably declare this in a separate file and import it here
      {path: 'posts/:id', component: SinglePostComponent}, //Order important
      {path: 'posts', component: PostsComponent},
      {path: 'courses', component: CoursesComponent},
      {path: '', component: HomeComponent},
      {path: '**', component: NotFoundComponent} //Order important
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
