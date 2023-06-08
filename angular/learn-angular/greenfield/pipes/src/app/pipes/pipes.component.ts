import { Component } from '@angular/core';
import { AveragePipe } from '../average.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  
  avgArray = [24,3,56,24,89,73,15,49];
}
