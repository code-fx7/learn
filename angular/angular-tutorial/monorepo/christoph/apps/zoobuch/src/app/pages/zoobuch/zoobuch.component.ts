import { Component } from '@angular/core';
import { AnimalStoreService } from '../../service/animal-store.service';
import { Animal } from '../../animal';

@Component({
  selector: 'app-zoobuch',
  templateUrl: './zoobuch.component.html',
  styleUrls: ['./zoobuch.component.scss'],
})
export class ZoobuchComponent { 
  myAnimals$ = this.animalService.myAnimals$;

  constructor(private animalService: AnimalStoreService) {}

  addAnimal(newAnimal: Animal) {
    this.animalService.addAnimal(newAnimal);
  }

  deleteAnimal(animal: Animal): void {
    this.animalService.deleteAnimal(animal);
  }
}
