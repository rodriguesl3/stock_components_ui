import styled from 'styled-components';
import { Button } from 'antd';

export interface ButtonProps {
  customStyle: 'prymary' | 'secondary';
}

export const CustomButton = styled(Button)`
  ${(p: ButtonProps) =>
    p.customStyle === 'prymary'
      ? 'background-color: #43425d; color: white;'
      : 'background-color: #aaa; color: black;'};
`;
