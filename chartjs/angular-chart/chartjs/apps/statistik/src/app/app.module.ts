import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from '../../../../libs/chart/src/lib/chart.module'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutingModule, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule, ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
