import { Route } from '@angular/router';
import { LandingpageComponent } from './page/landingpage/landingpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AboutComponent } from './components/about/about.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const appRoutes: Route[] = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]
