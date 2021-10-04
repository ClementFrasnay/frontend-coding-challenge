import { Tournament } from './InterfaceStore';

interface SimpleAction {
  type: string;
}

export interface TournamentSuccessAction extends SimpleAction {
  tournaments: Tournament[];
}

export interface TournamentCreateAction extends SimpleAction {
  tournament: Tournament;
}

export interface TournamentEditAction extends SimpleAction {
  id: string;
  name: string;
}

export interface TournamentDeleteAction extends SimpleAction {
  id: string;
}

export type TournamentAction =
  | TournamentSuccessAction
  | TournamentCreateAction
  | TournamentEditAction
  | TournamentDeleteAction;
