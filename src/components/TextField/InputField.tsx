import React from 'react';
import { InputContainer } from './InputField.style';

interface InputFieldProps {
  type: string;
  componentId: string;
  componentName: string;
  label: string;
  width?: string;
  height?: string;
}
const InputField: React.FC<InputFieldProps> = props => {
  return (
    <InputContainer>
      <input
        className="custom-input"
        type={props.type}
        name={props.componentName}
        id={props.componentId}
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
