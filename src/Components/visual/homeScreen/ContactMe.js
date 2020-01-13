import React from 'react';
import { Typography } from '@material-ui/core';
import Draggable from '../../logic/Draggable';

const ContactMe = () => {
  return (
    <Draggable
      classSelector="contactMeText"
      identifier="text"
      position="relative"
      style={{ color: 'white', width: 'min-content' }}
    >
      <Typography>candela.sarra@gmail.com</Typography>
    </Draggable>
  );
};
export default ContactMe;
