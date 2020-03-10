import React from 'react';
import './trading.css'
import Fade from "react-reveal/Fade"

import GridLayout from "react-grid-layout"

class trading extends React.Component{

    render (){

        return(
            <div class="tradingConatiner">

                <div class="tradingheader">
                    <h2>Trading</h2>
                </div>

                <div class="pennystocks">
                    <Fade>
                        <h2>Penny Stocks</h2>
                    </Fade>
                    
                </div>

                <div class="cryptotradding">
                        <h2>Crypto Tradding</h2>
                </div>

                <div class="Long Term">
                        <h2>Long Term</h2>>
                </div>
            
            </div>
        )
    }

}

export default trading;