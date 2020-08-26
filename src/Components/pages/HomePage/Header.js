import React , {useEffect, useState} from "react";
import styled from "styled-components";

export const Header = styled.div`

  padding-top: 36px;
  padding-left: 32px;


  display: flex;
  flex-wrap: wrap;
  
  color: white;
  font-size: 42px;
`;

export const HeaderLinks = styled.div`

    margin-left: 48%;
    margin-bottom: 42px;
    margin-top: -3px;

    a {
        padding-left: 38px;
        font-size: 14px;
        color: #bf4343;
        text-decoration: underline;
    }

`

export const MoblieHeader = styled.div`

  padding-top: 25px;
  padding-left: 15px;

  color: white;
  font-size: 42px;

`;

export const MoblieLinks = styled.div`

   float: left;
   padding-top: 20px;
   padding-bottom: 50px;

    a {
        padding-left: 15px;
        font-size: 18px;
        color: #bf4343;
        text-decoration: underline;
    }
`

const Links = () => {
    return (
        <>
        <a href="/articles"> Articles </a>
        <a href="/about"> About </a>
        <a href="https://github.com/Klongrich/WebsiteFun"> Website Source Code </a>
        </>
    )
}

export const TestHeader = ({width, height}) => {
    if (width > 480) {
        return (
            <>
            <Header>
                Kyle Longrich 
                <HeaderLinks>
                    <Links />
                </HeaderLinks>
            </Header>
            </>
            );
        } else {
            return (
            <>
            <MoblieHeader>
                Kyle Longrich
            </MoblieHeader>

            <MoblieLinks>
                <Links />
            </MoblieLinks>
            </>
        );
    }
}