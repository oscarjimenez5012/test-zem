import { ActionReducerMap } from '@ngrx/store';
import { PreviousRulingsState } from './states/previous-rulings.state';
import { previousRulingsReducer } from './reducers/previous-ruling.reducer';
import { PreviousRulingEffect } from './effects/previous-ruling.effect';


/* Effects */
/* import { AuthEffects } from './effects/auth.effect';
 */
export interface AppState {
  previousRulings: PreviousRulingsState
}


export const appReducers: ActionReducerMap<AppState> = {
    previousRulings: previousRulingsReducer
}

export const appEffects = [
  PreviousRulingEffect
]