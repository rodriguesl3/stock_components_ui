import React from 'react';
import { shallow } from 'enzyme';
import ChatBalllon from '../ChatBalloon';
describe('ChatBalloon', () => {
  it('it should render sender correctly', () => {
    const expectText = 'this is a test';
    const timeExpect = '08:00 am';
    const submitType = 'sender';
    const wrapper = shallow(
      <ChatBalllon content={expectText} time={timeExpect} type={submitType} />,
    );
    const content = wrapper.find(`[type="${submitType}"]`).text();

    const timeContent = wrapper.find('[data-info="timer"]').text();
    expect(wrapper).toMatchSnapshot();

    expect(content).toEqual(expectText);
    expect(timeContent).toEqual(timeExpect);
  });

  it('it should render listener correctly', () => {
    const expectText = 'this is a test';
    const timeExpect = '08:00 am';
    const submitType = 'listener';
    const wrapper = shallow(
      <ChatBalllon content={expectText} time={timeExpect} type={submitType} />,
    );
    const content = wrapper.find(`[type="${submitType}"]`).text();

    const timeContent = wrapper.find('[data-info="timer"]').text();
    expect(wrapper).toMatchSnapshot();

    expect(content).toEqual(expectText);
    expect(timeContent).toEqual(timeExpect);
  });
});
