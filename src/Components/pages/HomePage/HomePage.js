import React from 'react';
import './homepage.css';
import style from './homepage.css'
import cogoToast from 'cogo-toast'

import Fade from "react-reveal/Fade"

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
             hovering : false
        };
    }
    
    render () {
        return(
            <div class="master">
                <div class="wordcontainer">
                    <div class="header">
                        <h2>Kyle Longrich</h2>  
                    </div>

                    <div class="middle">
                        <p>
                            Welcome to My website! here I post My
                            thoughts on subjects that interest me. 
                            Mostly consist of Trading, Block-Chain, A.I.
                            and Traveling for now. Enjoy! and feel free to
                            message me. 
                        </p>
                        <p1>
                            Click the Menu button and navagate around!
                        </p1>
                    </div>
                </div>   
            </div>
        );
    }
  }

export default HomePage;