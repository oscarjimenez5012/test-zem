import { Component } from '@angular/core';
import { PreviousRuling } from './store/states/previous-rulings.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zemoga-test';
  public previousRuling: PreviousRuling[];
  constructor() { }

  ngOnInit(): void {
    this.previousRuling = [
      {
        positiveVotes: 64,
        negativeVotes: 36,
        image: '../../../assets/images/Kanye.jpg',
        id: 0,
        name: 'Kanye West',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        date: 22,
        category: 'Entertaiment',
        voted: false

      },
      {
        positiveVotes: 2,
        negativeVotes: 6,
        image: '../../../assets/images/Mark.jpg',
        id: 1,
        name: 'Mark West',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        date: 22,
        category: 'Entertaiment',
        voted: false
      },
      {
        positiveVotes: 36,
        negativeVotes: 64,
        image: '../../../assets/images/Cristina.jpg',
        id: 1,
        name: 'Cristina West',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        date: 22,
        category: 'Entertaiment',
        voted: true
      },
      {
        positiveVotes: 64,
        negativeVotes: 36,
        image: '../../../assets/images/Malala.jpg',
        id: 1,
        name: 'Malala West',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        date: 22,
        category: 'Entertaiment',
        voted: true
      }
    ]
  }
}
