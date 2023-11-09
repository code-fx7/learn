import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";

import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from '../recipes/store/recipe.actions';
import { Actions, ofType } from "@ngrx/effects";
import { map, of, switchMap, take } from "rxjs";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recepieService: RecipeService,
    private store: Store<fromApp.AppState>,
    private actions$: Actions
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const recipes = this.recepieService.getRecipes();
    // if (recipes.length === 0) {
    // return this.dataStorageService.fetchRecipes();
    // return kann nicht genutzt werden, da kein Observable gesendet wird

    return this.store.select('recipes').pipe(
      take(1),
      map(recipeState => {
        return recipeState.recipes;
    }),
    switchMap(recipes => {
      if (recipes.length === 0) {
        this.store.dispatch(new RecipeActions.FetchRecipes());
        return this.actions$.pipe(
          ofType(RecipeActions.SET_RECIPES),
          take(1)
        );
      } else {
        return of(recipes);
      }
    }));

    // } else {
    //   return recipes
    // }
  }
}