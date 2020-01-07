import React, { useState } from 'react';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
import { ReactComponent as Blob1 } from '../images/blob-shape.svg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Draggable from '../../logic/Draggable';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles(theme => ({
  img: {
    display: 'block',
    opacity: '0.6',
    maxWidth: '100%'
  },
  GridImage: {
    width: '60%',
    background: '#ff7067',
    height: 'min-content',
    position: 'relative',
    padding: '0px'
  },
  mainGrid: {
    margin: '0px',
    position: 'relative'
  },
  GridExplanation: {},
  GridExTi: {
    width: 'fit-content'
  },
  GridImageTechIcons: {
    flexDirection: 'column'
  }
}));

const Portfolio = () => {
  const classes = useStyles();

  const projects = [
    {
      blob: (
        <Draggable
          classSelector="blob"
          position="absolute"
          style={{ width: '500px', height: '500px', top: '-40px' }}
          identifier="image"
        >
          <Blob1 id="blobb" />
        </Draggable>
      ),
      explanation:
        'A cookbook website where I can store all my recipes, each with its own image. A recipes search for other websites is also included where visitors can find other recipes. I created this website to learn React, it has the ability to read, update, add and remove recipes if you are logged in.',
      image: TheRecipesImage,
      title: 'Recipes Website To Start With React (CRUD)',
      github: 'https://github.com/candelasarra/recipes',
      link: 'http://candelasrecipes.com',
      technology: ['React', 'Firebase', 'Material-UI']
    }
  ];
  const projectsRender = projects.map((item, index) => {
    return (
      <Grid
        container
        className={classes.mainGrid}
        justify="space-around"
        key={index}
      >
        {item.blob}
        <Grid
          container
          item
          className={classes.GridExTi}
          direction="column"
          xs={4}
        >
          <Grid item>
            <Draggable
              position="relative"
              classSelector={'title' + index}
              style={{}}
              identifier="text"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {item.title}
              </a>
            </Draggable>
          </Grid>

          <Grid item xs className={classes.GridExplanation}>
            {item.explanation}
          </Grid>
        </Grid>
        <Grid container item xs={8} className={classes.GridImageTechIcons}>
          <Grid
            style={{
              position: 'relative',
              width: 'min-content',
              alignSelf: 'flex-end',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            {item.link && (
              <IconButton href={item.link} target="_blank">
                <LaunchIcon style={{ color: 'pink' }} />
              </IconButton>
            )}
            {item.github && (
              <IconButton href={item.github} target="_blank">
                <GitHubIcon style={{ color: 'pink' }} />
              </IconButton>
            )}
          </Grid>
          <Grid item style={{ width: '80%', alignSelf: 'center' }}>
            <Draggable
              classSelector={'image' + index}
              position="relative"
              identifier="image"
            >
              <div
                style={{
                  backgroundColor: '#ff7067',
                  width: '100%',
                  position: 'relative',
                  height: 'min-content'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={classes.img}
                  draggable="false"
                />
              </div>
            </Draggable>
          </Grid>
          <Grid
            item
            style={{
              position: 'relative',
              width: 'min-content',
              alignSelf: 'center',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            {item.technology.map(thing => (
              <Draggable
                classSelector={'chip' + thing}
                identifier="text"
                position="relative"
              >
                <Chip
                  variant="outlined"
                  label={thing}
                  style={{ color: '#484848' }}
                />
              </Draggable>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return <div>{projectsRender}</div>;
};
export default Portfolio;
