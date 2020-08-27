import React, {useState, useEffect} from 'react'
import styled from "styled-components";


export const Content = styled.div`

    margin-top: 5%;
    margin-bottom: 5%;
    margin-left: 10%;
    width: 80%;
    height: 800px;
    border: 1px black solid;

`

export const PageContent = ({title, date, content}) => {
    return (
        <>
        <Content> 
            <h2> {title} </h2>
            <h1> {date} </h1>
            <p>  {content} </p>
        </Content>
        </>
    );
}