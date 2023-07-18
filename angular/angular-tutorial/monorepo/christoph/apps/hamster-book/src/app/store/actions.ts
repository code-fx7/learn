import { createAction, props } from "@ngrx/store";
import { Hamster } from "../hamster";

export const hamsterAdd = createAction(
  '[HamsterBook] addHamster',
  props<{hamster: Hamster}>()
);
