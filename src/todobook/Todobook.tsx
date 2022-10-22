import { TodobookProvider } from './context/TodobookProvider';

import { Container } from '@mui/material';
import Logo from '../assets/Logo.png';
import { TodoList } from './components/TodoList';


import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Form } from './components/Form';

export const Todobook = () => {
  return (
    <>
      <TodobookProvider>
        <Container maxWidth="lg" style={{margin: '1rem auto'}} >
            <img src={Logo} alt='Logo' / >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Form />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <TodoList />
                  </Grid>
              </Grid>
            </Box>

            
        </Container>
      </TodobookProvider>
    </>
  )
}
