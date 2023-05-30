import { FormControl } from '@angular/forms';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowError]',
})
export class ShowErrorDirective implements AfterViewInit {
  formControl!: FormControl;
  span?: HTMLElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.span = this.renderer.createElement('i');
    this.renderer.appendChild(this.elementRef.nativeElement, this.span);
    this.renderer.setProperty(this.span, 'innerText', 'errorRRR');
  }

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    console.log(event);

    if (!(event.target as HTMLInputElement).validity.valid) {
      this.renderer.addClass(this.span, 'error-span');
      this.renderer.addClass(this.span, 'fa-exclamation');
      this.renderer.setProperty(this.span, 'innerText', 'errorRRR');
    } else {
      this.renderer.removeClass(this.span, 'error-span');
      this.renderer.setProperty(this.span, 'innerText', '');
    }
  }
}
