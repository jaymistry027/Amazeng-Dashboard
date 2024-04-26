// 'use client'
// import React from 'react';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import { DataGrid, DataGridOverlay } from '@mui/x-data-grid';
// import './committees.css';
// import { useState } from 'react';
// import Nav from '../Nav.js'
// import { styled, useTheme } from '@mui/material/styles';
// import Switch from '@mui/material/Switch';
// import Link from 'next/link';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditSharpIcon from '@mui/icons-material/EditSharp';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Swal from 'sweetalert2';

// const IOSSwitch = styled((props) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
// }));

// export default function Page() {
//   const handleDelete = () => {
//     Swal.fire({
//       title: 'Are you sure you want to delete this suggestion?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#d33',
//       cancelButtonColor: '#3085d6',
//       confirmButtonText: 'Delete',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
//           'Deleted!',
//           'This suggestion has been deleted.',
//           'success'
//         )
//       }
//     })
//   }
//     const deleteRow = (id) => {
//         const updatedRows = rows.filter((row) => row.id !== id);
//        setRows(updatedRows);
//       };
      
//     const [isLoading, setIsLoading] = useState(true);
//     const getRowClassName = (params) => {
//         return params.id % 2 === 1 ? 'alternateRow' : '';
//     };
//     const [rowStates, setRowStates] = useState({});

//     const toggleConnect = (id) => {
//       setRows((prevRows) => {
//         return prevRows.map((row) => {
//           if (row.id === id) {
//             const newNumber = row.connect === "Member" ? row.number + 1 : row.number - 1;
//             return { ...row, connect: row.connect === "Member" ? "Membership" : "Member", number: newNumber };
//           }
//           return row;
//         });
//       });
//     };
    
//     const columns = [
//         {
//             field: 'id',
//             headerName: 'ID',
//             width: 150,
//             headerClassName: 'head1',
//             headerAlign: 'center'
//         },
    
//         {
//             field: 'subCommitteeName',
//             headerName: 'Name',
//             width: 230,
//             headerClassName: 'head1',
//             headerAlign: 'center'
    
//         },
//         {
//             field: 'phone',
//             headerName: 'Phone Number',
//             width: 280,
//             headerClassName: 'head1',
//             headerAlign: 'center'
//         },
//         {
//           field: 'connect',
//           headerName: 'Membership',
//           width: 250,
//           headerAlign: 'center',
//           headerClassName: 'head1',
//           renderCell: (params) => {
//             const rowId = params.id;
//             const connectText = params.row.connect;
//             const number = params.row.number;
    
//             return (
//               <FormControlLabel
//                 control={
//                   <IOSSwitch sx={{ m: 1 }} onChange={() => toggleConnect(rowId)} checked={connectText === 'Membership'} />
//                 }
//                 label={`${connectText} `}
//               />
//             );
//           },
//         },
    
//         {
//             field: 'actions', headerName: 'Actions', width: 260, headerAlign: 'center', renderCell: (params) => {
//                 return (
//                     <>
//                         <Link href="./sub_committees"><EditSharpIcon style={{ color: "black", marginRight: '10px' }} /></Link>
//                         <a><DeleteIcon style={{ cursor: 'pointer', marginRight: '10px' }} onClick={handleDelete} /></a>
//                         <VisibilityIcon style={{ cursor: 'pointer'}}/>
//                     </>
    
//                 );
//             },
//             headerClassName: 'head1',
//         },
    
//     ];
//     const [rows, setRows] = useState([
    
//         {  connect: 'Member',id: "1", subCommitteeName: ' John Doe', phone: '1234567890'},
//         {  connect: 'Member',id: "2", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "3", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "4", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "5", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "6", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "7", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "8", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "9", subCommitteeName: ' John Doe', phone: '1234567890'},
//         { connect: 'Member',id: "10", subCommitteeName: ' John Doe', phone: '1234567890'},
//     ]);

//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const appBarHeight = 64; // Adjust this value based on your app bar height

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <Nav open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} />

