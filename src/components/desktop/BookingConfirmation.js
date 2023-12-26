import React from "react";
// import logo from "../assets/logo.png";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BookingConfirmation = () => {
  return (
    <div className="text-center">
      <Box>
        <CheckCircleIcon sx={{ fontSize: 100, color: "#59CE8F" }} />
        <Typography variant="h5" sx={{ color: "#59CE8F", my: 2 }}>
          Booking Confirmed Successfully!
        </Typography>
        <Button
          sx={{
            width: "50%",
            color: "#ffffff",
            bgcolor: "#59CE8F",
            textAlign: "center",
            m: "auto",
            ":hover": { bgcolor: "#36b671" },
          }}
        >
          {" "}
          Download Details
        </Button>{" "}
        <br />
        <Box sx={{ py: 2 }}>
          <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
          <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
          <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
          <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />{" "}
          <StarBorderIcon sx={{ fontSize: 40, color: "#FFD700" }} />
        </Box>
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",

            width: "50%",
            color: "#ffffff",
            bgcolor: "#59CE8F",
            textAlign: "center",
            m: "auto",
          }}
        >
          {" "}
          Rate your experience
        </Button>{" "}
        <br />
      </Box>
    </div>
  );
};

export default BookingConfirmation;
