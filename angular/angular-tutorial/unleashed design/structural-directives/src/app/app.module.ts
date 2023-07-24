import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsAuthenticatedDirective } from './core/directives/is-authenticated.directive';
import { HasRolesDirective } from './core/directives/has-roles.directive';

@NgModule({
  declarations: [
    AppComponent,
    IsAuthenticatedDirective,
    HasRolesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
