import { PreviousRulingsActionTypes, PreviousRulingsAvailableActions } from '../actions/previous-rulings.actions';
import { PreviousRulingsState } from '../states/previous-rulings.state';
import { VotesTypes } from 'src/app/enums/vote-type.enum';


export const initialState: PreviousRulingsState = {
  pending: false,
  failure: false,
  previousRulings: []
};

export function previousRulingsReducer(state = initialState, action: PreviousRulingsAvailableActions): PreviousRulingsState {
  switch (action.type) {
    case PreviousRulingsActionTypes.getPreviousRulings: {
      return {
        ...state,
        pending: true
      };
    }
    case PreviousRulingsActionTypes.getPreviousRulingsFailure: {
      return {
        ...state,
        pending: false,
        failure: true
      };
    }
    case PreviousRulingsActionTypes.getPreviousRulingsSuccess: {
      return {
        ...state,
        pending: false,
        previousRulings: action.payload
      };
    }
    case PreviousRulingsActionTypes.voteForRulings: {
      return {
        ...state,
        previousRulings: state.previousRulings.map(rulingItem => {
          if (rulingItem.id === action.payload.id) {
            if (action.payload.type === VotesTypes.Positive) {
              return {
                ...rulingItem,
                positiveVotes: rulingItem.positiveVotes + 1,
                voted: true
              }
            } else {
              return {
                ...rulingItem,
                negativeVotes: rulingItem.negativeVotes + 1,
                voted: true
              }
            }
          } else {
            return rulingItem;
          }
        })
      };
    }
    case PreviousRulingsActionTypes.voteAgainForRulings: {
      return {
        ...state,
        previousRulings: state.previousRulings.map(rulingItem => {
          if (rulingItem.id === action.payload) {
            return {
              ...rulingItem,
              voted: false
            }

          } else {
            return rulingItem;
          }
        })
      };
    }
    default: {
      return state;
    }
  }
}
