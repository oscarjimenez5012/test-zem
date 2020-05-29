import { Component, OnInit } from '@angular/core';
import { PreviousRuling } from 'src/app/store/states/previous-rulings.state';
import { AppState } from 'src/app/store/app.state';
import { Store, select } from '@ngrx/store';
import { PreviousRulingsActions } from 'src/app/store/actions/previous-rulings.actions';
import { getPreviousRulings } from 'src/app/store/selectors/previous-rulings.selectors';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public previousRuling: PreviousRuling[];
  constructor(private store: Store<AppState>) {
    let dataInStorage = sessionStorage.getItem('previousRuling');
      if (!!dataInStorage) {
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
