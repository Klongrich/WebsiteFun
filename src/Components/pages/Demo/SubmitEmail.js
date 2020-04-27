import React, {useState} from 'react';

export default function SubmitEmail () {

    const [payLoad, setPayLoad] = useState([]);

    const [name, setName] = useState("");
    const [data, setData] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setPayLoad([...payLoad, {email: name, 
                                  message: data}])

        fetch('http://localhost:3010/email',{
            method: "POST",
            body: JSON.stringify(payLoad),
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

    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit}>
                   
                    <div className="form-group">
                        <label>Name
                        <input  type="text" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                        />
                        </label>
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            type="text"
                            value={data}
                            onChange={e => setData(e.target.value)}
                         />
                    </div>
                    
                    <input type="submit" value="Submit" />
                
                </form>
            </div>
        </>
    );
 
}