import React, {useState, useEffect} from 'react'
import styled from "styled-components";

export const Container = styled.div`

    background-color: #759ce6;
    margin-top: -33px;

`

export const Content = styled.div`

    margin-top: 0;
    margin-bottom: 5%;
    margin-left: 10%;
    width: 80%;
    height: 800px;

    margin-bottom: -50px;
    border: 1px black solid;

    h2 {
        text-align: center;
    }

    h1 {
        text-align: center;
    }

    background-color: white;

`

export const PageContent = ({title, date, content}) => {
    return (
        <>
        <Container> 
            <Content> 
                <h1> {title} </h1>
                <h2> {date} </h2>
                <p Style="margin-left: 30px;">  {content} </p>
            </Content>
        </Container>
        </>
    );
}