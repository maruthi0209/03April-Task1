import { Component } from "react";

class Form extends Component{
    constructor(){
        super()
        this.state = {
            username : "",
            passowrd : "",
            submitData : null

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {username, password} = this.state
        this.setState({submitData : {username, password}})
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter your username" onChange={(e) => {this.setState({username : e.target.value})}}/><br></br>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => {this.setState({password : e.target.value})}}/><br></br>
                <input type="submit" value="submit"/>
            </form>

            <div>
                <h2>{this.state.submitData && this.state.submitData.username}</h2>
                <h2>{this.state.submitData && this.state.submitData.password}</h2>
            </div>
            </>
        )
    }
}

export default Form