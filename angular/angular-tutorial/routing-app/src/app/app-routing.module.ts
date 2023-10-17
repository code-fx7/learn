import { Injectable, NgModule } from '@angular/core';
import { ResolveFn, RouteReuseStrategy, RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '', redirectTo: './first-componentn', pathMatch: 'full' },
//   { path: '**', component: FirstComponent },
// ];

const routes: Routes = [
  {
    path: 'first-component', 
    title: 'First component',
    component: FirstComponent, // Dies ist die Komponente mit dem <router-outlet> in der Vorlage
    children: [
      {
        path: 'child-a', // untergeordneter Routenpfad
        title: resolvedChildATitle,
        component: ChildAComponent, // untergeordnete Routenkomponente, die der Router rendert
      },
      {
        path: 'child-b',
        title: 'child-b',
        component: ChildBComponent, // Eine weitere untergeordnete Routenkomponente, die der Router rendert
      },
    ],
  },
];

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState):
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`)
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
