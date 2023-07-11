import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './general/material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LandingpageComponent } from './page/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderImagesComponent } from './components/slider-images/slider-images.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AboutComponent } from './components/about/about.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LandingpageComponent,
    SliderImagesComponent,
    AdvantagesComponent,
    LoginComponent,
    RegisterComponent,
    WishlistComponent,
    AboutComponent,
    DeliveryComponent,
    BlogComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
