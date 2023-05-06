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

const MobileLogin = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerClose = () => {
    setOpen(false);
    document.getElementById("logo").classList.remove("makeDisappear");
  };

  const [phone, setPhone] = React.useState("");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={handleDrawerClose} open={open}>
          <CloseIcon />
        </IconButton>
      </Box>
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
          // bgcolor: "#4CBB17",
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
  );
};

export default MobileLogin;
