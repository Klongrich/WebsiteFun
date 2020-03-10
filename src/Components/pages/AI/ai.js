import React from 'react'
import { Line } from 'react-lineto'

class ai extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    HandleChange = event => {
        this.setState({ username: event.target.value });
     };

    render () {

        const sytled = {
                width: 100,
                height: 100,
                backgroundColor: 'red'
        }

        return (
            <div> 
                <React.Fragment>
                    <form>
                        <label htmlFor="username">username</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.HandleChange}
                            />
                    </form>
                <h3>Your username is: {this.state.username}</h3>
            </React.Fragment>    
        </div>
        );
    }
}

export default ai;