import {
  TOURNAMENTS_CREATE,
  TOURNAMENTS_DELETE,
  TOURNAMENTS_EDIT,
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

    case TOURNAMENTS_DELETE:
      return state.filter(tournament => tournament.id !== action.id);

    case TOURNAMENTS_EDIT:
      return state.map(tournament =>
        tournament.id === action.id
          ? { ...tournament, name: action.name }
          : tournament
      );

    case TOURNAMENTS_CREATE:
      return [...state, action.tournament];

    case TOURNAMENTS_GET:
    case TOURNAMENTS_GET_ERROR:
    default:
      return state;
  }
}
