import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HamsterCardComponent } from './ui/hamster-card/hamster-card.component';
import { ProposalsComponent } from './ui/proposals/proposals.component';
import { ProfileRowComponent } from './ui/profile-row/profile-row.component';
import { FriendboxComponent } from './ui/friendbox/friendbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MariusComponent } from './ui/marius/marius.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamsterCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    FriendboxComponent,
    MariusComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
