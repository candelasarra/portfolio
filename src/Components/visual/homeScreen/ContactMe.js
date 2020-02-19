import React from 'react';
import { Typography } from '@material-ui/core';
import Draggable from '../../logic/Draggable';

const ContactMe = () => {
  return (
    <Draggable
      classSelector="contactMeText"
      identifier="text"
      position="relative"
      style={{ color: 'white', width: 'max-content' }}
    >
      <Typography variant="body1">
        Think we could create something together? Feel free to{' '}
        <a
          href="mailto:candela.sarra@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          drop me an email
        </a>
      </Typography>
    </Draggable>
  );
};
export default ContactMe;
