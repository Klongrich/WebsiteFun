import React , {useEffect, useState} from 'react'
import styled from "styled-components";

import {RightArrowAlt} from '@styled-icons/boxicons-regular/RightArrowAlt'

import {ArrowReturnRight} from '@styled-icons/bootstrap/ArrowReturnRight'



export const TextAera = styled.input`


    font-size: 50px;
    width: 83%;

    margin-left: 50px;
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
`

export const Container = styled.div`

    border: 3px #6685ff solid;

    border-radius: 15px;
    text-align:center;

    font-size: 65px;

    margin-left: 8%;
    margin-right: 8%;
    margin-top: 8%;

    background-color: #d9e0ff;

    Height: 1050px;

    font-family: sans-serif;

    padding-top: 50px;




`

export const MoblieButton = styled.div`

  margin-top: 100px;
  margin-left: 50px;

  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 35px;
  text-align: center;

  width: 35%;

  height: 50px;

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
    padding-top: 110px;

    height: 1740px;

`

export default function SignUp_Moblie () {

    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    const [password2, setPassword2] = useState("Re-Type Password");

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
        fetch('https://longrichk.com:3012/SignUp?Username=' + email.toLowerCase() + '&Password=' + password)
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


    function useKey(key) {
        // Keep track of key state
        const [pressed, setPressed] = useState(false)
    
        // Does an event match the key we're watching?
        const match = event => key.toLowerCase() == event.key.toLowerCase()
    
        // Event handlers
        const onDown = event => {
            if (match(event)) setPressed(true)
        }
    
        const onUp = event => {
            if (match(event)) setPressed(false)
        }
    
        // Bind and unbind events
        useEffect(() => {
            window.addEventListener("keydown", onDown)
            window.addEventListener("keyup", onUp)
            return () => {
                window.removeEventListener("keydown", onDown)
                window.removeEventListener("keyup", onUp)
            }
        }, [key])
    
        return pressed
    }
    
    function checkKey(key){
        if (key == 13) {
            updateUserInfo();
        }
    }
    


        return (
            <>
        
        
        <Background>
        <Container>
        <h2 Style="padding-bottom: 20px;"> Create Account</h2>

        <TextAera   type={inputType}
                    value={currentText}
                    borderColor={"purple"}
                    onClick={() => clearText()}
                    onKeyDown={e => checkKey(e.keyCode)}
                    onChange={e => setCurrnetText(e.target.value)}
                    />


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
        
        <br /> <br />

        <h2 Style="margin-top: 170px; font-size: 80px">{usernameTaken}</h2>
        
        <LoginLink link={logInLink}>
            <a href='/login' Style="font-size: 70px;
                                    text-decoration: none;
                                    margin-top: 40px;
                                    margin-left: -25px;" >
                                    Go To Login Page</a>
        </LoginLink>
        
        </Container>
        </Background>
        </>
           
        );
} 