import { useContext } from 'react';
import { TodobookContext } from '../context/TodobookContext';

import { TodoItem } from "./TodoItem";



import styled from "styled-components";

const List = styled.ul`
  color: #000;
  font-size: 1.5rem;
  padding: 0;
  border: 2px solid #040454;

  li{
    list-style: none;
    border-bottom: 2px dotted #040454;
    font-family: 'Caveat', cursive;
    height: auto; 
    padding: 0.5rem;
  }

  li:last-child{
    border:none;
  }

  li:hover {
    background-color: #f5f5f5;
  }
`;

const Message = styled.p`
  font-style: italic;
  text-align: right;
`

export const TodoList = () => {


  const { todoState } = useContext( TodobookContext );
  const { todoList } = todoState;

  return (
    <>
      <Message>double click to mark a task as completed</Message>
      {todoList.length > 0  ? 
        <List>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
        </List>

      : 

        <h3>There are no tasks yet. How about adding some?</h3>
      
      }
    
      </>
  );
};
