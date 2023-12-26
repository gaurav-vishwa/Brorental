import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

export default function KnowMore() {
  return (
    <>
      <Container sx={{ marginTop: "10%" }}>
        <Box
          sx={{
            width: "80%",
            height: "100%",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "3",
          }}
        >
          <IconButton>
            <NotificationsIcon sx={{ fontSize: "30px", color: "#59CE8F" }} />
          </IconButton>
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            List your vehicle
          </Typography>
          <Typography variant="h3" sx={{ marginTop: "3%", color: "#59CE8F" }}>
            Want to list your unused two-wheeler and earn extra income
          </Typography>
          <br />
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            List your motorcycles and scooters with India's fastest growing
            mobility platform - Just connect to turn them into earning members
            of your family.
          </Typography>
          <br />

          <Link to="/ListYourVehicle">
            <Button
              // variant="contained"
              sx={{
                color: "#ffffff",
                bgcolor: "#59CE8F",
                textAlign: "center",
                m: "auto",
                ":hover": { bgcolor: "#36b671" },
                mt: "10%",
              }}
            >
              Know More
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}
