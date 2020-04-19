import React, {Component} from 'react';
import './App.css';
import './headerComponents/NavBar.css'
import './pages/HomePage/HomePage'

import NavBar from './headerComponents/NavBar'
import Footer from './footerComponets/Footer';
import HomePage from './pages/HomePage/HomePage'

import TravelPage from './pages/Travel/travel'
import Iceland from './pages/Travel/iceland/iceland'  
import netherlands from './pages/Travel/netherlands/netherlands'

import Crypto from './pages/Crypto/blockchain'
import gettingstarted from './pages/Crypto/GettingStarted/gettingStarted'
import politics from './pages/Crypto/Politics/politics'
import techinalspecs from './pages/Crypto/TechinalSpecs/techinalSpecs'

import trading from './pages/Trading/trading'
import ai from './pages/AI/ai'
import articles from './pages/Articles/articles'

import {BrowserRouter, Route, Switch} from "react-router-dom"

import Global from "../styles/global"


function App (){
    return (

      <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={HomePage}/>
       
            <Route path="/travel" exact component={TravelPage}/>
              <Route path="/travel/iceland" exact component={Iceland}/>
              <Route path="/travel/netherlands" exact component={netherlands}/>
            
           {/* <Route path="/about" exact component={Footer}/> */}

            <Route path="/Crypto" exact component={Crypto}/>
              <Route path="/block-chain/gettingstarted" exact component={gettingstarted}/>
              <Route path="/block-chain/politics" exact component={politics}/>
              <Route path="/block-chain/techinalspecs" exact component={techinalspecs}/>

            <Route path="/trading" exact component={trading}/>
            <Route path="/AI" exact component={ai}/>

            <Route path="/articles" exact component={articles}/>
          </Switch>
      </BrowserRouter>
      <Footer/>
      </div>
    )
  };

export default App;
