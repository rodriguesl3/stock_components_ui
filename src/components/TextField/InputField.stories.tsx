import React from 'react';

import InputField from './InputField';

export default { title: 'InputField' };

export const UsualInputField = () => {
  return (
    <InputField label="welcome" componentId="my-id" componentName="my-name" type="text" />
  );
};

export const PassworInputField = () => {
  return (
    <InputField
      label="password"
      componentId="my-id"
      componentName="my-name"
      type="password"
    />
  );
};
