
export interface PreviousRulingsState {
  pending: boolean;
  failure: boolean;
  previousRulings: PreviousRulings[]
}

export interface PreviousRulings {
  positiveVotes: number;
  negativeVotes: number;
  image: string;
  id: number;
  name: string;
  description: string;
  date: Date;
  category: string;
}