import React, { useEffect, useState } from "react";
import styled from "styled-components";

import FadeIn from 'react-fade-in';


export const ClientInfoWrapper = styled.div`

  color: #149414;
  height: 150px;
  margin-top: 45px;
  padding-bottom: 10px;
  text-align: center;

  ul{
    padding-right: 30px;
    padding-top: 10px;
    list-style-type: none;
  }

  li {
    font-size: 17.5px;
    padding-top: 15px;
    float:left;
    padding-left: 5.5%;
  }

  li:hover {
    cursor: pointer;
  }

`

export const ClientInfoMoblie = styled.div`
  
  color: #149414;
  margin-top: -30px;
  height: 497.84px;

  background-color: black;
  
  padding-top: 20px;

  h2 {
    text-align: center;
    font-size: 3.57em;
    margin-bottom: -10px;
  }

  ul{
    float: left;
    padding-left: 70.4px;
    list-style-type: none;
  }

  li {
    font-size: ${props => props.fontSize};
    padding-top: 42.4px;
  }



`

const ShowInfo = styled.div`
  visibility: ${props => props.show}
`

const Testli = styled.li`
visibility: ${props => props.show}
`

export const ClientInfo = ({ width, browserInfo, ipAdress, ipInfo }) => {

  const [showOS, setShowOS] = useState(false);
  const [showBrowser, setShowBrowser] = useState(false);
  const [showBrowserVersion, setShowBrowserVerison] = useState(false);

  const [showIP, setShowIP] = useState(false);
  const [showState, setShowState] = useState(false);
  const [showCity, setShowCity] = useState(false);

  function getIP() {

    if (!showIP) {
      return (
        <div Style="text-decoration: underline;
                        width: 148px;">
          Show IP
        </div>
      )
    } else {
      return (
        <>
          IP: {ipAdress}
        </>
      )

    }

  }

  function getState() {
    if (!showState) {
      return (
        <div Style="text-decoration: underline;
                      width: 105px;">
          Show Region
        </div>
      )
    } else {
      return (
        <>
          <div Style="width: 105px">
            Region: <b> {ipInfo.region} </b>
          </div>
        </>
      )

    }

  }

  function getCity() {
    if (!showCity) {
      return (
        <div Style="text-decoration: underline;
                      width: 105px;">
          Show City
        </div>
      )
    } else {
      return (
        <>
          <div Style="width: 100%">
            City: <b> {ipInfo.city} </b>
          </div>
        </>
      )

    }

  }

  function getOS() {
    if (!showOS) {
      return (
        <div Style="text-decoration: underline;
                      width: 120px;
                      padding-left: 20px;">
          Show OS
        </div>
      )
    } else {
      return (
        <>
          <div Style="width: 120px;
                      padding-left: 20px;">
            OS: <b> {browserInfo.os} </b>
          </div>
        </>
      )

    }

  }

  function getBroswer() {
    if (!showBrowser) {
      return (
        <div Style="text-decoration: underline;
                      width: 140px;
                      margin-left: -30px;">
          Show Browser
        </div>
      )
    } else {
      return (
        <>
          <div Style="width: 140px;
                      margin-left: -30px;">
            Browser: <b>{browserInfo.browser} </b>
          </div>
        </>
      )

    }

  }

  function getBrowserVersion() {
    if (!showBrowserVersion) {
      return (
        <div Style="text-decoration: underline;
                      width: 140px;">
          Browser Version
        </div>
      )
    } else {
      return (
        <>
          <div Style="width: 140px">
            Version: <b> {browserInfo.version} </b>
          </div>
        </>
      )

    }

  }

  var fontsize = "42.08px"

  if (width > 999) {
    return (
      <>
        <ClientInfoWrapper>


          <FadeIn transitionDuration="1600" delay="1250">
            <h2> Client Info</h2>
          </FadeIn>
          <ul>
            <FadeIn transitionDuration="1600" delay="1250">
              <li onClick={() => setShowBrowser(true)}> {getBroswer()}  </li>
            </FadeIn>

            <FadeIn transitionDuration="1600" delay="1500">
              <li onClick={() => setShowBrowserVerison(true)}> {getBrowserVersion()} </li>
            </FadeIn>

            <FadeIn transitionDuration="1600" delay="1750">
              <li onClick={() => setShowOS(true)}> {getOS()} </li>
            </FadeIn>

            <FadeIn transitionDuration="1600" delay="2000">
              <li onClick={() => setShowIP(true)}> {getIP()} </li>
            </FadeIn>

            <FadeIn transitionDuration="1600" delay="2250">
              <li onClick={() => setShowState(true)}> {getState()} </li>
            </FadeIn>

            <FadeIn transitionDuration="1600" delay="2500">
              <li onClick={() => setShowCity(true)}> {getCity()} </li>
            </FadeIn>
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
            <li> Region: <b> {ipInfo.region} </b> </li>
            <li> City: <b> {ipInfo.city} </b> </li>
          </ul>
        </ClientInfoMoblie>
      </>
    );
  }
};