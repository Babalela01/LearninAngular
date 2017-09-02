import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log(route);
    console.log(route.url); //Object
    console.log(state.url); //String
    if (this.authService.isLoggedIn()) {
      return true
    }
    else
    {
      this.router.navigate(['/auth/login'], {queryParams: {
        returnUrl : state.url
      }});
      return false;
    }
  }

  constructor(private authService: AuthService, private router: Router) {

  }

}
