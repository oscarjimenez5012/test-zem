import { Action } from '@ngrx/store';


export const PreviousRulingsActionTypes = {
  getPreviousRulings: '[PreviousRulings] getPreviousRulings',
  getPreviousRulingsSuccess: '[PreviousRulings] getPreviousRulings',
  getPreviousRulingsFailure: '[PreviousRulings] getPreviousRulings',
}

export namespace PreviousRulingsActions {
    'use strict';
    export class PreviousRulings implements Action {
      readonly type = PreviousRulingsActionTypes.getPreviousRulings;
      constructor(public payload: any) {}
    }
    export class PreviousRulingsSuccess implements Action {
      readonly type = PreviousRulingsActionTypes.getPreviousRulingsSuccess;
      constructor(public payload: any) {}
    }
    export class PreviousRulingsFailure implements Action {
      readonly type = PreviousRulingsActionTypes.getPreviousRulingsFailure;
      constructor(public payload: any) {}
    }
}

export declare type PreviousRulingsAvailableActions =
PreviousRulingsActions.PreviousRulings
  | PreviousRulingsActions.PreviousRulingsSuccess
  | PreviousRulingsActions.PreviousRulingsFailure;