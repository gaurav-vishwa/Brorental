import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobilePreLoginNavbar from "../mobile/MobilePreLoginNavbar";
import CloseIcon from "@mui/icons-material/Close";
import LoginModal from "../../components/desktop/LoginModal";
import { NavLink } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Link } from "react-router-dom";

// const Item = styled(Paper)(({ theme }) => ({}));

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "65%",
//   height: "60%",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   // p: 4,
//   borderRadius: 2,
//   flexWrap: "wrap",
// };

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // const [value, setValue] = useState();

  // const [phone, setPhone] = React.useState("");

  // const handleChange = (newPhone) => {
  //   setPhone(newPhone);
  // };

  return (
    <Box>
      {isMatch ? (
        <MobilePreLoginNavbar />
      ) : (
        <Box>
          <AppBar
            position="fixed"
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
                  <NavLink to="/ListYourVehicle">
                    <Button
                      sx={{
                        color: "black",
                        marginLeft: "auto",
                        fontWeight: "bold",
                      }}
                      color="primary"
                    >
                      List your Vehicle
                    </Button>
                  </NavLink>

                  <Button
                    onClick={handleOpen}
                    sx={{ color: "black", fontWeight: "bold" }}
                    color="primary"
                  >
                    Login
                  </Button>
                  <Dialog
                    sx={{}}
                    PaperProps={{ sx: { width: "60%" } }}
                    // fullScreen={fullScreen}
                    maxWidth="lg"
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <DialogActions>
                      <Button
                        size="small"
                        autoFocus
                        onClick={handleClose}
                        sx={{ color: "#36b671" }}
                      >
                        <CloseIcon />
                      </Button>
                    </DialogActions>

                    <DialogContent sx={{ textAlign: "center" }}>
                      {/* <BookingConfirmation /> */}
                      {/* <RideCompletion /> */}
                      {/* <PersonalDetails /> */}
                      {/* <OTP /> */}
                      {/* <OTPVerified /> */}
                      <LoginModal />
                    </DialogContent>
                  </Dialog>
                  {/* <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <LoginModal />
                  <PersonalDetails />
                </Modal> */}
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Box>
      )}
      {/* <Outlet /> */}
    </Box>
  );
}
