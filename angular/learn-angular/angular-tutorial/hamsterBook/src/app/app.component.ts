import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postTexts = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich, dass ihr hier seid!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt.',
    'Ich esse gern Kekse.'
  ];

  postImages = [
    'assets/img/hamster1.jpg',
    'assets/img/hamster2.jpg',
    'assets/img/hamster3.jpg',
    'assets/img/hamster4.jpg'
  ]
}
