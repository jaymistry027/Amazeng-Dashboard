"use client";
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DataGrid, DataGridOverlay } from "@mui/x-data-grid";
import "./council.css";
import { useState } from "react";
import Nav from "../Nav.js";
import { styled, useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormControlLabel from "@mui/material/FormControlLabel";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";

import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Modal from "@mui/material/Modal";
// import Box from '@mui/material/Box';

import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Page() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to delete this suggestion?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "This suggestion has been deleted.", "success");
      }
    });
  };
  const deleteRow = (id) => {
    // Filter out the row with the specified ID
    const updatedRows = rows.filter((row) => row.id !== id);
    // Update the state with the new rows
    setRows(updatedRows);
  };

  const [isLoading, setIsLoading] = useState(true);
  const getRowClassName = (params) => {
    return params.id % 2 === 1 ? "alternateRow" : "";
  };
  //  const [isConnected, setIsConnected] = useState(false);
  // const [rowStates, setRowStates] = useState({});

  // const toggleConnect = (id) => {
  //   setRows((prevRows) => {
  //     return prevRows.map((row) => {
  //       if (row.id === id) {
  //         const newNumber =
  //           row.connect === "Connect" ? row.number + 1 : row.number - 1;
  //         return {
  //           ...row,
  //           connect: row.connect === "Connect" ? "Connected" : "Connect",
  //           number: newNumber,
  //         };
  //       }
  //       return row;
  //     });
  //   });
  // };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      headerClassName: "head1",
      headerAlign: "center",
    },

    {
      field: "memberName",
      headerName: "Name",
      width: 230,
      headerClassName: "head1",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 280,
      headerClassName: "head1",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "Member Role",
      width: 250,
      headerAlign: "center",
      headerClassName: "head1",
    },

    {
      field: "action",
      headerName: "Action",
      width: 320,
      headerAlign: "center",
      headerClassName: "head1",
      renderCell: (params) => {
        const active = () => {
          console.log("abc");
        };
        
        return (
          <div>
            <Button
              onClick={handleOpen}
              className="action1"
              sx={{ fontFamily: "Roboto" }}
            >
              <BorderColorOutlinedIcon className="edit" />
              Edit
            </Button>
            <Button
              className="action2"
              sx={{ fontFamily: "Roboto" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 521, height: 565 }}>
                <div className="b1">
                  <div className="division1Head" sx={{ fontFamily: "Roboto" }}>
                    <h2 id="parent-modal-title" sx={{ fontFamily: "Roboto" }}>
                      Edit Member Details{" "}
                      <CloseIcon
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          margin: 0,
                        }}
                      />
                    </h2>
                  </div>
                </div>

                <div class="content-container">
                  <Typography
                    className="title-inside-modal"
                    sx={{ fontFamily: "Roboto" }}
                  >
                    <b>Governing Council Details</b>
                  </Typography>
                </div>

                <div className="outside-contents">
                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Member Name
                    </Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Phone Number
                    </Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Member Role
                    </Typography>
                    <input type="text" className="input"></input>
                  </div>

                  <div className="contents">
                    <button
                      className="submit"
                      type="submit"
                      onClick={handleClose}
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        );
      },
    },
  ];
  const [rows, setRows] = useState([
    {
      // connect: "Connect",
      id: "1",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "2",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "3",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "4",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "5",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "6",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "7",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      connect: "Connect",
      id: "8",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "9",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
    {
      // connect: "Connect",
      id: "10",
      memberName: " John Doe",
      phone: "1234567890",
      role: "Tester",
    },
  ]);

  const [open1, setOpen1] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen1(true);
  };

  const handleDrawerClose = () => {
    setOpen1(false);
  };

  const appBarHeight = 64; // Adjust this value based on your app bar height

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Nav
        open={open1}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

      {/* Content */}
      <main
        style={{
          // flexGrow: 1,
          padding: "0px",
          transition: "margin-left 0.3s ease",
          marginTop: `${appBarHeight}px`,
          textAlign: "left",
        }}
      >
        <div>
          <container className="extcont">
            <container className="cont1">Governing Council</container>
            <Box className="cont2" sx={{ height: 650, width: "auto" }}>
              {/* <DataGridOverlay loading={isLoading}> */}
              <DataGrid
                rows={rows}
                columns={columns}
                getRowClassName={getRowClassName}
                hideFooterPagination={true}
                sx={{
                  "& .MuiDataGrid-cell": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              />
              {/* </DataGridOverlay> */}
            </Box>
          </container>
        </div>
      </main>
    </Box>
  );
}
