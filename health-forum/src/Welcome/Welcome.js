import {useHistory} from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Welcome() 
{
  const theme = createTheme();

  let history = useHistory();

  return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>Health Forum</Typography>
        
        <ButtonGroup disableElevation variant="contained" size="meduim">
        <Button onClick={() => {history.push('/login')}}>Login</Button>
        <Button onClick={() => {history.push('/signup')}}>Signup</Button>
        </ButtonGroup>

        </Toolbar>
        </AppBar>
        <main>
        <Box sx={{bgcolor: 'background.paper',pt: 8,pb: 6,}}>
        <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
            This is the welcome page of a health forum! 
            You can share all your ideas and thoughts concerning any medical information.
        </Typography>
        </Container>
        </Box>
        </main>
    </ThemeProvider>
  );
}

export default Welcome;