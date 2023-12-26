import * as React from "react";
import logo from "../../assets/images/logo.png";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";

// import "../App.css";

const drawerWidth = 290;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
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

export default function MobilePostLoginNavbar({ userDetails }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    document.getElementById("logo").classList.add("makeDisappear");
  };

  const handleDrawerClose = () => {
    setOpen(false);
    document.getElementById("logo").classList.remove("makeDisappear");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ color: "#000000", mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Box
              id="logo"
              component="img"
              sx={{
                height: 30,
              }}
              alt="Your logo."
              src={logo}
            />
          </Link>
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
        <DrawerHeader sx={{ justifyContent: "space-between" }}>
          <Link to="/">
            <Box
              component="img"
              sx={{
                width: 70,
                ml: 1,
                mt: 1,
              }}
              alt="Your logo."
              src={logo}
            />
          </Link>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}
          </IconButton>
        </DrawerHeader>
        <Typography mx={"auto"} variant="h6">
          {" "}
          &#128075;
          <Typography fontWeight={700} display={"inline-block"} px={1}>
            {userDetails.name}
          </Typography>
        </Typography>
        <List sx={{ ml: 2, mt: 2 }}>
          <Link to="/MobileProfile">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon sx={{ color: "#59ce8f" }} />
                </ListItemIcon>
                <ListItemText primary="Profile" font="poppins" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider variant="inset" />
          <Link to="/MobileBookings">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BookOnlineIcon sx={{ color: "#59ce8f" }} />
                </ListItemIcon>
                <ListItemText primary="Bookings" font="poppins" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider variant="inset" />
          <Link to="/MobileGoCoins">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceWalletIcon sx={{ color: "#59ce8f" }} />
                </ListItemIcon>
                <ListItemText primary="BroCoins" font="poppins" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider variant="inset" />
          <Link to="/MobileListYourVehicle">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BikeScooterIcon sx={{ color: "#59ce8f" }} />
                </ListItemIcon>
                <ListItemText primary="List Your Vehicle" font="poppins" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider variant="inset" />
          <Link to="/MobileContactUs">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConnectWithoutContactIcon sx={{ color: "#59ce8f" }} />
                </ListItemIcon>
                <ListItemText primary="Contact Us" font="poppins" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider variant="inset" />
          <Link to="/FAQs">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <QuestionAnswerIcon sx={{ color: "#59ce8f" }} />
                </ListItemIcon>
                <ListItemText primary="FAQs" font="poppins" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider variant="inset" />
          <Link to="/">
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  localStorage.clear();
                }}
              >
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "#59ce8f" }} />
                </ListItemIcon>
                <ListItemText primary="Logout" font="poppins" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Divider variant="inset" />
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
