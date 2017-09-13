import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appRestrict]'
})
export class RestrictDirective implements OnChanges {

  @Input('appRestrict') private componentName: string;

  constructor(private templateRef: TemplateRef<any>,
              private container: ViewContainerRef,
              private authService: AuthService) {
  }

  private get elementName() {
    return this.element.nodeName;
  }

  private get element() {
    return this.templateRef.elementRef.nativeElement.nextElementSibling;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside restrict");

    let componentName = this.componentName || this.elementName;
    if (!this.authService.canView(componentName)) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.templateRef)
    }
  }

}
