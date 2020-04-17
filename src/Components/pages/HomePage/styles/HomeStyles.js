import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";
import {StyledIconBase} from '@styled-icons/styled-icon'
import travelImg from  "./travelBackground2.png";



export const BackgroudnImage = styled.div`
    border: 1px solid #000;
    background-repeat: no-repeat;
    width: 100%;
    height: 850px;;
`;


export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    height: 35px;
    width: 35px;
    padding-left: ${px2vw(42)};
  }
`

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
  height: 74px;
  padding-top: ${px2vw(42)};
  padding-left: ${px2vw(32)};
  color: black;
  font-size: 42px;
`;

export const HeaderOffSet = styled.div`
  margin-right:${px2vw(680)};
`;


export const HeaderLinks = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: ${px2vw(42)};
  color: #bf4343;
  font-size: 12px;
  padding-top: ${px2vw(22)};
`;

export const HeaderText = styled.a`
    font-size: 14px;
    color: #bf4343;
    text-decoration: underline;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;
  border-radius: 10px;

  background-image: url(${travelImg});
  background-repeat: no-repeat;
  background-size: 275px 305px;

  &:hover {
    transition-timing-function: ease-in;
    transition: 0.2s;
    transform: scale(1.15);
    background-color: ${props => props.hoverColor};
  }

  transition-timing-function: ease-out;
  transition: 0.25s;
  transform: scale(1);

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
