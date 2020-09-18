import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Draggable from '../../logic/Draggable';

const ContactMe = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTop = 0;
  }, []);
  return (
    <Draggable
      classSelector="contactMeText"
      identifier="text"
      position="relative"
      style={{ color: 'white', width: '80%', margin: 'auto' }}
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
