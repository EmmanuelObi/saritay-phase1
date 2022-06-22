export type AppState = {
  options: Option[];
  totalVotes: number;
};

export type Option = {
  name: string;
  votes: number;
};
