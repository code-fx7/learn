import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HamsterCardComponent } from './ui/hamster-card/hamster-card.component';
import { ProposalsComponent } from './ui/proposals/proposals.component';
import { ProfileRowComponent } from './ui/profile-row/profile-row.component';
import { FriendboxComponent } from './ui/friendbox/friendbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HamsterDetailComponent } from './ui/hamster-detail/hamster-detail.component';
import { RouterModule } from '@angular/router';
import { HamsterFormComponent } from './ui/hamster-form/hamster-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AddHamsterComponent } from './pages/add-hamster/add-hamster.component';
import { routes } from './routes';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AddHamsterComponent,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HamsterCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendboxComponent,
    HamsterDetailComponent,
    HamsterFormComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 15})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
