import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router,
              private authService: AuthService,
              private route: ActivatedRoute) {
  }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          let redirectUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/auth';
          this.router.navigate([redirectUrl]);
        }
        else
          this.invalidLogin = true;
      });
  }
}
