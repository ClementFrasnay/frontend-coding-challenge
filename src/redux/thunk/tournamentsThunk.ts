import { Dispatch } from 'redux';
import { API_TOURNAMENTS_URL } from '../../constants/api';
import { Tournament } from '../../models';
import {
  createTournamentAction,
  deleteTournamentAction,
  editTournamentAction,
  getTournamentsAction,
  getTournamentsErrorAction,
  getTournamentsSuccessAction
} from '../actions/tournaments';

function createTournament(name: string) {
  return fetch(API_TOURNAMENTS_URL, {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function editTournament(id: string, name: string) {
  return fetch(`${API_TOURNAMENTS_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ name }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

function deleteTournament(id: string) {
  return fetch(`${API_TOURNAMENTS_URL}/${id}`, { method: 'DELETE' });
}

function fetchTournaments(q: string) {
  return fetch(`${API_TOURNAMENTS_URL}?q=${q}`);
}

export function fetchTournamentsThunk(q: string = '') {
  return function(dispatch: Dispatch) {
    dispatch(getTournamentsAction());
    return fetchTournaments(q)
      .then(res => res.json())
      .then(
        (data: Tournament[]) => dispatch(getTournamentsSuccessAction(data)),
        (error: Error) => dispatch(getTournamentsErrorAction(error))
      );
  };
}

export function deleteTournamentThunk(id: string) {
  return function(dispatch: Dispatch) {
    dispatch(deleteTournamentAction(id));
    return deleteTournament(id);
  };
}

export function editTournamentThunk(id: string, name: string) {
  return function(dispatch: Dispatch) {
    dispatch(editTournamentAction(id, name));
    return editTournament(id, name);
  };
}

export function createTournamentThunk(name: string) {
  return function(dispatch: Dispatch) {
    return createTournament(name)
      .then(res => res.json())
      .then((res: Tournament) => dispatch(createTournamentAction(res)));
  };
}
