import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgContentContainerOutletComponent } from './ng-content-container-outlet/ng-content-container-outlet.component';
import { MyCardComponent } from './my-card/my-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentContainerOutletComponent,
    MyCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
