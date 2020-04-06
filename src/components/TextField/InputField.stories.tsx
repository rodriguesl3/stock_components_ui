import React from 'react';

import InputField from './InputField';

export default { title: 'InputField' };

export const UsualInputField = () => {
  return <InputField label="welcome" id="my-id" type="text" />;
};

export const PassworInputField = () => {
  return <InputField label="password" id="my-id" type="password" />;
};
