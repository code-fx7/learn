import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalListComponent {
  @Input() animals: Array<Animal> = [];
  @Output() delete = new EventEmitter<Animal>();
  @Output() edit = new EventEmitter<Animal>();

  handleDelete(animal: Animal): void {
    this.delete.emit(animal);
  }

  handleEdit(animal: Animal): void {
    this.edit.emit(animal);
  }
}
