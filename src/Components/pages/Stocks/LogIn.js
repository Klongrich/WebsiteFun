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

    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    
    const [logInStatus, setLogInStatus] = useState("");



    function ValidateEmail(mail)  {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log("true")
            return (true)
        } else {
            console.log("false")
            return(false)
        }
    }

    function updatePage(status) {

        if (status == "Vaild") {
          
        } else if (status == "Invaild Password") {

        } else {
            
        }

    }

    function sendUserInfo() {
        fetch('https://longrichk.com:3012/LogIn?Username=' + email + '&Password=' + password)
        .then(res => res.json())
        .then(data => console.log(setLogInStatus(data.match)));
        
    }

    useEffect(() => {

    })

    if (logInStatus == "Valid"){
        
        return (
            <>
                <h2>Congrats, Your Logged In!</h2>

                <p Style="font-style: bold">Username: {email}</p>

                <p>
                    Thank you for creating an account early! Stay tunned for more content.
                </p>

                <p>
                    Thank you again.
                </p>
            </>
        )

    } else {
        return (
            <>
                <h2 Style="margin-left: 50px;"> Log In</h2>

        <TextAera   type="text"
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
        
        <h2 Style="margin-left: 50px">{logInStatus}</h2>

        </>
    )
    }
}