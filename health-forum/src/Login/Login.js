import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Redirect} from 'react-router-dom';
import {Component} from 'react';
import FetchData from '../FetchData';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';


const theme = createTheme();

class Login extends Component 
{
    constructor()
    {
        super();
        this.state = {username:'', password:'', redirectToReferrer:false};
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login()
    {            
        if(this.state.username && this.state.password)
        {
            FetchData('login', this.state).then((result) =>
            { 
                let responseJson = result;
                 
                 if(responseJson.userData)
                 {
                     sessionStorage.setItem('userData', JSON.stringify(responseJson));
                     this.setState({redirectToReferrer: true});
                 }
                 else
                 {
                    console.log("Error login")
                 }
            });
        } 
    }

    onChange(changed)
    {
        this.setState({[changed.target.name]:changed.target.value});
    }

    render()
    {
        if(this.state.redirectToReferrer || sessionStorage.getItem('userData'))
        {
            return (<Redirect to={'/forums'}/>);
        }

        return(
            <ThemeProvider theme={theme}>
            
            <header> 
            <AppBar position="relative">
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>Health Forum</Typography>
 
            <ButtonGroup disableElevation variant="contained" size="meduim">
            <Button color="primary" variant="contained" href="http://localhost:3000/">Homepage</Button>
            <Button color="primary" variant="contained" href="http://localhost:3000/signup">Signup</Button>
            </ButtonGroup>

            </Toolbar>
            </AppBar>
            </header>
            
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
           
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onChange={this.onChange} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    />
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    />
                    
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={this.login}
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Login</Button>
                </Box>
                </Box>
            </Container>
            </ThemeProvider>
        );
    }
}

export default Login;