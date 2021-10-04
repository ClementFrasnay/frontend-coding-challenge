import {
  TOURNAMENTS_CREATE,
  TOURNAMENTS_DELETE,
  TOURNAMENTS_EDIT,
  TOURNAMENTS_GET,
  TOURNAMENTS_GET_ERROR,
  TOURNAMENTS_GET_SUCCESS
} from '../../constants/reduxActions';
import { Tournament } from '../../models';
import {
  TournamentAction,
  TournamentSuccessAction,
  TournamentDeleteAction,
  TournamentCreateAction,
  TournamentEditAction
} from '../../models/interfaceAction';
import { formatDate } from '../../tools/helper';
import { initialState } from '../store/initialState';

export default function tournaments(
  state: Tournament[] = initialState.tournaments,
  action: TournamentAction
) {
  switch (action.type) {
    case TOURNAMENTS_GET_SUCCESS: {
      const { tournaments } = action as TournamentSuccessAction;
      return tournaments.map((tournament: Tournament) => ({
        ...tournament,
        startDate: formatDate(tournament.startDate)
      }));
    }

    case TOURNAMENTS_DELETE: {
      const { id } = action as TournamentDeleteAction;
      return state.filter(tournament => tournament.id !== id);
    }

    case TOURNAMENTS_EDIT: {
      const { id, name } = action as TournamentEditAction;
      return state.map(tournament =>
        tournament.id === id ? { ...tournament, name: name } : tournament
      );
    }

    case TOURNAMENTS_CREATE: {
      const { tournament } = action as TournamentCreateAction;
      return [...state, tournament];
    }

    case TOURNAMENTS_GET:
    case TOURNAMENTS_GET_ERROR:
    default:
      return state;
  }
}
