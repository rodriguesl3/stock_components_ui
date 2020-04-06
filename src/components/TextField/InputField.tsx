import React from 'react';
import { InputContainer } from './InputField.style';

interface InputFieldProps {
  label: string;
}

type InputExtendType = InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<InputExtendType> = props => {
  type forwardType = Exclude<InputFieldProps, 'label'>;

  const forwardProps: forwardType = props;

  return (
    <InputContainer>
      <input
        className="custom-input"
        {...forwardProps}
        autoComplete="off"
        placeholder=" "
      />

      <label className="label-custom-input">
        <span className="content-label">{props.label}</span>
      </label>
    </InputContainer>
  );
};

export default InputField;
