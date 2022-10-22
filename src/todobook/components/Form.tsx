import { useContext, useState } from 'react';
import { TodobookContext } from '../context/TodobookContext';
import { Button,  FormControl, Grid, TextField } from '@mui/material';


export const Form = () => {

  const [formValues, setFormValues] = useState({
    description: ''
  })

  const handleInputChange = (event: any): void => {
      setFormValues({
          ...formValues,
          [event.target.name] : event.target.value
      })
  }


  const { addTodo } =  useContext( TodobookContext );

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (formValues.description.trim().length <= 1) {
        return;
    }
    let date = new Date();

    const newTodo  = {
        id: String(new Date().getTime()),
        description: formValues.description,
        date: date.toLocaleDateString(),
        completed: false
    };

    addTodo(newTodo);
    
}

  return (
    <form>
        <Grid container spacing={0.2} style = {{ marginTop : '1rem', alignItems:'end'  }} >
        
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <FormControl fullWidth>
              <TextField
                id="standard-basic"
                variant="standard"
                label="What do you want to do?"
                style = {{ borderColor : '#040454'  }}  
                name= "description"
                onChange={handleInputChange}
                required     
              />
            </FormControl>
          </Grid>

          
          <Grid item xs={4} sm={4} md={4} lg={4} >
            <Button 
              fullWidth
              variant="contained" 
              size="small"
              style={{  backgroundColor: '#040454' }}
              type="submit"
              onClick={handleSubmit}
            >
              Add task
            </Button>
          </Grid>
        </Grid>
    </form>
  )
}

