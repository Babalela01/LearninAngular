import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, Http, HttpModule, RequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthConfig, AuthHttp } from 'angular2-jwt/angular2-jwt';

import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth-root/auth.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RestrictTestComponent } from './components/restrict-test/restrict-test.component';
import { RestrictViewComponent } from './components/restrict-view/restrict-view.component';
import { SignupComponent } from './components/signup/signup.component';
import { RestrictDirective } from './directives/restrict.directive';
import { Restrict2Directive } from './directives/restrict2.directive';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    RestrictViewComponent,
    RestrictTestComponent,
    RestrictDirective,
    Restrict2Directive,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    // provideAuth({
    //
    // }),

    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  exports: [AuthComponent]
})
export class MyAuthModule {
}
