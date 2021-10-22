
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Redirect} from 'react-router-dom';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import FetchData from '../FetchData';


const theme = createTheme();

class Signup extends React.Component 
{
    constructor()
    {
        super();
        this.state = {username:'', password:'', name:'', email:'', redirectToReferrer:false};
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signup()
    { 
        if(this.state.username && this.state.password)
        {
            FetchData('signup', this.state).then((result) =>
            {
                let responseJson = result;
                 
                 if(responseJson.userData)
                 {
                     sessionStorage.setItem('userData', JSON.stringify(responseJson));
                     this.setState({redirectToReferrer: true});
                 }
            });
        } 
    }

    onChange(changed)
    {
        this.setState({[changed.target.name]:changed.target.value});
        console.log(this.state);
    }

    render()
    {
        if(this.state.redirectToReferrer || sessionStorage.getItem('userData'))
        {
            return (<Redirect to={'/forums'}/>)
        }
            
        return (
            <ThemeProvider theme={theme}>
            <header> 
                    <AppBar position="relative">
                    <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>Health Forum</Typography>

                    <ButtonGroup disableElevation variant="contained" size="meduim">
                    <Button color="primary" variant="contained" href="http://localhost:3000/" disableevelation>Homepage</Button>
                    <Button color="primary" variant="contained" href="http://localhost:3000/login" disableevelation>Login</Button>
                    </ButtonGroup>
                    </Toolbar>
                    </AppBar>
            </header>
            
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>        
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                </Avatar>

                <Typography component="h1" variant="h5">Sign up</Typography>
                <Box component="form" noValidate onSubmit={this.signup} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                
                <Grid item xs={12} sm={6}>
                <TextField autoComplete="name" name="name" required fullWidth id="name" label="Name" autoFocus/>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="username" label="Username" name="username" autoComplete="username" />
                </Grid>

                <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                </Grid>

                <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password"/>
                </Grid>

                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Sign Up </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                </Grid>
                </Grid>
                </Box>
                </Box>
            </Container>
            </ThemeProvider>
            );
    }
}   

export default Signup;