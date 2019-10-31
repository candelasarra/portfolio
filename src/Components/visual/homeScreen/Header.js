import React from 'react';
import HSButtons from './HSButtons';
import '../CSSfiles/Header.css';

const Header = ({ onButtonClick }) => {
  return (
    <div className="Header-holdsButtonsDiv">
      <HSButtons
        label="Portfolio"
        value="portfolio"
        onButtonClick={onButtonClick}
      />
      <HSButtons
        label="About Me"
        value="aboutme"
        onButtonClick={onButtonClick}
      />
      <HSButtons
        label="Contact Me"
        value="contactme"
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default Header;
