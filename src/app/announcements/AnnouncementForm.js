// components/AnnouncementForm.js
import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const AnnouncementForm = ({ onSubmit, editAnnouncement }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // If editAnnouncement is provided, pre-fill the form
  useEffect(() => {
    if (editAnnouncement) {
      setTitle(editAnnouncement.title || "");
      setContent(editAnnouncement.content || "");
    }
  }, [editAnnouncement]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        multiline
        margin="normal"
      />
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          {editAnnouncement ? "Update Announcement" : "Add Announcement"}
        </Button>
      </Box>
    </form>
  );
};

export default AnnouncementForm;
