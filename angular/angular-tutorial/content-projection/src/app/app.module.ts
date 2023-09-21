import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot/zippy-multislot.component';
import { ExampleZippyComponent } from './example-zippy/example-zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ExampleZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
