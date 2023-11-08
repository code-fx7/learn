import { Component, inject } from '@angular/core';
import { Card } from '../../store/model/card.model';
import { AppState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { selectAllConsumption } from 'src/app/store/selectors';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  cards: Card[] = [
    {name: 'Gefrierschrank', text: 'aktuelle Leistung', power: '100 Watt'},
    {name: 'Geschirrspüler', text: 'aktuelle Leistung', power: '100 Watt'},
    {name: 'Kühlschrank', text: 'aktuelle Leistung', power: '100 Watt'},
    {name: 'Kühlschrank Alt', text: 'aktuelle Leistung', power: '100 Watt'}
  ]

  private store = inject(Store<AppState>);

  allConsumption$ = this.store.select(selectAllConsumption);
}
