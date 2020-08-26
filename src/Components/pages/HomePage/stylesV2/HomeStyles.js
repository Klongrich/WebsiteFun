import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

import spacepic from "./background.jpg";

export const BackgroundImage = styled.div`
 

    background-image: url(${spacepic});
    background-size: 100% 100%;

     @media only screen and (max-device-width: 480px) {
      margin-top: 0px;
    }
`;


export const ClientInfoWrapper = styled.div`

  color: #149414;
  height: 150px;
  margin-top: 35px;
  padding-bottom: 10px;
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

`

export const ClientInfoMoblie = styled.div`
  color: #149414;
  margin-top: -30px;
  height: 697.84px;

  
  padding-top: 50px;

  h2 {
    text-align: center;
    font-size: 3.57em;
    margin-bottom: -10px;
  }

  ul{
    float: left;
    padding-left: 70.4px;
  }

  li {
    font-size: ${props => props.fontSize};
    padding-top: 42.4px;
  }

`

export const ClientInfo = styled.div`
  float: left;

  margin-left: 1%;
  width: ${px2vw(220)};
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5%;
  max-width: 100%;
  flex-wrap: nowrap;
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

`;
