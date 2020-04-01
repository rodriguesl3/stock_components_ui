import React from 'react';
import { shallow } from 'enzyme';

import TooltipBalloon from '../TooltipBalloon';
import { Button } from 'antd';

describe('<TooltipBalloon />', () => {
  it('it should render a custom tooltip', () => {
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

    const mockContent = 'this is a content to test.';
    const title = 'Message Title';
    const mockClose = jest.fn();

    const wrapper = shallow(
      <TooltipBalloon
        buttons={buttons}
        content={mockContent}
        onClose={mockClose}
        title={title}
      />,
    );

    wrapper.find('.close-tooltip').simulate('click');

    const titleElement = wrapper.find('h3');

    expect(mockClose).toHaveBeenCalled();
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(title).toEqual(titleElement.text());
  });
});
