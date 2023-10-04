import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, take } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): 
    | boolean 
    | Promise<boolean | UrlTree> 
    | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      // Hier wird nur der letzte Benutzerwert genommen, anschließend wird sich vom Guard abgemeldet.
      // So wird es unterbunden auf etwas zu hören, das nicht benötigt wird.
      take(1),
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
