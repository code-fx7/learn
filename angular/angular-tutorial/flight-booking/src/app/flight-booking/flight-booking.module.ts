import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';



@NgModule({
  declarations: [
    FlightCardComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlightBookingModule { }
