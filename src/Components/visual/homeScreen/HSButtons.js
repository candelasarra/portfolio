import React from 'react';
import { Button } from '@material-ui/core';

const HSButtons = props => {
  return (
    <Button
      key={props.value}
      variant="outlined"
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
