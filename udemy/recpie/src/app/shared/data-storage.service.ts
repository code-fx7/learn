import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://ng-course-recipe-book-c8d24-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-c8d24-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        // Mit map werden hier die Elemente in ein Array umgewandelt. Wenn das Array keine Zutaten hat, wird ein leeres Array festgelegt.
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              // Hat das Zutaten Array Inhalt? Ansonsten setze das Zutaten Array auf ein leeres Array.
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
