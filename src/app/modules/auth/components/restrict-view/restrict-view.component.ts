import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-restrict-view',
  templateUrl: './restrict-view.component.html',
  styleUrls: ['./restrict-view.component.css']
})
export class RestrictViewComponent {

  @Input() componentName;

  constructor(private authService: AuthService)  {

  }

  canView(): boolean {
    return this.authService.canView(this.componentName);
  }
}
