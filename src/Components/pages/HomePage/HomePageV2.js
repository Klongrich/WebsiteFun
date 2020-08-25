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


import {Container, Box, BoxTitle, BoxText, BackgroundImage, ClientInfoWrapper} from "./stylesV2/HomeStyles"
import {Header, HeaderLinks, HeaderText, HeaderOffSet} from "./stylesV2/HeaderStyles"
import {InfoButton} from "./stylesV2/HomeStyles"

import About from "../About/about"

import Footer from "../../footerComponets/Footer"


export const boxData = [
  {
    id: 0,
    title: "Travel",
    text: "check out some Travel Stories!",
    bgColor: "#D5CAFA",
    hoverColor: "#e3dcfa",
    image: travelImage,
    link: "travel"
  },
  {
    id: 1,
    title: "Crypto",
    text: "Thoughts and Information on Crypto",
    bgColor: "null",
    hoverColor: "#ebbebe",
    image: cryptoImage,
    headerColor: "black",
    link: "Crypto"
  },
  {
    id: 2,
    title: "Stocks",
    text: "Information regarding the stock market and day trading",
    bgColor: "#F2EE8D",
    hoverColor: "#ebe8a4",
    image: stockImage,
    link: "stocks"
  },
  {
    id: 3,
    title: "Software",
    text: "Side Projects/ Personal projects I have worked on for fun",
    bgColor: "#9FEACD",
    hoverColor: "#bce8d7",
    image: codingImage,
    link: "software"
  }
];

const headerData = [
  {
    id: 0,
    text: "Articles",
    link: "/articles"
  } ,
  {
    id: 1,
    text: "About",
    link: "/about"
  },
  {
    id: 2,
    text: "Website Source Code",
    link: "https://github.com/Klongrich/WebsiteFun"
  }
]

export default function HomePage() {

  const [browserInfo, setclientInfo] = useState([]);
  const [ipInfo, setipInfo] = useState([]);
  const [ipAdress, setipAdress] = useState(0);

  const [version, setVersion] = useState(0);

  const scrollTop = () => {
    window.scrollTo({top: 700, behavior: 'smooth'});
  };

  useEffect(() =>  {
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

 

  return (

    <>
 
    <div class="background">

    <BackgroundImage>
    
    <Header> 
      <HeaderOffSet>
      Kyle Longrich
      </HeaderOffSet>
      
      {headerData.map(data => (
        <HeaderLinks>
          <HeaderText key={data.id} as="a" href={data.link}> {data.text} </HeaderText>
        </HeaderLinks>
      ))}


    </Header>

    <div Style="height: 330px; text-align:center">
      <p Style="color:white; font-size: 50px;">
        Welcome To My Site
      </p>

      <ChevronDownCircle size="65px" color="white" onClick={scrollTop} />
    </div>

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

    </BackgroundImage>

    <h2 Style="margin-bottom: 110px; text-align:center; font-size:42px; padding-top:10px;"> Areas Of Interest </h2>
    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor} img={box.image} as="a" href={box.link}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container> 
  
  <Footer />

    </div>
    </>
  );
}