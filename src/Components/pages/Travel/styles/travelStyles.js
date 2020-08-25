import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

import mapPic from "../pics/worldmap.jpg"

export const Header = styled.div`
    font-size: 30px;

    @media only screen and (max-device-width: 480px) {
        /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
        
        font-size: 80px;
        text-align: center;
        
    }
`

export const Container = styled.div`

    background-image: url(${mapPic});
    height: 670px;

    margin-top: -2%;
    padding-top: 2%;

    text-align: center;

    background-size: cover;

    @media only screen and (max-device-width: 480px) {
        /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
        
        height: 3000px;
        width: 1330px;
        background-color: blue;
        background-image: null;
    }
`

export const Visited = styled.div`
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    height:420px;
    width: 350px;
    margin-top:-10px;
    margin-left: 50px;
    background-color: rgb(255, 255, 255, 0.4);
    float: left;

    @media only screen and (max-device-width: 480px) {
        /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
        font-size: 80px;
        
        height: 1500px;
        width: 1130px;
        
        margin-left: 60px;
        
    }
`

export const NotVisited = styled.div`
    
    display: flex;
    flex-direction: row;
    border-style: solid;
    border-color: black;
    border-width: 1px;
    height:420px;
    width: 800px;
    margin-left: 450px;
    margin-top: -10px;
    background-color: rgb(255, 255, 255, 0.4);



    @media only screen and (max-device-width: 480px) {
        /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
        
        
    }

      @media (min-width: 1024px) {
   
      }
    
      @media only screen and (min-width: 960px) {
        /* styles for browsers larger than 960px; */
      }
      @media only screen and (min-width: 1440px) {
        /* styles for browsers larger than 1440px; */
      }
      @media only screen and (min-width: 2000px) {
        /* for sumo sized (mac) screens */
      }

    
      @media only screen and (device-width: 768px) {
       /* default iPad screens */
       
      }
      
      /* different techniques for iPad screening */
      @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
        /* For portrait layouts only */
       
      }
    
      @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
        /* For landscape layouts only */
      }


`