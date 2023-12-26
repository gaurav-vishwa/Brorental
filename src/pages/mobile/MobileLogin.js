import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import googleLogo from "../../assets/images/googleLogo.png";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useState } from "react";
import { Divider } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MobilePreLoginNavbar from "../../layouts/mobile/MobilePreLoginNavbar";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { auth, provider } from "../../utilities/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const MobileLogin = () => {
  const nevigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleDrawerClose = () => {
    setOpen(false);
    document.getElementById("logo").classList.remove("makeDisappear");
  };
  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

  const googleSignInHandler = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credentials = {
          name: res.user.displayName,
          email: res.user.email,
          accessToken: res.user.accessToken,
        };
        localStorage.setItem("user", JSON.stringify(credentials));
        nevigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <DynamicMobileNavbar />
      <Box sx={{ textAlign: "center", px: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* <IconButton onClick={handleDrawerClose} open={open}>
            <CloseIcon />
          </IconButton> */}
        </Box>
        <Link to="/">
          <Box
            className="m-auto "
            component="img"
            sx={{
              height: 60,
              mb: 4,
              mt: 5,
            }}
            alt="Your logo."
            src={logo}
          />
        </Link>

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
          Welcome to <span className="text-[#59ce8f]"> GoBikes </span>
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ pb: 1, color: "text.secondary" }}
        >
          Commuting Made <span className="text-[#59ce8f]">Easy</span>,{" "}
          <span className="text-[#59ce8f]">Affordable </span>
          and <span className="text-[#59ce8f]">Quick</span>
        </Typography>
        {/* <Box
                            className=""
                            component="form"
                            textAlign="center"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              "& > :not(style)": {
                                // ml: 4,
                                width: "86%",
                                height: "90%",
                              },

                              my: 2,
                              py: 2,
                            }}
                            // noValidate
                            autoComplete="off"
                          >
                            <PhoneInput
                              international
                              defaultCountry="IN"
                              value={value}
                              onChange={setValue}
                            />
                          </Box> */}
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
            // bgcolor: "#59ce8f",
            bgcolor: "text.disabled",
          }}
        >
          Send OTP
        </Button>
        <br />
        <Divider
          sx={{
            mt: 1,
            color: "text.disabled",
            mx: 4,
          }}
        >
          OR
        </Divider>
        <Button
          onClick={googleSignInHandler}
          className=""
          variant="outlined"
          sx={{
            textTransform: "none",
            mt: 3,
            color: "#59ce8f",
            fontWeight: "bold",
            borderColor: "#59ce8f",
          }}
        >
          <Box
            component="img"
            alt="Your logo."
            src={googleLogo}
            sx={{
              height: 20,
              pr: 2,
            }}
          />
          Sign in with Google
        </Button>
      </Box>
    </>
  );
};

export default MobileLogin;
