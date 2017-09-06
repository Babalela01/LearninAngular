import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appRestrict]'
})
export class RestrictDirective implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside restrict");

    let componentName = this.componentName || this.elementName;
    if (!this.authService.canView(componentName)) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.templateRef)
    }
  }

  @Input('appRestrict') private componentName: string;

  private get elementName() {
    return this.templateRef.elementRef.nativeElement.nextElementSibling.nodeName;
  }

  constructor(private templateRef: TemplateRef<any>, private container: ViewContainerRef, private authService: AuthService) {

  }

}
