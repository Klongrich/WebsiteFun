import React from 'react'

import { Container, Header, ProjectInfo, ProjectHeaders, SourceLink } from './styles/softwareStyles'

import JavaStockImage from "./pics/stockSoftWare.png"
import MinishellImage from "./pics/minishell.png"
import TradingBotImage from "./pics/tradingBot.png"

import styled from "styled-components";

export const projectData = [
    {
        id: 2,
        name: "Name: MiniShell",
        impact: "(Useless)",
        discripton: "Project that was completed as part of the 42 curriculum. A recreation of the computer shell. Includes a fully programmed library of functions from scratch, supports creating and removing environment variables, reads each line from $PATH, Updates $PWD and $OLDPWD, recreates cd function, manages memory from each input from user without leaks, and built in exit() function. Most other functions just fork a process from the /usr/bin folder (Or anywhere else in the $PATH) like a normal shell would",
        language: "Programming Language: C",
        image: MinishellImage,
        link: "https://github.com/Klongrich/minishell"
    },
    {
        id: 1,
        name: "Name: TradingBot",
        impact: "Almost Worked",
        discripton: "A trading bot written when Poloniex was still cool. I used their API to pull data and cacluate real time the slippage between tradding pairs. For example Let's say BTC/USD @ $2,000, ETH/BTC @ 0.085, and ETH/USD @ $200. If we multiple 0.085 * $2,000 (price of BTC) we would get $170 per ETH. If the price of ETH is at $200 at the time That's a 15% difference in pairs - (Diff). You could then essentainly Sell Your ETH into USD for $200, Buy $200 worth of BTC then make the BTC/ETH trade for 15% more ETH than you started with. Margins where not this big however. Most of the time anything above 2% was profitable",
        language: "Programming Language: Python",
        image: TradingBotImage,
        link: "https://github.com/Klongrich/tradingbot"
    },
    {
        id: 0,
        name: "Name: JavaStockProject",
        impact: "Built from sctrach in java with out charting libs",
        discripton: "A project that I built in 2017. I used the Yahoo Finance API and a few web scrapers I built to obtain stock data.  You can create and save a daily watchlist for any stocks of your choosing as well.  Custom OverLays where you could pick the variable amounts for each indicator / overlay. Multiple stock time frames were posted as well as volume of each measurement of time.",
        image: JavaStockImage,
        link: "https://github.com/Klongrich/JavaStockProject"
    }
];

export const NavBar = styled.div`
    
  ul {
        list-style-type: none;
        padding-left: 60%;
        padding-bottom: 7%;
        margin-top: -55px;
  }

  li {

      text-decoration: none;
      border-left: 1px solid white;
      color:white;
      font-size: 17.5px;
      float:left;
      padding-left: 5.5%;
      padding-right: 7.5%;
  }

  li:hover {
      color: red;
      cursor: pointer;

  }

`


export default function software() {

    const scrollToJavaStockProject = () => {
        window.scrollTo({ top: 1950, behavior: 'smooth' });
    };

    const scrollToTradingBot = () => {
        window.scrollTo({ top: 1025, behavior: 'smooth' });
    };

    const scrollToMinishell = () => {
        window.scrollTo({ top: 75, behavior: 'smooth' });
    };

    return (
        <>
            <Container>

                <Header>
                    Software
                </Header>

                <NavBar>
                    <ul>
                        <li onClick={scrollToMinishell}>MiniShell</li>
                        <li onClick={scrollToTradingBot}>TradingBot</li>
                        <li onClick={scrollToJavaStockProject}>JavaStockProject</li>
                    </ul>
                </NavBar>


                {projectData.map(data => (
                    <ProjectInfo>
                        <ProjectHeaders>
                            <h3> {data.name} </h3>
                            <h3> {data.impact} </h3>
                            <h3>Descripton: </h3> <p> {data.discripton} </p>
                        </ProjectHeaders>

                        <img src={data.image} width="100%" height="100%" alt="" />

                        <SourceLink href={data.link}> <br /> <br /> Source Code </SourceLink>
                    </ProjectInfo>
                ))}

            </Container>

            <div Style="background-color:black; margin-top:-30px">
                ads
        </div>
        </>
    )
}
