import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import hi1 from "/home/ukikcpc13/Desktop/colorz/src/images/logo.png";
import hi from "/home/ukikcpc13/Desktop/colorz/src/images/space.jpg";
import hi2 from "/home/ukikcpc13/Desktop/colorz/src/images/live in love.jpg";
import hi3 from "/home/ukikcpc13/Desktop/colorz/src/images/finally.jpg";
import hi4 from "/home/ukikcpc13/Desktop/colorz/src/images/choose.jpg";
import hi5 from "/home/ukikcpc13/Desktop/colorz/src/images/space.jpg";
import { Grid } from '@material-ui/core';
import Footer from './footer';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 't-shirt',
    imgPath:hi,
  },
  {
    label: 't-shirt',
    imgPath:hi1,
  },
  {
    label: 't-shirt',
    imgPath:hi2,
  },
  {
    label: 't-shirt',
    imgPath:hi3,
  },
  {
    label: 't-shirt',
    imgPath:hi4,
  },
  // {
  //   label: 't-shirt',
  //   imgPath:hi5,
  // },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display:"block",
    maxWidth: "100%",
    flexGrow: 2,
    marginTop:0,
   marginRight:'25%',
  //  marginLeft: "20%"

  },

  div2:{
    width:'100%',
    margin:'2%',
    padding:"20%",
    background:' #d6a3a4',
    marginLeft:'30px',
      },

      card:{
        marginTop:'10px',
        marginLeft:10,
        marginRight:'10px',
        marginBottom:'10px',
      },

  header: {
    display:"internal",
    overflow: 'hidden',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    // height: 255,
    // display: 'block',
    // maxWidth: "100%",
    // overflow: 'hidden',
    // width: '100%',
    // height:'90%',
    display:'block',
    overflow: 'hidden',
    width : '100%',
       },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
     <div className={classes.card}>
          <Grid container spacing={1}>
          <Grid xs={12} sm={1}>
    </Grid>
            <Grid xs={12} sm={6}>
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }  
    /> 
        </div>
    </Grid>
    <Grid xs={12} sm={4}>
  <div className={classes.div2}>
  <h1>WELCOME <br/> TO <br/>COLORZ</h1>
  </div> 
  </Grid>
  <Grid xs={12} sm={1}>
    </Grid>
  </Grid>
  <Footer/>
  </div>
  );}

export default SwipeableTextMobileStepper;
