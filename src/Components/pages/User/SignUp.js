import React , {useEffect, useState} from 'react'
import styled from "styled-components";

import {RightArrowAlt} from '@styled-icons/boxicons-regular/RightArrowAlt'

import {ArrowReturnRight} from '@styled-icons/bootstrap/ArrowReturnRight'

export const SubmitButton = styled.button`
    margin-left: 180px;
    width: 25%;
    font-size: 20px;
    padding: 20px;
    border-radius: 15px;

`

export const TextAera = styled.input`


    font-size: 30px;
    width: 63%;

    margin-left: 200px;
    float: left;

    border-radius: 80px;
    border: 7px #6685ff solid;

    padding-top: 5px;
    padding-bottom: 5px;

    padding-left: 10px;

    ::{
        color:black;
    }

`

export const LoginLink = styled.div`

    visibility: ${props => props.link};
    margin-left: 50px;
`

export const Container = styled.div`

    border: 3px #6685ff solid;

    border-radius: 15px;
    text-align:center;

    font-size: 30px;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 8%;

    background-color: #c4c4c4;

    Height: 450px;

    font-family: sans-serif;



`

export const MoblieButton = styled.div`

  margin-top: 10px;
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

export default function SignUp () {

    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    const [password2, setPassword2] = useState("Re-Type Password");
    const [hashPassword, setHashPassword] = useState("");
    const [logInLink, setLogInlink] = useState("hidden");

    const [usernameTaken, setUsernameTaken] = useState("");
    const [signUpState, setSignUpState] = useState("Submit Email");

    const [currentText, setCurrnetText] = useState("Enter Email");
    const [inputType, setInputType] = useState("text");

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
            setUsernameTaken("Username Taken");
        } else {
            setUsernameTaken("Account Created!");
            setLogInlink("visible");
        }

    }

    function sendUserInfo() {
        fetch('http://longrichk.com:3012/SignUp?Username=' + email + '&Password=' + password)
        .then(res => res.json())
        .then(data => updateAccountCreation(data.Username));
        
    }

    function clearText(){
        setCurrnetText("");
    }


    function updateUserInfo() {
        if (signUpState == "Submit Email"){            
            
            setSignUpState("Submit Password");
            setEmail(currentText);
            setCurrnetText("Password");
            
            //setInputType("password");

        } else {
            setPassword(currentText);
            setSignUpState("Account Created");
            sendUserInfo();
        }
    }


    useEffect(() => {

    })

    return (
        <>
        
        <Container>
        <h2 Style="margin-left: 50px;"> Create Account</h2>

        <TextAera   type={inputType}
                    value={currentText}
                    onClick={() => clearText()}
                    onChange={e => setCurrnetText(e.target.value)}
                    />

        <div Style="padding-right: 50px; margin-top: -5px;">
           Enter <ArrowReturnRight size="35px" />
        </div>
        <br />

        <div>
        
        <a href="/">
        <MoblieButton>
             Go Back
        </MoblieButton>
        </a>
        
        <MoblieButton  onClick={() => updateUserInfo() }>
            {signUpState}
        </MoblieButton>
        
        </div>
        
        <br />



        <h2 Style="margin-left: 50px"> {hashPassword} </h2>
        <h2 Style="margin-left: 50px">{usernameTaken}</h2>
        
        <LoginLink link={logInLink}>
            <a href='/login' >Go To Login Page</a>
        </LoginLink>
        
        </Container>
        </>
    )
}