import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../assets/images/logo.png";
import star from "../../assets/images/star.png";
import loginPopup from "../../assets/images/loginPopup.webp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MobileOTPVerified = () => {
  return (
    <div className="text-center">
      <Box
        sx={{
          //   diaplay: "flex",
          //   justifyContent: "center",
          //   alignContent: "center",

          m: "auto",
          my: "40%",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 200, color: "#59CE8F" }} />
        <Typography variant="h4" sx={{ color: "#59CE8F", pt: 4 }}>
          OTP Verified Successfully!
        </Typography>
      </Box>
    </div>
  );
};

export default MobileOTPVerified;
