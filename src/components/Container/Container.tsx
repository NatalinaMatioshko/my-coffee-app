import React from 'react';
import type { ContainerProps } from './ContainerTypes';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
