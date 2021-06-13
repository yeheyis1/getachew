import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Button, Grid, TextField, Typography } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const IdentifyCustomer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Section className={classes.section}>
      <div className={classes.formContainer}>
      
      <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Phone Number
            </Typography>
            <TextField
              placeholder="Your Phone Number"
              variant="outlined"
              size="medium"
              name="Phone"
              type="text"
              
            />
          </Grid>      
          <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Verify
            </Button>   

              
      <div className={classes.heroImageContainer}></div>
      </div>
    </Section>
    </div>
  );
};

export default IdentifyCustomer;

