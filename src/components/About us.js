import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { Card, Grid, Paper } from "@material-ui/core";
import './contact.css';
import Hi from '/home/ukikcpc13/Desktop/colorz/src/images/finally.jpg';
import Footer from "./footer";


const style = {
  form:{
    paddingTop: '100px',
  marginRight:'10px',
  paddingLeft :'20px',

  },

  div1:{
  width:'100%',
marginLeft:'60px',
marginRight:'50px',
marginTop:'25px',
marginBottom:'100px',
paddingLeft:5,
paddingButtom:'50px',
background:' #d6a3a4',

    },
    div2:{
        width:'100%',
margin:'20px',
padding:"2%",
background:' #d6a3a4',
marginLeft:'30px',
        },

    card:{
      marginTop:'100px',
      marginLeft:'50px',
      marginRight:'50px',
      marginBottom:'200px',
      padding:'50px',
    }
    };


const AboutusPage = () => {
return (
  <Card style={style.card}>
    <Grid  container spacing={10}>
    <Grid xs={12} sm={5}>
        <div style={style.div1}>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
        <form style={style.form}>
        <p className="h5 text-center mb-4"><b>We Are Customized T-Shirt Printing Company</b><br/><br/>
        colorz happy to offer custom & unique tshirt printings in any number!
        </p>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
</Grid>
<Grid xs={12} sm={1}>
    </Grid>
<Grid xs={12} sm={5}>
  <div style={style.div2}>
  <img src={Hi} style={{ width:"100%"}}/>
  </div>
  </Grid>
  <Grid xs={12} sm={1}>
    </Grid>
  </Grid>
  <Footer/>
  </Card>
);
};

export default AboutusPage;