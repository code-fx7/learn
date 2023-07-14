import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AppState, ZoobuchState, initialState } from './state';
import { animalAdd, animalDelete } from './actions';

export const zoobuchReducer = createReducer<ZoobuchState>(
  initialState,
  on(
    animalAdd,
    (state, action) => {
      const myAnimals = [...state.myAnimals, action.animal];
      return {...state, myAnimals};
    }
  ),
  on(
    animalDelete, 
    (state, action) => {
      const myAnimals = state.myAnimals.filter(animal => animal !== action.animal)
      return {...state, myAnimals};
    }
  )
);

export const reducers: ActionReducerMap<AppState> = {
  zoobuch: zoobuchReducer
};
