import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Money from "../../assets/images/Money.png";
import Bike from "../../assets/images/Bike.png";
import Rent from "../../assets/images/Rent.png";
import open24hours from "../../assets/images/open24hours.png";
import payLater from "../../assets/images/payLater.png";
import instantRefund from "../../assets/images/instantRefund.png";

export default function Features() {
  return (
    <>
      <Container sx={{ marginTop: "5%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily:"Poppins" }}>
          Why choose GoBikes?
        </Typography>
        <Box sx={{ flexGrow: 1, marginTop: "4%" }}>
          <Grid container spacing={13}>
            <Grid item xs={12} sm={6}>
              <img src={Money} alt="Money" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight={"bold"}>
                  Different Flexible Packages
                </Typography>
                <Typography variant="p" sx={{ fontFamily:"Poppins", fontSize: "20px" }}>
                  Grab daily, weekly, fortnight and monthly packages at
                  discounted rates
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={Bike} alt="Bike" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight={"bold"}>Wide Range</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily:"Poppins" }}
                >
                  Looking for a particular brand or location? We have probably
                  got it
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={13}>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={Rent} alt="Rent" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight={"bold"}>Highly Maintained Fleet</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily:"Poppins" }}
                >
                  Get high quality and serviced vehicles.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={open24hours} alt="open24hours" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight={"bold"}>24*7 At Service</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontFamily:"Poppins", fontSize: "20px" }}
                >
                  Day or night, rent a bike
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={13}>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={payLater} alt="payLater" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight={"bold"}>Book Now, Pay later</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily:"Poppins" }}
                >
                  Flexibility to decide when and how to pay.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ marginTop: "4%" }}>
              <img src={instantRefund} alt="instantRefund" />
              <div style={{ marginTop: "2%" }}>
                <Typography variant="h6" fontFamily={"Poppins"} fontWeight={"bold"}>Instant Refund</Typography>
                <Typography
                  variant="p"
                  sx={{ marginTop: "5px", fontSize: "20px", fontFamily:"Poppins" }}
                >
                  Facing an issue while booking/pick up? We initiate instant
                  refund.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
