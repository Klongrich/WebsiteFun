import React, { useState } from 'react'
import styled from "styled-components";

// import {RightArrowAlt} from '@styled-icons/boxicons-regular/RightArrowAlt'

import { ArrowReturnRight } from '@styled-icons/bootstrap/ArrowReturnRight'

import SignupMoblie from './moblie/signup_moblie'

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

    :focus{
        outline: 0;
        box-shadow: 0 0 10px blue;
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

    background-color: #d9e0ff;

    Height: 500px;

    font-family: sans-serif;

    padding-right: 50px;



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

export const Background = styled.div`

    background-color: #ebeeff;
    margin-top: -110px;
    padding-top: 90px;

`

export default function SignUp() {

    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    // const [password2, setPassword2] = useState("Re-Type Password");

    const [logInLink, setLogInlink] = useState("hidden");
    const [usernameTaken, setUsernameTaken] = useState("");

    const [signUpState, setSignUpState] = useState("Enter Email");
    const [currentText, setCurrnetText] = useState("");

    const [inputType, setInputType] = useState("text");


    function ValidateEmail(email) {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        } else {
            return (false)
        }
    }

    function updateAccountCreation(status) {

        if (status === "Taken") {
            setUsernameTaken("Email Taken");
            go_back();
        } else {
            setUsernameTaken("Account Created!");
            setLogInlink("visible");
        }

    }

    function sendUserInfo() {

        fetch('https://longrichk.com:3012/SignUp?Username=' + email.toLowerCase() + '&Password=' + password)
            .then(res => res.json())
            .then(data => updateAccountCreation(data.Username));

    }

    function clearText() {
        setCurrnetText("");
    }

    function go_back() {
        setSignUpState("Enter Email");
        updateUserInfo("Start");
        setLogInlink("hidden");
        setInputType("text");
    }


    function updateUserInfo(signUp) {

        if (signUp === "Start") {

            setSignUpState("Enter Email");
            setCurrnetText("Email");

            setInputType("text");
        }
        else if (signUp === "Enter Email") {

            if (ValidateEmail(currentText)) {

                setSignUpState("Password");
                setEmail(currentText);

                setCurrnetText("");
                setInputType("password");


            } else {

                setUsernameTaken("Email Not Vaild");
                updateUserInfo("Start");
            }


        }
        else if (signUp === "Password-retry") {

            setSignUpState("Password");
            setCurrnetText("");

            setInputType("password");

        }
        else if (signUp === "Password") {
            setSignUpState("Confrim Password");
            setPassword(currentText);
            setCurrnetText("");
            setInputType("password");

        }
        else {

            if (currentText === password) {
                setSignUpState("Account Created");
                sendUserInfo();
            } else {
                setUsernameTaken("Passwords Don't Match - Try Again");
                updateUserInfo("Password-retry");
            }

        }
    }


    function checkKey(key) {
        if (key === 13) {
            updateUserInfo(signUpState);
        }
    }


    if (window.innerWidth > 999) {
        return (
            <>

                <Background>
                    <Container>
                        <h2 Style="margin-left: 50px;"> Create Account</h2>

                        <p Style="margin-left: 50px;
                  margin-top: -20px;
                  font-weight: bold;">{signUpState}</p>
                        <TextAera type={inputType}
                            value={currentText}
                            borderColor={"purple"}
                            onClick={() => clearText()}
                            onKeyDown={e => checkKey(e.keyCode)}
                            onChange={e => setCurrnetText(e.target.value)}
                        />

                        <div Style="padding-right: 50px; margin-top: -5px;">
                            Enter <ArrowReturnRight size="35px" />
                        </div>
                        <br />

                        <div>

                            <MoblieButton onClick={() => go_back()}>
                                Go Back
        </MoblieButton>

                            <MoblieButton onClick={() => updateUserInfo(signUpState)}>
                                {signUpState}
                            </MoblieButton>

                        </div>

                        <br /> <br />

                        <h2 Style="margin-left: 70px; margin-top: 20px;">{usernameTaken}</h2>

                        <LoginLink link={logInLink}>
                            <a href='/login' Style="font-size: 30px;" >Go To Login Page</a>
                        </LoginLink>

                    </Container>
                </Background>
            </>
        )
    } else {

        return (
            <>
                <SignupMoblie />
            </>
        )
    }
}