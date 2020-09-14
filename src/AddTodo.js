import React, { Component } from 'react'

class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            content : ''
        }
    }

    handleChange = (event) => {
        const {value} = event.target
        this.setState({
            content : value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content : ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add a new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddTodo