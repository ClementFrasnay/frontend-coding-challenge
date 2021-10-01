import {
  TOURNAMENTS_GET,
  TOURNAMENTS_GET_ERROR,
  TOURNAMENTS_GET_SUCCESS
} from '../../constants/reduxActions';
import { Tournament } from '../../models';
import { formatDate } from '../../tools/helper';

const initialState: Tournament[] = [];

export default function tournaments(
  state: Tournament[] = initialState,
  action: any //TODO
) {
  switch (action.type) {
    case TOURNAMENTS_GET_SUCCESS:
      return action.data.map((tournament: Tournament) => ({
        ...tournament,
        startDate: formatDate(tournament.startDate)
      }));
    case TOURNAMENTS_GET:
    case TOURNAMENTS_GET_ERROR:
    default:
      return state;
  }
}
