import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: '0',
    backgroundColor: '#000000',
    color: '#b0c7ad',
    height: '60px'

  },
  fit: {
    paddingLeft: 10
  },
margin:{
  marginLeft:200
}

});

function Footer() {
  const classes = useStyles();
  let fullYear = new Date().getFullYear();

  return (
    <AppBar position="fixed" className={classes.appBar} >
      
      <Typography variant="overline" align="center" className="kela">
                
        {fullYear}-{fullYear + 5}, ©copy rights by colorz's 2020
        <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center"   >                    
                             <a className="col" href="https://www.facebook.com/colorz"><FacebookIcon/></a> &nbsp;
                             <a className="col" href="https://www.instagram.com/colorz/"><InstagramIcon/></a> &nbsp;
                             <a className="col" href="https://www.colorzprinting2020@gmail.com/"><MailOutlineIcon/></a>  
                       </div>
                     </div>
        <div className="margin" className="left">

        </div>
      </Typography>

    </AppBar>

  )
}

export default Footer