import React from 'react';
import './App.css';
import './headerComponents/NavBar.css'
import './pages/HomePage/HomePageV2'

import Footer from './footerComponets/Footer';

import TravelPage from './pages/Travel/travel'
import Iceland from './pages/Travel/iceland/iceland'  
import netherlands from './pages/Travel/netherlands/netherlands'

import Crypto from './pages/Crypto/crypto'
import Discription from './pages/Crypto/description/description'
import Bitcoin from './pages/Crypto/Bitcoin/Bitcoin'
import Etheruem from './pages/Crypto/Etheruem/Etheruem'
import Ripple from './pages/Crypto/Ripple/Ripple'
import BitcoinCash from './pages/Crypto/BitcoinCash/BitcoinCash'

import articles from './pages/Articles/articles'
import about from './pages/About/about'

import stocks from './pages/Stocks/stocksHomePage'

import softwarePage from './pages/Software/software'

import EthAccount from './pages/Crypto/User/EthAccount'

import web3Info from './pages/Crypto/web3Info'

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
            

            <Route path="/Crypto" exact component={Crypto}/>
              <Route path="/Crypto/Discription" exact component={Discription} />
              <Route path="/Crypto/Bitcoin" exact component={Bitcoin}/>
              <Route path="/Crypto/Etheruem" exact component={Etheruem}/>
              <Route path="/Crypto/Ripple" exact component={Ripple}/>
              <Route path="/Crypto/BitcoinCash" exact component={BitcoinCash}/>
              <Route path="/Crypto/User/EthAccount" exact component={EthAccount} />

            <Route path="/Crypto/web3Info" exact component={web3Info} />

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
