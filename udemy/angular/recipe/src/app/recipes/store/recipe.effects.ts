import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs';

import * as RecipesActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          'https://ng-course-recipe-book-c8d24-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            // Hat das Zutaten Array Inhalt? Ansonsten setze das Zutaten Array auf ein leeres Array.
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map(recipes => {
        return new RecipesActions.SetRecipes(recipes);
      })
    )
  );

  storeRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.STORE_RECIPES),
      // Fügt einen Wert von einem anderen Observable zu diesem Stream hinzu (Daten aus dem Store)
      withLatestFrom(this.store.select('recipes')),
      switchMap(([actionData, recipesState]) => {
        return this.http
      .put(
        'https://ng-course-recipe-book-c8d24-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipesState.recipes
      )
      })
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
    ) {}
}
