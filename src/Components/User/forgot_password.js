import React, { useEffect, useState } from 'react'
import styled from "styled-components";

export const SubmitButton = styled.button`
    margin-left: 180px;
    width: 100px;
`

export const Background = styled.div`

    background-color: #ebeeff;
    height: 680px;

    padding-top: 30px;

    p{
        text-align: left;
        font-weight: bold;
        margin-left: 190px;
    }

`

export const Container = styled.div`

    border: 3px #6685ff solid;

    border-radius: 15px;
    text-align:center;

    font-size: 25px;
    margin-left: 10%;
    margin-right: 10%;
    

    background-color: #d9e0ff;

    Height: 470px;

    font-family: sans-serif;

    padding-top: 70px;



`

export const TextAera = styled.input`

    margin-bottom: 0px;
    font-size: 30px;
    width: 67%;

    margin-left: 40px;
  

    border-radius: 80px;
    border: 7px #6685ff solid;

    padding-top: 5px;
    padding-bottom: 5px;

    padding-left: 10px;

    :focus{
        outline: 0;
        box-shadow: 0 0 10px blue;
      }


`

export const MoblieButton = styled.div`

  margin-top: 40px;
  margin-left: 180px;

  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 20px;
  text-align: center;

  width: 25%;

  height: 20px;

  border-radius: 10px;
  border: 3px #6685ff solid;

  font-family: sans-serif;

  color: #0a3cff;
  background-color: #a8baff;
  box-shadow: 1px 2px;

  float:left;
  
`

export default function Forgot_password() {

    const [email, setEmail] = useState("Please Enter Your Email");
    const [userText, setUserText] = useState("");

    // function ValidateEmail(mail)  {
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //         console.log("true")
    //         return (true)
    //     } else {
    //         console.log("false")
    //         return(false)
    //     }
    // }


    function sendResetPasswordEmail() {
        fetch('https://longrichk.com:3012/ResetPassword?username=' + email)
            .then(res => res.json())
            .then(data => console.log(data));

        setUserText("Reset Link Sent, Check Your Email");
    }

    useEffect(() => {

    })

    function clearEmail() {
        setEmail("");
    }

    return (
        <>
            <Background>
                <Container>
                    <h2 Style="margin-left: 50px;"> Forgot Password? </h2>

                    <TextAera type="text"
                        value={email}
                        onClick={() => clearEmail()}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <a href="/login">
                        <MoblieButton>
                            Go Back
            </MoblieButton>
                    </a>

                    <MoblieButton onClick={() => sendResetPasswordEmail()}>
                        Submit
            </MoblieButton>

                    <div Style="margin-top: 160px;">
                        <h2 Style="margin-left: 50px"
                            onClick={() => sendResetPasswordEmail()}
                        > {userText} </h2>

                    </div>


                </Container>
            </Background>
        </>
    )

}