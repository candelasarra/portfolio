import React, { useEffect, useState } from 'react';
import HomeScreen from './HomeScreen';
import { useButtonClicked } from '../Hooks/Hooks';
import '../CSSfiles/Main.css';
import Header from './Header';
import HSButtons from './HSButtons';

const Main = () => {
  const { onButtonClick, buttonClicked } = useButtonClicked();
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
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="Main-header">
        <Header onButtonClick={onButtonClick} />
      </div>
      <div className="Main-div">
        <div className="Main-leftDiv">
          {leftDivComponent === null ? null : (
            <HSButtons
              label={leftDivComponent}
              value={leftDivComponent}
              onClick={onButtonClick}
            />
          )}
        </div>
        <div className="Main-mainDiv">
          <HomeScreen buttonClicked={buttonClicked} />
        </div>
        <div className="Main-rightDiv">
          {rightDivComponent === null ? null : (
            <HSButtons
              label={rightDivComponent}
              value={rightDivComponent}
              onClick={onButtonClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
