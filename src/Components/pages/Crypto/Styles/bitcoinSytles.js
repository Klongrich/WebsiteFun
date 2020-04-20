import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

export const TopText = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  text-algin: left;


  padding-top: ${px2vw(42)};
  padding-left: ${px2vw(82)};
  color: black;
  font-size: 20px;

`;

export const Paragraph = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  text-algin: center;

  line-height: 2;

  width: 90%;
  padding-top: ${px2vw(42)};
  padding-left: ${px2vw(82)};
  color: black;
  font-size: 18px;

`;