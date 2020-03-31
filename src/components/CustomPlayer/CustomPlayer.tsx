import React from 'react';

import { FaBackward, FaForward, FaPlay } from 'react-icons/fa';
import { Progress, Button } from 'antd';

import {
  CustomPlayerContainer,
  ButtonPlayer,
  ContentProgress,
} from './CustomPlayer.style';

interface CustomPlayerProps {
  onPlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const CustomPlayer: React.FC<CustomPlayerProps> = props => {
  return (
    <CustomPlayerContainer>
      <ButtonPlayer>
        <div className="player-button" onClick={props.onPrevious}>
          <Button type="primary" shape="circle">
            <FaBackward />
          </Button>
        </div>
        <div className="player-button" onClick={props.onPlay}>
          <Button type="primary" shape="circle">
            <FaPlay />
          </Button>
        </div>
        <div className="player-button" onClick={props.onNext}>
          <Button type="primary" shape="circle">
            <FaForward />
          </Button>
        </div>
      </ButtonPlayer>
      <ContentProgress>
        <span>this is title</span>
        <Progress percent={30} size="small" showInfo={false} />
      </ContentProgress>
    </CustomPlayerContainer>
  );
};

export default CustomPlayer;
