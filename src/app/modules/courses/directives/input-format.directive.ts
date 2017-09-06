import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: '[appInputFormat]'
//  [blah] Any elementName that has this attribute
  // Codign stantdards -- that
})
export class InputFormatDirective {

  private formatterFunctions = {
    "uppercase" : String.prototype.toUpperCase,
    "lowercase" : String.prototype.toLowerCase
  };

  @Input("appInputFormat") format: string;

  constructor(private element: ElementRef) {
  }


  @HostListener('focus')
  onFocus() {
    console.log("onFocus")
  }

  @HostListener('blur') onBLur() {
    let nativeElement = this.element.nativeElement;
    let value: string = nativeElement.value;

    nativeElement.value = this.applyFormat(value);
    console.log("blur")
  }

  private applyFormat(value: string) {
    let f = this.formatterFunctions[this.format];
    if (f)
      return f.apply(value);
    else
      throw new Error(`Unknown format ${this.format}`)

  //  Alternative: value.toLowercase(), value.toUppercase()
  }


}
