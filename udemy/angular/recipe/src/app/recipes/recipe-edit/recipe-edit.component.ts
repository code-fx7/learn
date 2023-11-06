import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
id: number;
editMode = false;
recipeForm: FormGroup;

private storeSub: Subscription;

get recipeControls() {
  return (this.recipeForm.get('ingredients') as FormArray).controls
}

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private store: Store<fromApp.AppState>
) {}

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
      }
    );
}

onSubmit() {
  // Da die Werte des Recipe Model genau die selben sind, kann man sich die deklaration sparen.

  // const newRecipe = new Recipe(
  //   this.recipeForm.value['name'],
  //   this.recipeForm.value['description'],
  //   this.recipeForm.value['imagePath'],
  //   this.recipeForm.value['ingredients']);
  if (this.editMode) {
    // this.recipeService.updateRecipe(this.id, newRecipe);
    // this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    this.store.dispatch(new RecipesActions.UpdateRecipe({
      index: this.id,
      newRecipe: this.recipeForm.value
    }))
  } else {
    // this.recipeService.addRecipe(newRecipe);
    // this.recipeService.addRecipe(this.recipeForm.value);
    this.store.dispatch(new RecipesActions.AddRecipe(this.recipeForm.value))
  }
  this.onCancel();
}

onAddIngredient() {
  // Der Teil in den Runden Klammern wird wie ein Formularfeld behandelt
  (<FormArray>this.recipeForm.get('ingredients')).push(
    new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    })
  );
}

onDeleteIngredient(index: number) {
  // Alte Methode
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  // Neue Methode ab Angular 8 löscht alle items eines FormArray
  // (<FormArray>this.recipeForm.get('ingredients')).clear();
}

onCancel() {
  this.router.navigate(['../'], {relativeTo: this.route});
}

ngOnDestroy() {
  if (this.storeSub) {
    this.storeSub.unsubscribe();
  }
}

private initForm() {
  let recipeName = '';
  let recipeImagePath = '';
  let recipeDescription = '';
  let recipeIngredients = new FormArray([]);

  if (this.editMode) {
    // const recipe = this.recipeService.getRecipe(this.id);
    this.storeSub = this.store.select('recipes').pipe(map(recipeState => {
      return recipeState.recipes.find((recipe, index) => {
        return index === this.id;
      })
    })).subscribe(recipe => {
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    });
  }

  this.recipeForm = new FormGroup({
    'name': new FormControl(recipeName, Validators.required),
    'imagePath': new FormControl(recipeImagePath, Validators.required),
    'description': new FormControl(recipeDescription, Validators.required),
    'ingredients': recipeIngredients
  });
}
}
