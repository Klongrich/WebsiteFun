import React, {useState} from 'react';
import sendInfo from './sendInfo'



export default function SubmitEmail () {

    const [name, setName] = useState("");
    const [data, setData] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
       
        const payload = {
            email: name,
            message: data,
        }
        console.log(payload);
        sendInfo(payload);
    }

    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit}>
                   
                    <div className="form-group">
                        <label>Email
                        <input  type="text" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                        />
                        </label>
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="message">Message
                        <textarea 
                            type="text"
                            value={data}
                            onChange={e => setData(e.target.value)}
                            height="150px"
                         />
                         </label>
                    </div>
                    
                    <input type="submit" value="Submit" />
                
                </form>
            </div>
        </>
    );
 
}