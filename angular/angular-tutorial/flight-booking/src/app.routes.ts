import { Routes } from "@angular/router";
import { AboutComponent } from "./app/about/about.component";
import { BasketComponent } from "./app/basket/basket.component";
import { HomeComponent } from "./app/home/home.component";
import { NotFoundComponent } from "./app/not-found/not-found.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.module')
                            .then(m => m.FlightBookingModule),
    data: {
      preload: true
    }
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
