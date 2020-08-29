import React from 'react'
import styled from "styled-components";

import teslaPic from './TeslaChart2.png'
import candleStick from './CandelStick.png'

export const Header = styled.div`
 
    border: 3px black solid;
    background-color: black;
    color:white;
    padding-left: 10px;

    height: 50px;

    ul {
        list-style-type: none;
        margin-left: 60%;
        padding-bottom: 40px;
        margin-top: -40px;
    }

    li {
        float: left;
        padding-left: 50px;
    }

    li:hover {
        color: red;
    }
  
`

export const TopPage = styled.div`
    border: 1px black solid;

    padding-left: 40px;

    background-color: #AFD275;

    font-family: Helvetica;


    p {
    
        margin-left: 40px;
    }

  
`

export const BasicInformation = styled.div`
    
    border: 1px black solid;
  

    ul {
        list-style-type: none;
    }

    li {
        font-weight: bold;
    }

    p {
        margin-left: 30px;
    }


    padding-left: 20px;

    background-color: #C2CDA0;

    font-family: Helvetica;

`

export const Terminology = styled.div`
    
    border: 1px black solid;


    ul {
        list-style-type: none;
    }

    li {
        font-weight: bold;
    }

    p {
        margin-left: 30px;
    }

    padding-left: 20px;

    background-color: #C2B9B0;

    font-family: Helvetica;

    height: 400px;
`

export const TeslaChart = styled.div`

    background-image: url(${teslaPic});
    background-size: 100% 100%;

    height: 800px;


`

export default function stocksHomePage () {

    return (
        <> 
        <Header>
            <h2>Nav Bar</h2>

            <ul>
                <li> Stocks </li>
                <li> Basic Information </li>
                <li> Terminology </li>
            </ul>
        </Header>

        <TopPage>
           <h1>Stocks</h1> 

           <p>Basic information I find important to understand about the
              stock market if you chose to invest and / or day trade.
           </p>

            <h2> Rule One: </h2>
                <p> Quit looking for hot picks</p>

        </TopPage>

        <BasicInformation>
            <h1>How To Read A Chart</h1>

    <div Style="float: left; margin-left: 200px">
            <h2 Style="text-align: center">Candel Stick</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Candlestick_chart_scheme_03-en.svg/1024px-Candlestick_chart_scheme_03-en.svg.png"
                 height="250px" 
                 width="350px"
                 />
            </div>

        <div Style="margin-left: 100px; display: inline-block">
            <h2 Style="text-align: center">Bar Chart</h2>
            <img src="https://www.investopedia.com/thmb/6RaK4nNDuSPrG3laTgLMZQkYDIE=/1136x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/UpDownBar-2af5f78967fa448d871890653220d74c.JPG"
                 height="250px" 
                 width="350px"
                 />
        </div>

        <ul Style="float: left; margin-left: 120px;">
            <li>High: </li> <p>The Highest Price the stock hit in a given time frame</p>
            <li>Open: </li> <p>The Price at which the stock started at in the given time frame</p>
        </ul>

        <ul Style="display: inline-block">
            <li>Low: </li> <p>The Lowest Price the stock hit in a given time frame</p>
            <li>Close: </li> <p>The Last price of the stock within the given time frame</p>
        </ul>

        <ul>
            <li> <h2> Timeframes: </h2> </li>
                <p Style="line-height: 2;">Candle Stick measuerments vary via Time Frame. The most common ones are
                    1 min, 5 min, 15 min, 30 min, 1 hour, 1 Day, 1 week. Depending on the
                    selected time frame is what applys to the measurments above.
                </p>
        </ul>
        </BasicInformation>

        <h2 Style="text-align: center;">Chart Example (Timeframe - 1 Day Candels) </h2>
        <TeslaChart>

        </TeslaChart>


        <Terminology>
            <h1>Terminology</h1>
            
            <ul Style="float: left">
                <li>MarketCap: </li> <p>Total amount the company is worth</p>
                <li>Volume: </li> <p> Total amount of shares being bought and sold</p>
                <li>Float: </li> <p>Amount of Shares that are aviable to be tradded publicly</p>
                <li>EPS: </li> <p>Earings Per Share.</p>
            </ul>

            <ul Style="display: inline-block">
                <li>Options</li>
                <li>Equites</li>
                <li>Dirviates</li>
                <li>Forex</li>
                <li>Comodittes</li>
                <li>Futures</li>
            </ul>
        </Terminology>



        <BasicInformation>
            <h1>Basic Information</h1>

            <ul>
                <li>Brokerages</li>
                    <ul>
                        <li>Interactive Brokers</li>
                        <li>E-Trade</li>
                        <li>Robin Hood</li>
                        <li>Light Speed</li>
                    </ul>
                <li>How To Place A Trade</li>
                <li>Indicators</li>
                <li>Overlays</li>
                <li>Level 2 data</li>
            </ul>
        </BasicInformation>

 
        </>
    )
}