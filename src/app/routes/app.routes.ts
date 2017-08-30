import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

import { CoursesComponent } from '../modules/courses/components/courses/courses.component';
import { COURSES_ROUTES } from '../modules/courses/routes/courses.routes';
import { MyFormsRouter } from '../modules/my-forms/router/my-forms.routes';
import { PostsComponent } from '../modules/posts/components/posts/posts.component';
import { SinglePostComponent } from '../modules/posts/components/single-post/single-post.component';
import { AuthRouter } from '../modules/auth/routing/auth.routes';

const APP_ROUTES: Routes = [ // Probably declare this in a separate file and import it here
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {  // Order IS important - default matching is prefix matching
    path: 'posts/:id',
    component: SinglePostComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  { // Import definitions from courses module
    path: 'courses',
    component: CoursesComponent,
    children: COURSES_ROUTES
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { // Order is important
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    MyFormsRouter, // This imports and merges the other routing config
    AuthRouter,
    RouterModule.forRoot(APP_ROUTES)
  ]
})
export class AppRouterModule {
}
