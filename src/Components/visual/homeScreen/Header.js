import React, { useEffect, useState } from 'react';
import HSButtons from './HSButtons';
import '../CSSfiles/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Candela } from '../images/cand.svg';
import { ReactComponent as Sarrab } from '../images/sarrab.svg';
import { useSpring, animated, config } from 'react-spring';
const useStyles = makeStyles({
  HeaderButtonRoot: {
    textTransform: 'none'
  },
  HeaderButtonLabel: {
    color: 'white'
  }
});

const Header = ({ onButtonClick }) => {
  const [props, set, stop] = useSpring(() => ({
    left: '400px',
    position: 'relative',
    config: { mass: 1, tension: 250, friction: 3 }
  }));
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  set({ left: loaded ? '0px' : '400px' });

  const classes = useStyles();
  return (
    <div className="Header-mainDiv">
      <div className="Header-LogosDiv">
        <Candela />
        <animated.div style={props}>
          <Sarrab />
        </animated.div>
      </div>
      <div className="Header-holdsButtonsDiv">
        <HSButtons
          label="Portfolio"
          value="Portfolio"
          onClick={onButtonClick}
          classes={{
            root: classes.HeaderButtonRoot,
            label: classes.HeaderButtonLabel
          }}
          size="small"
        />
        <HSButtons
          label="About Me"
          value="AboutMe"
          onClick={onButtonClick}
          classes={{
            root: classes.HeaderButtonRoot,
            label: classes.HeaderButtonLabel
          }}
          size="small"
        />
        <HSButtons
          label="Contact Me"
          value="ContactMe"
          onClick={onButtonClick}
          classes={{
            root: classes.HeaderButtonRoot,
            label: classes.HeaderButtonLabel
          }}
          size="small"
        />
      </div>
    </div>
  );
};

export default Header;
