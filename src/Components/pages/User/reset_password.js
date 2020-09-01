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
export default function SignUp () {

    const [password, setPassword] = useState("Password");
    const [password2, setPassword2] = useState("Re-type Password");
    
    const [status, setStatus] = useState("");

    function sendNewPassword() {

        var Temp = window.location.href.split("=");
        
        var token = Temp[1];

        fetch('http://longrichk.com:3012/SetNewPassword?token=' + token + '&password=' + password)
        .then(res => res.json())
        .then(data => console.log(data));

        setStatus("Password Reset");
    }

    function clearPassword() {
        setPassword("");
    }

    function clearPassword2() {
        setPassword2("");
    }

        return (
            <>
        <h2 Style="margin-left: 50px;"> Reset Password</h2>

        <TextAera   type="text"
                      value={password}
                      onClick={() => clearPassword()}
                      onChange={e => setPassword(e.target.value)}
                      />

        <br />
        <TextAera type="text"
                      value={password2}
                      onClick={() => clearPassword2()}
                      onChange={e => setPassword2(e.target.value)}
                      />
        <br />

        <SubmitButton  onClick={() => sendNewPassword() }>
            Submit
        </SubmitButton>
        
        <h2 Style="margin-left: 50px">{status}</h2>

        </>
    )
}