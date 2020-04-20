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

import Crypto from './pages/Crypto/crypto'
import Bitcoin from './pages/Crypto/Bitcoin/Bitcoin'
import Etheruem from './pages/Crypto/Etheruem/Etheruem'

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
            <Route path="/Crypto/Bitcoin" exact component={Bitcoin}/>
            <Route path="/Crypto/Etheruem" exact component={Etheruem}/>

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
