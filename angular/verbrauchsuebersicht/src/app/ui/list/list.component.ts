import { Component } from '@angular/core';
import { Tile } from '../../store/model/tile.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  tiles: Tile[] = [
    {text: '', color: '', cols: 1, rows: 1},
    {text: '', color: '', cols: 1, rows: 1},
    {text: '', color: '', cols: 1, rows: 1},
    {text: '', color: '', cols: 1, rows: 1},
  ];
}
