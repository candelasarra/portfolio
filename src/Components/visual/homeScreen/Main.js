import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import { useButtonClicked } from '../Hooks/Hooks';
import '../CSSfiles/Main.css';
import Header from './Header';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import { Fab } from '@material-ui/core';

const Main = () => {
  const { onButtonClick, buttonClicked } = useButtonClicked('Portfolio');
  const [obj, setObject] = useState(null);
  useEffect(() => {
    const headerValues = ['Portfolio', 'AboutMe', 'ContactMe'];
    const obj = {};

    //creates object with left and right values of each in array
    const sidesValue = arr => {
      arr.map((value, index) => {
        if (index === 0) {
          return (obj[value] = {
            left: arr[arr.length - 1],
            right: arr[index + 1]
          });
        } else if (index === arr.length - 1) {
          return (obj[value] = {
            left: arr[index - 1],
            right: arr[0]
          });
        } else {
          return (obj[value] = {
            left: arr[index - 1],
            right: arr[index + 1]
          });
        }
      });
    };
    sidesValue(headerValues);
    setObject(obj);
  }, []);

  const rightDivComponent =
    buttonClicked && obj ? obj[buttonClicked].right : null;
  const leftDivComponent =
    buttonClicked && obj ? obj[buttonClicked].left : null;
  return (
    <div
      className="mainDivAfterRoot"
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        background: 'rgb(16, 16, 16)'
      }}
    >
      <div className="Main-header">
        <Header onButtonClick={onButtonClick} />
      </div>
      <div className="Main-div">
        <div className="Main-leftDiv">
          {leftDivComponent === null ? null : (
            <Fab
              size="small"
              color="primary"
              onClick={onButtonClick}
              value={leftDivComponent}
              style={{
                margin: 0,
                top: 'auto',
                left: 20,
                bottom: 20,
                right: 'auto',
                position: 'fixed',
                zIndex: 5000,
                boxShadow: 'unset'
              }}
              disableRipple={true}
            >
              <ArrowBackIosRoundedIcon />
            </Fab>
          )}
        </div>
        <div className="Main-mainDiv">
          <HomeScreen buttonClicked={buttonClicked} />
        </div>
        <div className="Main-rightDiv">
          {rightDivComponent === null ? null : (
            <Fab
              size="small"
              color="primary"
              onClick={onButtonClick}
              value={rightDivComponent}
              style={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
                zIndex: 5000,
                boxShadow: 'unset'
              }}
              disableRipple={true}
            >
              <ArrowForwardIosRoundedIcon />
            </Fab>
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
