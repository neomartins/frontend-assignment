import * as React from 'react';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerText: {
    color: theme.palette.text.primary
  },
}));

interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const {
    text,
  } = props;
  return (
  <h1 className={classes.headerText}>
    {text}
  </h1>
  )
};

export default Header;
