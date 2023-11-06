import { Action, createAction, props } from "@ngrx/store";

// Diese Action löst den Seiteneffekt aus
export const init = createAction(
  '[Counter] Init' 
);

// Diese Action soll ausgeführt werden, sobald der Seiteneffekt beendet ist, um im Reducer verarbeitet zu werden.
export const set = createAction(
  '[Counter] Set',
  props<{value: number}>()
);

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
);

export const decrement = createAction(
  '[Counter] Decrement',
  props<{value: number}>()
);


// Alternative Schreibweise
// export const INCREMENT = '[Counter] Increment'

// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;
