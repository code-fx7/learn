import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {
  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Spielt gerne', 'Hamsterrad Freak']
  images = ['assets/img/hamster5.jpg', 'assets/img/hamster6.jpg', 'assets/img/hamster7.jpg', 'assets/img/hamster8.jpg'];
}
