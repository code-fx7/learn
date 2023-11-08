import { createSelector } from "@ngrx/store";
import { AppState } from "./state";

export const selectConsumption = (state: AppState) => state.consumption;

export const selectAllConsumption = createSelector(
  selectConsumption,
  consumption => consumption.cards
);
