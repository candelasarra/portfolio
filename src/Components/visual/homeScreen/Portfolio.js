import React from 'react';
import DisplayHtmlInDiv from '../../logic/DisplayHtmlInDiv';
import { Typography } from '@material-ui/core';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
import { ReactComponent as Blob1 } from '../images/blob-shape.svg';
const Portfolio = () => {
  return (
    <div className="Portfolio-holder-div">
      <Blob1 />
      <div className="Portfolio-explanationDiv">explanation</div>
      <div className="Portfolio-RecipesImage-div">
        <img
          src={TheRecipesImage}
          alt="Candela's Recipes Website"
          className="Portfolio-RecipesImage"
        />
      </div>
    </div>
  );
};
export default Portfolio;
