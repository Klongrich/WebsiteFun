import React , {useEffect, useState} from "react";

import Global from "../../../styles/global";
import styled from "styled-components";
import * as Scroll from 'react-scroll';

import {ChevronDownCircle} from '@styled-icons/boxicons-regular/ChevronDownCircle'

import FadeIn from 'react-fade-in';

import {BackgroundImage} from "./stylesV2/HomeStyles"

import Footer from "../../footerComponets/Footer"

import {GlobeAmericas} from '@styled-icons/fa-solid/GlobeAmericas'

import {GetAreasOfIntrest} from './AreasOfInteresLinks'
import {TestHeader} from './Header'
import {ClientInfo} from './clientInfo'


const HomePageButton = styled.button`
  
  text-algin: center;

  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  cursor: pointer;

  margin-top: 45px;

  margin-left: ${props => props.left};

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }

  float:left;

`;

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

{/*

    fetch('https://longrichk.com:3013/LogVisit')
    .then(res => res.json())
  
*/}

  }, []);

  const MiddleInfo = () => {

    if (windowSize.width > 999) {
      return (
        <>
        <div Style="height: 330px; text-align:center;">

       {/*  <FadeIn transitionDuration="1600" delay="600"> */}

          <p Style="color:white; font-size: 50px;
                    margin-top: 10px;
                    ">
            Welcome To My Site
          </p>
          <p Style="color:white; font-size: 30px;
                    margin-top: -10px;
                    margin-bottom: 30px;
                    ">
            Log In or Sign Up for V3
            </p>


          <div>
          <ChevronDownCircle size="65px" 
                              color="white" 
                              onClick={scrollTop}
                              />
          </div>

        <a href="/login">
          <HomePageButton left="395px">
            Log In
          </HomePageButton>
        </a>


        <a href="/signup">
          <HomePageButton left="140px">
            Sign Up
          </HomePageButton>
        </a>

       
       </div>

       <ClientInfo width={windowSize.width} 
                   browserInfo={browserInfo} 
                   ipAdress={ipAdress}
                   ipInfo={ipInfo}
                   />
       </>

      );
    } else {
      return(
        <>
        <div Style="height: 1271.2px; 
                    text-align:center; 
                    margin-top: 300.8px; 
                    padding-top:40px">
          
          <FadeIn transitionDuration="1600" delay="600"> 

          <p Style="color:#e0e0e0; font-size: 90.2px;">
            Welcome To My Site
          </p>
          <div Style="margin-top: 0px;">
          <ChevronDownCircle size="158.5px" color="#e0e0e0" onClick={scrollMoblie} />
          
          </div>
          </FadeIn>
       </div>
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

    </BackgroundImage>

{/*
    <div Style="margin-bottom:-32px; margin-left:91%">
      <a Style="color: blue; text-decoration:underline; margin-top:2px;" onClick={() => switchContentVersion()}>
        {buttonText}
      </a>
    </div>
*/}

    <GetAreasOfIntrest width={windowSize.width} 
                       contentVersion={contentVersion}
                       ipInfo={ipInfo}
                       ipAdress={ipAdress}
                       browserInfo={browserInfo} />

    <Footer />

    </div>
    </>
  );
}