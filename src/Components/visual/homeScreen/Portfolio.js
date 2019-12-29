import React, { useState } from 'react';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
import { ReactComponent as Blob1 } from '../images/blob-shape.svg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Draggable from '../../logic/Draggable';
import { useBiggestZIndex } from '../Hooks/Hooks';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
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
  const { zIndex, newZIndex } = useBiggestZIndex(1);

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
      explanation: 'explanation',
      image: TheRecipesImage,
      title: 'Recipes Website',
      github: 'https://github.com/candelasarra/recipes'
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
              {item.title}
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
              alignSelf: 'flex-end'
            }}
          >
            {item.github && (
              <IconButton href={item.github} target="_blank">
                <GitHubIcon />
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
              alignSelf: 'center'
            }}
          >
            technology
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return <div>{projectsRender}</div>;
};
export default Portfolio;
