import React , {useEffect, useState} from "react";
import styled from "styled-components";

export const ClientInfoWrapper = styled.div`

  color: #149414;
  height: 150px;
  margin-top: 35px;
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

export const ClientInfo = ( {width, browserInfo, ipAdress, ipInfo}) => {

        var fontsize = "42.08px"
    
        if(width > 999) {
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
      };