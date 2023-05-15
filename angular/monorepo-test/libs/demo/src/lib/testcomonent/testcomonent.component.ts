import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'monorepo-test-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss'],
})
export class TestcomponentComponent {
  @Input() caption!: string;
  @Output() myClick = new EventEmitter();

  onClick() {
    this.myClick.emit();
  }

}
