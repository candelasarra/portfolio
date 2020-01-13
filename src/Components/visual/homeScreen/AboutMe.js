import React from 'react';
import { Typography } from '@material-ui/core';
import Draggable from '../../logic/Draggable';
const AboutMe = () => {
  return (
    <Draggable style={{ color: 'white', width: '80%' }} classSelector="aboutme">
      <Typography>
        Hi, my name is Candela Sarrabayrouse, and I am a self-taught Front-End
        Developer. For the past months I have been learning JavaScript and React
        to become a Front-End Developer. I am very interested on the design
        aspect of websites and applications so that is my focus of study right
        now, as well as gaining experience in different technologies that I will
        need for working on projects. I started by learning JavaScript and
        continued to learn React.js which I have used to create the projects I
        have.
      </Typography>
    </Draggable>
  );
};
export default AboutMe;