//       <main
//         style={{
//           // flexGrow: 1,
//           padding: '0px',
//           transition: 'margin-left 0.3s ease', 
//           marginTop: `${appBarHeight}px`, 
//           textAlign: 'left', 
//         }}
//       >
//         <div>
//         <container className="extcont">
//                     <container className="cont1">
//                     Sub Committees Info
//                     </container>
//                     <Box className="cont2" sx={{ height: 650, width: 'auto' }}>
//                         <DataGrid

//                             rows={rows}
//                             columns={columns}
//                             getRowClassName={getRowClassName}
//                             hideFooterPagination={true}
//                             sx={{
//                                 '& .MuiDataGrid-cell': {
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                 },
//                             }}
//                         />
//                     </Box>
//                 </container>
//         </div>
//       </main>
//     </Box>
//   );
// }

'use client'
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RsvpIcon from '@mui/icons-material/Rsvp';
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DataGrid, DataGridOverlay } from "@mui/x-data-grid";
import "./committees.css";
import { useState } from "react";
import Nav from "../Nav.js";
import { styled, useTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Link from "next/link";
import FormControlLabel from "@mui/material/FormControlLabel";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  p: 1,
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
  const [isConnected, setIsConnected] = useState(false);
  const [rowStates, setRowStates] = useState({});

  const toggleConnect = (id) => {
    setRows((prevRows) => {
      return prevRows.map((row) => {
        if (row.id === id) {
          const newNumber =
            row.connect === "Connect" ? row.number + 1 : row.number - 1;
          return {
            ...row,
            connect: row.connect === "Connect" ? "Connected" : "Connect",
            number: newNumber,
          };
        }
        return row;
      });
    });
  };

  const columns = [
    {
                  field: 'id',
                  headerName: 'ID',
                  width: 150,
                  headerClassName: 'head1',
                  headerAlign: 'center'
              },
          
              {
                  field: 'subCommitteeName',
                  headerName: 'Name',
                  width: 230,
                  headerClassName: 'head1',
                  headerAlign: 'center'
          
              },
              {
                  field: 'phone',
                  headerName: 'Phone Number',
                  width: 280,
                  headerClassName: 'head1',
                  headerAlign: 'center'
              },
              {
                field: 'connect',
                headerName: 'Connect',
                width: 250,
                headerAlign: 'center',
                headerClassName: 'head1',
                renderCell: (params) => {
                  const rowId = params.id;
                  const connectText = params.row.connect;
                  const number = params.row.number;
          
                  return (
                    <FormControlLabel
                      control={
                        <IOSSwitch sx={{ m: 1 }} onChange={() => toggleConnect(rowId)} checked={connectText === 'Connected'} />
                      }
                      label={`${connectText} `}
                    />
                  );
                },
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
            {/* <Button
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
            </Button> */}
            <RsvpIcon fontSize="large" sx={{marginRight:"4px"}} />
             <EditSharpIcon onClick={handleOpen} style={{ cursor: 'pointer',color: "black", marginRight: '10px' }} />
             <a><DeleteIcon style={{ cursor: 'pointer', marginRight: '10px' }} onClick={handleDelete} /></a>
            <VisibilityIcon style={{ cursor: 'pointer'}}/>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{ ...style, width: 'auto', height: 'auto' }}>
                <div className="b1">
                  <div className="division1Head" sx={{ fontFamily: "Roboto" ,marginTop:0}}>
                    <h2  sx={{ fontFamily: "Roboto" ,}}>
                      Edit Member Details{" "}
                      <CloseIcon
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          margin: 0,
                          cursor:'pointer',
                        }}
                      />
                    </h2>
                  </div>
                </div>
                <div className="outside-contents">
                  <div className="contents">
                    <Typography
                      className="button-header"
                      sx={{ fontFamily: "Roboto" }}
                    >
                      Event Name
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
    
            {  connect: 'Connect',id: "1", subCommitteeName: ' John Doe', phone: '1234567890'},
            {  connect: 'Connect',id: "2", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "3", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "4", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "5", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "6", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "7", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "8", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "9", subCommitteeName: ' John Doe', phone: '1234567890'},
            { connect: 'Connect',id: "10", subCommitteeName: ' John Doe', phone: '1234567890'},
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
            <container className="cont1">Sub Committees</container>
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
