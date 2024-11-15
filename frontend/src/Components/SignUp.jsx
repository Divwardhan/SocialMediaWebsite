import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Clear alerts after 6 seconds
  useEffect(() => {
    let timer;
    if (error || success) {
      timer = setTimeout(() => {
        setError('');
        setSuccess('');
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [error, success]);

  const handleSignUp = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post(
        'http://localhost:3000/signup',
        { email, username, password }, // request body
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      setSuccess('Signup successful!');
      setEmail('');
      setUsername('');
      setPassword('');
      window.location.href = '/signin'
      
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred while signing up.');
    }
  };

  return (
    <Box 
      sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'black' }}
    >
      <Typography variant="h4" component="h1" sx={{ color: 'white' }} gutterBottom>
        Sign Up
      </Typography>

      {error && (
        <Alert 
          severity="error" 
          sx={{ mb: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setError('')}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert 
          severity="success" 
          sx={{ mb: 2 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setSuccess('')}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {success}
        </Alert>
      )}

      <form onSubmit={handleSignUp}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'gray' },
          }}
        />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'gray' },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'gray' },
          }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          fullWidth
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;