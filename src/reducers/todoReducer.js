import { FETCH_TODOS, ADD_TODO, DELETE_TODO, CHANGE_JOB } from '../actions/types';

const initialState = {
    mytodos: [
        // { id: 1, task: 'pray', completed: 'done' },
        // { id: 2, task: 'eat', completed: 'undone' },
        // { id: 3, task: 'code', completed: 'done' }
    ],
    mytodo: {},
    completed : false

}

export default function(state= initialState, action){
    if(action.type === FETCH_TODOS ){
        return {
            ...state,
            mytodos: action.payload
        }
    } else if(action.type === ADD_TODO ){
        return {
            ...state,
            mytodo: action.payload
        }
    } else if(action.type === DELETE_TODO ){
        let newTodos = state.mytodos.filter((todo, index) => index !== action.id );
        return{
            ...state,
            mytodos: newTodos 
        }
    } else if(action.type === CHANGE_JOB){
        // state.mytodos.map(todo => todo.completed = !todo.completed);
        // console.log(findTodo)   
        if(action.payload.completed !== false ){
            return state
        }
        return {
            ...state,
            completed: !state.completed
        }
    }
    return state;
    // switch (action.type) {
    //     case FETCH_TODOS:
    //         return {
    //             ...state,
    //             mytodos: action.payload
    //         }
    //     case ADD_TODO:
    //         return {
    //             ...state,
    //             mytodo: action.payload
    //         }
    //     case CHANGE_JOB:
    //         if(state.id !== action.payload){
    //             return state
    //         }
    //         return {
    //             ...state,
    //             completed: !state.completed
    //         }
    //     default:
    //         return state;
    // }
}