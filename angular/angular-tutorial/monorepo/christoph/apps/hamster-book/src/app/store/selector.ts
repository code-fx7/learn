import { createSelector } from '@ngrx/store';
import { AppState } from './state';

export const selectHamsterBook = (state: AppState) => state.hamsterBook;

export const selectHamsters = createSelector(
  selectHamsterBook,
  hamsterBook => hamsterBook.hamsters
);
