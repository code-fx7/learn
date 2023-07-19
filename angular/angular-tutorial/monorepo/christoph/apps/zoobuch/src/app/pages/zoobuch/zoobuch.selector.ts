import { createSelector } from "@ngrx/store";
import { selectAllAnimals, selectSelectedAnimal } from "../../store/selectors";

export const selectViewmodel = createSelector(
  selectAllAnimals,
  selectSelectedAnimal,
  (allAnimals, selectedAnimal) => (
    { allAnimals, selectedAnimal }
  )
)
