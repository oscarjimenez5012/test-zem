
export interface PreviousRulingsState {
  pending: boolean;
  failure: boolean;
  previousRulings: PreviousRuling[]
}

export interface PreviousRuling {
  positiveVotes: number;
  negativeVotes: number;
  image: string;
  id: number;
  name: string;
  description: string;
  date: number;
  category: string;
  voted: boolean,
}