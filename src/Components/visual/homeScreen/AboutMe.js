import React from 'react';
import { Typography } from '@material-ui/core';
import Draggable from '../../logic/Draggable';
const AboutMe = () => {
  return (
    <Draggable style={{ color: 'red' }} classSelector="aboutme">
      <Typography>Hi its about me</Typography>
    </Draggable>
  );
};
export default AboutMe;
