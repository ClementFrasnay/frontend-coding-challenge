import { Tournament } from '../../models';
import H6 from './../H6';
import React, { useCallback } from 'react';
import Button from './../Button';
import { ButtonsContainer, Container } from './Card.style';

interface CardProps {
  tournament: Tournament;
  deleteTournamentThunk: (id: string) => void;
  editTournamentThunk: (id: string, name: string) => void;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { deleteTournamentThunk, editTournamentThunk, tournament } = props;
  const {
    id,
    name,
    organizer,
    game,
    participants: { current, max },
    startDate
  } = tournament;

  const onEdit = useCallback(() => {
    const newName = window.prompt('New Tournament Name:', name);
    if (!!newName) {
      editTournamentThunk(id, newName);
    }
  }, [id, name]);

  const onDelete = useCallback(() => {
    const result = window.confirm(
      'Do you really want to delete this tournament?'
    );
    if (result) {
      deleteTournamentThunk(id);
    }
  }, [id]);

  return (
    <Container>
      <H6>{name}</H6>
      <div>Organizer: {organizer}</div>
      <div>Game: {game}</div>
      <div>
        Participants: {current}/{max}
      </div>
      <div>Start: {startDate}</div>
      <ButtonsContainer>
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete}>Delete</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Card;
