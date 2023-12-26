import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import presenceBg from "../../assets/images/presenceBg.jpg";

export default function Statistics() {
  return (
    <>
      <Container sx={{ marginTop: "20%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Our Presence
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }}>
              More Destinations. More Ease. More Affordable.
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "7%" }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h3">15+</Typography>
                <Typography
                  variant="p"
                  align="center"
                  sx={{ fontSize: "20px", marginLeft: "12px" }}
                >
                  Cities
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h3">50000+</Typography>
                <Typography
                  variant="p"
                  align="center"
                  sx={{ fontSize: "20px", marginLeft: "12px" }}
                >
                  Happy Customers
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "8%" }}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h3">6000+</Typography>
                <Typography
                  variant="p"
                  align="center"
                  sx={{ fontSize: "20px", marginLeft: "12px" }}
                >
                  Bikes
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h3">4.8/5</Typography>
                <Typography
                  variant="p"
                  align="center"
                  sx={{ fontSize: "20px", marginLeft: "12px" }}
                >
                  1200+ reviews
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src={presenceBg}
              alt="presenceBg"
              style={{ width: "350px", height: "350px" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
