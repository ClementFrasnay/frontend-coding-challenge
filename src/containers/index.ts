import { connect } from 'react-redux';
import { Store } from '../models';
import { selectHasFailed, selectIsLoading } from '../redux/selectors/request';
import { selectTournaments } from '../redux/selectors/tournaments';
import {
  fetchTournamentsThunk,
  deleteTournamentThunk,
  editTournamentThunk,
  createTournamentThunk
} from '../redux/thunk/tournamentsThunk';
import { MainPage } from './MainPage';

const mapStateToProps = (state: Store) => ({
  hasFailed: selectHasFailed(state),
  isLoading: selectIsLoading(state),
  tournaments: selectTournaments(state)
});

const mapDispatchToProps = {
  fetchTournamentsThunk,
  deleteTournamentThunk,
  editTournamentThunk,
  createTournamentThunk
};

const ConnectedMainPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

export { ConnectedMainPage as MainPage };
