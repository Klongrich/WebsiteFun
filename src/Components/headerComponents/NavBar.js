import React from 'react';
import "./NavBar.css";
import { slide as Menu } from 'react-burger-menu'
import Link from 'react-router-dom'
import TravelPage from '../pages/Travel/travel'

var createReactClass = require('create-react-class');
var NavBar = createReactClass ({
    
    showSettings: function (event) {
      event.preventDefault();
    },
    
    render: function () {
      return (
        <div class="NavBar">
        <Menu>
          <div class="work"><a id="trading" className="menu-item" href="/trading">Trading</a></div>
          <a id="about" className="menu-item" href="/block-chain">Block-Chain</a>
          <a id="AI" className="menu-item" href="/AI">A.I.</a>
          <a id="travel" className="menu-item" href="/travel">Traveling</a>
        </Menu>
        </div>
      );
    } 
});

export default NavBar;
