import React from 'react';
import { Button } from '@material-ui/core';

const HSButtons = props => {
  return <Button {...props}>{props.label}</Button>;
};

export default HSButtons;
