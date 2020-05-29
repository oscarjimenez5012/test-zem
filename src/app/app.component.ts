import { Component } from '@angular/core';
import { PreviousRuling } from './store/states/previous-rulings.state';
import { PreviousRulingsActions } from './store/actions/previous-rulings.actions';
import { AppState } from './store/app.state';
import { Store, select } from '@ngrx/store';
import { getPreviousRulings } from './store/selectors/previous-rulings.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public previousRuling: PreviousRuling[];
  constructor(private store: Store<AppState>) {
    let dataInStorage = sessionStorage.getItem('previousRuling');
      if (!!dataInStorage) {
        console.log('dataInStorage', JSON.parse(dataInStorage));
        this.store.dispatch(new PreviousRulingsActions.PreviousRulingsSuccess((JSON.parse(dataInStorage))));
      } else {
        this.store.dispatch(new PreviousRulingsActions.PreviousRulings())
      }
  }

  ngOnInit(): void {
    
    this.store.pipe(select(getPreviousRulings))
      .subscribe((previousRuling) => {
        this.previousRuling = previousRuling;
        const hasVotes = this.previousRuling.some((item) => item.negativeVotes !== 0 || item.positiveVotes !== 0);
        if(hasVotes) {
          sessionStorage.setItem('previousRuling', JSON.stringify(this.previousRuling));
        } 
      })
  }

  public selectVote(vote) {
    this.store.dispatch(new PreviousRulingsActions.VoteForRulings(vote))
  }

  public voteAgain(id) {
    this.store.dispatch(new PreviousRulingsActions.VoteAgainForRulings(id))
  }
}
