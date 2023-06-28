import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AnimalFormComponent } from './ui/animal-form/animal-form.component';
import { AnimalListComponent } from './ui/animal-list/animal-list.component';
import { HeaderComponent } from './ui/header/header.component';
import { FormsModule } from '@angular/forms';
import { ZoobuchComponent } from './pages/zoobuch/zoobuch.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    AnimalListComponent,
    HeaderComponent,
    ZoobuchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
