import React , {useEffect, useState} from 'react'
import styled from "styled-components";

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
export default function Forgot_password () {

    const [email, setEmail] = useState("Email");
    const [forgotPassword, setForgotPassword] = useState("");
    
    function ValidateEmail(mail)  {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log("true")
            return (true)
        } else {
            console.log("false")
            return(false)
        }
    }


    function sendResetPasswordEmail() {
        fetch('http://longrichk.com:3012/ResetPassword?username=' + email )
        .then(res => res.json())
        .then(data => console.log(data));
        
        setForgotPassword("Reset Link Sent, Check Your Email");
    }

    useEffect(() => {

    })

    function clearEmail(){
        setEmail("");
    }

    return (
        <>
        <h2 Style="margin-left: 50px;"> Forgot Password </h2>

        <TextAera     type="text"
                      value={email}
                      onClick={() => clearEmail()}
                      onChange={e => setEmail(e.target.value)}
                      />

        <SubmitButton  onClick={() => sendResetPasswordEmail() }>
            Submit
        </SubmitButton>
        
        <h2 Style="margin-left: 50px" 
                    onClick={() => sendResetPasswordEmail()}
                    > {forgotPassword} </h2>

        </>
    )
    
}