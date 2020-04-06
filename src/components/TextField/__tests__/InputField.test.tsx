import React from 'react';
import { shallow } from 'enzyme';

import InputField from '../InputField';

describe('<InputField />', () => {
  it('it should render a login', () => {
    const mockId = 'my-login';
    // const mockName = 'my-login-class';
    // const label = 'password';
    // const type = 'text';

    const wrapper = shallow(<InputField id="my-login" label="login" type="text" />);

    const inputElement = wrapper.find(`#${mockId}`);

    expect(inputElement).not.toBeNull();
  });
});
