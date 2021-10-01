import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CenteredContainer = styled.div`
  margin: auto;
  margin-top: 20px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  height: 90px;

  > button {
    margin: auto;
  }
`;
