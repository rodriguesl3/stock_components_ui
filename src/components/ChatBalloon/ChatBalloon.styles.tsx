import styled from 'styled-components';

interface BalloonProps {
  type: 'sender' | 'listener';
}

export const Chat = styled.div`
  max-width: 30%;
  height: auto;
  padding: 15px;
  ${(props: BalloonProps) =>
    props.type === 'listener'
      ? 'background-color: #3b86ff; border-radius: 25px 25px 25px 0px; color: white;'
      : 'background-color: #EDF0F5; border-radius: 25px 25px 0px 25px; color: black;'}
`;
export const Timer = styled.span`
  max-width: 29%;
  color: gray;
  display: flex;
  justify-content: ${(props: BalloonProps) =>
    props.type === 'listener' ? 'flex-start' : 'flex-end'};
`;
