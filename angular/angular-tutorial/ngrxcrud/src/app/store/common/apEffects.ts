import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { emptyaction, showalert } from "./appAction";
import { exhaustMap } from "rxjs";

@Injectable()
export class AppEffects {
  constructor(private $action: Actions, private _snackbar: MatSnackBar) {}

  _showAlert = createEffect(() =>
  this.$action.pipe(
    ofType(showalert),
    exhaustMap((action) => {
      return this.showSnackbarAlert(action.message, action.resulttype).afterDismissed().pipe(
        map(() => {
          return emptyaction();
        })
      )
    })
  ))

  showSnackbarAlert(message: string, resulttype: string = 'fail') {
    let _class = resulttype == 'pass' ? 'green-snackbar' : 'red-snackbar'
    return this._snackbar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 5500,
      panelClass: [_class]
    })
  }

}
