import React from 'react'
import styled from "styled-components";

// import { ImageAdd } from 'styled-icons/remix-fill';


export const Container = styled.div`

    background-image: url(${props => props.Image});
    background-size: 100% 100%;
    border: 1px solid black;

    margin-top: 0px;
`

export const Content = styled.div`

    margin-top: 20px;

    h2 {
        text-align: center;
        font-size: 50px;
    }

    h1 {
        text-align: center;
    }

    margin-left:80px;
    margin-right:80px;
    height: 1300px;
    background-color: rgb(225,225,225,0.6);

    padding-top: 1px;

`

export const PageContent = ({ title, date, content, image }) => {
    return (
        <>
            <Container Image={image}>
                <Content>
                    <h2> {title} </h2>
                    <p Style="margin-left: 30px; font-size: 40px">  {content} </p>
                </Content>
            </Container>
        </>
    );
}