import { ActionReducerMap, createReducer } from "@ngrx/store";
import { AppState, ConsumptionState, initialState } from "./state";

export const consumptionReducer = createReducer<ConsumptionState>(
  initialState,
);

export const reducers: ActionReducerMap<AppState> = {
  consumption: consumptionReducer
};
