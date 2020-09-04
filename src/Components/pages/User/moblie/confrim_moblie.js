import React , {useEffect, useState} from 'react'
import styled from "styled-components";

import {Verified} from '@styled-icons/material-outlined/Verified'

export const Container = styled.div`

    border: 3px solid black;
    border-radius: 10px;

    text-align: center;

    margin-left: 10%;
    margin-right: 10%;

    font-size: 55px;

    a {
        font-size: 20px;
    }

    background-color: #d9e0ff;
    background-color: #e6e9ff;

`


export const Meta_Info = styled.div`
    visibility: ${props => props.visible}
`

export default function Email_confrim_forum () {

    const [confrimedState, setConfrimedState] = useState("Confriming......");
    const [showMeta, setShowMeta] = useState("hidden")


    useEffect( () => {

        //Getting Token Value
        var Temp = window.location.href.split("=");
        var token = Temp[1];

        check_token(token);
    })
    
    function check_data(data){

        console.log(data);
        if (data == undefined || data == 0){
                setConfrimedState("Invalid User");
        } else {
            setConfrimedState("Email Confrimed!");  
            setShowMeta("visible"); 
        }
        
    }

    function check_token(token)
    {
        fetch('https://longrichk.com:3012/checkToken?token=' + token)
        .then(res => res.json())
        .then(data => console.log(check_data(data)));
    }

    return (
         <>

         <div Style="background-color: #d9e0ff;
                     height: 1470px;
                     padding-top: 15%;">
         <Container>
        
            <h2> {confrimedState} </h2>

            <Meta_Info visible={showMeta}>
                <Verified size="135px" color="green" />
                <h2>Thank You</h2>
                <a Style="font-size: 55px;" href="/login" >
                    Go To LogIn Page
                </a>
            <br />
            <br />
            </Meta_Info>
        
        </Container>
        </div>
           
        </>
    )
}