import styled from 'styled-components';

export const TooltipContainer = styled.div`
  ::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;

    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid white;
    left: -15px;
    top: 7px;
  }
  margin-left: 300px;
  position: absolute;
  max-width: 300px;
  border: 1px solid transparent;
  border-radius: 5px;
  -webkit-box-shadow: 0px 1px 55px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 55px -22px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 55px -22px rgba(0, 0, 0, 0.75);

  .content-container {
    padding: 10px;
  }

  .bottom-container {
    width: 100%;
    display: flex;

    button {
      width: 50%;
    }
  }
`;

export const TooltipHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;
