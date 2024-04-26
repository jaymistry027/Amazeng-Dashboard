// components/AnnouncementList.js
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import Button from '@mui/material/Button';

const AnnouncementList = ({ announcements, onDelete, onEdit }) => {
  const confirmDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this announcement!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire("Deleted!", "The announcement has been deleted.", "success");
      }
    });
  };

  return (
    <List>
      {announcements.map((announcement) => (
        <ListItem key={announcement.id}>
          <ListItemText
            primary={announcement.title}
            secondary={announcement.content}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => onEdit(announcement)}
            >
              {/* <EditIcon /> */}
              <Button size="small">Edit</Button>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => confirmDelete(announcement.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default AnnouncementList;
