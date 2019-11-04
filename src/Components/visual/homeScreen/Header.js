import React from 'react';
import HSButtons from './HSButtons';
import '../CSSfiles/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Candela } from '../images/cand.svg';
import { ReactComponent as Sarrab } from '../images/sarrab.svg';
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
  return (
    <div className="Header-mainDiv">
      <div>
        <Candela />
        <Sarrab />
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
