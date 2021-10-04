import React, { useCallback, useEffect, useState } from 'react';
import Container from '../components/Container';
import H4 from '../components/H4';
import Input from '../components/Input';
import Button from '../components/Button';
import Card from '../components/Card/Card';
import { Tournament } from '../models';
import {
  ContentContainer,
  ErrorContainer,
  CenteredContainer,
  Header
} from './MainPage.style';
import debounce from 'lodash.debounce';

interface MainPageProps {
  isLoading: boolean;
  hasFailed: boolean;
  tournaments: Tournament[];
  fetchTournamentsThunk: (search?: string) => void;
  deleteTournamentThunk: (id: string) => void;
  editTournamentThunk: (id: string, name: string) => void;
  createTournamentThunk: (name: string) => void;
}

export const MainPage: React.FC<MainPageProps> = props => {
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
          tournaments.map(tournament => (
            <Card
              tournament={tournament}
              key={tournament.id}
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
