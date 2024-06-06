import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';
// we dont need to use style in element tage becouse custome directive he include fethures we cant use it
// for examble [method decorator function and property decorator]

@Directive({
  selector: '[LightBox]'
})
export class LightboxDirective implements OnChanges {
  // property decorator
  @Input('LightBox') hightlightColor:string = 'yellow';
  @Input() defaultColor:string="darkblue";

  constructor(private elementref: ElementRef) {
    // this.elementref.nativeElement.style.border=`2px solid ${this.defaultColor}`;

  }

  ngOnChanges(): void {
    this.elementref.nativeElement.style.border=`2px solid ${this.defaultColor}`;

  }

  // method decorator function

  @HostListener('mouseover') onMouseOver(){
    this.elementref.nativeElement.style.border=`3px solid ${this.hightlightColor}`;

  }
  @HostListener('mouseout') onMouseOut(){
    this.elementref.nativeElement.style.border=`2px solid ${this.defaultColor}`;

  }

}
