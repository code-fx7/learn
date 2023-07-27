import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';



@NgModule({
  declarations: [
    FlightCardComponent,
    FlightEditComponent,
    FlightSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FlightBookingModule { }
