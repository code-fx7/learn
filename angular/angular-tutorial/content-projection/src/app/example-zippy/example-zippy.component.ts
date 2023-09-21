import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: '[appExampleZippyContent]',
  templateUrl: './example-zippy.component.html',
  styleUrls: ['./example-zippy.component.scss']
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}
