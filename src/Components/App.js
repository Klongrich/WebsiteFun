import React from "react";
import "./App.css";
import "./HomePage/HomePageV2";

import TravelPage from "./Travel/travel";
import articles from "./Articles/articles";
import about from "./About/about";
import stocks from "./Stocks/stocksHomePage";
import softwarePage from "./Software/software";
import Crypto from "./Crypto/crypto";
import MainPage from "./HomePage/main";
import signup from "./User/SignUp";
import login from "./User/LogIn";
import email_confrimed from "./User/email_confrim_forum";
import password_rest from "./User/reset_password";
import forgot_password from "./User/forgot_password";
import payment from "./User/payment";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/travel" exact component={TravelPage} />
          <Route path="/Crypto" exact component={Crypto} />
          <Route path="/stocks" exact component={stocks} />
          <Route path="/signup" exact component={signup} />
          <Route path="/login" exact component={login} />
          <Route path="/confrim" exact component={email_confrimed} />
          <Route path="/ForgotPassword" exact component={forgot_password} />
          <Route path="/SetNewPassword" exact component={password_rest} />
          <Route path="/payment" exact component={payment} />
          <Route path="/software" exact component={softwarePage} />
          <Route path="/about" exact component={about} />
          <Route path="/articles" exact component={articles} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
