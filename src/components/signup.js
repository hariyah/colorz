import { Paper,Button } from "@material-ui/core";
import React, { Component } from "react";
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
}

export default class SignUp extends Component {
    render() {
        return (

            <Paper style={style.card}> 
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Button type="submit" className="btn btn-primary btn-block">Sign Up</Button>
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">sign in?</a>
                </p>
            </form>
            <Footer/>
            </Paper>
        );
    }
}