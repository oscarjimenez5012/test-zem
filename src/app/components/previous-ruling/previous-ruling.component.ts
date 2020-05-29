import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PreviousRuling } from 'src/app/store/states/previous-rulings.state';
import { VotesTypes } from 'src/app/enums/vote-type.enum';

@Component({
  selector: 'zemoga-previous-ruling',
  templateUrl: './previous-ruling.component.html',
  styleUrls: ['./previous-ruling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviousRulingComponent {

  @Input() item: PreviousRuling;
  
  
  @Output() public selectVote: EventEmitter<any> = new EventEmitter<any>();
  @Output() public voteAgain: EventEmitter<number> = new EventEmitter<number>();
  public currentSelection: string;
  constructor() {
    this.currentSelection = VotesTypes.Positive
   }

  public selectedVote(type) {
    this.currentSelection = type;
  }
}
