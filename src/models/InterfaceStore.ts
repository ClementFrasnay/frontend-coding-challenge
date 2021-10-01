export interface Tournament {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
}

export interface Request {
  isLoading: boolean;
  hasFailed: boolean;
}

export interface Store {
  request: Request;
  tournaments: Tournament[];
}
