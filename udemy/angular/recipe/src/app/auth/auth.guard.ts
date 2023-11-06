import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";

import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private store: Store<fromApp.AppState>
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): 
    | boolean 
    | Promise<boolean | UrlTree> 
    | Observable<boolean | UrlTree> {
    return this.store.select('auth').pipe(
      // Hier wird nur der letzte Benutzerwert genommen, anschließend wird sich vom Guard abgemeldet.
      // So wird es unterbunden auf etwas zu hören, das nicht benötigt wird.
      take(1),
      // .select('auth') liefert nicht den User, sondern ein Objekt mit einer User Property. Deshalb .pipe .map
      // Aus dem erhaltenen authState wird der User rausgezogen, im Map-Operator zurückgegeben, damit man ein Observable erhält, dass zu einem User auflöst.
      map(authState => {
        return authState.user;
      }),
      map(user => {
        // Gibt ein (Objekt) zurück, dass wenn es nicht null oder undefined ist, zu einem boolean umgewandelt wird.
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
    }));
  }
}
