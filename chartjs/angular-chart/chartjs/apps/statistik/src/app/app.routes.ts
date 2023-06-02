import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MychartComponent } from 'libs/chart/src/lib/mychart/mychart.component';


const routes: Routes = [
    {path:"chart", component:MychartComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }