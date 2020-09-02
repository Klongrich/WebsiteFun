import React , {useEffect, useState} from 'react'
import styled from "styled-components";

export const Background = styled.div`


`

export const Header = styled.div`

    h1{
        float:left;
        padding-right: 950px;
        padding-left: 20px;
    }

    h2{
        display: inline-block
    }

    background-color:#d9e0ff;
    border-bottom: 3px #6380ff solid;


`

export const SideNavBar = styled.div`


    background-color: #ebeeff;
    height: 600px;
    width: 200px;
    border-right: 3px #6380ff solid;
    text-align: center;

    float: left;

    margin-top: -20px;

`

export const MiddleContent = styled.div`



    text-align: center;

`

export default function DashBoard () {

    return (
        <>
            <Header>
                <h1>DashBoard</h1>
                <h2>Account</h2>
            </Header>
            
            <Background>
                <SideNavBar>
                   <h2> Articles </h2>
                </SideNavBar>

                <MiddleContent>
                   <h2> Exclusive Content </h2>
                   <h2> Stocks / Cryptos To Watch</h2>
                </MiddleContent>

            </Background>
        </>
    )
}