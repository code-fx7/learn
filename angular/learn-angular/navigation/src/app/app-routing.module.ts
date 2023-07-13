import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent},
  { path: 'news', component: NewsComponent},

  { path: '', outlet: 'secondary', component: AboutComponent },
  { path: 'about', outlet: 'secondary', component: AboutComponent },
  { path: 'contact', outlet: 'secondary', component: ContactComponent },

  { path: 'home', outlet: 'secondary', component: HomeComponent },
  { path: 'news', outlet: 'secondary', component: NewsComponent },
];

const options: ExtraOptions = { useHash: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
