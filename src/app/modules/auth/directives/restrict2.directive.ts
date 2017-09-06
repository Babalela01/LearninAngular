import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appRestrict2]'
})
export class Restrict2Directive implements OnInit {

  @Input('example') someOtherInput;

  ngOnInit(): void {
    console.log("Inside Restrict2 - g" +this.someOtherInput);

    let component = this.element.nativeElement.nodeName;
    if (!this.authService.canView(component)) {
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }

  constructor(private authService: AuthService, private renderer: Renderer2, private element: ElementRef) {

  }

}
