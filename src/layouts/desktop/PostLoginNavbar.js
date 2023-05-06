import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNavbar from "../../layouts/mobile/MobileNavbar";
// import Modal from "@mui/material/Modal";
// import Login from "./LoginModal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

//Navbar
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "65%",
//   height: "60%",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   borderRadius: 2,
//   flexWrap: "wrap",
// };

//Dropdown Menu
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const PostLoginNavbar = () => {
  //Modal
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  //Responsivenness
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  //Dropdown Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box>
        {isMatch ? (
          <MobileNavbar />
        ) : (
          <AppBar
            position="sticky"
            sx={{
              bgcolor: "background.paper",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Link to="/">
                <Box
                  component="img"
                  sx={{
                    height: 50,
                    ml: 10,
                  }}
                  alt="Your logo."
                  src={logo}
                />
              </Link>

              <Box
                sx={{
                  mr: 10,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "black" }}
                >
                  <Link to="/ListYourVehicle">
                    <Button
                      sx={{ color: "black", marginLeft: "auto", fontFamily:"Poppins", fontWeight:"bold" }}
                      color="primary"
                    >
                      List your Vehicle
                    </Button>
                  </Link>

                  <Link to="/MyRides">
                    <Button sx={{ color: "black" }} color="primary">
                      <TwoWheelerIcon
                        sx={{ color: "#59CE8F", ml: 2, mr: 1, fontSize: 40, fontFamily:"Poppins", fontWeight:"bold" }}
                      />
                      Rides
                    </Button>
                  </Link>

                  <Button
                    id="demo-customized-button"
                    aria-controls={open ? "demo-customized-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ color: "black" }}
                    color="primary"
                  >
                    <AccountCircleIcon
                      sx={{ color: "#59CE8F", ml: 2, mr: 1, fontSize: 40, fontFamily:"Poppins", fontWeight:"bold" }}
                    />
                    Profile
                  </Button>

                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {/* <MenuItem onClick={handleClose} disableRipple>
                      Orders
                    </MenuItem> */}
                    {/* <Divider sx={{ my: 0.5 }} /> */}
                    <Link to="/DashBoard">
                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{ color: "#000000", fontFamily:"Poppins", fontWeight:"bold" }}
                      >
                        Dashboard
                      </MenuItem>
                    </Link>

                    <Divider sx={{ my: 0.5 }} />
                    <Link to="/">
                      <MenuItem
                        onClick={handleClose}
                        disableRipple
                        sx={{ color: "#000000", fontFamily:"Poppins", fontWeight:"bold" }}
                      >
                        Sign Out
                      </MenuItem>
                    </Link>
                  </StyledMenu>
                  {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Login />
                  </Modal> */}
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        )}
      </Box>
    </div>
  );
};

export default PostLoginNavbar;
