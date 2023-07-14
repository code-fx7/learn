import { Component } from '@angular/core';
import { Animal } from '../../animal';
import { Store } from '@ngrx/store';
import { selectAnimals } from '../../store/selectors';
import { AppState } from '../../store/state';
import { animalAdd, animalDelete } from '../../store/actions';

@Component({
  selector: 'app-zoobuch',
  templateUrl: './zoobuch.component.html',
  styleUrls: ['./zoobuch.component.scss'],
})
export class ZoobuchComponent { 
  myAnimals$ = this.store.select(selectAnimals);

  constructor(private store: Store<AppState>) {}

  addAnimal(animal: Animal) {
    this.store.dispatch(animalAdd({ animal }));
  }

  deleteAnimal(animal: Animal): void {
    this.store.dispatch(animalDelete({ animal }));
  }
}
