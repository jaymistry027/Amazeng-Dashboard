'use client'
// import Nav from '../Navlog.js';

import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnnouncementList from "../announcements/AnnouncementList";
import AnnouncementForm from "../announcements/AnnouncementForm";

import './newsletter.css';

// import Mountains from './mountains.jpg';


// import React from 'react';
import Nav from '../Nav';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Page(){
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [announcements, setAnnouncements] = useState([]);
  const [editAnnouncement, setEditAnnouncement] = useState(null);


  const addAnnouncement = (newAnnouncement) => {
    if (editAnnouncement !== null) {
      // If editing, update the existing announcement
      const updatedAnnouncements = announcements.map((announcement) =>
        announcement.id === editAnnouncement.id
          ? { ...announcement, ...newAnnouncement }
          : announcement
      );
      setAnnouncements(updatedAnnouncements);
      setEditAnnouncement(null);
    } else {
      // If not editing, add a new announcement
      setAnnouncements([
        ...announcements,
        { id: Date.now(), ...newAnnouncement },
      ]);
    }
  };

  const deleteAnnouncement = (id) => {
    const updatedAnnouncements = announcements.filter(
      (announcement) => announcement.id !== id
    );
    setAnnouncements(updatedAnnouncements);
  };

  const editAnnouncementHandler = (announcement) => {
    setEditAnnouncement(announcement);
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
        <Typography variant="h4" gutterBottom sx={{display:'inline'}}>
        Newsletter
      </Typography>
        <div className="news">
        {/* <Typography paragraph> */}
        <Card sx={{ width: 800}} className='news1'>
        <CardMedia
          component="img"
          sx={{ height:200 }}
          image="https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"
          title="mountains"
        />
        <CardContent>
          <AnnouncementForm
              onSubmit={addAnnouncement}
              editAnnouncement={editAnnouncement}
            />
            <AnnouncementList
              announcements={announcements}
              onDelete={deleteAnnouncement}
              onEdit={editAnnouncementHandler}
            />
        </CardContent>
        <CardActions>
          {/* <Button size="small">Edit</Button>
          <Button size="small">Delete</Button> */}
        </CardActions>
      </Card>


        </div>

{/* 
        <div className='news'>
        <Card sx={{ maxWidth: 345 }} className='news1 '>
        <C
        rdMedia
          component="img"
          sx={{ height: 140 }}
          image="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg"
          title="mountains"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor. Lorem ipsum lorem ipsum dolor, lorem lorem ipsum ipsum dolor dolor.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>


      <Card sx={{ maxWidth: 345 }} className='news1 '>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg"
          title="mountains"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor. Lorem ipsum lorem ipsum dolor, lorem lorem ipsum ipsum dolor dolor.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>


      <Card sx={{ maxWidth: 345 }} className='news1 '>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg"
          title="mountains"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            News
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor. Lorem ipsum lorem ipsum dolor, lorem lorem ipsum ipsum dolor dolor.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>

      
        </div> */}
      </main>
    </Box>
  );
}


