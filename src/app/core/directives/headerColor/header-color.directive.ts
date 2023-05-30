import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeaderColor]',
})
export class HeaderColorDirective {
  constructor(private element: ElementRef) {}

  @HostListener('window:scroll') onScroll() {
    if (window.pageYOffset > 0) {
      this.element.nativeElement.style.background = `#266880`;
    } else {
      this.element.nativeElement.style.background = 'rgb(240, 238, 238)';
    }
  }
}
