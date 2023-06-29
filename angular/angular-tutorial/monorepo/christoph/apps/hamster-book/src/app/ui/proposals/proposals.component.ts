import { Component, Input } from '@angular/core';
import { Hamster } from '../../hamster';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})

export class ProposalsComponent {
  @Input() hamsters: Array<Hamster> = [];
}
