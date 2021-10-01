import { Dispatch } from 'redux';
import { API_TOURNAMENTS_URL } from '../../constants/api';
import { Tournament } from '../../models';
import {
  getTournaments,
  getTournamentsError,
  getTournamentsSuccess
} from '../actions/tournaments';

function createTournament(name: string) {
  return fetch(API_TOURNAMENTS_URL, {
    method: 'POST',
    body: JSON.stringify({ name })
  });
}

function editTournament(id: string, name: string) {
  return fetch(`${API_TOURNAMENTS_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ name })
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
    dispatch(getTournaments());
    return fetchTournaments(q)
      .then(res => res.json())
      .then(
        (data: Tournament[]) => dispatch(getTournamentsSuccess(data)),
        (error: Error) => dispatch(getTournamentsError(error))
      );
  };
}
