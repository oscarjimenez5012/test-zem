import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PreviousRuling } from 'src/app/store/states/previous-rulings.state';

@Component({
  selector: 'zemoga-previous-ruling',
  templateUrl: './previous-ruling.component.html',
  styleUrls: ['./previous-ruling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviousRulingComponent {

  @Input() item: PreviousRuling;
  constructor() { }


}
