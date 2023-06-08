import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Zoobuch';

  animals: Animal[] = [
    { name: 'Hansi', type: 'Affe' },
    { name: 'Schildi', type: 'Schildkröte' },
    { name: 'Hewig', type: 'Eule' },
    { name: 'Joanne', type: 'Giraffe' },
  ];

  newAnimal : Animal = {
    name: 'Neuer Name',
    type: 'Neues Tier'
  }

  addAnimal() {
    this.animals.push(this.newAnimal);
  }

  deleteAnimal(animal: Animal): void {
    this.animals = this.animals.filter(a => a != animal);
  }
}
