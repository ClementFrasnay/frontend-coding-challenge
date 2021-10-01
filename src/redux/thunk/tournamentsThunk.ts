import { Dispatch } from 'redux';
import { API_TOURNAMENTS_URL } from '../../constants/api';
import { Tournament } from '../../models';
import {
  getTournaments,
  getTournamentsError,
  getTournamentsSuccess
} from '../actions/tournaments';

function fetchTournaments() {
  return fetch(API_TOURNAMENTS_URL);
}

export function fetchTournamentsThunk(q: string = '') {
  return function(dispatch: Dispatch) {
    dispatch(getTournaments());
    return fetchTournaments()
      .then(res => res.json())
      .then(
        (data: Tournament[]) => dispatch(getTournamentsSuccess(data)),
        (error: Error) => dispatch(getTournamentsError(error))
      );
  };
}
