import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, List, ListItem, Grid, Typography } from '@material-ui/core';
import { SectionAlternate, CardBase } from 'components/organisms';
import { Hero, General, Security, Notifications, Billing, ListMembers, SearchFile } from './components';
import { getQueryParams } from 'utils';
import ListFiles from './components/ListFiles';
import ListFiles2 from './components/ListFiles2';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  section: {
    '& .section-alternate__content': {
      paddingTop: 0,
      marginTop: theme.spacing(-5),
      position: 'relative',
      zIndex: 1,
    },
    '& .card-base__content': {
      padding: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
      },
    },
  },
  menu: {
    height: 'auto',
  },
  list: {
    display: 'inline-flex',
    overflow: 'auto',
    flexWrap: 'nowrap',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: theme.spacing(-3),
      marginLeft: theme.spacing(-3),
    },
  },
  listItem: {
    marginRight: theme.spacing(2),
    flex: 0,
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      borderLeft: '2px solid transparent',
    },
  },
  listItemActive: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `2px solid ${theme.palette.primary.dark}`,
    },
    '& .menu__item': {
      color: theme.palette.text.primary,
    },
  },
}));
const subPages = [
  {
    id: 'general',
    href: '/account/?pid=general',
    title: 'General',
  },
  {
    id: 'security',
    href: '/account/?pid=security',
    title: 'Security',
  },
  {
    id: 'notifications',
    href: '/account/?pid=notifications',
    title: 'Notifications',
  },
  {
    id: 'ListFiles',
    href: '/account/?pid=ListFiles',
    title: 'List Files'
  },
  {
    id: 'ListMembers',
    href: '/account/?pid=ListMembers',
    title: 'List Members',
  },
  {
    id: 'billing',
    href: '/account/?pid=billing',
    title: 'Billing Information',
  },
  {
    id: 'SearchFile',
    href: '/account/?pid=SearchFile',
    title: 'Search File',
  },
];

const TabPanel = props => {
  const { children, value, index, ...other } = props;
  return (
    <Box component="div" hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  );
};
const Account = (props = {}) => {
  const classes = useStyles();
  let pageId = getQueryParams().pid || 'Search';
  return (
    <div className={classes.root}>
      <Hero />
      <SectionAlternate className={classes.section}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <CardBase withShadow align="left" className={classes.menu}>
              <List disablePadding className={classes.list}>
                {subPages.map((item, index) => (
                  <ListItem
                    key={index}
                    component={'a'}
                    href={item.href}
                    className={clsx(
                      classes.listItem,
                      pageId === item.id ? classes.listItemActive : {},
                    )}
                    disableGutters
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      color="textSecondary"
                      className="menu__item"
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardBase>
          </Grid>
          <Grid item xs={12} md={9}>
            <CardBase withShadow align="left">
              <TabPanel value={pageId} index={'general'}>
                <General />
              </TabPanel>
              <TabPanel value={pageId} index={'security'}>
                <Security />
              </TabPanel>
              <TabPanel value={pageId} index={'notifications'}>
                <Notifications />
              </TabPanel>
              <TabPanel value={pageId} index={'billing'}>
                <Billing />
                </TabPanel>
              <TabPanel value={pageId} index={'SearchFile'}>
                <SearchFile />
              </TabPanel>
              <TabPanel value={pageId} index={'ListFiles'}>
                <ListFiles />
              </TabPanel>
              <TabPanel value={pageId} index={'ListMembers'}>
                <ListMembers/>
              </TabPanel>
              </CardBase>
          </Grid>
        </Grid>
      </SectionAlternate>
    </div>
  );
};
export default Account;






