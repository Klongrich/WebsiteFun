import React , {useEffect} from 'react'
import styled from "styled-components";

import teslaPic from './pics/TeslaChart2.png'
import candleStick from './pics/CandelStick.png'

import macd from './pics/MACD.png'
import rsi from './pics/RSI.png'
import stoch from './pics/STOCH.png'
import coppock from './pics/CoppuckCurve.png'
import atr from './pics/ATR.png'

import stochForumal from "./pics/stochForumal.png"
import stochExample from "./pics/stochExample.png"

import level2 from './pics/level2.jpg'

import StocksMoblie from './stocks_moblie'


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
    padding-bottom: 10px;

    background-color: #AFD275;

    font-family: Helvetica;

    p {
    
        margin-left: 40px;
    }

  
`

export const HowToReadAChart= styled.div`
    
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
    padding-bottom: 10px;

    background-color: #C2CDA0;

    font-family: Helvetica;

`

export const BasicTerminology = styled.div`
    
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
    padding-bottom: 10px;

    background-color: #C2B9B0;

    font-family: Helvetica;
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
    padding-bottom: 10px;

    
    background-color: #C2CDA0;

    font-family: Helvetica;


`

export const Indicators = styled.div`
    
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
    padding-bottom: 10px;

    background-color: #C2B9B0;

    font-family: Helvetica;


`

export const LevelTwoData = styled.div`
    
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
    padding-bottom: 10px;

    background-color: #C2CDA0;

    font-family: Helvetica;


`

export const Conclusion = styled.div`
    
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
    padding-bottom: 10px;

    background-color: #C2B9B0;

    font-family: Helvetica;


`

export const TeslaChart = styled.div`

    background-image: url(${teslaPic});
    background-size: 100% 100%;

    height: 800px;


`

export default function StocksHomePage () {


    function setName() {
        localStorage.setItem('name','testing a new name');
    }

    function checkName() {
        let myName = localStorage.getItem('name');

        if (myName) {
            return (true);
        } else {
            return (false);
        }
    }

    function GetName() {
        let myName = localStorage.getItem('name');
        return (
            <h2> {myName} </h2>
        );
    }

    useEffect( () =>  {
        if (!checkName()){
            setName();
        }
    });

    if(window.innerWidth > 999) {
    return (
        <> 
        <Header>
            <h2>Nav Bar</h2>

            <ul>
                <li> Basic Information  </li>
                <li> Indicators </li>
                <li> Terminology </li>
            </ul>
        </Header>

        <TopPage>
           <h1>Stocks</h1> 

           <p>Basic information I find important to understand about the
              stock market if you chose to invest and / or day trade.
           </p>

           <h2>Rule One: </h2>
                <p> Stop looking for hot picks</p>
        </TopPage>

        <HowToReadAChart>
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
        </HowToReadAChart>

        <h2 Style="text-align: center;">Chart Example (Timeframe - 1 Day Candels) </h2>
        <TeslaChart>

        </TeslaChart>


        <BasicTerminology>
            <h1>Basic Terminology</h1>
            
            <ul Style="float: left">
                <li>MarketCap: </li> <p>Total amount the company is worth</p>
                <li>Volume: </li> <p> Total amount of shares being bought and sold</p>
                <li>Float: </li> <p>Amount of Shares that are aviable to be tradded publicly</p>
                <li>Short: </li> <p>Taking a negative position on a stock (betting it will go down)</p>
            </ul>

            <ul Style="display: inline-block; margin-left: 50px;">
                <li>Options: </li> <p>  Derivatives based on the value of underlying securities such as stocks. </p>
                <li>Equites: </li> <p> Shares of value issued by a companies. </p>
                <li>Forex: </li> <p> Marketplace where various national currencies are traded</p>
                <li>Comodittes: </li> <p>Materials or primary agricultural products such as copper or coffee.</p>
            </ul>
            </BasicTerminology>



        <BasicInformation>
            <h1>Basic Information</h1>

            <ul Style="float: left; padding-bottom: 10px;">
                <li>US Brokerages</li> 
                        <li Style="padding-bottom: 20px; padding-top: 20px;"> 1.) Interactive Brokers</li>
                        <li Style="padding-bottom: 20px;"> 2.) E-Trade</li>
                        <li Style="padding-bottom: 20px;"> 3.) Robin Hood</li> 
                        <li Style="padding-bottom: 20px;"> 5.) Charels Scwhab </li>
                        <li Style="padding-bottom: 20px;"> 6.) TD Ameritrade</li>
            </ul> 

                    <ul Style="display: inline-block; margin-left: 200px">
                        <li>How To Place A Trade</li> <br />
                        <li>Limit Order</li> <p>Order place to buy at or below / sell at or above a certain price (preferred)</p>
                        <li>Marekt Order</li> <p>Buys or Sells at current going market rate</p>
                        <li>Stop Lose</li> <p>Placed to sell a stock or cover a short at a certain price</p>
                    </ul>
       

        </BasicInformation> 


        <Indicators>
            <h1> Indicators </h1>
                <ul>

                <div Style="border: 3px solid grey; 
                            margin-left: -62px;
                            padding-left: 30px;
                            padding-top: 30px;
                            padding-bottom: 30px;
                            margin-bottom: 20px; 
                            width: 1250px;"
                            >
                    <li> STOCH: </li>
                        <img Style="margin-top: 30px;
                                    margin-bottom: 30px;
                                    margin-left: 50px;
                                    border: 2px black solid;" src={stoch} />
                    <li>Formula: </li>
                        <img  Style="margin-top: 30px;
                                    margin-bottom: 30px;
                                    margin-left: 50px;
                                    border: 2px black solid;" src={stochForumal} />
                    <li>Explained:</li>
                        <p>H = The "High" of the time period</p>
                        <p>L = The "Low" of the time period</p>
                        <p>C = The "Close" of the time period</p>
                    <li>Code Example: </li>
                        <img  Style="margin-top: 30px;
                                    margin-bottom: 30px;
                                    margin-left: 50px;
                                    border: 2px black solid;" src={stochExample} />
                    <li>Link to code: <a href="https://github.com/Klongrich/ChartingSoftware/blob/master/src/indicators/listtwo.java" > https://github.com/Klongrich/ChartingSoftware/blob/master/src/indicators/listtwo.java </a> </li>

                </div>

                    <li> MACD </li>
                        <img src={macd}  />
                    <li> ATR </li>
                        <img src={atr} />
                    <li> RSI </li>
                        <img src={rsi} />
                    <li> Coppock Curve </li>
                        <img src={coppock} />

                   <li> And Many More .....</li>
                </ul>
        </Indicators>

        <BasicInformation>
            <h1> Level 2 Data</h1>
            <div Style="margin-left: 350px; margin-bottom: 20px;">
                <p Style="font-weight: bold; padding-left: 120px">(Example of Level 2 data)</p>
                <img Style="border: 2px black solid; width: 500px;" src={level2} />
            </div>
            <ul Style="float: left; margin-left: 200px; margin-top:">
                <li>Bid: </li> <p>Orders That are placed to buy</p>
                <li>Ask: </li> <p>Order that are placed to sell </p>
            </ul>
            <ul Style="display: inline-block; margin-left: 200px;">
                <li>ID: </li> <p>Exchange your are order is being routed to</p>
                <li>Size: </li> <p>Amount of shares for sale or purchase at that price</p>
            </ul>

        </BasicInformation>

        <Conclusion>
            <h1>More To Come ....</h1>
        </Conclusion>
 
        </>
    )
    } else {

        return(
            <>
                <StocksMoblie />
            </>
        )
    }
}