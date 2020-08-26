import React , {useEffect, useState} from "react";

import Global from "../../../styles/global";
import styled from "styled-components";
import * as Scroll from 'react-scroll';

import travelImage from "./stylesV2/travelBackground2.png"

//import cryptoImage from "./styles/cryptoBackground4.png"
import cryptoImage from "./stylesV2/crypto1.jpg"

//import stockImage from "./styles/stockBackground.png"
import stockImage from "./stylesV2/stocks2.jpeg"


import codingImage from "./stylesV2/coddingBackground.jpg"

import {ToggleLeft} from '@styled-icons/boxicons-solid/ToggleLeft'
import {ToggleRight} from '@styled-icons/boxicons-solid/ToggleRight'

import {ChevronDownCircle} from '@styled-icons/boxicons-regular/ChevronDownCircle'


import {ClientInfoMoblie, Container, Box, BoxTitle, BoxText, BackgroundImage, ClientInfoWrapper} from "./stylesV2/HomeStyles"

import About from "../About/about"

import Footer from "../../footerComponets/Footer"

import TestImage from './stylesV2/data-original.jpg'
import TestImage2 from './stylesV2/coddingBackground.jpg'
import TestImage3 from './stylesV2/crypto1.jpg'

import TravelPage from '../Travel/travel'

import {TestHeader} from './Header'

import moblieBackground from './stylesV2/moblieBackground.jpg'

import {GlobeAmericas} from '@styled-icons/fa-solid/GlobeAmericas'

import {ArrowForward} from '@styled-icons/evaicons-solid/ArrowForward'


export const TestBackground = styled.div` 

  height: 700px;
  background-image:  ${props => `url(${props.Image})`};
  background-size: 100% 100%;

  border: 1px black solid;

  color: white;

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

export const SecondBackground = styled.div` 

  margin:0px;
  background-color: lightgrey;
  border: 1px black solid;
  
