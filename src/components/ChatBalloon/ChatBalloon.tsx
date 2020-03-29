import React from 'react';
import { Chat, Timer } from './ChatBalloon.styles';

interface ChatProps {
  content: string | JSX.Element;
  type: 'sender' | 'listener';
  time: string;
}

const ChatBalloon: React.FC<ChatProps> = props => (
  <div>
    <Chat>{props.content}</Chat>
    <Timer>{props.time}</Timer>
  </div>
);

export default ChatBalloon;
