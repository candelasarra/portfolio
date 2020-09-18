import React, { useEffect, useState, useMemo } from 'react';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
import theDraggableImage from '../images/theDraggableImage.png';
import TravelPlannerImage from '../images/TravelPlannerImage.png';
import viPortfolio from '../images/viPortfolio.png';
import skeletonimage from '../images/skeletonimage.png';
import cherryChronicles from '../images/cherryChronicles.png';
import { ReactComponent as Blob1 } from '../images/blob-shape.svg';
import { ReactComponent as Blob2 } from '../images/BlobSixx.svg';
import { ReactComponent as Blob3 } from '../images/Blob12.svg';
import { ReactComponent as Blob4 } from '../images/viBlob.svg';
import { ReactComponent as Blob5 } from '../images/blobWhite.svg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Draggable from '../../logic/Draggable';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import Chip from '@material-ui/core/Chip';
import MyImage from './image';
import {
  useSpring,
  animated,
  useTransition,
  useChain,
  useTrail
} from 'react-spring';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useWindowWidth } from '../Hooks/Hooks';
import { config } from 'react-transition-group';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    //   backgroundColor: '#27212140', margin: 20
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
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

const Portfolio = ({ firstLoad }) => {
  const [loaded, setLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState(false);
  const width = useWindowWidth();
  const [gridColumn, setGridColumn] = useState(false);
  const [blobSize, setBlobSize] = useState(500);
  const [loadedItems, setLoadedItems] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    setLoaded(true);
    return () => setLoaded(false);
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
  //const [props, set, stop] = useSpring(() => ({ opacity: 1, delay: 5000 }));

  //set({ opacity: loadedImages ? 1 : 0 });

  const blobStyle = {
    width: `${blobSize}px`,
    height: `${blobSize}px`,
    left: '40px'
  };
  // console.log(firstLoad.current);

  // const firstRenderAnimation = useSpring({
  //   from: { opacity: 0, height: 0 },
  //   to: loadedImages ? { opacity: 1 } : { opacity: 0 },
  //   delay: firstLoad.current === 1 ? 5000 : 0,
  //   config: config.slow
  // });

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
      },
      {
        blob: (
          <Draggable
            classSelector="blob5"
            position="absolute"
            style={blobStyle}
            identifier="image"
          >
            <Blob5 id="blobb" />
          </Draggable>
        ),
        explanation:
          'Second attempt at the first project I ever made. This is a blog to keep my recipes. In comparison to my first attempt, this one has a better design, it is localized (Spanish and English), I also implemented a content manager to upload the recipes, it has a toggle for for dark/light mode, transition between pages and more.',
        image: cherryChronicles,
        title: 'Cherry Chronicles, Plant Based Recipes',
        github: 'https://github.com/candelasarra/recipesBlog',
        link: 'http://candelasrecipes.com',
        technology: ['Gatsby', 'Contentful', 'Material-UI', 'Netlify', 'CSS'],
        color: '#f443369e'
      }
    ].reverse();
  }, [blobStyle]);

  useEffect(() => {
    const imagesArray = projects.map((item, index) => {
      return item.image;
    });
    if (images.length === 0) {
      setImages(imagesArray);
    }
  }, [images.length, projects]);

  const trail = useTrail(projects.length, {
    config: config.default,
    opacity: loaded ? 1 : 0,
    x: loaded ? 0 : 20,
    height: loaded ? 'auto' : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: firstLoad.current === 1 ? 2000 : 500
  });
  // const transRef = useRef();
  // const transitions = useTransition(projects, item => item.title, {
  //   ref: transRef.current,
  //   unique: true,
  //   trail: 400 / projects.length,
  //   from: { opacity: 0.5, transform: 'scale(0)' },
  //   enter: { opacity: 1, transform: 'scale(1)' },
  //   leave: { opacity: 0.5, transform: 'scale(0)' }
  // });
  // console.log(transitions);
  // useChain(
  //   [{ current: springRef.current }, { current: transRef.current }],
  //   [0, 1]
  // );
  const [links, setLinks] = useState({});

  function onLoad(feedItem) {
    console.log('in onload');
    if (!links.feedItem) {
      setLinks({ ...links, [feedItem]: feedItem });
    }
    setLoadedItems(loadedItems => [...loadedItems, feedItem]);
  }
  useEffect(() => {
    console.log('in use effect that checks obj keys');
    let objKeys = Object.keys(links);
    console.log(objKeys);
    if (objKeys.length === projects.length) {
      setLoadedImages(true);
      console.log('setting on loaded to true');
    }
  }, [links, projects.length]);
  console.log(loadedImages);
  console.log(links);
  console.log(loadedItems);
  return (
    // <animated.div style={firstRenderAnimation}>
    <div>
      <animated.div>
        {loadedImages
          ? trail.map(({ x, height, ...rest }, key) => {
              return (
                <animated.div
                  style={{
                    ...rest,
                    display: 'flex',
                    flexDirection: 'column-reverse'
                  }}
                  key={key}
                >
                  <Grid
                    container
                    className={classes.mainGrid}
                    justify="center"
                    alignItems="center"
                    key={key}
                    xs={12}
                    direction={gridColumn ? 'column' : 'row'}
                  >
                    {width > 600 && projects[key].blob}
                    <Grid
                      container
                      item
                      className={classes.GridExTi}
                      direction="column"
                      xs={gridColumn ? 10 : 3}
                    >
                      <Grid item className={classes.GridExplanation}>
                        <Draggable
                          classSelector={'explanation' + key}
                          position="relative"
                          identifier="text"
                        >
                          <Typography
                            variant="subtitle1"
                            className={classes.descriptionText}
                          >
                            {projects[key].explanation}
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
                          width: '80%',
                          alignSelf: 'center'
                        }}
                      >
                        <Draggable
                          classSelector={'image' + key}
                          position="relative"
                          identifier="image"
                        >
                          {loadedItems.length >= projects.length ? (
                            <MyImage
                              placeholderSrc={skeletonimage}
                              image={{
                                src: projects[key].image,
                                alt: key,
                                style: {
                                  height: '100%',
                                  width: '100%',
                                  opacity: '0.8'
                                }
                              }}
                            />
                          ) : (
                            <img src={skeletonimage} alt="placeholder" />
                          )}
                        </Draggable>
                      </Grid>
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
                      {projects[key].technology.map((thing, index) => (
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
                  <Grid container xs={12} className={classes.textAndIcons}>
                    <Grid
                      item
                      style={{
                        position: 'relative'
                      }}
                    >
                      <Draggable
                        position="relative"
                        classSelector={'title' + key}
                        style={{ marginTop: 30 }}
                        identifier="text"
                        s
                      >
                        <a
                          href={projects[key].link}
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
                            {projects[key].title}
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
                      {projects[key].link && (
                        <IconButton
                          href={projects[key].link}
                          target="_blank"
                          style={{ color: 'pink' }}
                        >
                          <LaunchIcon />
                        </IconButton>
                      )}
                      {projects[key].github && (
                        <IconButton
                          href={projects[key].github}
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
            })
          : loaded && (
              <div className={classes.root}>
                {/* <Skeleton
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                /> */}
                <Skeleton
                  variant="circle"
                  width={100}
                  height={100}
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  variant="circle"
                  animation={false}
                  width={300}
                  height={300}
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  variant="circle"
                  width={100}
                  height={100}
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  variant="circle"
                  animation={false}
                  width={300}
                  height={300}
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
                <Skeleton
                  variant="circle"
                  width={100}
                  height={100}
                  style={{ backgroundColor: '#27212140', margin: 20 }}
                />
              </div>
            )}
        {/* </animated.div> */}
      </animated.div>
      {images &&
        images.map((item, i) => (
          <img
            src={item}
            onLoad={() => onLoad(item)}
            key={i}
            alt={i}
            style={{ height: 0, width: 0 }}
          />
        ))}
    </div>
  );
};
export default Portfolio;
