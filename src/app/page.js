'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import Nav from './Navlog'


const defaultTheme = createTheme();

export default function page() {
  const [inputs,setInputs] = React.useState({
    email:"",password:""})

    const handleChange=(e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:[e.target.value]
  
       }))
    };
  
    const [errors,setErrors]=useState({});
  
    const handleSubmit=(e)=>
    {
      e.preventDefault();
    }
  return (
    <>
    <Nav/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Paper >
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding:'3em'
          }}
        >
          
          <Typography  variant="h3" sx={{fontWeight:'bolder',color:'orange'}}>
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="standard"
              value={inputs.email}
              onChange={handleChange}
              autoFocus
              required
            />
            {errors.email && <p className='error' style={{
            color:'red',
            fontSize:'small'
          }}>{errors.email}</p>}
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              variant="standard"
              autoComplete="current-password"
              value={inputs.password}
              onChange={handleChange}
              required
            />
          {errors.password && <p style={{
            color:'red',
            fontSize:'small'
          }}>{errors.password}</p>}

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              <Link href='./announcements' className='link' style={{textDecoration:'none'}}>
              Sign In
              </Link>
             
            </Button>
            <Grid item xs={6} md={6} lg={6} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end', // Align content to the extreme right
                    }}>
                    <Link href='./forgot_password' style={{
                      color: '#2C73EB',
                      textDecoration: 'none',
                      float: 'right'
                    }}>Forgot password</Link>
                  </Grid>
           
          </Box>
          {/* </Paper> */}
        </Box>
        </Paper>
      </Container>
    </ThemeProvider>
    </>
  );
}