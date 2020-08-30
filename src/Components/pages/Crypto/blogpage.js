import React, {useState, useEffect} from 'react'
import styled from "styled-components";

export const Container = styled.div`

    background-color: #759ce6;
    margin-top: -33px;

`

export const Content = styled.div`

    font-family:  Montserrat;

    margin-top: 0;
    margin-bottom: 5%;
    margin-left: 10%;
    width: 80%;
    height: 100%;

    margin-bottom: -50px;
    
    border-top: none; 

    border: 1px #525252 solid;

    h2 {
        text-align: center;
        font-size: ${props => props.HeaderSize}
    }

    h1 {
        text-align: center;
        font-size: ${props => props.HeaderSize}
    }

    p{
        line-height: 2;
        margin-left: 20px;
        margin-right: 20px;
        font-size: ${props => props.FontSize}
    }

    ul {
        list-style-type: none;
    }

    li {
        padding-top: 10px;
        font-size: ${props => props.FontSize}
    }

    background-color: white;

`

export const PageContent = ({title, date, content, fontSize, headerSize}) => {
    return (
        <>
        <Container> 
            <Content FontSize={fontSize}
                     HeaderSize={headerSize}
                     > 
                <h1> {title} </h1>
                <h2> {date} </h2>
                <div>
                    {content}
                </div>
            </Content>
        </Container>
        </>
    );
}