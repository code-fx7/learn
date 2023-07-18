import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hamster } from './hamster';
import { selectHamsters } from './store/selector';
import { AppState } from './store/state';
import { hamsterAdd } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  hamsters$ = this.store.select(selectHamsters);

  constructor(private store: Store<AppState>) {}

  addHamster(hamster: Hamster) {
    this.store.dispatch(hamsterAdd({ hamster }));
  }
}
