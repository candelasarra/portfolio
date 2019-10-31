import React from 'react';
import '../homeScreen/HomeScreen.css';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import { Typography } from '@material-ui/core';
import { useButtonClicked } from '../Hooks/Hooks';
import HSButtons from './HSButtons';

const HomeScreen = ({ buttonClicked }) => {
  let toBeRendered = null;
  if (buttonClicked === 'portfolio') {
    toBeRendered = <Portfolio />;
  } else if (buttonClicked === 'aboutme') {
    toBeRendered = <AboutMe />;
  } else if (buttonClicked === 'contactme') {
    toBeRendered = <ContactMe />;
  }

  return (
    <div className="HomeScreen-holderDiv">
      <div className="HomeScreen-ToRenderComponent">{toBeRendered}</div>
    </div>
  );
};

export default HomeScreen;
