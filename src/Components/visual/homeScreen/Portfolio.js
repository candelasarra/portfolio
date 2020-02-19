import React, { useEffect, useState } from 'react';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
import theDraggableImage from '../images/theDraggableImage.png';
import TravelPlannerImage from '../images/TravelPlannerImage.png';
import { ReactComponent as Blob1 } from '../images/blob-shape.svg';
import { ReactComponent as Blob2 } from '../images/BlobSixx.svg';
import { ReactComponent as Blob3 } from '../images/Blob12.svg';
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
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  const width = useWindowWidth();
  const [gridColumn, setGridColumn] = useState(false);
  const [blobSize, setBlobSize] = useState(500);
  console.log(width);
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
    } else if (width < 650) {
      setBlobSize(350);
    } else if (width < 950) {
      setBlobSize(450);
    } else {
      setBlobSize(600);
    }
  }, [width, gridColumn]);

  const classes = useStyles();
  const firstRenderAnimation = useSpring({
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -500
  });
  const projects = [
    {
      blob: (
        <Draggable
          classSelector="blob1"
          position="absolute"
          style={{
            width: `${blobSize}px`,
            height: `${blobSize}px`,
            top: '-40px',
            left: '40px'
          }}
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
          style={{
            width: `${blobSize}px`,
            height: `${blobSize}px`,
            top: '-40px',
            left: '40px'
          }}
          identifier="image"
        >
          <Blob2 id="blobb" />
        </Draggable>
      ),
      explanation:
        'InteractJS wrapper component for React.js You can wrap any image (including SVG), text, or component. I am also using React-Spring for hovering effects. It can be adjusted with any of the InteractJS functionality to add drop off zones and anything else.',
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
          style={{
            width: `${blobSize}px`,
            height: `${blobSize}px`,
            top: '-40px',
            left: '40px'
          }}
          identifier="image"
        >
          <Blob3 id="blobb" />
        </Draggable>
      ),
      explanation:
        "Travel agent application to organize clients' information. Project completed in one day.",
      image: TravelPlannerImage,
      title: 'Travel Agent App',
      github: 'https://github.com/candelasarra/TravelPlanner',
      link: 'https://candelasarra.github.io/TravelPlanner/',
      technology: ['React', 'Material UI', 'ApexCharts'],
      color: '#f443369e'
    }
  ];
  const projectsRender = projects.reverse().map((item, index) => {
    return (
      <animated.div
        style={{
          firstRenderAnimation,
          display: 'flex',
          flexDirection: 'column-reverse'
        }}
      >
        <Grid
          container
          className={classes.mainGrid}
          justify="center"
          alignItems="center"
          key={index}
          xs={12}
          direction={gridColumn ? 'column' : 'row'}
          style={{
            marginTop: '60px',
            paddingBottom: '68px',
            borderBottom: '1px dashed black'
          }}
        >
          {item.blob}
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
                  style={{ background: '#ffffff33' }}
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
            <Grid
              item
              style={{
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
                flexDirection: 'row',
                maxHeight: 'fit-content'
              }}
            >
              {item.technology.map(thing => (
                <Draggable classSelector={'chip' + thing} identifier="text">
                  <Chip
                    variant="outlined"
                    label={thing}
                    style={{ color: 'pink', fontSize: 'medium' }}
                    size="medium"
                  />
                </Draggable>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center'
          }}
          xs={12}
        >
          <Grid
            item
            style={{
              position: 'relative'
            }}
          >
            <Draggable
              position="relative"
              classSelector={'title' + index}
              style={{}}
              identifier="text"
              s
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Typography variant="h5" style={{ color: '#c6c6c6' }}>
                  {item.title}
                </Typography>
              </a>
            </Draggable>
          </Grid>
        </Grid>
      </animated.div>
    );
  });
  return <div>{projectsRender}</div>;
};
export default Portfolio;
