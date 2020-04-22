import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";


export const ClientInfoWrapper = styled.div`

  visibility: ${props => props.show};
  height: 120px;
  width: 33%;
  margin-left: 2%;
  background-color: #db6b6b;
  border-radius: 10px;

`

export const ClientInfo = styled.div`
  float: left;

  margin-left: 1%;
  width: ${px2vw(220)};
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 550px;
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

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
    background-size: ${px2vw(320, 768)} ${px2vw(200, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
    background-size: ${px2vw(310)} ${px2vw(340)};
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 4rem;
  text-align: center;

  color: ${props => props.headerColor};
  

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  color:light-grey;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
