import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { ImageAdd } from 'styled-icons/remix-fill';


export const Container = styled.div`

    background-image: url(${props => props.Image});
    background-size: 100% 100%;
    border: 1px solid black;
    height: 100%;

    margin-top: -33px;
`

export const Content = styled.div`

    margin-top: 70px;

    h2 {
        text-align: center;
        font-size: 70px;
    }

    h1 {
        text-align: center;
    }

    margin-left:80px;
    margin-right:80px;
    height: 1300px;
    background-color: rgb(225,225,225,0.4);

    padding-top: 1px;

`

export const PageContent = ({title, date, content, image}) => {
    return (
        <>
        <Container Image={image}> 
            <Content> 
                <h2> {title} </h2>
                <p Style="margin-left: 30px; font-size: 40px">  {content} </p>
                testing
            </Content>
        </Container>
        </>
    );
}