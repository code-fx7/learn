import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent {
  @Input() animals: Animal[] = [];
  @Output() delete = new EventEmitter<Animal>();

  handleDelete(animal: Animal): void {
    this.delete.emit(animal);
  }
}
