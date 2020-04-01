import React from 'react';
import { Chat, Timer } from './ChatBalloon.styles';

interface ChatProps {
  content: string | JSX.Element;
  type: 'sender' | 'listener';
  time: string;
}

const ChatBalloon: React.FC<ChatProps> = props => (
  <div>
    <Chat type={props.type} data-chat-type={props.type}>
      {props.content}
    </Chat>
    <Timer type={props.type} data-info="timer">
      {props.time}
    </Timer>
  </div>
);

export default ChatBalloon;
