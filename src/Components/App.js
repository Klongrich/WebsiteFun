import React from 'react';
import './App.css';
import './headerComponents/NavBar.css'
import './pages/HomePage/HomePageV2'

import Footer from './footerComponets/Footer';

import TravelPage from './pages/Travel/travel'
import Iceland from './pages/Travel/iceland/iceland'  
import netherlands from './pages/Travel/netherlands/netherlands'


import articles from './pages/Articles/articles'
import about from './pages/About/about'

import stocks from './pages/Stocks/stocksHomePage'

import softwarePage from './pages/Software/software'

import Crypto from './pages/Crypto/crypto'

import MainPage from './pages/HomePage/main'

import signup from './pages/User/SignUp'
import login from './pages/User/LogIn'

import email_confrimed from './pages/User/email_confrim_forum'
import password_rest from './pages/User/reset_password'
import forgot_password from './pages/User/forgot_password'

import payment from './pages/User/payment'

import {BrowserRouter, Route, Switch} from "react-router-dom"

function App (){
    return (

      <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage}/>
       
            <Route path="/travel" exact component={TravelPage}/>
              <Route path="/travel/iceland" exact component={Iceland}/>
              <Route path="/travel/netherlands" exact component={netherlands}/>
            

            <Route path="/Crypto" exact component={Crypto}/>


            <Route path="/stocks" exact component={stocks}/>

            <Route path="/signup" exact component={signup}/>
            <Route path="/login" exact component={login}/>
            <Route path="/confrim" exact component={email_confrimed}/>

            <Route path="/ForgotPassword" exact component={forgot_password} />
            <Route path="/SetNewPassword" exact component={password_rest} />

            <Route path="/payment" exact component={payment} />



        
            <Route path="/software" exact component={softwarePage}/>

            <Route path="/about" exact component={about}/>
            <Route path="/articles" exact component={articles}/>

          </Switch>
      </BrowserRouter>
      </div>
    )
  };

export default App;
