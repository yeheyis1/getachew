import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Toolbar } from '@material-ui/core';

import { Image } from 'components/atoms';
import { isLightMode } from 'utils';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
  toolbar: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  logoContainer: {
    width: 100,
    height: 28,
    [theme.breakpoints.up('md')]: {
      width: 120,
      height: 32,
    },
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
}));

const Topbar = props => {
  const { onSidebarOpen, className, ...rest } = props;

  const [isLightModeTheme, setLightModeTheme] = useState(false);

  useEffect(() => {
    setLightModeTheme(isLightMode());
  }, []);

  const classes = useStyles();

  return (
    <Toolbar className={clsx(classes.toolbar, className)} {...rest}>
      <div className={classes.logoContainer}>
        <a href="/" title="thefront">
          <Image
            className={classes.logoImage}
            src={isLightModeTheme ? '/assets/images/logos/logo.svg' : '/assets/images/logos/logo-negative.svg'}
            alt="thefront"
            lazy={false}
          />
        </a>
      </div>
    </Toolbar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
