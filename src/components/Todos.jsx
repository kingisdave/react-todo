import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Todos extends Component {
    
    componentWillReceiveProps(nextProps){
        if(nextProps.newtodo){
            this.props.todos.unshift(nextProps.newtodo);
        }
    }
    deleteTodo=(id)=>{
        this.props.deleteTodo(id);
    }
    // changeTodo=(completed)=>{
    //     this.props.changeJob(completed);
    // }
    
    render() {
        console.log(this.props);
        
        let todoItems = this.props.todos.map((todo, index) => (
            <li key={index}>
                <span>{todo.id}</span>
                <span>{todo.task}</span>
                {/* {!this.props.completed ? <button onClick={()=>this.changeTodo(todo)}>Done</button>
                 : <button>Not Done</button>} */}
                <button onClick={()=>this.deleteTodo(index)}>Remove</button>
            </li>
        ))
        return (
            <div>
                <h3>Todos</h3>
                <ul>
                    { todoItems.length > 0 ? todoItems : <p>Nothing to show</p> }
                </ul> 
            </div>
        )
    }
}
Todos.propTypes = {
    fetchTodos: propTypes.func.isRequired,
    todos: propTypes.array.isRequired,
    newtodo: propTypes.object
}

const mapStateToProps = state => ({
    todos: state.todos.mytodos,
    newtodo: state.todos.mytodo,
    // completed: state.todos.completed
})

const mapDispatchToProps = (dispatch) => {
    return{
        fetchTodos: (todos) => dispatch({type: 'FETCH_TODOS', payload: todos}), 
        deleteTodo: (id) => {dispatch({type: 'DELETE_TODO', id: id}) },
        // changeJob: (completed) => dispatch({type: 'CHANGE_JOB', payload: completed})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
