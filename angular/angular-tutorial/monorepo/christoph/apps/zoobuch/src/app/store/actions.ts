import { createAction, props } from "@ngrx/store";
import { Animal } from "../animal";

export const animalDelete = createAction(
  '[Zoobuch] deleteAnimal',
  props<{animal: Animal}>()
);

export const animalAdd = createAction(
  '[Zoobuch] addAnimal',
  props<{animal: Animal}>()
);
