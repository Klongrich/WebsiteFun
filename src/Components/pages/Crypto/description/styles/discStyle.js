import styled from "styled-components";
import px2vw from "../../../../../utils/px2vw";
import {StyledIconBase} from '@styled-icons/styled-icon'

export const SubmitButton = styled.button`
    margin-left: ${px2vw(82)};
    visibility: ${props => props.isVisible};
    height: ${props => props.setHeight};
    margin-top: 10px;   
    border-raidus: 15px;
`

export const Feedback = styled.textarea`
    visibility: ${props => props.isVisible};
    height: ${props => props.setHeight};
    width: 90%;
    margin-left: ${px2vw(82)};   
    resize:none;
    border-color: black;
    padding-top: 5px;
`

export const ValidEmailLabel = styled.div`
    color: ${props => props.textColor};
    font-size: 21px;
    visibility: ${props => props.isVisible};
    padding-top:12px;

`

export const EmailBox = styled.textarea`
    float: left;
    visibility: ${props => props.isVisible};
    height: ${props => props.setHeight};
    width: 42%;
    margin-left: ${px2vw(82)};   
    resize:none;
    font-size: 25px;
    padding-top: 8px;
    margin-right: 1%;
    border-color: ${props => props.borderColor};
`

export const IconStyleWrapper = styled.div`

  ${StyledIconBase} {
      margin-left: ${px2vw(82)};
      margin-top: ${px2vw(42)};
    }
`

export const FullWrapper = styled.div`
    margin-top: 0px;
`