import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";
import Footer from "./footer";



const style= {
    card:{
        backgroundColor: 'rgb(199, 222, 235)',
        paddingLeft:"40px",
        paddingTop:"70px",
        paddingRight:'50px',
        marginLeft: '30%',
        marginTop: '80px',
        marginRight: '30%',
        },
};

export default class Login extends Component {
    render() {
        return (
            <Paper style={style.card}>
            <form>  
            <h3>Sign In</h3>                        
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
             <Button href="/Signup"  className="btn btn-primary btn-block"> Sign up </Button>
            </form> 
            <Footer/>   
            </Paper>
            );
    }
}