import { Component } from '@angular/core';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Ein Subject erstellen
  private subject = new Subject<string>();

  constructor() {
  // Ein Observer zum Subject hinzufügen
  this.subject.subscribe(data => console.log('Observer 1 received data:', data));

  // Daten an das Subject senden
  this.subject.next('Daten 1');

  // Einen weiteren Observer hinzufügen
  this.subject.subscribe(data => console.log('Observer 2 received data', data)); 

  // Weitere Daten senden
  this.subject.next('Daten 2');
  }
}
