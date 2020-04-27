import React from 'react'


export default function sendInfo (payload) {

    fetch('https://longrichk.com:3011/email',{
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
                alert("Message Sent."); 
                this.resetForm()
            } else {
                alert("Message failed to send.")
            }
        })   
}