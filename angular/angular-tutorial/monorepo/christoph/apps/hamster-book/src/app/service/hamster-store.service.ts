import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Hamster } from "../hamster";

@Injectable({
  providedIn: 'root'
})

export class HamsterStoreService {
  private hamsters: Hamster[] = [
    { name: 'Marius', text: '2 Jahre alt', image: 'assets/img/hamster5.jpg' },
    { name: 'Franziska', text: 'Gräbt gerne Löcher', image: 'assets/img/hamster6.jpg' },
    { name: 'Josephine', text: 'Spielt gerne', image: 'assets/img/hamster7.jpg' },
    { name: 'Patrick', text: 'Hamsterrad Freak', image: 'assets/img/hamster8.jpg' },
  ];

  private hamstersSubject = new BehaviorSubject<Array<Hamster>>(this.hamsters);
  hamsters$ = this.hamstersSubject.asObservable();

  addHamster(newHamster: Hamster) {
    this.hamsters = [...this.hamsters, newHamster];
    this.hamstersSubject.next(this.hamsters);
  }
}
