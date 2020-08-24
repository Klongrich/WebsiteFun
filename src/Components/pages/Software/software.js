import React from 'react'

import {Container, Header, ProjectInfo, ProjectHeaders, SourceLink} from './styles/softwareStyles'

import JavaStockImage from "./pics/stockSoftWare.png"
import MinishellImage from "./pics/minishell.png"
import TradingBotImage from "./pics/tradingBot.png"

export const projectData = [
    {
        id: 2,
        name: "Name: MiniShell",
        discripton: "Project that was completed as part of the 42 curriculum. A recreation of the computer shell \
        Includes a fully programed libaray of functions from scracth, supports creating and removing envoriment \
        variables, Reads each line from $PATH, Updates $PWD and $OLDPWD, recreated cd function, manages \
        memeory from each input from user with out leaks, and built in exit() function. Most other functions just fork \
        a proccess from the /usr/bin folder (Or anywhere else in the $PATH) like a normal shell would",
        language: "Programming Language: C",
        image: MinishellImage,
        link: "https://github.com/Klongrich/minishell"
    },
    {
        id: 0,
        name: "Name: JavaStockProject",
        discripton: "A project that I built in 2017. It is a fully functional charting \
        software written from scratch in Java. I built webscrapers for most of the live data, \
        used a few APIs for historical data, programed each indicator from scratch, and drew the main chart pixel by pixel! \
        You can create and save daily watchlist for any stocks of your chosing as well. The scanner was \
        customly programmed to look for stocks that I would have an interest in tradding that day based on \
        paramters I inputed. Custom OverLays where aloud as well allowing you to pick the variable amounts \
        for each indicator / overlay. Multiple stock time frames where posted as well as volume of each \
        meauserment of time. Was able to eventually hook up a few brokerages to the back end allowing some \
        real time tradding to your account using an API key.",
        language: "Programming Langauge: Java",
        image: JavaStockImage,
        link: "https://github.com/Klongrich/ChartingSoftware"
    },
    {
        id: 1,
        name: "Name: TradingBot",
        discripton: "A trading bot written when Poloniex was still cool. I used their API to pull \
        data and cacluate real time the slippage between tradding pairs. For example Let's say BTC/USD \
        @ $2,000, ETH/BTC @ 0.085, and ETH/USD @ $200. If we multiple 0.085 * $2,000 (price of BTC) we \
        would get $170 per ETH. If the price of ETH is at $200 at the time That's a 15% difference in pairs - \
        (Diff). You could then essentainly Sell Your ETH into USD for $200, Buy $200 worth of BTC then make the \
        BTC/ETH trade for 15% more ETH than you started with. Margins where not this big however. Most of the \
        time anything above 2% was profitable",
        language: "Programming Language: Python",
        image: TradingBotImage,
        link: "https://github.com/Klongrich/tradingbot"
    }
  ];

export default function software () {

    return (
        <>  
        <Container>
            <Header>
                Software
            </Header>

            {projectData.map(data => (
            <ProjectInfo>
                <ProjectHeaders>
                    <h3> {data.name} </h3> 
                    <h3>{data.language} </h3>
                    <h3>Descripton: </h3> <p> {data.discripton} </p>
                </ProjectHeaders>
            
                <img src={data.image} width="100%" height="100%"/>
    
                <SourceLink href={data.link}> <br/> Source Code </SourceLink>
            </ProjectInfo>
            ))}

        </Container>

        <div Style="background-color:black; margin-top:-30px">
            ads
        </div>
        </>
    )
}
