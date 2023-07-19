import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalFormComponent implements OnChanges {
  @Output() saveAnimal = new EventEmitter<Animal>();
  @Input() animal!: Animal;

  animalForm: Animal = {
    name: '',
    type: ''
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['animal']) {
      this.animalForm = {...changes['animal'].currentValue};
    }
  }

  handleSave(): void {
    this.saveAnimal.emit(this.animalForm);
    this.animalForm = {
      name: '',
      type: ''
    };
  }
}
