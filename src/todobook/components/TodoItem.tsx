import { useState, useContext } from 'react';
import { TodobookContext } from '../context/TodobookContext';

import { EditTodo } from './EditTodo';

import { Todo } from "../interfaces/interfaces"
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdDeleteOutline, MdEdit } from "react-icons/md";
import { IconButton } from '@mui/material';



interface props{
    todo:Todo
}

export const TodoItem = ({todo}:props) => {

  const { toogleTodo, deleteTodo } =  useContext( TodobookContext );

  const [isEditing, setIsEditing] = useState(false);


  return (
    <>
    <li style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'Line-through' : ''
    }}
      onDoubleClick={() => toogleTodo(todo.id)}

    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {todo.completed ?
            <MdOutlineCheckBox
              onClick={() => toogleTodo(todo.id)} />
            :
            <MdOutlineCheckBoxOutlineBlank
              onClick={() => toogleTodo(todo.id)} />}
        </div>
        <div>{todo.description}</div>
        <div>
          <IconButton aria-label="update" style= {{ color: '#040454'  }}>
                <MdEdit
                  onClick={() => setIsEditing(!isEditing)} />
          </IconButton>
          <IconButton aria-label="delete"  style= {{ color: '#040454'  }}>
              <MdDeleteOutline
                onClick={() => deleteTodo(todo.id)} />
          </IconButton>
        </div>
      </div>


    </li>
    <div>
        {isEditing && (<div><EditTodo todo={todo} /></div>)}
    </div>
    </>
  )
}
