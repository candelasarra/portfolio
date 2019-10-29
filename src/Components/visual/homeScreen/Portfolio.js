import React from 'react';
import DisplayHtmlInDiv from '../../logic/DisplayHtmlInDiv';
import { Typography } from '@material-ui/core';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
const Portfolio = () => {
  return (
    <div className="Portfolio-holder-div">
      <div className="Link-explanation-div">
        <Typography>
          This is a digitalize book for recipes. Unlike recipe blogs, this
          project is intended to skip on recipe's stories and just show the
          recipe itself. I wanted a place to file all my recipes together with a
          real picture of when I made it. I also wanted to create whithin this
          project a place where
        </Typography>
        <a href="http://candelasrecipes.com">
          <Typography>http://CandelasRecipes.com</Typography>
        </a>
      </div>
      <div className="Portfolio-DisplayHtml-tech-div">
        <img
          src={TheRecipesImage}
          alt="recipes website"
          className="Portfolio-RecipesImage"
        ></img>
        <Typography>
          React (w/ hooks :) ), React Router, Firebase (Authentication,
          Realtime, Storage) and Material UI
        </Typography>
      </div>
    </div>
  );
};
export default Portfolio;
