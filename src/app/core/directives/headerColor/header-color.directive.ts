import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeaderColor]',
})
export class HeaderColorDirective {
  constructor(private element: ElementRef) {}

  onScroll(element: any) {
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        element.style.background = `$bluegray`;
      } else {
        element.style.background = '$lightgray';
      }
    };
  }
}
