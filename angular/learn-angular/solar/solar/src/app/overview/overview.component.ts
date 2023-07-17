import { Component, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  @Input() data: Array<Data> = [];
  testUsers = ['Jack', 'John', 'Sam']
}
