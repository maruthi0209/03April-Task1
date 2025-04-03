import { Component } from "react";

class Tasks extends Component{

    constructor() {
        super()
        this.state = {
            name : "",
            description : "",
            deadline : "",
            submitData : null
        }
        this.tasks = []
    }

    handleChange = (e) => {
        {this.setState({[e.target.name] : e.target.value})}
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {name, description, deadline} = this.state
        this.setState({submitData : {name, description, deadline}})
        this.tasks.push([name, description, deadline])
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Task Name</label>
                <input type="text" name="name" id="name" placeholder="Enter task name" onChange={this.handleChange}/> <br />
                <label htmlFor="description">Task Description</label>
                <input type="text" name="description" id="name" placeholder="Enter task description" onChange={this.handleChange}/> <br />
                <label htmlFor="deadline">Deadline</label>
                <input type="text" name="deadline" id="name" placeholder="Enter task deadline" onChange={this.handleChange}/> <br />
                <input type="submit" value="submit" />
            </form>

            <table>
                <thead>
                    <tr>
                        {
                            Object.keys(this.state).slice(0,(Object.keys(this.state).length)-1).map((value, index) => <th key={index}>{value}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.tasks.map((value, index) => 
                            <tr key={index}>
                                {value.map((col, index) => <td key={index}>{col}</td>)}
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </>
        )
    }
}

export default Tasks