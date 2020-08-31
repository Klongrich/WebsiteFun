import React , {useEffect, useState} from 'react'
import styled from "styled-components";

import axios from 'axios';

export const SubmitButton = styled.button`
    margin-left: 180px;
    width: 100px;
`

export const TextAera = styled.input`

    border-radius: 5px;
    margin-left: 50px;
    font-size: 20px;
    margin-bottom: 30px;


`
export default function SignUp () {

    const [email, setEmail] = useState("Enter Email Here");
    const [password, setPassword] = useState("Enter Password Here");

    const [usernameTaken, setUsernameTaken] = useState("");



    function ValidateEmail(mail)  {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log("true")
            return (true)
        } else {
            console.log("false")
            return(false)
        }
    }

    function updateAccountCreation(status) {

        if (status == "Taken") {
            setUsernameTaken("Taken");
        } else {
            setUsernameTaken("Account Created!");
        }

    }

    function sendUserInfo() {

        fetch('http://longrichk.com:3012/checkUser?Username=' + email + '&Password=' + password)
        .then(res => res.json())
        .then(data => updateAccountCreation(data.Username));
    }

    useEffect(() => {

    })

    return (
        <>

        <h2 Style="margin-left: 50px;"> Welcome to SignUp Page</h2>

            <TextAera type="text"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      />

        <br />
        <TextAera type="text"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      />
        <br />

        <SubmitButton  onClick={() => sendUserInfo() }>
            Submit
        </SubmitButton>

        <h2 Style="margin-left: 50px">{usernameTaken}</h2>

        </>
    )
}