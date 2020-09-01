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

export const LoginLink = styled.div`

    visibility: ${props => props.link};
    margin-left: 50px;
`

export default function SignUp () {

    const [email, setEmail] = useState("Enter Email Here");
    const [password, setPassword] = useState("Enter Password Here");
    const [hashPassword, setHashPassword] = useState("");
    const [logInLink, setLogInlink] = useState("hidden");

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

    function clearEmail(){
        setEmail("");
    }

    function clearPassword() {
        setPassword("");
    }

    useEffect(() => {

    })

    return (
        <>

        <h2 Style="margin-left: 50px;"> Welcome to SignUp Page</h2>

            <TextAera type="text"
                      value={email}
                      onClick={() => clearEmail()}
                      onChange={e => setEmail(e.target.value)}
                      />

        <br />
        <TextAera type="text"
                      value={password}
                      onClick={() => clearPassword()}
                      onChange={e => setPassword(e.target.value)}
                      />
        <br />

        <SubmitButton  onClick={() => sendUserInfo() }>
            Submit
        </SubmitButton>

        <h2 Style="margin-left: 50px"> {hashPassword} </h2>
        <h2 Style="margin-left: 50px">{usernameTaken}</h2>
        
        <LoginLink link={logInLink}>
            <a href='/login' >Go To Login Page</a>
        </LoginLink>
        
        </>
    )
}