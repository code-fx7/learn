import { createSelector } from "@ngrx/store";
import { AppState } from "./state";

export const selectZoobuch = (state: AppState) => state.zoobuch;

export const selectAnimals = createSelector(
  selectZoobuch,
  zoobuch => zoobuch.myAnimals
);