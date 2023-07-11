import { Route } from '@angular/router';
import { AboutComponent } from './ui/about/about.component';
import { BlogComponent } from './ui/blog/blog.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { DeliveryComponent } from './ui/delivery/delivery.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { WishlistComponent } from './ui/wishlist/wishlist.component';
import { ProductsComponent } from './ui/products/products.component';
import { ShoppingCardComponent } from './ui/shopping-card/shopping-card.component';


export const appRoutes: Route[] = [
  {
    path: '',
    component: LandingPageComponent
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
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'cart',
    component: ShoppingCardComponent
  }
]
