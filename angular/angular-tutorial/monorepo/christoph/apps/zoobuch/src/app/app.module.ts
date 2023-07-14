import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ZoobuchComponent } from './pages/zoobuch/zoobuch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    ZoobuchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    UiModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 15})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
