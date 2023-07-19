import { Component } from '@angular/core';
import { Animal } from '../../animal';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state';
import { animalSave, animalDelete, animalEdit } from '../../store/actions';
import { selectViewmodel } from './zoobuch.selector';

@Component({
  selector: 'app-zoobuch',
  templateUrl: './zoobuch.component.html',
  styleUrls: ['./zoobuch.component.scss'],
})
export class ZoobuchComponent {
  vm$ = this.store.select(selectViewmodel);

  constructor(private store: Store<AppState>) {}

  saveAnimal(animal: Animal) {
    this.store.dispatch(animalSave({ animal }));
  }

  editAnimal(animal: Animal): void {
    const animalId = animal.id;
    if (animalId) {
      this.store.dispatch(animalEdit({ animalId }));
    }
  }

  deleteAnimal(animal: Animal): void {
    this.store.dispatch(animalDelete({ animal }));
  }
}
