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

  private countSubject = new BehaviorSubject<number>(this.myAnimals.length);
  count$ = this.countSubject.asObservable();

  addAnimal(newAnimal: Animal) {
    this.myAnimals = [...this.myAnimals, newAnimal];
    this.countSubject.next(this.myAnimals.length);
    this.myAnimalsSubject.next(this.myAnimals);
  }

  deleteAnimal(animalToRemove: Animal) {
    this.myAnimals = this.myAnimals.filter(animal => animal !== animalToRemove);
    this.countSubject.next(this.myAnimals.length);
    this.myAnimalsSubject.next(this.myAnimals);
  }
}
