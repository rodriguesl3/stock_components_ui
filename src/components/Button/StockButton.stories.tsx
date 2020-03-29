import * as React from 'react';
import StockButton from './StockButton';
export default { title: 'StockButton' };
import 'antd/dist/antd.css';

export const loginButton = () => <StockButton content="Login" />;
export const signupButton = () => <StockButton content="Sign up" />;
