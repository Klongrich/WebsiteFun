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

export const PageContent = () => {
    return (
        <Content> 
            <h2>This is some filler text</h2>
        </Content>
    );
}