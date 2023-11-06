import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Renderer Code
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // Renderer Code
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue')

    // HostBinding Code
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // Renderer Code
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent')

    // HostBinding Code
    this.backgroundColor = this.defaultColor;
  }
}
