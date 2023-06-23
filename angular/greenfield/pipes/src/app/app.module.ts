import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AveragePipe } from './average.pipe';
import { DialogComponent } from './dialog/dialog.component';
import { PipesComponent } from './pipes/pipes.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meineRouten: Routes = [
  {path: 'pipes', component: PipesComponent},
  {path: 'dialog', component: DialogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AveragePipe,
    DialogComponent,
    PipesComponent,
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
