import {
  TOURNAMENTS_CREATE,
  TOURNAMENTS_DELETE,
  TOURNAMENTS_EDIT,
  TOURNAMENTS_GET,
  TOURNAMENTS_GET_ERROR,
  TOURNAMENTS_GET_SUCCESS
} from '../../constants/reduxActions';
import { Tournament } from '../../models';

export function getTournamentsAction() {
  return {
    type: TOURNAMENTS_GET
  };
}

export function getTournamentsSuccessAction(data: Tournament[]) {
  return {
    type: TOURNAMENTS_GET_SUCCESS,
    data
  };
}

export function getTournamentsErrorAction(error: Error) {
  return {
    type: TOURNAMENTS_GET_ERROR,
    error
  };
}

export function deleteTournamentAction(id: string) {
  return {
    type: TOURNAMENTS_DELETE,
    id
  };
}

export function editTournamentAction(id: string, name: string) {
  return {
    type: TOURNAMENTS_EDIT,
    id,
    name
  };
}

export function createTournamentAction(tournament: Tournament) {
  return {
    type: TOURNAMENTS_CREATE,
    tournament
  };
}
