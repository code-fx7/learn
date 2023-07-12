import { Component, EventEmitter, Output } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss']
})
export class CaptureComponent {
  @Output() addData = new EventEmitter<Data>();

  newData: Data = {
  id: '',
  date: '',
  yield: ''
};

handleAdd(): void {
  this.addData.emit(this.newData)
 }

  // setNewDate(date: string): void {
  //   console.log('setNewDate', date)
  // }

  // setNewCapture(capture: string): void {
  //   console.log(this.setNewCapture, capture)
  // }

  // addNewData(): void {
  //   console.log('addNewData')
  // }
}
