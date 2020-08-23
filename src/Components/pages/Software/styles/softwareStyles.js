import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

export const Header = styled.a`
  display: flex;
  flex-wrap: wrap;
  
  width: 96%;
  height: 74px;
  padding-top: ${px2vw(42)};
  padding-left: ${px2vw(32)};
  margin-top: -20px;
  color: black;
  font-size: 42px;
`;

export const ProjectInfo = styled.div`

    width: 80%;
    height: 400px;
    
    margin-left: ${px2vw(100)};
    margin-bottom: 200px;
`

export const ProjectHeaders = styled.div`
    
    width: 80%;
    height: 150px;
    color:white;
    background-color:black;

`
