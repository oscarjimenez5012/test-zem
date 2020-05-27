import { PreviousRulingsActionTypes, PreviousRulingsAvailableActions } from '../actions/previous-rulings.actions';
import { PreviousRulingsState } from '../states/previous-rulings.state';


export const initialState: PreviousRulingsState = {
  pending: false,
  failure: false,
  previousRulings: []
};

export function previousRulingsReducer(state = initialState, action: PreviousRulingsAvailableActions): PreviousRulingsState {
  switch (action.type) {
    case PreviousRulingsActionTypes.getPreviousRulings: {
      return {
        ...state
      };
    }
    case PreviousRulingsActionTypes.getPreviousRulingsFailure: {
      return {
        ...state
      };
    }
    case PreviousRulingsActionTypes.getPreviousRulingsSuccess: {
      return {
        ...state
      };
    }
    default: {
      return state;
    }
  }
}
