import { useEffect, useReducer } from 'react';

import { TodobookContext } from './TodobookContext';
import { Todo, TodoState } from '../interfaces/interfaces';
import { todobookReducer } from './TodobookReducer';


let INITIAL_STATE: TodoState;

const storedValues = localStorage.getItem("todoList"); 
   
if(storedValues) {
    INITIAL_STATE =  {todoList: JSON.parse(storedValues)};
}else{
    let date = new Date();

    INITIAL_STATE = {
        todoList: [
            {
             id: '1',
             description: 'Start to use ToDoBook',
             date: date.toLocaleDateString(),
             completed: true
            },
            {
            id: '2',
            description: 'Be cool',
            date: date.toLocaleDateString(),
            completed: true
            },
        ] 
    }

}


interface todobookproviderprops {
    children: JSX.Element | JSX.Element[];
}

export const TodobookProvider = ({children}:todobookproviderprops) => {

    const [todoState, dispatch] = useReducer(todobookReducer, INITIAL_STATE)

    const toogleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload:{id}})
    }

    const addTodo = (newTodo:Todo) => {
        dispatch({type: 'addTodo', payload:newTodo})
    }

    const updateTodo = (editTodo:Todo) => {
        dispatch({type: 'updateTodo', payload:editTodo})
    }

    const deleteTodo = (id: string) => {
        dispatch({ type: 'deleteTodo', payload:{id}})
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoState.todoList));
    }, [todoState]);



    return (
        <TodobookContext.Provider value={{todoState, toogleTodo, addTodo, deleteTodo, updateTodo}}>
            { children }
        </TodobookContext.Provider>
  )
}
