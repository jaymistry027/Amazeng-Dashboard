'use client'
import React from 'react';
import Nav from './Nav';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Home(){
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const appBarHeight = 64; // Adjust this value based on your app bar height

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Nav open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

      {/* Content */}
      <main
        style={{
          flexGrow: 1,
          padding: '20px',
          // marginLeft: open ? '240px' : '0', // Adjust marginLeft based on drawer state
          transition: 'margin-left 0.3s ease', // Add transition effect
          marginTop: `${appBarHeight}px`, // Add top margin to prevent hiding under the app bar
          textAlign: 'left', // Align text to the left
        }}
      >
        <div>
        {/* <Typography paragraph> */}
        YOUR CONTENT HERE
        </div>
      </main>
    </Box>
  );
}

