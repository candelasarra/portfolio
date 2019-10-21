import React from 'react';
import '../homeScreen/HomeScreen.css';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';

const HomeScreen = ({ buttonClicked }) => {
  const nullCaseRender = <h1>Hi homescreen on null</h1>;
  return (
    <div className="holdsHSButtons">
      {buttonClicked === 'portfolio' && <Portfolio />}
      {buttonClicked === 'aboutme' && <AboutMe />}
      {buttonClicked === 'contactme' && <ContactMe />}
      {(buttonClicked === null || buttonClicked === 'back') && nullCaseRender}
    </div>
  );
};

export default HomeScreen;
