import { ActionReducerMap } from '@ngrx/store';
import { PreviousRulingsState } from './states/previous-rulings.state';
import { previousRulingsReducer } from './reducers/previous-ruling.reducer';


/* Effects */
/* import { AuthEffects } from './effects/auth.effect';
 */
export interface AppState {
  previousRulings: PreviousRulingsState
}


export const appReducers: ActionReducerMap<AppState> = {
    previousRulings: previousRulingsReducer
}

/* export const appEffects = [
    ...AuthEffects
] */