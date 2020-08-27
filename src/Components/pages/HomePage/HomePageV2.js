import React , {useEffect, useState} from "react";

import Global from "../../../styles/global";
import styled from "styled-components";
import * as Scroll from 'react-scroll';

import {ChevronDownCircle} from '@styled-icons/boxicons-regular/ChevronDownCircle'


import {BackgroundImage} from "./stylesV2/HomeStyles"

import Footer from "../../footerComponets/Footer"

import {GlobeAmericas} from '@styled-icons/fa-solid/GlobeAmericas'

import {GetAreasOfIntrest} from './AreasOfInteresLinks'
import {TestHeader} from './Header'
import {ClientInfo} from './clientInfo'

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
        <div Style="height: 1271.2px; text-align:center; margin-top: 300.8px; padding-top:40px">
          <p Style="color:#e0e0e0; font-size: 90.2px;">
            Welcome To My Site
          </p>
          <div Style="margin-top: 0px;">
          <ChevronDownCircle size="158.5px" color="#e0e0e0" onClick={scrollMoblie} />
          </div>
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