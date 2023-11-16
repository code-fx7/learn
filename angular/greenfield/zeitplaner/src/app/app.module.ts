import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KalenderComponent } from './kalender/kalender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZeiterfassungsDialogComponent } from './zeiterfassungs-dialog/zeiterfassungs-dialog.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    KalenderComponent,
    ZeiterfassungsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
