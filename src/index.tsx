import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './redux/store';
import Container from './components/Container';
import H4 from './components/H4';
import Input from './components/Input';
import Button from './components/Button';
import styled from 'styled-components';
import Card from './components/Card';
import { Store, Tournament } from './models';
import { fetchTournamentsThunk } from './redux/thunk/tournamentsThunk';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LoadingContainer = styled.div`
  margin: auto;
  margin-top: 20px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  height: 90px;

  > button {
    margin: auto;
  }
`;

interface AppProps {
  isLoading: boolean;
  hasFailed: boolean;
  tournaments: Tournament[];
  fetchTournamentsThunk: any; //TODO
}

const App: React.FC<AppProps> = props => {
  const { isLoading, hasFailed, tournaments, fetchTournamentsThunk } = props;

  const [search, setSearch] = useState('');
  const onSearch = useCallback(event => setSearch(event.target.value), []);
  const onRetry = useCallback(() => fetchTournamentsThunk(search), [search]);

  const onCreate = useCallback(() => {
    const newTournament = window.prompt('Tournament Name:');
    // TODO POST with new tournament name
  }, []);

  useEffect(() => {
    fetchTournamentsThunk(search);
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
          <LoadingContainer>Loading tournaments ...</LoadingContainer>
        ) : !!tournaments.length ? (
          tournaments.map(t => <Card tournament={t} key={t.id} />)
        ) : (
          <LoadingContainer>No tournament found.</LoadingContainer>
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
  fetchTournamentsThunk
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
