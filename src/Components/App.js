import React from 'react';
import './App.css';
import './headerComponents/NavBar.css'
import './pages/HomePage/HomePage'

import NavBar from './headerComponents/NavBar'
import Footer from './footerComponets/Footer';
import HomePage from './pages/HomePage/HomePage'

import TravelPage from './pages/Travel/travel'
import Iceland from './pages/Travel/iceland/iceland'  
import netherlands from './pages/Travel/netherlands/netherlands'

import blockchain from './pages/Block-Chain/blockchain'
import gettingstarted from './pages/Block-Chain/GettingStarted/gettingStarted'
import politics from './pages/Block-Chain/Politics/politics'
import techinalspecs from './pages/Block-Chain/TechinalSpecs/techinalSpecs'

import trading from './pages/Trading/trading'
import ai from './pages/AI/ai'

import {BrowserRouter, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Switch>
            <Route path="/" exact component={HomePage}/>
       
            <Route path="/travel" exact component={TravelPage}/>
              <Route path="/travel/iceland" exact component={Iceland}/>
              <Route path="/travel/netherlands" exact component={netherlands}/>
            
            <Route path="/about" exact component={Footer}/>

            <Route path="/block-chain" exact component={blockchain}/>
              <Route path="/block-chain/gettingstarted" exact component={gettingstarted}/>
              <Route path="/block-chain/politics" exact component={politics}/>
              <Route path="/block-chain/techinalspecs" exact component={techinalspecs}/>

            <Route path="/trading" exact component={trading}/>
            <Route path="/AI" exact component={ai}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
