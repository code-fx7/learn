import { ActionReducerMap, createReducer, on } from '@ngrx/store'
import { AppState, HamsterBookState, initialState } from './state'
import { hamsterAdd } from './actions'


export const hamsterBookReducer = createReducer<HamsterBookState>(
  initialState,
  on(
    hamsterAdd,
    (state, action) => {
      const hamsters = [...state.hamsters, action.hamster];
      return {...state, hamsters};
    }
  )
);

export const reducers: ActionReducerMap<AppState> = {
  hamsterBook: hamsterBookReducer
};
