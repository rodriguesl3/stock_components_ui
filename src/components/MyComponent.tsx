import * as React from 'react';

interface Props {
  name: string;
}

const MyComponent: React.FC<Props> = props => (
  <div role="heading">My First Component from {props.name}</div>
);

export default MyComponent;
