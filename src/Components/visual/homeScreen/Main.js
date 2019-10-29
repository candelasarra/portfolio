import React from 'react';
import HomeScreen from './HomeScreen';
import HSButtons from './HSButtons';
import { useButtonClicked } from '../Hooks/Hooks';
import '../CSSfiles/Main.css';
const Main = () => {
  const { onButtonClick, buttonClicked } = useButtonClicked(null);

  return (
    <div className="Main-div">
      <div className="HSButtons-div-three">
        {buttonClicked !== 'portfolio' && (
          <HSButtons
            value="portfolio"
            label="Portfolio"
            onButtonClick={onButtonClick}
          />
        )}
        {buttonClicked !== 'aboutme' && (
          <HSButtons
            value="aboutme"
            label="About Me"
            onButtonClick={onButtonClick}
          />
        )}
        {buttonClicked !== 'contactme' && (
          <HSButtons
            value="contactme"
            label="Contact Me"
            onButtonClick={onButtonClick}
          />
        )}
      </div>
      <div className="HSButtons-div-back">
        {buttonClicked !== null && buttonClicked !== 'back' && (
          <HSButtons value="back" label="Back" onButtonClick={onButtonClick} />
        )}
      </div>
      <HomeScreen buttonClicked={buttonClicked} />
    </div>
  );
};
export default Main;
