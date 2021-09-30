import { Tournament } from '../models';
import H6 from './H6';
import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  background: ${theme.palette.background.base};
  border-radius: 4px;
  width: calc(304px - 2 * 15px);
  margin: 1rem 0;
  padding: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin: 8px 0;

  > button {
    margin-right: 8px;
  }
`;

interface CardProps {
  tournament: Tournament;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    name,
    organizer,
    game,
    participants: { current, max },
    startDate
  } = props.tournament;

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
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Card;
