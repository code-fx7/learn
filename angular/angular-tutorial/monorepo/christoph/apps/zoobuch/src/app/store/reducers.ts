import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AppState, ZoobuchState, initialState } from './state';
import { animalSave, animalDelete, animalEdit } from './actions';
import { Animal } from '../animal';

const getNewId = (animals: Array<Animal>): string => {
  return (Math.max(...animals.map(
    ({id}) => parseInt(id || '0')
  )) + 1).toString();
};

export const zoobuchReducer = createReducer<ZoobuchState>(
  initialState,
  on(
    animalSave,
    (state, {animal}) => {
      if (animal.id) {
        return state;
      }
      const id = getNewId(state.myAnimals);
      const myAnimals = [...state.myAnimals, {...animal, id}];
      return {...state, myAnimals, selectedAnimal: null};
    }
  ),
  on(
    animalSave,
    (state, {animal}) => {
      if (!animal.id) {
        return state;
      }
      const myAnimals = [...state.myAnimals];
      const index = myAnimals.findIndex(({id}) => id === animal.id);
      myAnimals[index] = animal;
      return {...state, myAnimals, selectedAnimal: null};
    }
  ),
  on(
    animalDelete, 
    (state, action) => {
      const myAnimals = state.myAnimals.filter(animal => animal !== action.animal)
      return {...state, myAnimals};
    }
  ),
  on(
    animalEdit,
    (state, action) => {
      const selectedAnimal = action.animalId;
      return { ...state, selectedAnimal };
    }
  )
);

export const reducers: ActionReducerMap<AppState> = {
  zoobuch: zoobuchReducer
};
