import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { AddHamsterComponent } from "./pages/add-hamster/add-hamster.component";
import { HamsterDetailComponent } from "./ui/hamster-detail/hamster-detail.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add', component: AddHamsterComponent},
  { path: 'details', component: HamsterDetailComponent }
]
