import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.completeTodo = this.completeTodo.bind(this)
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Inside component did update!")
        console.log(prevState.messages)
        console.log(this.state.messages)
    }

    addTodo(item) {
        let newMessages = [ ...this.state.messages, item]
        this.setState({ messages: newMessages })
    }

    removeTodo(item) {
        let removedMessages = this.state.messages.filter(message => message.id !== item.id)
        this.setState({ messages: removedMessages})
    }

    editTodo(id, editedTask) {
        let editedMessages = this.state.messages.map(message => {
            if (message.id === id) {
               return {...message, task: editedTask}
            } else {
                return message
            }
        })
        this.setState({ messages: editedMessages})
    }

    completeTodo(id) {
        let completedMessages = this.state.messages.map(message => {
            if (message.id ===  id) {
                return {...message, completed: true}
            } else {
                return message
            }
        })
        this.setState({ messages: completedMessages })
    }

    render() {
        const boxes = this.state.messages.map(message => {
            return <Todo key={message.id} id={message.id} message={message.task} removeTodo={this.removeTodo} editTodo={this.editTodo} completed={message.completed} />
        })
        return (
            <div className='TodoList'>
                <h1 className='TodoList-header'>To-do List!</h1>
                <div className='TodoList-description'>Simple Todo list made using CRA</div>
                <div className='TodoList-boxes'>
                    {boxes}
                </div>
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList