import styled from "styled-components";
import px2vw from '../../../utils/px2vw';
import coolBackground from './cool-background.png'


export const Header = styled.a`
  display: flex;
  flex-wrap: wrap;
  
  width: 96%;
  height: 74px;
  padding-top: ${px2vw(42)};
  padding-left: ${px2vw(32)};
  margin-top: -20px;

  font-size: 42px;
`;

export const BackgroundImage = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${coolBackground});
    background-repeat: no-repeat;
`