import { ADD_TODO } from './types';

// export const fetchTodos = (todos) => {
//     return {
//         type: FETCH_TODOS,
//         payload: todos
//     }
// }

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    } 
}
// export const changeJob = (todo) => {
//     return{
//         type: CHANGE_JOB,
//         payload: todo
//     }

// }