import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Animal } from './animal';
import { AnimalStoreService } from './service/animal-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  myAnimals$ = this.animalService.myAnimals$;

  constructor(private animalService: AnimalStoreService) {}

  addAnimal(newAnimal: Animal) {
    this.animalService.addAnimal(newAnimal);
  }

  deleteAnimal(animal: Animal): void {
    this.animalService.deleteAnimal(animal);
  }
}
