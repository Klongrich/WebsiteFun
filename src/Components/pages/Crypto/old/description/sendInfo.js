import React from 'react'


export default function sendInfo (payload) {

    fetch('http://localhost:3010/email',{
            method: "POST",
            body: JSON.stringify(payload),
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
        }).then(
    	    (response) => (response.json())
        ).then((response)=>{
            if (response.status === 'success') {
                alert("Thank You! Message Sent.");
            } else {
                alert("Message failed to send.")
            }
        })   
}