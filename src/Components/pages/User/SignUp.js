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

export const Background = styled.div`

    background-color: #ebeeff;
    margin-top: -110px;
    padding-top: 110px;

`

export default function SignUp () {

    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("Password");
    const [password2, setPassword2] = useState("Re-Type Password");

    const [logInLink, setLogInlink] = useState("hidden");
    const [usernameTaken, setUsernameTaken] = useState("");

    const [signUpState, setSignUpState] = useState("Submit Email");
    const [currentText, setCurrnetText] = useState("Enter Email");

    const [inputType, setInputType] = useState("text");

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });

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
        fetch('https://longrichk.com:3012/SignUp?Username=' + email + '&Password=' + password)
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
        <h2 Style="margin-left: 50px;"> Create Account</h2>

        <TextAera   type={inputType}
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

        <h2 Style="margin-left: 50px; margin-top: 20px;">{usernameTaken}</h2>
        
        <LoginLink link={logInLink}>
            <a href='/login' Style="font-size: 30px;" >Go To Login Page</a>
        </LoginLink>
        
        </Container>
        </Background>
        </>
        ) 
}