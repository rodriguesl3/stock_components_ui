import React from 'react';
import { IoMdClose } from 'react-icons/io';

import { TooltipHeader, TooltipContainer } from './TooltipBalloon.styles';

interface TooltipBalloonProps {
  title: string | JSX.Element;
  content: string | JSX.Element;
  buttons: JSX.Element[];
  onClose: () => void;
}
const TooltipBalloon: React.FC<TooltipBalloonProps> = props => {
  return (
    <TooltipContainer>
      <TooltipHeader data-element="TooltipHeader">
        <h3>{props.title}</h3>
        <div className="close-tooltip" onClick={props.onClose}>
          <IoMdClose />
        </div>
      </TooltipHeader>
      <div className="content-container">{props.content}</div>
      <div className="bottom-container">{props.buttons.map(button => button)}</div>
    </TooltipContainer>
  );
};

export default TooltipBalloon;
