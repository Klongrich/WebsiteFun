import React , {useEffect, useState} from 'react'
import styled from "styled-components";

import DashBoard from '../Dashboard/dashboard'
import Login_Moblie from './moblie/login_moblie'

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

export const LoginLink = styled.div`

    visibility: ${props => props.link};
    margin-left: 50px;
`

export const Container = styled.div`

    border: 3px #6685ff solid;

    border-radius: 15px;
    text-align:center;

    font-size: 25px;
    margin-left: 10%;
    margin-right: 10%;
    

    background-color: #d9e0ff;

    Height: 570px;

    font-family: sans-serif;



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

export const Meta_Info = styled.div`
    margin-top: 120px;
    visibility: ${props => props.visible}
`

const account_details = {
    match: "null",
    username: 'null',
    account_creation: 'null'
}


export default function SignUp () {

    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [password, setPassword] = useState(localStorage.getItem('password'));

    const [accountInfo, setAccountInfo] = useState(account_details);

    const [metaInfo, setMetaInfo] = useState("hidden");

    function ValidateEmail(mail)  {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            console.log("true")
            return (true)
        } else {
            console.log("false")
            return(false)
        }
    }

    function sendUserInfo() {
        fetch('https://longrichk.com:3012/LogIn?Username=' + email.toLowerCase() + '&Password=' + password)
        .then(res => res.json())
        .then(data => {
            console.log(setAccountInfo(data));

            setMetaInfo("visible");
            localStorage.setItem('username', data.username); 
            localStorage.setItem('AccountCreation', data.account_creation);    
        });

        
    }

    function clearEmail(){
        setEmail("");
    }

    function clearPassword() {
        setPassword("");
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
            sendUserInfo();
        }
    }


{/*}
    return (
        <>
            <DashBoard />
        </>
    );
    */}

    
    if (accountInfo.match == "Valid"){

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        return (
            <>
                <DashBoard />
            </>
        )

    } else if ( window.innerWidth > 999 ) {
        return (
            <>
        <Background>
            <Container>       
                <h2 Style="margin-bottom: -10px;" > Log In</h2>
                
                <p>Email</p>
                <TextAera   type="text"
                            value={email}
                            onClick={() => clearEmail()}
                            onChange={e => setEmail(e.target.value)}
                            />

                <br />

                <p>Password</p>
                <TextAera type="password"
                            value={password}
                            onClick={() => clearPassword()}
                            onChange={e => setPassword(e.target.value)}
                            onKeyDown={e => checkKey(e.keyCode)}
                            />
                <br />

                <a href="/">
                    <MoblieButton>
                        Go Back
                    </MoblieButton>
                </a>
                
                <MoblieButton  onClick={() => sendUserInfo()}>
                    Log In
                </MoblieButton>
                
                <Meta_Info visible={metaInfo}>
                    <h2> {accountInfo.match} </h2> 
                    <a href='/ForgotPassword' >Forgot Password?</a>
                </Meta_Info>

            </Container>
        </Background>

        </>
    )} else {

        return (
            <>
                <Login_Moblie />
            </>
        )
    }
        
}
