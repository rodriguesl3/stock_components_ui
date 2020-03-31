import styled from 'styled-components';

export const CustomPlayerContainer = styled.div`
  display: flex;
  width: 30%;
  height: 50px;
  background-color: white;
  border: 1px solid lightgray;
  box-shadow: 10px 10px 50px -17px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 10px;
`;

export const ButtonPlayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  .player-button {
    cursor: pointer;
  }
`;

export const ContentProgress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 10px;
`;
