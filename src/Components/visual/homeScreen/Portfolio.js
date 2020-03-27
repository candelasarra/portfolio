import React, { useEffect, useState, useMemo, useRef } from 'react';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
import theDraggableImage from '../images/theDraggableImage.png';
import TravelPlannerImage from '../images/TravelPlannerImage.png';
import viPortfolio from '../images/viPortfolio.png';
import { ReactComponent as Blob1 } from '../images/blob-shape.svg';
import { ReactComponent as Blob2 } from '../images/BlobSixx.svg';
import { ReactComponent as Blob3 } from '../images/Blob12.svg';
import { ReactComponent as Blob4 } from '../images/viBlob.svg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Draggable from '../../logic/Draggable';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import Chip from '@material-ui/core/Chip';
import { useSpring, animated } from 'react-spring';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useWindowWidth } from '../Hooks/Hooks';
import { config } from 'react-transition-group';
import { Backdrop, CircularProgress, Fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  img: {
    display: 'block',
    opacity: '0.8',
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
    position: 'relative',
    marginTop: '70px',
    paddingBottom: '68px',
    borderBottom: '1px dashed #383838',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px'
    }
  },
  GridExplanation: {},
  GridExTi: {
    width: 'fit-content'
  },
  GridImageTechIcons: {
    flexDirection: 'column'
  },
  descriptionText: {
    color: 'white',
    background: '#10101047',
    padding: 5,
    fontWeight: '800',
    borderRadius: 15,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      color: '#9e8282',
      background: '#ffffff0d'
    }
  },
  textAndIcons: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    }
  }
}));

