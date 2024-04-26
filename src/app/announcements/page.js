"use client";
import React, { useState } from "react";
import Nav from "../Nav";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Container, Typography, CssBaseline } from "@mui/material";
import AnnouncementList from "../announcements/AnnouncementList";
import AnnouncementForm from "../announcements/AnnouncementForm";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const appBarHeight = 64; // Adjust this value based on your app bar height

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

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Nav
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

      {/* Content */}
      <main
        style={{
          flexGrow: 1,
          padding: "20px",
          // marginLeft: open ? '240px' : '0', // Adjust marginLeft based on drawer state
          transition: "margin-left 0.3s ease", // Add transition effect
          marginTop: `${appBarHeight}px`, // Add top margin to prevent hiding under the app bar
          textAlign: "left", // Align text to the left
        }}
      >
        <div>
          <Container component="main" maxWidth="md">
            <CssBaseline />
            <Typography variant="h4" align="center" mt={4}>
              Announcement Management
            </Typography>
            <AnnouncementForm
              onSubmit={addAnnouncement}
              editAnnouncement={editAnnouncement}
            />
            <AnnouncementList
              announcements={announcements}
              onDelete={deleteAnnouncement}
              onEdit={editAnnouncementHandler}
            />
          </Container>
        </div>
      </main>
    </Box>
  );
}
