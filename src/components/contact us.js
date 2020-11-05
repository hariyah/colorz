import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { Card, Grid } from "@material-ui/core";
import './contact.css';
import Footer from "./footer";


const style = {
  form:{
    paddingTop: '100px',
  marginRight:'10px',
  paddingLeft :'20px',
  },
  div1:{
  width:'100%',
marginLeft:'50px',
marginRight:'50px',
marginTop:'25px',
marginBottom:'100px',
paddingLeft:50,
    },
    div2:{
      width:'100%',
      paddingTop:'100px',
      paddingLeft:"35%",
    marginLeft:'10px',
    marginRight:'50px',
    marginTop:'25px',
    marginBottom:'100px',
        },

    card:{
      marginTop:'100px',
      marginLeft:'50px',
      marginRight:'50px',
      marginBottom:'100px',
    }
    };


const FormPage = () => {
return (
  <Card style={style.card}>
    <Grid  container spacing={6}>
    <Grid xs={12} sm={6}>
        <div style={style.div1}>
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
        <form style={style.form}>
        <h5 className="h5 text-center mb-4"><b>Write to us</b></h5>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="pink">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1"/>
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
</div>
</Grid>
<Grid xs={12} sm={6}>
  <div style={style.div2}>
  <p className="h5 text-center mb-4"><b><h5>Address</h5>- No-65, Thondamanagar East,<br></br>Thondamanagar,<br></br>Kilinochchi.</b></p>
  <p className="h5 text-center mb-4"><b><h5>Mail</h5> - colorzprinting2020@gmail.com</b></p>
  <p className="h5 text-center mb-4"><b><h5>T.P</h5>- 0762045536</b></p>
  </div>
  </Grid>
  </Grid>
  <Footer/>
  </Card>
);
};

export default FormPage;