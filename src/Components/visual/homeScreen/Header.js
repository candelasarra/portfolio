import React, { useEffect, useState, useRef } from 'react';
import HSButtons from './HSButtons';
import '../CSSfiles/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Candela } from '../images/cand.svg';
import { ReactComponent as Sarrab } from '../images/sarrab.svg';
import HeaderButtonBlob from '../../logic/HeaderButtonBlob';
import { useSpring, animated, config, useChain } from 'react-spring';
const useStyles = makeStyles({
  HeaderButtonRoot: {
    textTransform: 'none'
  },
  HeaderButtonLabel: {
    color: 'white'
  }
});

const Header = ({ onButtonClick }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const Sref = useRef();
  const [Sprops, setS] = useSpring(() => ({
    from: {
      left: '400px',
      position: 'relative',
      opacity: 0
    },
    config: { mass: 1, tension: 250, friction: 3 },
    ref: Sref
  }));

  const Cref = useRef();
  const [Cprops, setC] = useSpring(() => ({
    from: {
      bottom: '900px',
      position: 'relative',
      opacity: 0
    },
    config: config.wobbly,
    ref: Cref
  }));
  const Href = useRef();
  const Hprops = useSpring({
    to: [{ opacity: 1, transform: 'scale(1)', top: '0px' }],
    from: {
      opacity: 0,
      transform: 'scale(0)',
      position: 'relative',
      top: '100px'
    },
    config: { mass: 1, tension: 250, friction: 3 },
    ref: Href
  });
  useChain(
    [
      { current: Cref.current },
      { current: Sref.current },
      { current: Href.current }
    ],
    [0, 1, 2]
  );

  setC({ bottom: '0px', opacity: 1 });
  setS({ left: '0px', opacity: 1 });
  return (
    <div className="Header-mainDiv">
      <div className="Header-LogosDiv">
        <animated.div style={Cprops}>
          <Candela />
        </animated.div>
        <animated.div style={Sprops}>
          <Sarrab />
        </animated.div>
      </div>
      <div className="Header-holdsButtonsDiv">
        <animated.div style={Hprops}>
          <HeaderButtonBlob />
        </animated.div>
      </div>
    </div>
  );
};

export default Header;
