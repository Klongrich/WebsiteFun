import React , {useEffect, useState} from 'react'
import styled from "styled-components";

import DashBoard from '../Dashboard/dashboard'

import Login_Moblie from './moblie/login_moblie'

export const SubmitButton = styled.button`
    margin-left: 180px;
    width: 100px;
`

export const TextAera = styled.input`

    margin-top: 30px;
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
    margin-top: 4%;

    background-color: #d9e0ff;

    Height: 570px;

    font-family: sans-serif;



`

export const MoblieButton = styled.div`

  margin-top: 60px;
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
    padding-top: 100px;
    height: 680px;

`

const account_details = {
    match: false,
    username: 'null',
    account_creation: 'null'
}


export default function SignUp () {

    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [password, setPassword] = useState(localStorage.getItem('password'));
    const [accountCreationDate, setAccountCreationDate] = useState("");
    
    const [accountInfo, setAccountInfo] = useState(account_details);

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

            localStorage.setItem('username', data.username); 
            localStorage.setItem('AccountCreation', data.account_creation);    
        });

        
    }

    useEffect(() => {

    })

    function clearEmail(){
        setEmail("");
    }

    function clearPassword() {
        setPassword("");
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
        <h2 Style="margin-top: 60px; padding-bottom:-50px;"> Log In</h2>

        <TextAera   type="text"
                      value={email}
                      onClick={() => clearEmail()}
                      onChange={e => setEmail(e.target.value)}
                      />

        <br />
        <TextAera type="password"
                      value={password}
                      onClick={() => clearPassword()}
                      onChange={e => setPassword(e.target.value)}
                      />
        <br />


            <div>
        <a href="/">
        <MoblieButton>
             Go Back
        </MoblieButton>
        </a>
        

        <MoblieButton  onClick={() => sendUserInfo() }>
            Log In
        </MoblieButton>
        </div>
        
        <div Style="margin-top: 280px;">
            <h2> {accountInfo.match} </h2>

        <a href='/ForgotPassword' >Forgot Password?</a>
        </div>

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
