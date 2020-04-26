import px2vw from "../../../utils/px2vw";

import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'

export const IconStyleWrapper = styled.div`

text-align: center;

@media (min-width: 1024px) {

  ${StyledIconBase} {
      height: 35px;
      width: 35px;
      padding-left: ${px2vw(21)};
      padding-right: ${px2vw(21)};
      margin-top: ${px2vw(42)};
      margin-bottom: ${px2vw(42)};
    }
  }

  @media only screen and (min-width: 960px) {
    /* styles for browsers larger than 960px; */
  }
  @media only screen and (min-width: 1440px) {
    /* styles for browsers larger than 1440px; */
  }
  @media only screen and (min-width: 2000px) {
    /* for sumo sized (mac) screens */
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

  @media only screen and (device-width: 768px) {
   /* default iPad screens */
  }

  /* different techniques for iPad screening */
  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
    /* For portrait layouts only */
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape) {
    /* For landscape layouts only */
  }
`

export const SocialLink = styled.a`

  @media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) or other phones */
    margin-left: -500px;
   }
`





