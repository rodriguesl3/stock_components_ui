import React from 'react';

export default { title: 'TooltipBalloon' };
import { Button } from 'antd';

import TooltipBalloon from './TooltipBalloon';

export const CommonTooltipBalloon = () => {
  const buttons: JSX.Element[] = [
    <Button
      type="primary"
      size={'large'}
      onClick={() => {
        console.log('ok clicked');
      }}
    >
      Ok
    </Button>,
    <Button
      type="danger"
      size={'large'}
      onClick={() => {
        console.log('close clicked');
      }}
    >
      Close
    </Button>,
  ];

  return (
    <TooltipBalloon
      title="Message"
      content="This is a content to make sure that element works properly."
      buttons={buttons}
      onClose={() => {
        console.log('closed');
      }}
    />
  );
};
