import React from 'react'

import {Header, ProjectInfo, ProjectHeaders, SourceLink} from './styles/softwareStyles'

import JavaStockImage from "./pics/stockSoftWare.png"
import MinishellImage from "./pics/minishell.png"
import TradingBotImage from "./pics/tradingBot.png"

export const projectData = [
    {
      id: 0,
      name: "Name: JavaStockProject",
      discripton: "Desctiptoin: This is blah..... ",
      language: "Programming Langauge: Java",
      image: JavaStockImage,
      link: "https://github.com/Klongrich/ChartingSoftware"
    },
    {
        id: 1,
        name: "Name: TradingBot",
        discripton: "Desctiptoin: This is blah..... ",
        language: "Programming Language: Python",
        image: TradingBotImage,
        link: "https://github.com/Klongrich/tradingbot"
    },
    {
        id: 2,
        name: "Name: MiniShell",
        discripton: "Desctiptoin: This is blah..... ",
        language: "Programming Language: C",
        image: MinishellImage,
        link: "https://github.com/Klongrich/minishell"
    }
  ];

export default function software () {

    return (
        <>  
            <Header>
                Software
            </Header>

            {projectData.map(data => (
            <ProjectInfo>
                <ProjectHeaders>
                    <h3>{data.name}</h3> 
                    <h3>{data.language} </h3>
                    <h3>{data.discripton}</h3>
                </ProjectHeaders>
            
                <img src={data.image} width="100%" height="100%"/>
    
                <SourceLink href={data.link}> <br/> Source Code </SourceLink>
            </ProjectInfo>
            ))}
        </>
    )
}
