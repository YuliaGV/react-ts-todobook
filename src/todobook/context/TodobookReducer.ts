import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction = {type: 'addTodo', payload: Todo} 
                | {type: 'toggleTodo', payload: {id:string}} 
                | {type: 'deleteTodo', payload: {id:string}} 
                | {type: 'updateTodo', payload: Todo }

export const todobookReducer = (state:TodoState, action:TodoAction): TodoState => {

    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todoList:[...state.todoList, action.payload]
            }
        case 'toggleTodo':
            return {
                ...state,
                todoList: state.todoList.map( ({...todo}) => {
                    if(todo.id === action.payload.id){
                        todo.completed = !todo.completed
                    }
                    return todo;
                })
            }   
        case 'deleteTodo':
            return {
                ...state, 
                todoList: state.todoList.filter(todo => todo.id !== action.payload.id),
                
            }
        case 'updateTodo':
            return {
                ...state,
                todoList: state.todoList.map( ({...todo}) => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            ...action.payload
                        }
                    } else {
                        return todo;
                    }
                })
            }

        default:
            return state;
    }
    
}