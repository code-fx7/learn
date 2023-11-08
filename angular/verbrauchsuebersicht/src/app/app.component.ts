import { Component } from '@angular/core';
import { Tile } from './store/model/tile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verbrauchsuebersicht';
  tiles: Tile[] = [
    {text: '', color: '', cols: 1, rows: 1},
    {text: '', color: '', cols: 1, rows: 1},
    {text: '', color: '', cols: 1, rows: 1},
    {text: '', color: '', cols: 1, rows: 1},
  ]
}
