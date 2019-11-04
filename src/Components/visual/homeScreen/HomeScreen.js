import React, { useEffect } from 'react';
import '../homeScreen/HomeScreen.css';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const HomeScreen = ({ buttonClicked }) => {
  let history = useHistory();

  useEffect(() => {
    if (buttonClicked !== undefined) history.push('/' + buttonClicked);
    console.log('use effect in hs ');
  }, [buttonClicked, history]);
  return (
    <div className="HomeScreen-holderDiv">
      <div className="HomeScreen-ToRenderComponent">
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/ContactMe" component={ContactMe} />
      </div>
    </div>
  );
};

export default HomeScreen;
