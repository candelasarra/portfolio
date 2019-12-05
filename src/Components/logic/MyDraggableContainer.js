import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: props => ({
    transform: `translate(${props.x}px, ${props.y}px)`,
    cursor: 'pointer'
  })
});

const MyDraggableContainer = props => {
  const classes = useStyles(props);
  return <Container className={classes.root} {...props} />;
};
export default MyDraggableContainer;
