import { createAction, props } from "@ngrx/store";
import { Animal } from "../animal";

export const animalDelete = createAction(
  '[Zoobuch] deleteAnimal',
  props<{animal: Animal}>()
);

export const animalSave = createAction(
  '[Zoobuch] saveAnimal',
  props<{animal: Animal}>()
);

export const animalEdit = createAction(
  '[Zoobuch] editAnimal',
  props<{animalId: string}>()
);
