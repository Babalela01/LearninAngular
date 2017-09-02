import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app-root/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyAuthModule } from './modules/auth/auth.module';

import { CoursesModule } from './modules/courses/courses.module';
import { MyFormsModule } from './modules/my-forms/my-forms.module';
import { PostsModule } from './modules/posts/posts.module';
import { AppRouterModule } from './routes/app.routes';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    AppRouterModule,

    BrowserModule,
    CoursesModule,
    PostsModule,
    MyFormsModule,
    RouterModule,
    MyAuthModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
