import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Draggable from '../../logic/Draggable';
import { Link } from 'react-router-dom';
const AboutMe = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTop = 0;
  }, []);
  return (
    <Draggable
      style={{ color: 'white', width: '80%', margin: 'auto' }}
      classSelector="aboutme"
      identifier="text"
      position="relative"
    >
      <Typography variant="body1">
        Hi, my name is Candela Sarrabayrouse, and I am a self-taught developer.
        My true passion is front end, as I am a visual person that enjoys
        playing with colors, designs and animations as well as creating
        interactive platforms and seeing a mockups come to life. As I continue
        to immerse myself in knowledge related to front end technologies, I am
        also starting to see and understand the necessity I have to aquire more
        backend knowledge as well. This necessity comes from wanting to create
        more robust projects on my own, as well as being more productive at
        work. This is why I am currently learning about networks, servers,
        system architectures, as well as looking at REST APIs more thoroughly in
        addition to other related topics that I find important to learn more in
        depth as I continue my career as a developer. Please do not hesitate on
        giving me advice about this at candela.sarra@gmail.com!
      </Typography>
    </Draggable>
  );
};
export default AboutMe;
