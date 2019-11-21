import React, { useRef } from 'react';
import HSButtons from './HSButtons';
import '../CSSfiles/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Candela } from '../images/cand.svg';
import { ReactComponent as Sarrab } from '../images/sarrab.svg';
import HeaderButtonBlob from '../../logic/HeaderButtonBlob';
import {
  useSpring,
  animated,
  config,
  useChain,
  useTransition,
  useTrail
} from 'react-spring';
import { useInterval } from '../Hooks/Hooks';
import { ReactComponent as BlobEleven } from '../images/BlobEleven.svg';
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
  const {
    blob,
    stopInterval,
    startInterval,
    blobInterval,
    blobState,
    setBlobState,
    ref
  } = useInterval(0);

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
  const [Hprops, setH, stopH] = useSpring(() => ({
    from: {
      transform: 'scale(0)',
      position: 'relative',
      bottom: '100px'
    },
    config: { mass: 1, tension: 250, friction: 3 },
    ref: Href
  }));

  useChain([
    { current: Cref.current },
    { current: Sref.current },
    { current: Href.current }
  ]);
  if (ref.current === true) {
    setC({ bottom: '0px', opacity: 1 });
    setS({ left: '0px', opacity: 1 });
    setH({ transform: 'scale(1)', bottom: '0px' });
  }

  const blobElevenTransition = useTransition(blobState, null, {
    from: {
      opacity: 0,
      width: '10px',
      position: 'relative',
      transform: 'scale(0)'
    },
    enter: {
      position: 'relative',
      width: '30px',
      transform: 'scale(1)',
      opacity: 1,
      left: '-20px'
    },
    leave: {
      opacity: 0,
      width: '10px',
      position: 'relative',
      transform: 'scale(0)',
      left: '20px'
    },
    config: config.slow
  });
  const onBlobClick = () => {
    if (blobState === false) {
      stopH();
      setBlobState(true);
    } else {
      setBlobState(false);
    }
  };
  const pageButtons = [
    <HSButtons
      label="Portfolio"
      value="Portfolio"
      onClick={onButtonClick}
      classes={{
        root: classes.HeaderButtonRoot,
        label: classes.HeaderButtonLabel
      }}
      size="small"
    />,
    <HSButtons
      label="About Me"
      value="AboutMe"
      onClick={onButtonClick}
      classes={{
        root: classes.HeaderButtonRoot,
        label: classes.HeaderButtonLabel
      }}
      size="small"
    />,
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
  ];
  const trail = useTrail(pageButtons.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: blobState ? 1 : 0,
    width: blobState ? 100 : 0,
    x: blobState ? 0 : 50,
    from: {
      opacity: 0,
      x: 20,
      width: 0
    }
  });
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
      <div className="Header-holdsButtonsDiv" type="button">
        {blobElevenTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div style={props} key={key} onClick={onBlobClick}>
                <BlobEleven />
              </animated.div>
            )
        )}

        <animated.div style={Hprops} onClick={onBlobClick}>
          {blobState === false ? (
            <HeaderButtonBlob
              startInterval={startInterval}
              stopInterval={stopInterval}
              blob={blob}
              blobInterval={blobInterval.current}
              blobState={blobState}
            />
          ) : null}
        </animated.div>
        <div style={{ display: 'flex' }}>
          {trail.map(({ x, width, ...rest }, index) => (
            <animated.div
              key={index}
              style={{
                ...rest,
                transform: x.interpolate(x => `transform3d(${x}px, 0, 0)`)
              }}
            >
              <animated.div style={{ width }}>
                {blobState ? pageButtons[index] : null}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
