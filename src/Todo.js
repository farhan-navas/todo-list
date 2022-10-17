import React, { Component } from 'react'
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { task: this.props.message, isEditing: false, completed: false }
        this.handleClick = this.handleClick.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
    }

    handleClick() {
        this.props.removeTodo(this.props)
    }

    handleEdit() {
        let newValue = !this.state.isEditing
        this.setState({ isEditing: newValue })
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

    handleComplete() {
        let newValue = !this.state.completed
        this.setState({ completed: newValue })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = 
                <div className='TodoBox'>
                    <form className='TodoBox-editform' onSubmit={this.handleUpdate}>
                        <input type='text' value={this.state.task} name='task' onChange={this.handleChange}></input>
                        <button>
                            <i class="fa-regular fa-square-check"></i>
                        </button>
                    </form>
                </div>
        } else {
            result =
                <div className='TodoBox'>
                    <div className={this.state.completed ? 'TodoBox-message completed' : "TodoBox-message"} onClick={this.handleComplete} style={{ cursor: "pointer" }}>
                        <div className={this.state.completed ? 'TodoBox-icon complete-tick' : "TodoBox-icon incomplete-tick"}>
                            <i className="fa-sharp fa-solid fa-check"></i>
                        </div>
                        {this.props.message} 
                    </div>
                    <div className='TodoBox-buttons'>
                        <button onClick={this.handleEdit}>
                            <i className='fas fa-pen'></i>
                        </button>
                        <button onClick={this.handleClick}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
        }
        return result
    }
}

export default Todo