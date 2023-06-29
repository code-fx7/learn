import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Hamster } from '../../hamster';

@Component({
  selector: 'app-hamster-form',
  templateUrl: './hamster-form.component.html',
  styleUrls: ['./hamster-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamsterFormComponent {
  @Output() addHamster = new EventEmitter<Hamster>();

  newHamster: Hamster = {
    name: '',
    text: ''
    //image: ''
  };

  handleAdd(): void {
    this.addHamster.emit(this.newHamster);
  }
}
