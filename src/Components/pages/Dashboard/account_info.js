import React, {useState, useEffect} from 'react'
import styled from "styled-components";


export const Container = styled.div`

    background-color:#d9e0ff;

    height: 600px;
    font-size: 18px;

    margin-top: 0px;
    
    padding-top: 15px;
    padding-left: 20px;

    ul{
        list-style-type: none;
    }

    li {
        padding-bottom: 10px;
        font-size: 18px
    }

`

export default function Account_Info_Page() {
    return (
        <>
        <Container>
            <h2 Style="font-size: 24px;"> Account Info </h2>
            <ul>
                <li> Creation Date: <b> 09/02/2020 </b></li>
                <li>Subscribed: <b> No </b> </li>
                <li>Email Verified: <b> Yes </b></li>
                <li>Credit Card:</li>
            </ul>

            <ul>
                <li>Email: <b> Longrichk@gmail.com </b> </li>
                <li>Password: <b> *************** </b></li>
            </ul>
        </Container>
        </>
    );
}