import {
  TOURNAMENTS_GET,
  TOURNAMENTS_GET_ERROR,
  TOURNAMENTS_GET_SUCCESS
} from '../../constants/reduxActions';
import { Tournament } from '../../models';

export function getTournaments() {
  return {
    type: TOURNAMENTS_GET
  };
}

export function getTournamentsSuccess(data: Tournament[]) {
  return {
    type: TOURNAMENTS_GET_SUCCESS,
    data
  };
}

export function getTournamentsError(error: Error) {
  return {
    type: TOURNAMENTS_GET_ERROR,
    error
  };
}
