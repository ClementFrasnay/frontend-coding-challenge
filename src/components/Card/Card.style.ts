import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  background: ${theme.palette.background.base};
  border-radius: 4px;
  width: calc(304px - 2 * 15px);
  margin: 1rem 0;
  padding: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 8px 0;

  > button {
    margin-right: 8px;
  }
`;
