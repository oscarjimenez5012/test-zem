import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';
import { PreviousRulingsState, PreviousRuling } from '../states/previous-rulings.state';

export const getPreviousRulingState = createFeatureSelector<PreviousRulingsState>('previousRulings');

export const getPreviousRulings: MemoizedSelector<object, PreviousRuling[]> = createSelector (
  getPreviousRulingState,
  (state: PreviousRulingsState) => state.previousRulings
)