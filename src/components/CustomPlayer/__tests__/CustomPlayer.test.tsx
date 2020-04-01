import React from 'react';
import { shallow } from 'enzyme';

import CustomPlayer from '../CustomPlayer';

describe('<CustomPlayer />', () => {
  it('it should render properly', () => {
    const mockMusicName = 'this is a test music name';
    const mockNextEvent = jest.fn();
    const mockPreviousEvent = jest.fn();
    const mockPlayEvent = jest.fn();
    const mockTotalProgress = 50;

    const wrapper = shallow(
      <CustomPlayer
        totalProgress={mockTotalProgress}
        musicName={mockMusicName}
        onNext={mockNextEvent}
        onPrevious={mockPreviousEvent}
        onPlay={mockPlayEvent}
      />,
    );

    wrapper.find('.player-next-button').simulate('click');
    wrapper.find('.player-previous-button').simulate('click');
    wrapper.find('.player-play-button').simulate('click');

    const textResponse = wrapper.find('span').text();

    expect(textResponse).toEqual(mockMusicName);
    expect(mockNextEvent).toHaveBeenCalledTimes(1);
    expect(mockPlayEvent).toHaveBeenCalledTimes(1);
    expect(mockPreviousEvent).toHaveBeenCalledTimes(1);
  });
});
