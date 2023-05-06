import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import star from "../../assets/images/star.png";
import loginPopup from "../../assets/images/loginPopup.webp";
import googleLogo from "../../assets/images/googleLogo.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import MobileNavbar from "./MobileNavbar";
// import Modal from "@mui/material/Modal";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import { useState } from "react";
import { Divider } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import MobileLogin from "../../pages/mobile/MobileLogin";

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

const LoginModal = () => {
  // const [open, setOpen] = React.useState(true);
  // const handleDrawerClose = () => {
  //   setOpen(false);
  //   // document.getElementById("logo").classList.remove("makeDisappear");
  // };

  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  //   const [value, setValue] = useState();

  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      {isMatch ? (
        <MobileLogin />
      ) : (
        <Box sx={{ display: "inline-flex" }}>
          <Box sx={{ bgcolor: "#f3f4f6", width: "50%" }}>
            <Box
              className="m-auto "
              component="img"
              sx={{
                height: 70,
                pt: 2,
                px: 5,
              }}
              alt="Your logo."
              src={logo}
            />
            <br />

            <Box
              className="m-auto"
              component="img"
              sx={{
                height: 200,
              }}
              alt="Your logo."
              src={loginPopup}
            />
            <Typography id="modal-modal-description" sx={{ mt: 2, pb: 1 }}>
              <div className="grid grid-cols-4 px-5 mx-auto">
                <div>
                  <span className="text-sm">15+</span> <br />{" "}
                  <span className="text-[11px] text-gray-500">Cities</span>
                </div>
                <div>
                  <span className="text-sm">50000+</span> <br />{" "}
                  <span className="text-[11px] text-gray-500">
                    Happy Customers
                  </span>
                </div>
                <div>
                  <span className="text-sm">6000+</span> <br />{" "}
                  <span className="text-[11px] text-gray-500">Bikes</span>
                </div>
                <div>
                  <Box>
                    <span className="text-sm">
                      4.8/5
                      <Box
                        className="inline-block"
                        component="img"
                        sx={{
                          height: 15,
                          px: 1,
                          mb: 0.5,
                        }}
                        alt="Your logo."
                        src={star}
                      />{" "}
                    </span>{" "}
                    <br />{" "}
                    <span className="text-[11px] text-gray-500">
                      1200+ reviews
                    </span>
                  </Box>
                </div>
              </div>
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", pl: 2 }}>
            <Typography
              id="modal-modal-description"
              sx={{
                // mt: 2,
                pb: 1,
                fontWeight: "semi-bold",
                fontSize: 25,
                font: "poppins",
              }}
            >
              Welcome to <span className="text-[#4CBB17]"> GoBikes </span>
            </Typography>

            <Typography
              id="modal-modal-description"
              sx={{ pb: 1, color: "text.secondary" }}
            >
              Commuting Made <span className="text-[#4CBB17]">Easy</span>,{" "}
              <span className="text-[#4CBB17]">Affordable </span>
              and <span className="text-[#4CBB17]">Quick</span>
            </Typography>
            <MuiTelInput
              sx={{
                my: 2,
                width: "85% ",
                borderColor: "#FF5733",
              }}
              value={phone}
              onChange={handleChange}
              focusOnSelectCountry
              forceCallingCode
              flagSize="medium"
              defaultCountry="IN"
            />
            <Button
              disabled
              variant="contained"
              sx={{
                textTransform: "none",
                my: 2,
                py: 1.5,
                width: "85% ",
                fontSize: 18,
                fontWeight: 400,
                // bgcolor: "#4CBB17",
                bgcolor: "text.disabled",
              }}
            >
              Send OTP
            </Button>
            <br />
            <Divider sx={{ mt: 1, color: "text.disabled" }}>OR</Divider>
            <Button
              className=""
              variant="outlined"
              sx={{
                textTransform: "none",
                mt: 3,
                color: "#4CBB17",
                fontWeight: "bold",
                borderColor: "#4CBB17",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 20,
                  pr: 2,
                }}
                alt="Your logo."
                src={googleLogo}
              />
              Sign in with Google
            </Button>
          </Box>

          {/* </Grid>
            </Grid>
          </Grid> */}
        </Box>
      )}
    </div>
  );
};

export default LoginModal;
