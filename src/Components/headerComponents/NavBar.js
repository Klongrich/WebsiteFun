import React from 'react';
import "./NavBar.css";
import { slide as Menu } from 'react-burger-menu'
import Link from 'react-router-dom'
import TravelPage from '../pages/Travel/travel'


class NavBar extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    render () {
      return (
        <div class="NavBar">
        <Menu>
          <div class="work"><a id="home" className="menu-item" href="/">Home</a></div>
          <a id="about" className="menu-item" href="/block-chain">Block-Chain</a>
          <a id="travel" className="menu-item" href="/travel">Traveling</a>
          <a id="contact" className="menu-item" href="/trading"> Trading</a>
          <a id="AI" className="menu-item" href="/AI">A.I.</a>
          <a id="Company beta" className="menu-item" href="/test">Company Beta</a> 
        </Menu>
        </div>
      );
    }
  }

export default NavBar;
