import px2vw from "../../../utils/px2vw";

import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'

export const IconStyleWrapper = styled.div`

text-align: center;
background-color:black;
  
${StyledIconBase} {
      height: 35px;
      width: 35px;
      padding-left: ${px2vw(50)};
      padding-right: ${px2vw(50)};
      margin-top: ${px2vw(42)};
      margin-bottom: ${px2vw(42)};
  }

  @media only screen and (max-device-width: 480px) {
   /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
   background-color:#363636;

    ${StyledIconBase} {
      height: 75px;
      width: 75px;
      margin-bottom: ${px2vw(62)};
      margin-top: ${px2vw(62)};
      padding-left: ${px2vw(62)};
      padding-right: ${px2vw(62)};

    }
  }
`

export const SocialLink = styled.a`

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    margin-left: -500px;
   }
`





