import React , {useEffect, useState} from "react";
import Global from "../../../../styles/global";
import styled from "styled-components";


import travelImage from "./stylesV1/travelBackground2.png"
import cryptoImage from "./stylesV1/cryptoBackground4.png"
import stockImage from "./stylesV1/stockBackground.png"

import {Container, Box, BoxTitle, BoxText, BackgroundImage, ClientInfo, ClientInfoWrapper} from "./stylesV1/HomeStyles"
import {Header, HeaderLinks, HeaderText, HeaderOffSet} from "./stylesV1/HeaderStyles"
import {InfoButton} from "./stylesV1/HomeStyles"


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
    text: "From penny stocks to Marco econmics",
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
    image: "null",
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

export default function HomePageV1() {

  const [browserInfo, setclientInfo] = useState([]);
  const [ipInfo, setipInfo] = useState([]);
  const [boxOpen, setboxOpen] = useState("hidden");
  const [ipAdress, setipAdress] = useState(0);

  function toggleInfoBox() {
      if (boxOpen == "hidden") {
        setboxOpen("visible");
      } else {
        setboxOpen("hidden");
      }
  }
  
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
    <div class="background">

  
    
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
    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor} img={box.image} as="a" href={box.link}>
          <BoxTitle >{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container> 

    <InfoButton onClick={() => toggleInfoBox()}>
        Show Your Info
    </InfoButton>

    
    <ClientInfoWrapper show={boxOpen} > 
        <ClientInfo>
        <p>Broswer: {browserInfo.browser} </p> 
        <p> Version: {browserInfo.version} </p> 
        <p> OS: {browserInfo.os} </p> <br/>
        </ClientInfo>

        <ClientInfo>
        <p>IP: {ipAdress} </p>
        <p>State: {ipInfo.region} </p>
        <p>City: {ipInfo.city} </p> 
        </ClientInfo> 
    </ClientInfoWrapper> 

    

    </div>
  );
}
