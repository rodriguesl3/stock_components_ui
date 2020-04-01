import React from 'react';

export default { title: 'CustomPlayer' };

import CustomPlayer from './CustomPlayer';

export const defaultCustomPlayer = () => (
  <CustomPlayer
    totalProgress={40}
    musicName="Love song"
    onPlay={() => {
      console.log('play this budega');
    }}
    onNext={() => {
      console.log('next one, please');
    }}
    onPrevious={() => {
      console.log('previous one, please');
    }}
  />
);
