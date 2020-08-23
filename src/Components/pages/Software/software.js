import React from 'react'

import {Header, ProjectInfo, ProjectHeaders, SourceLink} from './styles/softwareStyles'

import JavaStockImage from "./pics/stockSoftWare.png"
import MinishellImage from "./pics/minishell.png"

export const projectData = [
    {
      id: 0,
      name: "Name: JavaStockProject",
      discripton: "Desctiptoin: This is blah..... ",
      language: "Programming Langauge: Java",
      image: JavaStockImage,
      link: "https://github.com/Klongrich/JavaStockPoject"
    },
    {
        id: 1,
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
                <SourceLink href="https://www.github.com"> Source Code </SourceLink>
            </ProjectInfo>
            ))}
        </>
    )
}
