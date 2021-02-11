import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from  'react-redux';
import { addTodo } from '../actions/todoAction';

class AddTodo extends Component {
    state = {
        task: "",
        completed: false

    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const todo = {
            task: this.state.task,
            completed: this.state.completed
        };
        this.props.addTodo(todo);
    }

    render() {
        
        return (
            <div>
                <h3>Add New Todo</h3>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
                    </div>
                    {/* <div>
                        <input type="text" name="completed" value={this.state.completed} onChange={this.handleChange} hidden/>
                    </div> */}
                    <button type="submit">Add</button>
                </form>       
            </div>
        )
    }
}
AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired
}

export default connect(null, {addTodo})(AddTodo);