import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  font-size: 16px;
  position: relative;
  width: 300px;
  overflow: hidden;

  .custom-input {
    border: 0px solid transparent;
    border-bottom: 1px solid lightgray;
    color: #595f6e;
    padding-top: 20px;
    padding-left: 3px;
    width: 100%;
    outline: none;
  }

  .label-custom-input {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }

  .label-custom-input::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #5fa8d3;
    left: 0px;
    bottom: 0px;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  .content-label {
    position: absolute;
    bottom: 5px;
    left: 5px;
    transition: all 0.3s ease;
  }

  .custom-input:focus + .label-custom-input .content-label,
  .custom-input:not(:placeholder-shown) + .label-custom-input .content-label {
    transform: translateY(-100%);
    font-size: 14px;
    color: #43425d;
  }

  .custom-input:focus + .label-custom-input:after,
  .custom-input:not(:placeholder-shown) + .label-custom-input:after {
    transform: translateX(0%);
  }
`;
