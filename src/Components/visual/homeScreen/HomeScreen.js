import React, { useEffect } from 'react';
import '../homeScreen/HomeScreen.css';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const HomeScreen = ({ buttonClicked, firstLoad }) => {
  let history = useHistory();

  useEffect(() => {
    if (buttonClicked !== undefined) {
      history.push('/' + buttonClicked);
    } else {
      history.push('/Portfolio');
    }
  }, [buttonClicked, history]);
  return (
    <div className="HomeScreen-holderDiv">
      <div className="HomeScreen-ToRenderComponent">
        <Route
          path="/Portfolio"
          component={() => <Portfolio firstLoad={firstLoad} />}
        />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/ContactMe" component={ContactMe} />
      </div>
    </div>
  );
};

export default HomeScreen;
