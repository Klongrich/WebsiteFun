import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  width: 97%;
  height: 74px;
  padding-top: ${px2vw(42)};
  padding-left: ${px2vw(32)};
  color: black;
  font-size: 42px;


  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    font-size: 70px;
    height: 200px;
    padding-left: 30px;
    background-color: grey;
   }

`;

export const HeaderOffSet = styled.div`
  margin-right:${px2vw(680)};

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    font-size: 75px;
   }
`;


export const HeaderLinks = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-left: ${px2vw(42)};
  color: #bf4343;
  padding-top: ${px2vw(22)};

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    font-size: 42px;
    margin-left: 0px;
    padding-right: ${px2vw(42)};
   }
`;

export const HeaderText = styled.a`
    font-size: 14px;
    color: #bf4343;
    text-decoration: underline;

    @media only screen and (max-device-width: 480px) {
      /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
      font-size: 42px;
     }
`;