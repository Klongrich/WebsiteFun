import React , {useEffect, useState} from "react";
import styled from "styled-components";

import {Container, Box, BoxTitle, BoxText, BackgroundImage} from "./stylesV2/HomeStyles"


import stockImage from "./stylesV2/stocks2.jpeg"
import cryptoImage from "./stylesV2/crypto1.jpg"
import travelImage from "./stylesV2/travelBackground2.png"
import codingImage from "./stylesV2/coddingBackground.jpg"

import stocksBackground from './stylesV2/data-original.jpg'
import softwareBackground from './stylesV2/coddingBackground.jpg'
import cryptoBackground from './stylesV2/crypto1.jpg'

import TravelPage from '../Travel/travel'

import {ArrowForward} from '@styled-icons/evaicons-solid/ArrowForward'
import {ClientInfo} from './clientInfo'


export const areaOfIntrestData= [
    {
      id: 0,
      title: "Travel",
      text: "Check out some Travel Stories!",
      moblieText: "Travel Stories",
      bgColor: "#D5CAFA",
      hoverColor: "#e3dcfa",
      image: travelImage,
      link: "travel"
    },
    {
      id: 1,
      title: "Crypto",
      text: "Thoughts and Information on Crypto",
      moblieText: "Information On Crypto",
      bgColor: "null",
      hoverColor: "#ebbebe",
      image: cryptoImage,
      headerColor: "black",
      link: "Crypto"
    },
    {
      id: 2,
      title: "Stocks",
      text: "Information on the stock market and day trading",
      moblieText: "The Stock Market",
      bgColor: "#F2EE8D",
      hoverColor: "#ebe8a4",
      image: stockImage,
      link: "stocks"
    },
    {
      id: 3,
      title: "Software",
      text: "Side / Personal projects I have worked on for fun",
      moblieText: "Side / Personal Projects",
      bgColor: "#9FEACD",
      hoverColor: "#bce8d7",
      image: codingImage,
      link: "software"
    }
  ];

export const TestBackground = styled.div` 

  height: 700px;
  background-image:  ${props => `url(${props.Image})`};
  background-size: 100% 100%;

  border: 1px black solid;

  color: white;

  a {
    text-decoration: none
  }

  h2 {
    font-size: 50px;
    margin-left: 20px;
  }

  p{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
  }
  
`;

export const DesktopBackground = styled.div` 

  margin:0px;
  background-color: lightgrey;
  border: 1px black solid;

  a {
    text-decoration: none;
  }
  
`;

export const MoblieBackground = styled.div`

  background-image: linear-gradient(to bottom right, #a6c8ff, #0d2b5c);
 
  background-size: 100% 100%;
  border: 2.38px black solid;

  a {
    text-decoration: none;
  }

`

export const MoblieAreaOfInterst = styled.div `
 
  margin-bottom: 71.4px;
  h2 {
    padding-left: 23.8px;
    height: 71.4px;
    width: 50%;
    font-size: 4.57em;
  };
  p {
    padding-left: 47.6px;
    font-size: 2.57em;
  };
`

export const BlackLine = styled.div `
  
  height: 4.76px;
  width: 25%;
  border: 2.38px black solid;
  margin-left: 23.8px;  
  background-color: black;

  margin-top: -23.8px;

`

export const MoblieButton = styled.div`

  margin-top: 40px;
  margin-left: 5%;

 padding-top: 0px;

  font-size: 2.57em;
  text-align: center;

  width: 80%;

  height: 80px;
  border-radius: 80px;
  border: 7px #6685ff solid;

  padding-left: 47.6px;
  font-size: 3em;

  font-family: sans-serif;
  color: #c4c4c4;
  background-color: #0336ff

`

export const GetAreasOfIntrest = ( {width, contentVersion, browserInfo, ipAdress, ipInfo}) => {

    if (contentVersion && width < 999) {
      return (
        <>
        <MoblieBackground>
        <h2 Style="padding-left: 23.8px; font-size:83.3px; height: 119px; font-weight: bold "> 
          Areas Of Interest 
        </h2>

        {areaOfIntrestData.map(data => (
            <MoblieAreaOfInterst key={data.id}>
              <h2 Sytle=" font-weight: normal;"> {data.title} </h2>
                <BlackLine />
                  <a href={data.link}>
                    <MoblieButton>
                      {data.moblieText} <ArrowForward size="82px" /> 
                    </MoblieButton>
                 </a>
                
          </MoblieAreaOfInterst>
        ))}
        </MoblieBackground>

        <ClientInfo width={width} 
                   browserInfo={browserInfo} 
                   ipAdress={ipAdress}
                   ipInfo={ipInfo}
                   />

        </>
      );
    } else if (contentVersion) {
      return (
        <>
        <DesktopBackground>
        <h2 Style="margin-bottom: 110px; text-align:center; font-size:42px; padding-top:10px;"> Areas Of Interest </h2>
        <Container>
          {areaOfIntrestData.map(data => (
            <Box key={data.id} bgColor={data.bgColor} img={data.image} as="a" href={data.link}>
              <BoxTitle>{data.title}</BoxTitle>
              <BoxText>{data.text}</BoxText>
            </Box>
           ))}
          </Container>
        </DesktopBackground>
      </>
      );
    } else { 
        return (
      <>
      <TestBackground Image={softwareBackground}>
        <h2> Porgramming </h2>
        <p> Projects that I've worked on over the past serveal years</p>
        <br />
        <p Style="font-size:25px;">(Expermential Not sure If I like the one page format or not)</p>
      </TestBackground>

      <TestBackground Image={cryptoBackground}>
        <h2> Crypto </h2>
        <p> Information about different crypto currencys</p>
      </TestBackground>

      <TestBackground Image={stocksBackground}>
        <h2> Stocks </h2>
        <p> Information That I have learned in the stock market over the past 5 years</p>
      </TestBackground>
      
      <TravelPage />

      </>
      );
    }  
};