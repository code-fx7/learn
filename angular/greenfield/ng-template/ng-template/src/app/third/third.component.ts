import { Component, Input, TemplateRef } from '@angular/core';

interface Context1 {
  title: string;
  someMethod(title: string): void;
}

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {
  @Input() someTemplate!: TemplateRef<Context1>;
  title = 'First component';
  someMethod(title: any) {

  }

}
