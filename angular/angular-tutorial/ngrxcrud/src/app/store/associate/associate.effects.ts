import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AssociateService } from "src/app/service/associate.service";
import { addassociate, addassociatesuccess, loadAssociate, loadAssociateFail, loadAssociateSuccess } from "./associate.actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
import { showalert } from "../common/appAction";

@Injectable()
export class AssociateEffects {
  constructor(private action$: Actions, private service: AssociateService) {

  }

  _loadAssociate = createEffect(() => 
    this.action$.pipe(
      ofType(loadAssociate),
      exhaustMap((action) => {
        return this.service.getAll().pipe(
          exhaustMap((data) => {
            return loadAssociateSuccess({ list: data })
          }),
          catchError((_error) => of (loadAssociateFail({ errorMessage: _error.message })))
        )
      })
    ))
    
    _addAssociate = createEffect(() => 
    this.action$.pipe(
      ofType(addassociate),
      switchMap((action) => {
        return this.service.create(action.inputdata).pipe(
          switchMap((data) => {
            return of(addassociatesuccess({ inputdata: action.inputdata }),
            showalert({ message: 'Created successfully', resulttype: 'pass' }))
          }),
          catchError((_error) => of (showalert({ message: 'Failed to create associate', resulttype: 'fail' })))
        )
      })
    ))
}
