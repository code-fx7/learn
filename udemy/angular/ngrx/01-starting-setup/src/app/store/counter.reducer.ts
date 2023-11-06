import { Action, createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  // Hören auf die Set Action, die ausgelöst werden soll, sobald über den Seiteneffekt Daten geladen werden.
  // Action enthält Daten auf die der State gesetzt werden soll.
  // Der State wird auf den Wert von action.value gesetzt
  on(set, (state, action) => action.value),
);

// Alternative Schreibweise
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }
