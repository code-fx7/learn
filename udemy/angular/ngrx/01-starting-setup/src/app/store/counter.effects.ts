import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { of, switchMap, tap, withLatestFrom } from "rxjs";

import { decrement, increment, init, set } from "./counter.actions";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";

@Injectable()
export class CounterEffects {
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      // Mit switchMap wird auf eine neue Observable Kette gewechselt, wo der Wert aus dem Lokal Storage geholt wird.
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        if (storedCounter) {
          // switchMap erwartet ein Observable, dass von dieser Funktion zurückgegeben wird und kein Action Objekt.
          // Deshalb werden die Rückgabewerte in die of Funktion gehüllt. 
          return of(set({ value: +storedCounter }));
        }
        return of(set({value: 0}));
      })
    )
  );
  // Hier muss .pipe() genutzt werden, um verschiedene Aktionen für das Observable durchzuführen.
  saveCount = createEffect(() => this.actions$.pipe(
    ofType(increment, decrement),
    // Damit erhält man den letzten Wert aus dem NgRx Store
    withLatestFrom(this.store.select(selectCount)),
    // tap liefert nur einmalig einen Wert
    // Array Destrukturierung, um diese beiden Elemente aus dem Array zu ziehen
    tap(([action, counter]) => {
      console.log(action);
      // Mit toString gibt es die Sicherheit, dass wir einen String erhalten, setItem erwartet einen String
      localStorage.setItem('count', counter.toString());
    })
    ),
    // Diese Pipline versendet am Ende keine neue Action.
    // Standartmäßig versenden Effects neue Actions, nachdem sie abgeschlossen sind.
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<{counter: number}>) {}
}
