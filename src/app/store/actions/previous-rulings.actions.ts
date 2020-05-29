import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';


export const PreviousRulingsActionTypes = {
  getPreviousRulings: '[PreviousRulings] get Previous Rulings',
  getPreviousRulingsSuccess: '[PreviousRulings] get Previous Rulings success',
  getPreviousRulingsFailure: '[PreviousRulings] get Previous Rulings fail',
  voteForRulings: '[PreviousRulings] voteForRulings',
  voteAgainForRulings: '[PreviousRulings] voteAgainForRulings',
}

export namespace PreviousRulingsActions {
    'use strict';
    export class PreviousRulings implements Action {
      readonly type = PreviousRulingsActionTypes.getPreviousRulings;
      constructor(public payload: void) {}
    }
    export class PreviousRulingsSuccess implements Action {
      readonly type = PreviousRulingsActionTypes.getPreviousRulingsSuccess;
      constructor(public payload: any) {}
    }
    export class PreviousRulingsFailure implements Action {
      readonly type = PreviousRulingsActionTypes.getPreviousRulingsFailure;
      constructor(public payload: Observable<any>) {}
    }
    export class VoteForRulings implements Action {
      readonly type = PreviousRulingsActionTypes.voteForRulings;
      constructor(public payload: any) {}
    }
    export class VoteAgainForRulings implements Action {
      readonly type = PreviousRulingsActionTypes.voteAgainForRulings;

      constructor(public payload: number) {}

    }
}

export declare type PreviousRulingsAvailableActions =
PreviousRulingsActions.PreviousRulings
  | PreviousRulingsActions.PreviousRulingsSuccess
  | PreviousRulingsActions.PreviousRulingsFailure
  | PreviousRulingsActions.VoteForRulings
  | PreviousRulingsActions.VoteAgainForRulings;