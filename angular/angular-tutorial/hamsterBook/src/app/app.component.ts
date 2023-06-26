import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hamster } from './hamster';
import { HamsterStoreService } from './service/hamster-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  constructor(private hamsterStoreService: HamsterStoreService) {}

  addHamster(newHamster: Hamster) {
    this.hamsterStoreService.addHamster(newHamster);
  }
}
