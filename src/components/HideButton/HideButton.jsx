import React from 'react';
import { ShowButton } from './styles';

export const HideButton = ({ Show, setShow }) => {
  const handleClick = () => {
    setShow((Show = !Show));
  };
  return (
    <ShowButton onClick={handleClick}>{Show ? 'Visible' : 'Hidden'}</ShowButton>
  );
};
