import { createSelector } from "@ngrx/store";
import { AppState } from "./state";

export const selectZoobuch = (state: AppState) => state.zoobuch;

export const selectAllAnimals = createSelector(
  selectZoobuch,
  zoobuch => zoobuch.myAnimals
);

export const selectFirstAnimal = createSelector(
  selectAllAnimals,
  myAnimals => myAnimals[0]
);


export const selectAnimalsSlice = (start: number, end: number) => {
  return createSelector(
    selectAllAnimals,
    myAnimals => myAnimals.slice(start, end)
  )
};
  
export const selectFirstFiveAnimals = selectAnimalsSlice(0, 4);

export const selectReversedFirstFiveAnimals = createSelector(
  selectAnimalsSlice(0, 4),
  firstFiveAnimals => firstFiveAnimals.reverse()
);

export const selectSelectedAnimalId = createSelector(
  selectZoobuch,
  zoobuch => zoobuch.selectedAnimal
);

export const selectSelectedAnimal = createSelector(
  selectSelectedAnimalId,
  selectAllAnimals,
  (selectedAnimalId, allAnimals) => {
    if (selectedAnimalId === null) {
      return {
        name: '',
        type: ''
      }
    }
    const foundAnimal = allAnimals.find(({ id }) => id === selectedAnimalId);
    if (!foundAnimal) {
      return {
        name: '',
        type: ''
      }
    }
    return foundAnimal;
  }
);
