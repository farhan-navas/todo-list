import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { task: this.props.message, isEditing: false }
        this.handleClick = this.handleClick.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        this.props.removeTodo(this.props)
    }

    handleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }
     
    handleUpdate(evt) {
        evt.preventDefault()
        this.props.editTodo(this.props.id, this.state.task)
        this.handleEdit()
        this.setState({ task: "" })
    }

    handleChange(evt) {
        this.setState({ task: evt.target.value })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = 
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.task} name='task' onChange={this.handleChange}></input>
                        <button>Done</button>
                    </form>
                </div>
        } else {
            result =
                <div>
                    <div className='Todo'>
                        {this.props.message}
                    </div>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={this.handleClick}>X</button>
                </div>
        }
        return result
    }
}

export default Todo