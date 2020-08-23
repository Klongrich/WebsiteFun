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

  font-size: 42px;
`;

export const ProjectInfo = styled.div`

    width: 90%;
    height: 100%;
    
    background-color:black;
    margin-left: ${px2vw(70)};
    margin-bottom: 50px;
    
`

export const ProjectHeaders = styled.div`
    
    width: 90%;
    height: 150px;
    color:white;

    padding-left: 5px;



`
export const SourceLink = styled.a`
    padding-top: 50px;
    color:white;
    text-decoration: underline;
`