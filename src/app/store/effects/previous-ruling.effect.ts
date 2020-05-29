import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { PreviousRulingService } from 'src/app/services/previous-ruling.service';
import { PreviousRulingsActions, PreviousRulingsActionTypes } from '../actions/previous-rulings.actions';
import { PreviousRuling } from '../states/previous-rulings.state';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppState } from '../app.state';

@Injectable()
export class PreviousRulingEffect {
  @Effect() public getPreviousRuling$ = this.actions$.pipe(
    ofType<PreviousRulingsActions.PreviousRulings>(PreviousRulingsActionTypes.getPreviousRulings),
    switchMap(() => {
        return this.previousRulingService.getPreviousRullings().pipe(
          map((data: PreviousRuling[]) => new PreviousRulingsActions.PreviousRulingsSuccess(data)),
          catchError((err) => of(new PreviousRulingsActions.PreviousRulingsFailure(err)))
        )
    })
  )

  constructor(private actions$: Actions, private store: Store<AppState>, private previousRulingService: PreviousRulingService) { }
}