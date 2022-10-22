import { useContext, useState } from 'react';
import { TodobookContext } from '../context/TodobookContext';
import { Button,  FormControl, Grid, TextField } from '@mui/material';

import { MdSend } from "react-icons/md";

import { Todo } from "../interfaces/interfaces"

interface props{
  todo:Todo
}

export const EditTodo = ({todo}:props) => {

  const [formValues, setFormValues] = useState({
    description: todo.description,
  })

  const handleInputChange = (event: any): void => {
      setFormValues({
          ...formValues,
          [event.target.name] : event.target.value
      })
  }

  const { updateTodo } =  useContext( TodobookContext );

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (formValues.description.trim().length <= 1) {
        return;
    }

    const newTodo  = {
        id: todo.id,
        description: formValues.description,
        completed: todo.completed,
        date: todo.date
    };

    updateTodo(newTodo);
    
  }

  return (
    <div>
        <form>
          <Grid container spacing={0.2} style = {{ marginTop : '1rem', marginBottom : '1rem'  }} >
          
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <FormControl fullWidth>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  name= "description"
                  value= {formValues.description}
                  onChange={handleInputChange}
                  required     
                />
              </FormControl>
            </Grid>

            
            <Grid item xs={2} sm={2} md={2} lg={2} >
              <Button 
                fullWidth
                variant="contained" 
                size="small"
                endIcon={<MdSend/>}
                type="submit"
                onClick={handleSubmit}
                style= {{ backgroundColor: '#040454'  }}
              >
                Update
              </Button>
            
            </Grid>
          </Grid>
      </form>
    </div>
  )
}
