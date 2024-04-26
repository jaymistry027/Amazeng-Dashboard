'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Paper } from '@mui/material';
import Nav from '../Navlog.js'

const defaultTheme = createTheme();

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get('email'));
    handleClose();
  };

  return (
    <>
    <Nav/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper>
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontFamily: 'Roboto',marginTop:'30px' }}>
            Forgot Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, allignItems: 'centre' }}
          >
            <TextField
              sx={{ width: '250px',}}
              required
              name="email"
              variant="standard"
            />
            <Typography
              sx={{
                color: '#696F79',
                fontSize: '16px',
                fontWeight: '400',
                // marginBottom: '0.5em',
                // marginTop: '30px',
                mt: '1',
              }}
            >
              Email Address or User ID*
            </Typography>
            <br />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                mb: 2,
                color:'white',
                fontSize: '15px',
                padding: '0px',
                '&:hover': {
                  backgroundColor: 'cyan',
                  color:'black'
                },
              }}
              onClick={handleOpen}
            >
              Get OTP
            </Button>
          </Box>
        </Box>
        </Paper>
      </Container>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxHeight fullWidth>
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <TextField label="OTP" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            <Link href='../reset_password' className='link' style={{textDecoration:'none'}}>
            Submit
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
    </>
  );
}
