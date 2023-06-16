import { Injectable } from '@angular/core';
import { Animal } from '../animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalStoreService {

  myAnimals: Animal[] = [
    { name: 'Hansi', type: 'Affe' },
    { name: 'Schildi', type: 'Schildkröte' },
    { name: 'Hewig', type: 'Eule' },
    { name: 'Joanne', type: 'Giraffe' },
  ];

  addAnimal(newAnimal: Animal): Animal[] {
    this.myAnimals = [...this.myAnimals, newAnimal];
    return this.myAnimals;
  }

  deleteAnimal(animal: Animal): Animal[] {
    this.myAnimals = this.myAnimals.filter(a => a != animal);
    return this.myAnimals;
  }

}
