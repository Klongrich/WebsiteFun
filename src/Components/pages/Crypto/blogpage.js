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
    }

    h1 {
        text-align: center;
    }

    p{
        line-height: 2;
        margin-left: 20px;
        margin-right: 20px;
    }

    ul {
        list-style-type: none;
    }

    li {
        padding-top: 10px;
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
                <div>
                    {content}
                </div>
            </Content>
        </Container>
        </>
    );
}