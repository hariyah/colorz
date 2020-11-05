import React from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Home from './home';
import Cart from './Cart';
import SignUp from './signup';
import Login from './login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from '/home/ukikcpc13/Desktop/colorz/src/logo.png';
import FormPage from './contact us';
import AboutusPage from './About us';
import SwipeableTextMobileStepper from './welcome';
import Checkout from './Checkout';
import Footer from './footer';


const style ={
    navi: {
backgroundColor: '#c2ddd9',
color:"black",
    },

    logo: {
        height:60,
        paddingTop:10,
    }
};

 const Navbar = ()=>{
    return(
        <BrowserRouter>
            <nav className="nav-wrapper" style={style.navi}>               
                <ul className="left">
                <li> <Link to="/welcome"> <img src={logo} alt="Logo" style={style.logo} /></Link> </li>
                <li> <Link to="/">Home</Link> </li> 
                <li> <Link to="/contactus">Contact us</Link></li> 
                <li> <Link to="/aboutus">About us</Link></li>
                </ul>
                    <ul className="right">
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><Link to="Login"><AccountCircleIcon/></Link></li>
                    </ul>
            </nav>
  
   
<Switch>
<Route exact path="/welcome" component={SwipeableTextMobileStepper}/>
<Route exact path="/" component={SwipeableTextMobileStepper}/>
<Route path="/cart" component={Cart}/>
<Route path="/signup" component={SignUp}/>
<Route path='/login' component={Login} />
<Route path='/shop' component={Home}/>
<Route path='/contactus' component={FormPage}/>
<Route path='/aboutus' component={AboutusPage}/>
<Route path="/checkout" component={Checkout}/>
<Route path='/footer' component={Footer}/>

</Switch>
</BrowserRouter>

    )
}
export default Navbar;