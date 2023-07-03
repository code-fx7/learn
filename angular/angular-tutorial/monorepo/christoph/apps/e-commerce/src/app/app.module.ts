import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './ui/header/header.component';
import { MaterialModule } from './general/material/material.module';
import { LoginComponent } from './ui/login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './ui/wishlist/wishlist.component';
import { BlogComponent } from './ui/blog/blog.component';
import { DeliveryComponent } from './ui/delivery/delivery.component';
import { AboutComponent } from './ui/about/about.component';
import { AdvantagesComponent } from './ui/advantages/advantages.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { NavigationComponent } from './ui/navigation/navigation.component';
import { RegisterComponent } from './ui/register/register.component';
import { SliderImagesComponent } from './ui/slider-images/slider-images.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LoginComponent,
    WishlistComponent,
    BlogComponent,
    DeliveryComponent,
    AboutComponent,
    AdvantagesComponent,
    DashboardComponent,
    NavigationComponent,
    RegisterComponent,
    SliderImagesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
