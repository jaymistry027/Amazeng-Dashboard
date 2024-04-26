// Nav.js
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import NotificationIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import "./nav.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Nav = ({ open, handleDrawerOpen, handleDrawerClose }) => {
  const theme = useTheme();

  const [anchorElLabels, setAnchorElLabels] = React.useState(null);
  const handleOpenLabelsDropdown = (event) => {
    setAnchorElLabels(!anchorElLabels);
  };

  const router = useRouter();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Amazeng
          </Typography>
          <IconButton color="inherit" >
          <Link href='../profile' style={{textDecoration:'none',color:'white'}}>
          <PersonIcon />
              </Link>
            
          </IconButton>
          <Badge badgeContent={4} color="primary" sx={{cursor:'pointer'}}>
            <NotificationIcon />
          </Badge>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        
        <List sx={{ paddingBottom: "0px" }}>
        {["My Profile"].map((text, index) => (
          <Link href="/profile" className="link">
            <ListItem key={text} disablePadding>
              <ListItemButton>
              
                <ListItemText primary={text} />
                
              </ListItemButton>
            </ListItem>
            </Link>
          
          ))}
          {["Announcements"].map((text, index) => (
            <Link href="/announcements" className="link">
            <ListItem key={text} disablePadding>
              <ListItemButton>
              
                <ListItemText primary={text} />
                
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
{["Events"].map((text, index) => (
  
  <Link href="/events" className="link">
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
                
              </ListItemButton>
            </ListItem>
            </Link>
          ))}

          <ListItem
            disablePadding
            sx={{ display: "block", marginLeft: "0px" }}
            onClick={handleDrawerOpen}
          >
            <ListItemButton
              onClick={handleOpenLabelsDropdown}
              className="list-items" // Open Dashboard dropdown
              sx={{
                minHeight: "10vh",
                justifyContent: open ? "initial" : "center",
                px: 2,
              }}
            >
              <ListItemText sx={{ opacity: open ? 1 : 0, height: "30px" }}>
              <Link href="/memdir" className="link">
                Members Directory
                </Link>
                {anchorElLabels ? <ExpandLess /> : <ExpandMore />}
                
              </ListItemText>
            </ListItemButton>
            
            <Collapse in={anchorElLabels} timeout="auto" unmountOnExit>
            
              <List component="div" disablePadding>
                <Link href="/council" className="link">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Governing Council" sx={{}} />
                  </ListItemButton>
                </Link>
                <Link href="/sub_committees" className="link">
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Sub Commitees" sx={{}} />
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
          </ListItem>
        </List>

        {/* <Divider /> */}
        <List sx={{ paddingTop: "0px" }}>
          {["Gallery"].map((text, index) => (
            
            <Link href="/gallery" className="link">
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>

        <List sx={{ paddingTop: "0px" }}>
          {["Newsletter"].map((text, index) => (
            <Link href="/newsletter" className="link">
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
                
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Main open={open}>{/* Additional content can be added here */}</Main>
    </Box>
  );
};

export default Nav;
