import px2vw from "../../../utils/px2vw";

import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'

export const IconStyleWrapper = styled.div`
${StyledIconBase} {
    height: 35px;
    width: 35px;
    padding-left: ${px2vw(21)};
    padding-right: ${px2vw(21)};
    margin-top: ${px2vw(42)};
    margin-bottom: ${px2vw(42)};
  }
`





