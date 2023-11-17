import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-some-data',
  templateUrl: './some-data.component.html',
  styleUrls: ['./some-data.component.scss']
})
export class SomeDataComponent {
  @ContentChild(TemplateRef) myTemplate!: TemplateRef<any>;
}
