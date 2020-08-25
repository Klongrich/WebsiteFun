import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

import spacepic from "./background.jpg";

export const BackgroundImage = styled.div`
 

    background-image: url(${spacepic});
    background-size: 100% 100%;

    @media only screen and (max-device-width: 480px) {
      /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
      background-color:#363636;
     }
`;


export const ClientInfoWrapper = styled.div`

  color: #149414;
  height: 150px;
  margin-top: 35px;
  padding-bottom: 5px;
  text-align: center;

  ul{
    padding-right: 30px;
    padding-top: 10px;
  }

  li {
    font-size: 17.5px;
    float:left;
    padding-left: 5.5%;
  }

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    height: 350px;
    width: 93.5%;
    margin-left: 2.5%;
    background-color: #db6b6b;
    border-radius: 10pxpadding-left: ${px2vw(21)};
    padding-right: ${px2vw(21)};;
    margin-top: 20px;
    visibility: visible;
   }

`

export const ClientInfo = styled.div`
  float: left;

  margin-left: 1%;
  width: ${px2vw(220)};

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */

    margin-left: 3%;

    width: ${px2vw(620)};
    font-size: 42px;
   }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
   margin-bottom: 5%;
  max-width: 100%;
  
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};

  height: 100%;
  border-radius: 10px;


  background-image: url(${props => props.img});

  background-repeat: no-repeat;
  background-size:${px2vw(320, 320)} ${px2vw(200, 320)};

  &:hover {
    transition-timing-function: ease-in;
    transition: 0.2s;
    transform: scale(1.15);
    background-color: ${props => props.hoverColor};
  }

  transition-timing-function: ease-out;
  transition: 0.25s;
  transform: scale(1);

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
    background-size: ${px2vw(310)} ${px2vw(340)};
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

  @media only screen and (max-device-width: 480px) {
   /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
   display: flex;
   width: ${px2vw(160, 210)};
   min-height: ${px2vw(200, 320)};
   margin-top: 100px;
   flex-direction: column;
   background-size:${px2vw(240, 290)} ${px2vw(225, 345)};
  }

  @media only screen and (device-width: 768px) {
   /* default iPad screens */
   width: ${px2vw(320, 768)};
   min-height: ${px2vw(200, 768)};
   height: 100%;
   background-size: ${px2vw(320, 768)} ${px2vw(200, 768)};
  }
  
  /* different techniques for iPad screening */
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
    /* For portrait layouts only */
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
    background-size: ${px2vw(320, 768)} ${px2vw(200, 768)};
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
    /* For landscape layouts only */
  }
`;

export const BoxTitle = styled.h3`
  color: black;
  font-size: 4rem;
  text-align: center;

  color: ${props => props.headerColor};
  margin-top: -90px;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    font-size: 130px;

   }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(150)};
  color: #333;
  font-size: 1.5rem;


  color:white;

  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    font-size: 42px;
    margin-top: 0px;
   }

`;
