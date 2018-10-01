import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./styles.css";
import logo from './logo.svg';

const styles = theme => ({
  cssRoot: {
    margin: 1 * theme.spacing.unit,
    color: theme.palette.getContrastText('#F05A22'),
    backgroundColor: '#F05A22',
    '&:hover': {
      backgroundColor: '#BF360C',
    },
  }
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div className="Navigation">
      <div className="Navigation-Section">
        <img src={logo} className="Navigation-Section-Logo" alt="logo" />
        <Button variant="outlined" href="/nme-home/getting_started" className={classes.cssRoot}>Get Started</Button>
        <Button variant="outlined" href="/nme-home/showcase" className={classes.cssRoot}>Showcase</Button>
        <Button variant="outlined" href="/nme-home/demos" className={classes.cssRoot}>Demos</Button>
        <Button variant="outlined" href="/nme-home/documentation" className={classes.cssRoot}>Documentation</Button>
        <Button variant="outlined" href="https://github.com/haxenme/nme" className={classes.cssRoot}>Github</Button>
      </div>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);
