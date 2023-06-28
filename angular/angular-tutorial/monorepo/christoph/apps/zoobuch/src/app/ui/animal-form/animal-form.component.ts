import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalFormComponent {
  @Output() addAnimal = new EventEmitter<Animal>();

  newAnimal : Animal = {
    name: '',
    type: ''
  }

  handleAdd(): void {
    this.addAnimal.emit(this.newAnimal);
  }
}
