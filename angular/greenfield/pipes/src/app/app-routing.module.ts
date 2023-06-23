import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogComponent } from './dialog/dialog.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/pipes', pathMatch: 'full'},
  { path: 'pipes', component: PipesComponent },
  { path: 'dialog', component: DialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
