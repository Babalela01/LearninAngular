import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AuthComponent } from './components/auth-root/auth.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';

import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AUTH_PROVIDERS, AuthConfig, AuthHttp, provideAuth } from 'angular2-jwt/angular2-jwt';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent
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
    AuthHttp,

    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  exports: [AuthComponent]
})
export class MyAuthModule {
}
