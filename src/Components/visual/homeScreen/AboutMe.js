import React from 'react';
import { Typography } from '@material-ui/core';
import Draggable from '../../logic/Draggable';
const AboutMe = () => {
  return (
    <Draggable style={{ color: 'white', width: '80%' }} classSelector="aboutme">
      <Typography variant="body1">
        Hi, my name is Candela Sarrabayrouse, and I am a self-taught Front-End
        Developer.
      </Typography>
    </Draggable>
  );
};
export default AboutMe;
