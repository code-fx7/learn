import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() someTemplate!: TemplateRef<{ title: string; someMethod(title: any): void }>;
  context = {
    title: 'First component',
    someMethod(title: any) {
      alert(`Simple alert for ${title}`);
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
