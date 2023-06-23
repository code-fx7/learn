import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebseiteComponent } from './webseite/webseite.component';

const routes: Routes = [
  { path: 'website', component: WebseiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
