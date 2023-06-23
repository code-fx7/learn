import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Animal } from '../animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalStoreService {
  private myAnimals: Array<Animal> = [
    { name: 'Charlie', type: 'Affe' },
    { name: 'Schiggi', type: 'Schildkröte' },
    { name: 'Hedwig', type: 'Eule' },
    { name: 'Joanne', type: 'Giraffe' },
    { name: 'Scooby', type: 'Hund' },
  ];

  private myAnimalsSubject = new BehaviorSubject<Array<Animal>>(this.myAnimals);
  myAnimals$ = this.myAnimalsSubject.asObservable();

  addAnimal(newAnimal: Animal) {
    this.myAnimals = [...this.myAnimals, newAnimal];
    this.myAnimalsSubject.next(this.myAnimals);
  }

  deleteAnimal(animal: Animal) {
    this.myAnimals = this.myAnimals.filter(a => a != animal);
    this.myAnimalsSubject.next(this.myAnimals);
  }
}