`;

export const boxData = [
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


export const MoblieBackground = styled.div`

  background-image: linear-gradient(to bottom right, #a6c8ff, #0d2b5c);
 
  background-size: 100% 100%;
  border: 2.38px black solid;

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
  color: white;
  background-color: #0336ff

`

export default function HomePage() {

  const [browserInfo, setclientInfo] = useState([]);
  const [ipInfo, setipInfo] = useState([]);
  const [ipAdress, setipAdress] = useState(0);
  const [contentVersion, setContentVersion] = useState(true);
  const [buttonText, setButtonText] = useState("Version 2.1");

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const GetContentVersion = () => {

    if (contentVersion && windowSize.width < 999) {
      return (
        <>
        <MoblieBackground>
        <h2 Style="padding-left: 23.8px; font-size:83.3px; height: 119px; "> 
          Areas Of Interest 
        </h2>

        {boxData.map(box => (
            <MoblieAreaOfInterst key={box.id}>
              <h2> {box.title} </h2>
                <BlackLine />
                  <a href={box.link}>
                    <MoblieButton>
                      {box.moblieText} <ArrowForward size="82px" /> 
                    </MoblieButton>
                 </a>
                
          </MoblieAreaOfInterst>
        ))}
        </MoblieBackground>
        </>
      );
    } else if (contentVersion) {
      return (
        <>
        <SecondBackground>
        <h2 Style="margin-bottom: 110px; text-align:center; font-size:42px; padding-top:10px;"> Areas Of Interest </h2>
        <Container>
          {boxData.map(box => (
            <Box key={box.id} bgColor={box.bgColor} img={box.image} as="a" href={box.link}>
              <BoxTitle>{box.title}</BoxTitle>
              <BoxText>{box.text}</BoxText>
            </Box>
           ))}
          </Container>
        </SecondBackground>
      </>
      );
    } else { 
        return (
      <>
      <TestBackground Image={TestImage2}>
        <h2> Porgramming </h2>
        <p> Projects that I've worked on over the past serveal years</p>
        <br />
        <p Style="font-size:25px;">(Expermential Not sure If I like the one page format or not)</p>
      </TestBackground>

      <TestBackground Image={TestImage3}>
        <h2> Crypto </h2>
        <p> Information about different crypto currencys</p>
      </TestBackground>

      <TestBackground Image={TestImage}>
        <h2> Stocks </h2>
        <p> Information That I have learned in the stock market over the past 5 years</p>
      </TestBackground>
      
      <TravelPage />

      </>
      );
    }  
};
 
  const scrollTop = () => {
    window.scrollTo({top: 665, behavior: 'smooth'});
  };

  const scrollMoblie = () => {
    window.scrollTo({top: 1747, behavior: 'smooth'});
  }

  function switchContentVersion() {
    if (contentVersion == true) {
      setContentVersion(false);
      setButtonText("Version2.2");
    } else {
      setContentVersion(true);
      setButtonText("Version2.1");
    }
}

  useEffect(() =>  {

    function handleResize() {

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
  }

    window.addEventListener("resize", handleResize);

    handleResize();

    fetch(process.env.REACT_APP_API_BROSWERINFO, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
          "Content-Type": "application/json"
      },
      },
      ).then(response => {
          if (response.ok) {
            response.json().then(json => { 
            setclientInfo(json);
            });
          }
        }).catch(error => alert("Hmm Thats Weird"));

    fetch(process.env.REACT_APP_API_IPINFO, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
        },
        },
        ).then(response => {
          if (response.ok) {
            response.json().then(json => { 
              setipInfo(json);
              setipAdress(json.ip.substring(7))
            });
          }
          }).catch(error => alert("Hmm Thats Weird"));
  }, []);

  const MiddleInfo = () => {

    if (windowSize.width > 999) {
      return (
        <>
          <div Style="height: 330px; text-align:center;">
          <p Style="color:white; font-size: 50px;">
            Welcome To My Site
          </p>
  
          <ChevronDownCircle size="65px" color="white" onClick={scrollTop} />
       </div>
       </>

      );
    } else {
      return(
        <>
        <div Style="height: 531.2px; text-align:center; margin-top: 100.8px; padding-top:40px">
          <p Style="color:white; font-size: 90.2px;">
            Welcome To My Site
          </p>
          <div Style="margin-top: 0px;">
          <ChevronDownCircle size="158.5px" color="white" onClick={scrollMoblie} />
          </div>
       </div>
       </>
      );
    }

  }

  const ClientInfo = () => {

    var fontsize = "42.08px"

    if(windowSize.width > 999) {
      return (
        <>
          <ClientInfoWrapper> 
            <h2> Client Info</h2>
              <ul>
                <li> Broswer: <b>{browserInfo.browser} </b> </li> 
                <li> Version: <b> {browserInfo.version} </b> </li> 
                <li> OS: <b> {browserInfo.os} </b> </li> 
                <li> IP: <b> {ipAdress} </b> </li>
                <li> State: <b> {ipInfo.region} </b> </li>
                <li> City: <b> {ipInfo.city} </b> </li> 
              </ul>
          </ClientInfoWrapper> 
        </>
      );
    } else {
      return (
        <>
          <ClientInfoMoblie fontSize={fontsize}>
          <h2> Client Info</h2>
            <ul>
              <li> Broswer: <b>{browserInfo.browser} </b> </li> 
              <li> Version: <b> {browserInfo.version} </b> </li> 
              <li> OS: <b> {browserInfo.os} </b> </li>
            </ul>

            <ul> 
              <li> IP: <b> {ipAdress} </b> </li>
              <li> State: <b> {ipInfo.region} </b> </li>
              <li> City: <b> {ipInfo.city} </b> </li> 
            </ul>
          </ClientInfoMoblie>
        </>
      );
    }
  }

  return (

    <>
    <div class="background">

    <BackgroundImage>
    
    <TestHeader width={windowSize.width} height={windowSize.height}/>

    <MiddleInfo />
    
    <ClientInfo />

    </BackgroundImage>

{/*
    <div Style="margin-bottom:-32px; margin-left:91%">
      <a Style="color: blue; text-decoration:underline; margin-top:2px;" onClick={() => switchContentVersion()}>
        {buttonText}
      </a>
    </div>
*/}
    <GetContentVersion />

    <Footer />

    </div>
    </>
  );
}