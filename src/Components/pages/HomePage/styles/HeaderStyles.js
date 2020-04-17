import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

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