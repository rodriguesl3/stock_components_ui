import React from 'react';
import { CustomButton } from './StockButton.style';

interface StockProps {
  content: string | JSX.Element;
}

const StockButton: React.FC<StockProps> = props => (
  <CustomButton customStyle="prymary" size={'large'}>
    {props.content}
  </CustomButton>
);

export default StockButton;