const Portfolio = () => {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const width = useWindowWidth();
  const [gridColumn, setGridColumn] = useState(false);
  const [blobSize, setBlobSize] = useState(500);
  const imageRef = useRef(null);
  useEffect(() => {
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (width < 1000) {
      setGridColumn(true);
    } else {
      setGridColumn(false);
    }
    if (width < 350) {
      setBlobSize(100);
    } else if (width < 600) {
      setBlobSize(350);
    } else if (width < 960) {
      setBlobSize(400);
    } else {
      setBlobSize(500);
    }
  }, [width, gridColumn]);

  const classes = useStyles();
  // const firstRenderAnimation = useSpring({
  //   opacity: loaded ? 1 : 0
  // });
  // const [props, set, stop] = useSpring(() => ({ opacity: 1, height: 0 }));

  // set({ opacity: loaded ? 1 : 0 });

  const blobStyle = {
    width: `${blobSize}px`,
    height: `${blobSize}px`,
    left: '40px'
  };

  const firstRenderAnimation = useSpring({
    from: { opacity: 0, height: 0 },
    to: loaded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 },
    delay: 1500,
    config: config.slow
  });

  const projects = useMemo(() => {
    return [
      {
        blob: (
          <Draggable
            classSelector="blob1"
            position="absolute"
            style={blobStyle}
            identifier="image"
          >
            <Blob1 id="blobb" />
          </Draggable>
        ),
        explanation:
          'Website where I can store all my recipes. A recipes search for other websites is also included where visitors can find other recipes. I created this website to learn React. Read, update, add and remove recipes when logged in.',
        image: TheRecipesImage,
        title: 'Recipes Website To Start With React (CRUD)',
        github: 'https://github.com/candelasarra/recipes',
        link: 'http://candelasrecipes.com',
        technology: ['React', 'Firebase', 'Material-UI'],
        color: '#f443369e'
      },
      {
        blob: (
          <Draggable
            classSelector="blob2"
            position="absolute"
            style={blobStyle}
            identifier="image"
          >
            <Blob2 id="blobb" />
          </Draggable>
        ),
        explanation:
          'InteractJS wrapper component for React.js You can wrap any image , text, or component. I am also using React-Spring for hovering effects. It can be adjusted with any of the InteractJS functionality to add drop off zones and anything else.',
        image: theDraggableImage,
        title: 'InteractJS Wrapping Component For ReactJS',
        github: 'https://github.com/candelasarra/Draggable',
        technology: ['React-Spring', 'React', 'InteractJS'],
        color: '#f443369e'
      },
      {
        blob: (
          <Draggable
            classSelector="blob3"
            position="absolute"
            style={blobStyle}
            identifier="image"
          >
            <Blob3 id="blobb" />
          </Draggable>
        ),
        explanation:
          'Travel agent dashboard created in one night as a challenge. Made using React and ApexCharts for the graph.',
        image: TravelPlannerImage,
        title: 'Travel Agent Dashboard',
        github: 'https://github.com/candelasarra/TravelPlanner',
        link: 'https://candelasarra.github.io/TravelPlanner/',
        technology: ['React', 'Material-UI', 'ApexCharts'],
        color: '#f443369e'
      },
      {
        blob: (
          <Draggable
            classSelector="blob4"
            position="absolute"
            style={blobStyle}
            identifier="image"
          >
            <Blob4 id="blobb" />
          </Draggable>
        ),
        explanation:
          'Website for a photographer which incorporates Contentful to make the website be very dynamic. This way, the photographer is able to change all the images and text without touching any of the code. The decision was made to build it with Gatsby for its amazing way of handling images with the gatsby-image component.',
        image: viPortfolio,
        title: 'Photography Portfolio in Gatsby',
        github: 'https://github.com/candelasarra/GatsbyPhotographyPortfolio',
        link: 'https://vi-muzzi-photography.netlify.com/',
        technology: ['Gatsby', 'Material-UI', 'Transition-Link', 'Contentful'],
        color: '#f443369e'
      }
    ];
  }, [blobStyle]);
  const projectsRender = projects.reverse().map((item, index) => {
    return (
      <animated.div
        style={{
          ...firstRenderAnimation,
          display: 'flex',
          flexDirection: 'column-reverse'
        }}
        key={item.title}
      >
        <Grid
          container
          className={classes.mainGrid}
          justify="center"
          alignItems="center"
          key={index}
          xs={12}
          direction={gridColumn ? 'column' : 'row'}
        >
          {width > 600 && item.blob}
          <Grid
            container
            item
            className={classes.GridExTi}
            direction="column"
            xs={gridColumn ? 10 : 3}
          >
            <Grid item className={classes.GridExplanation}>
              <Draggable
                classSelector={'explanation' + index}
                position="relative"
                identifier="text"
              >
                <Typography
                  variant="subtitle1"
                  className={classes.descriptionText}
                >
                  {item.explanation}
                </Typography>
              </Draggable>
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.GridImageTechIcons}
            direction="column"
            xs={gridColumn ? 12 : 9}
          >
            <Grid
              item
              style={{
                minWidth: '300px',
                width: '80%',
                alignSelf: 'center'
              }}
            >
              <Draggable
                classSelector={'image' + index}
                position="relative"
                identifier="image"
              >
                <div
                  style={{
                    backgroundColor: `${item.color}`,
                    width: '100%',
                    position: 'relative',
                    height: '100%'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.img}
                    draggable="false"
                    style={{ height: '100%', width: '100%' }}
                    ref={imageRef}
                  />
                </div>
              </Draggable>
            </Grid>
            <Grid
              item
              style={{
                position: 'relative',
                flexWrap: 'wrap',
                alignSelf: 'center',
                display: 'flex',
                flexDirection: 'row',
                maxHeight: 'fit-content',
                justifyContent: 'space-evenly'
              }}
            >
              {item.technology.map((thing, index) => (
                <Draggable
                  classSelector={'chip' + thing}
                  identifier="text"
                  key={thing + index}
                >
                  <Chip
                    variant="outlined"
                    color="primary"
                    label={thing}
                    style={{
                      color: 'pink',
                      fontSize: 'medium',
                      border: '1px solid #404040'
                    }}
                    size="medium"
                  />
                </Draggable>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.textAndIcons}>
          <Grid
            item
            style={{
              position: 'relative'
            }}
          >
            <Draggable
              position="relative"
              classSelector={'title' + index}
              style={{ marginTop: 30 }}
              identifier="text"
              s
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Typography
                  variant="h5"
                  style={{
                    color: '#c6c6c6',
                    textAlign: 'center',
                    marginRight: '10px'
                  }}
                >
                  {item.title}
                </Typography>
              </a>
            </Draggable>
          </Grid>
          <Grid
            item
            style={{
              position: 'relative',
              width: 'min-content',
              alignSelf: 'flex-end',
              display: 'flex',
              flexDirection: 'row',
              maxHeight: 'fit-content'
            }}
          >
            {item.link && (
              <IconButton
                href={item.link}
                target="_blank"
                style={{ color: 'pink' }}
              >
                <LaunchIcon />
              </IconButton>
            )}
            {item.github && (
              <IconButton
                href={item.github}
                target="_blank"
                style={{ color: 'pink' }}
              >
                <GitHubIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </animated.div>
    );
  });
  return loaded ? (
    <div>{projectsRender}</div>
  ) : (
    <Backdrop className={classes.backdrop} open={!loaded}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default Portfolio;
