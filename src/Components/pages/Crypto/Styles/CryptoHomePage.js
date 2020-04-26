import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

export const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;

export const HeaderLink = styled.a`
  color: #bf4343;
  text-decoration: underline;
  font-size: 18px;
  margin-left: 71.5%;
  margin-top: 25px;
`

export const Header = styled.a`
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
  height: 74px;
  padding-top: ${px2vw(42)};
  padding-left: ${px2vw(32)};
  color: black;
  font-size: 42px;
`;

