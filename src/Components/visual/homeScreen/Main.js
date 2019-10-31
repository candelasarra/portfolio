import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import { useButtonClicked } from '../Hooks/Hooks';
import '../CSSfiles/Main.css';
import { Typography } from '@material-ui/core';
import Header from './Header';

const Main = () => {
  const { onButtonClick, buttonClicked } = useButtonClicked('aboutme');
  const [obj, setObject] = useState(null);
  useEffect(() => {
    const headerValues = ['portfolio', 'aboutme', 'contactme'];
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
  console.log(obj);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="Main-header">
        <Header onButtonClick={onButtonClick} />
      </div>
      <div className="Main-div">
        <div className="Main-leftDiv">
          <Typography>{obj ? obj[buttonClicked].left : null}</Typography>
        </div>
        <div className="Main-mainDiv">
          <HomeScreen buttonClicked={buttonClicked} />
        </div>
        <div className="Main-rightDiv">
          <Typography>{obj ? obj[buttonClicked].right : null}</Typography>
        </div>
      </div>
      <div className="Main-footer">
        <Typography>footer</Typography>
      </div>
    </div>
  );
};
export default Main;
