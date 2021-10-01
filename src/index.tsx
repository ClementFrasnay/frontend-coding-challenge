import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './redux/store';
import Container from './components/Container';
import H4 from './components/H4';
import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card/Card';
import { Store, Tournament } from './models';
import {
  fetchTournamentsThunk,
  deleteTournamentThunk,
  editTournamentThunk,
  createTournamentThunk
} from './redux/thunk/tournamentsThunk';
import {
  ContentContainer,
  ErrorContainer,
  Header,
  CenteredContainer
} from './index.style';
import debounce from 'lodash.debounce';

interface AppProps {
  isLoading: boolean;
  hasFailed: boolean;
  tournaments: Tournament[];
  fetchTournamentsThunk: (search?: string) => void;
  deleteTournamentThunk: (id: string) => void;
  editTournamentThunk: (id: string, name: string) => void;
  createTournamentThunk: (name: string) => void;
}

const App: React.FC<AppProps> = props => {
  const {
    isLoading,
    hasFailed,
    tournaments,
    fetchTournamentsThunk,
    deleteTournamentThunk,
    editTournamentThunk,
    createTournamentThunk
  } = props;

  const [search, setSearch] = useState('');
  const onSearch = useCallback(event => setSearch(event.target.value), []);
  const onRetry = useCallback(() => debouncedSearch(search), [search]);

  const onCreate = useCallback(() => {
    const name = window.prompt('Tournament Name:');
    if (!!name) {
      createTournamentThunk(name);
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce(search => fetchTournamentsThunk(search), 300),
    []
  );

  useEffect(() => {
    debouncedSearch(search);
  }, [search]);

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>

      <Header>
        <Input
          placeholder="Search tournaments ..."
          value={search}
          onChange={onSearch}
        />
        <Button onClick={onCreate}>Create tournament</Button>
      </Header>

      <ContentContainer>
        {hasFailed ? (
          <ErrorContainer>
            <div>Something went wrong.</div>
            <Button onClick={onRetry}>Retry</Button>
          </ErrorContainer>
        ) : isLoading ? (
          <CenteredContainer>Loading tournaments ...</CenteredContainer>
        ) : !!tournaments.length ? (
          tournaments.map(t => (
            <Card
              tournament={t}
              key={t.id}
              deleteTournamentThunk={deleteTournamentThunk}
              editTournamentThunk={editTournamentThunk}
            />
          ))
        ) : (
          <CenteredContainer>No tournament found.</CenteredContainer>
        )}
      </ContentContainer>
    </Container>
  );
};

function mapStateToProps(state: Store) {
  return {
    hasFailed: state.request.hasFailed,
    isLoading: state.request.isLoading,
    tournaments: state.tournaments
  };
}

const mapDispatchToProps = {
  fetchTournamentsThunk,
  deleteTournamentThunk,
  editTournamentThunk,
  createTournamentThunk
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
