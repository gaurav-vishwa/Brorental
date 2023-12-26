import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../assets/images/logo.png";
import star from "../../assets/images/star.png";
import loginPopup from "../../assets/images/loginPopup.webp";

const MobileOTP = () => {
  return (
    <div className="text-center ">
      <Box sx={{ m: "auto", px: 2, my: "40%" }}>
        <Typography variant="h5" sx={{ m: 3 }}>
          Enter OTP sent to{" "}
          <span className="text-[#59CE8F]">(Mobile Number) (Change) </span>{" "}
        </Typography>
        <Typography variant="p">
          Verification of your number is required so that we can <br /> contact
          you about any information
        </Typography>
        <Box>
          <TextField
            id="outlined-basic"
            size="small"
            sx={{ width: 45, my: 3, mx: 1 }}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            sx={{ width: 45, my: 3, mx: 1 }}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            sx={{ width: 45, my: 3, mx: 1 }}
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            size="small"
            sx={{ width: 45, my: 3, mx: 1 }}
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "inline-flex" }}>
          <Typography>Didn't receive the OTP?</Typography>
          <Typography sx={{ color: "#59CE8F", ml: 2 }}>Resend OTP</Typography>
        </Box>
        <Button
          sx={{
            //   display: "flex",
            //   justifyContent: "center",
            p: 2,
            width: "97%",
            color: "#ffffff",
            bgcolor: "#59CE8F",
            //   textAlign: "center",
            my: 3,
            mx: "auto",
          }}
        >
          {" "}
          Submit{" "}
        </Button>
      </Box>
    </div>
  );
};

export default MobileOTP;
