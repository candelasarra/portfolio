import React from 'react';
import { Button } from '@material-ui/core';

const HSButtons = props => {
  return (
    <Button
      key={props.value}
      size="small"
      color="primary"
      onClick={props.onButtonClick}
      value={props.value}
    >
      {props.label}
    </Button>
  );
};

export default HSButtons;
