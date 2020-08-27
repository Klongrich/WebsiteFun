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

import crypto from './pages/Crypto/crypto'

import MainPage from './pages/HomePage/main'

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
            

            <Route path="/Crypto" exact component={crypto}/>


            <Route path="/stocks" exact component={stocks}/>

            <Route path="/software" exact component={softwarePage}/>

            <Route path="/about" exact component={about}/>
            <Route path="/articles" exact component={articles}/>

          </Switch>
      </BrowserRouter>
      </div>
    )
  };

export default App;
