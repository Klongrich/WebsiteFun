import React , {useEffect, useState} from 'react'
import styled from "styled-components";

export default function Email_confrim_forum () {

    const [confrimedState, setConfrimedState] = useState("");

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
            setConfrimedState("email confrimed!");   
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
            <h2>Email Confrimed!</h2>
            <h2>Thank You</h2>
            <a href="/login" >
                Go To LogIn Page
            </a>
            <br />
            <br />
            <h2> {confrimedState} </h2>
        </>
    )
}