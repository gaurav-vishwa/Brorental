import { Avatar, Container, Grid, Typography } from "@mui/material";
import React from "react";


export default function BookRide() {
  return (
    <>
      <Container sx={{ marginTop: "7%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily:"Poppins" }}>
          How to book your ride?
        </Typography>
        <br />
        <Typography variant="p" sx={{ fontSize: "20px", fontFamily:"Poppins" }}>
          Book your dream ride in just four simple steps
        </Typography>
        <div style={{ marginTop: "7%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
              <Avatar sx={{ bgcolor: "#59CE8F" }}>1</Avatar>
            </Grid>
            <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
              <Typography
                variant="p"
                sx={{ fontWeight: "bold", fontSize: "25px", fontFamily:"Poppins" }}
              >
                Find your Ride
              </Typography>
              <br />
              <Typography variant="p" sx={{ fontSize: "20px", fontFamily:"Poppins" }}>
                Enter the basic details like, city, pick up and drop date and
                time to choose from a list of available two - wheelers at your
                desired go-hub.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
              <Avatar sx={{ bgcolor: "#59CE8F" }}>2</Avatar>
            </Grid>
            <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
              <Typography
                variant="p"
                sx={{ fontWeight: "bold", fontSize: "25px", fontFamily:"Poppins" }}
              >
                Book your Ride
              </Typography>
              <br />
              <Typography variant="p" sx={{ fontSize: "20px", fontFamily:"Poppins" }}>
                Select your package and choose from the available payment
                options.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
              <Avatar sx={{ bgcolor: "#59CE8F" }}>3</Avatar>
            </Grid>
            <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
              <Typography
                variant="p"
                sx={{ fontWeight: "bold", fontSize: "25px", fontFamily:"Poppins" }}
              >
                Get Ready to Ride
              </Typography>
              <br />
              <Typography variant="p" sx={{ fontSize: "20px", fontFamily:"Poppins" }}>
                You will receive all the ride details via message and email.
                Reach the pick up point in time and pay the security deposit (if
                applicable). Enjoy every moment of your ride.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
              <Avatar sx={{ bgcolor: "#59CE8F" }}>4</Avatar>
            </Grid>
            <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                End your Ride
              </Typography>
              <br />
              <Typography variant="p" sx={{ fontSize: "20px", fontFamily:"Poppins" }}>
                Once you have had the time of your life, drop the vehicle at the
                same pick up point. Security deposit is refunded after checking
                for damages and challans (if any).
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
