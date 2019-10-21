import React from 'react';
import HomeScreen from './HomeScreen';
import HSButtons from './HSButtons';
import { useButtonClicked } from '../Hooks/Hooks';
const Main = () => {
  const { onButtonClick, buttonClicked } = useButtonClicked(null);

  return (
    <div>
      <div>
        {buttonClicked !== null && buttonClicked !== 'back' && (
          <HSButtons value="back" label="Back" onButtonClick={onButtonClick} />
        )}
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
      <HomeScreen buttonClicked={buttonClicked} />
    </div>
  );
};
export default Main;
