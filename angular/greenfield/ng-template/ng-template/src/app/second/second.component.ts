import { Component, ElementRef, Input, TemplateRef } from '@angular/core';

interface Context {
  title: string;
  someMethod(title: any):void;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent {
  @Input() someTemplate!: TemplateRef<Context>;
  context: Context = {
    title: 'Second component',
    someMethod(title:any) {
      const question = prompt(`Question for ${title}: How old are you?`, '18');
      console.log(question);
    }
  };
}
