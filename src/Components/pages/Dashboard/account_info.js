import React, {useState, useEffect} from 'react'
import styled from "styled-components";


export const Container = styled.div`

    background-color: #a1afff;
    height: 600px;
    font-size: 18px;

    margin-top: 0px;
    padding-top: 30px;
    padding-left: 20px;

`

export default function Account_Info_Page() {
    return (
        <>
        <Container>
            <h2> Account Info </h2>
            <ul>
                <li>Creation Date: 09/02/2020</li>
                <li>Subscribed: No</li>
                <li>Email Verified: Yes</li>
                <li>Credit Card:</li>
            </ul>

            <ul>
                <li>Email: Longrichk@gmail.com</li>
                <li>Password: **********</li>
            </ul>
        </Container>
        </>
    );
}