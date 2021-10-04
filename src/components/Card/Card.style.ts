import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  --padding: 15px;

  background: ${theme.palette.background.base};
  border-radius: ${theme.borderRadius};
  width: calc(304px - 2 * var(--padding));
  margin: 1rem 0;
  padding: var(--padding);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 8px 0;

  > button {
    margin-right: 8px;
  }
`;
