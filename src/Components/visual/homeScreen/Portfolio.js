import React from 'react';
import '../CSSfiles/Portfolio.css';
import TheRecipesImage from '../images/TheRecipesImage.png';
import { ReactComponent as Blob1 } from '../images/blob-shape.svg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Draggable from '../../logic/Draggable';
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
  }
}));

const Portfolio = () => {
  const classes = useStyles();

  const projects = [
    {
      blob: <Blob1 />,
      explanation: 'explanation',
      image: TheRecipesImage,
      title: 'Recipes Website'
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
        <Draggable>{item.blob}</Draggable>
        <Grid
          container
          item
          className={classes.GridExTi}
          direction="column"
          xs={4}
        >
          <Grid item>{item.title}</Grid>

          <Grid item xs className={classes.GridExplanation}>
            {item.explanation}
          </Grid>
        </Grid>
        <Grid container item xs={8}>
          <Grid style={{ position: 'relative' }}>icons</Grid>
          <Grid item style={{ width: '80%' }}>
            <Draggable>
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
          <Grid item style={{ position: 'relative' }}>
            technology
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return <div>{projectsRender}</div>;
};
export default Portfolio;
