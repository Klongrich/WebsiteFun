import React from 'react'
import styled from "styled-components";

const Container = styled.div`

    font-size: 18px;

    h2 {
        font-size: 20px;
        text-align: left;
    }

    ul {
        list-style-type: none;
    }


    li {
        padding-bottom: 20px;
    }


`

export const SwitzerlandTLDR = () => {

    return (
        <>
            <Container>
                <h2> TLDR: </h2>
                <ul>
                    <li> - Not cheap </li>
                    <li> - Awesome mountain and ski towns.</li>
                    <li> - Bern is the unofficial capital of the country</li>
                    <li> - Very low crime rate</li>
                    <li> - There is no national language.</li>
                    <li> - Not part of the EU</li>
                    <li> - My favorite country I visited.</li>
                </ul>
            </Container>

            <p> Extended Story Comming soon....</p>
        </>
    );
}

export const BelguimTLDR = () => {

    return (
        <>
            <Container>
                <h2> TLDR: </h2>
                <ul>
                    <li> - They have good waffles.</li>
                    <li> - Belgian beer is really good.</li>
                    <li> - There is a central area with a big castle. </li>
                </ul>
            </Container>

            <p> Extended Story Comming soon....</p>
        </>
    );
}
