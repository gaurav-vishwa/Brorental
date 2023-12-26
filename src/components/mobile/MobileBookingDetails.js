import { Box, Typography, Grid, IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import HondaActiva from "../../assets/images/HondaActiva.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SummarizeIcon from "@mui/icons-material/Summarize";

export default function MobileBookingDetails() {
  const [active, setActive] = useState("");

  return (
    <div>
      {active === "" && (
        <Box
          sx={{
            width: "100%",
            borderRadius: "8px",
            padding: "8px",
            backgroundColor: "#eeeeee",
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "medium",
            }}
          >
            Honda Activa 125
          </Typography>
          <div style={{ display: "flex" }}>
            <img
              src={HondaActiva}
              alt="HondaActiva"
              style={{
                width: "auto",
                height: "70px",
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "15px",
                backgroundColor: "white",
                marginTop: "10px",
                marginRight: "8px",
              }}
            />
            <Button
              variant="text"
              sx={{
                color: "#4cbb17",
                fontSize: "13px",
                fontWeight: "large",
                marginLeft: "122px",
                outline: "none",
              }}
              onClick={() => setActive("viewDetails")}
            >
              View Details
            </Button>
          </div>
          <div style={{ padding: "7px" }}>
            <Typography
              variant="p"
              sx={{
                fontWeight: "medium",
              }}
            >
              BookingID: #20659 | Booking Date: Feb 22, 2023 12:35 PM
            </Typography>
          </div>
          <div style={{ padding: "5px" }}>
            <Typography
              variant="p"
              sx={{
                fontWeight: "medium",
              }}
            >
              Go Hub Details: Bangalore Railway Station
            </Typography>
          </div>

          <hr style={{ fontWeight: "medium" }} />
          <Grid container>
            <Grid item xs={12} sm={4}>
              <IconButton sx={{ color: "black" }}>
                <CalendarMonthIcon fontSize="small" />
              </IconButton>
              <Typography variant="p">Feb 23,2023 1:00PM</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <IconButton sx={{ color: "black" }}>
                <CalendarMonthIcon fontSize="small" />
              </IconButton>
              <Typography variant="p">
                Feb 23,2023 1:00PM Paid:{" "}
                <span style={{ marginLeft: "10px" }}>&#8377;</span>
                112.28
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography variant="p" sx={{ paddingLeft: "10px" }}>
                Deposit: <span>&#8377;</span>200
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {active === "viewDetails" && (
        <div style={{ fontWeight: "bold" }}>
          <Box
            sx={{
              width: "100%",
              borderRadius: "8px",
              padding: "12px",
              backgroundColor: "#eeeeee",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
                <IconButton onClick={() => setActive("")}>
                  <ArrowBackIosIcon fontSize="small" />
                </IconButton>
                <Typography variant="p">
                  BookingID: #20659 | Booking{" "}
                  <span style={{ marginLeft: "14%" }}>
                    Date: Feb 22, 2023 12:35 PM
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3} sx={{ marginLeft: "10%" }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "red",
                    ":hover": {
                      backgroundColor: "red",
                    },
                  }}
                >
                  Status: Pending
                </Button>
              </Grid>
            </Grid>
          </Box>

          <div style={{ marginTop: "3px", marginBottom: "3px" }}>
            <IconButton>
              <TwoWheelerIcon />
            </IconButton>
            <Typography variant="p" sx={{ paddingLeft: "2px" }}>
              Bike Details
            </Typography>
          </div>
          <Box
            sx={{
              width: "100%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#eeeeee",
            }}
          >
            <div style={{ padding: "10px", display: "flex" }}>
              <img
                src={HondaActiva}
                alt="HondaActiva"
                style={{
                  width: "auto",
                  height: "70px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: "15px",
                  backgroundColor: "white",
                  marginTop: "18px",
                }}
              />
              <div style={{ padding: "15px" }}>
                <Typography variant="p" sx={{ fontWeight: "medium" }}>
                  <span>Honda Activa 125</span>
                  <br />
                  <span>Quantity: 1</span>
                </Typography>
              </div>
            </div>
            <div style={{ padding: "2px 0px 5px 10px" }}>
              <Typography variant="p" sx={{ fontWeight: "medium" }}>
                Rent Amount: <span>&#8377;</span>499 | Refundable Deposit:{" "}
                <span>&#8377;</span>2000
              </Typography>
            </div>
            <hr
              style={{
                color: "#9e9e9e",
                borderColor: "#9e9e9e",
                height: "3px",
                paddingBottom: "5px",
              }}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="p" sx={{ marginLeft: "10px" }}>
                  Pickup Date and Time:
                </Typography>
                <IconButton sx={{ color: "black" }}>
                  <CalendarMonthIcon fontSize="small" />
                </IconButton>
                <Typography variant="p">
                  Feb <span style={{ marginLeft: "10px" }}>23,2023 1:00PM</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ marginLeft: "10px" }}>
                <Typography variant="p">Dropoff Date and Time:</Typography>
                <IconButton sx={{ color: "black" }}>
                  <CalendarMonthIcon fontSize="small" />
                </IconButton>
                <Typography variant="p">Feb 23,2023 1:00PM</Typography>
              </Grid>
            </Grid>
          </Box>
          <div style={{ marginTop: "3px", marginBottom: "3px" }}>
            <IconButton>
              <SummarizeIcon />
            </IconButton>
            <Typography variant="p" sx={{ paddingLeft: "2px" }}>
              Fare Summary
            </Typography>
          </div>
          <Box
            sx={{
              width: "100%",
              borderRadius: "8px",
              padding: "12px",
              backgroundColor: "#eeeeee",
            }}
          >
            <Grid container spacing={2} sx={{ padding: "3px" }}>
              <Grid item xs={12} sm={2}>
                <Typography variant="p">Rent Now</Typography>
                <Typography variant="p" sx={{ marginLeft: "45%" }}>
                  <span>&#8377;</span>499.00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ padding: "3px", marginLeft: "3px" }}
            >
              <Grid item xs={12} sm={3}>
                <Typography variant="p" fontSize="13px">
                  Daily Packages:
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontSize: "13px", marginLeft: "3px" }}
                >
                  1Day + <span>&#8377;</span>499.00 = <span>&#8377;</span>
                  499.00
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ padding: "3px", paddingBottom: "7px" }}
            >
              <Grid item xs={12} sm={10}>
                <Typography variant="p">Gohub Discount</Typography>
                <Typography
                  variant="p"
                  color="#4cbb17"
                  sx={{ marginLeft: "23%" }}
                >
                  - <span>&#8377;</span>49.90
                </Typography>
              </Grid>
            </Grid>
            <hr
              style={{
                color: "#9e9e9e",
                borderColor: "#9e9e9e",
                height: "3px",
              }}
            />
            <Grid
              container
              spacing={2}
              sx={{ padding: "3px", paddingBottom: "7px" }}
            >
              <Grid item xs={12} sm={10}>
                <Typography variant="p">Total</Typography>
                <Typography variant="p" sx={{ marginLeft: "60%" }}>
                  <span>&#8377;</span>449.10
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ padding: "2px", marginLeft: "5px" }}
            >
              <Grid item xs={12} sm={10}>
                <Typography variant="p" fontSize="13px">
                  Remaining Rent
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontSize: "13px", marginLeft: "30%" }}
                >
                  <span>&#8377;</span>336.83
                </Typography>
                <br />
                <Typography variant="p" fontSize="13px">
                  (To be paid at the time of pickUp)
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                padding: "2px",
                marginLeft: "5px",
                paddingBottom: "7px",
              }}
            >
              <Grid item xs={12} sm={10}>
                <Typography variant="p" fontSize="13px">
                  Advanced Payment
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontSize: "13px", marginLeft: "23%" }}
                >
                  <span>&#8377;</span>112.28
                </Typography>
              </Grid>
            </Grid>
            <hr
              style={{
                color: "#9e9e9e",
                borderColor: "#9e9e9e",
                height: "3px",
              }}
            />
            <Grid container spacing={2} sx={{ padding: "3px" }}>
              <Grid item xs={12} sm={10}>
                <Typography variant="p">Amount Paid</Typography>
                <Typography variant="p" sx={{ marginLeft: "38%" }}>
                  <span>&#8377;</span>112.28
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ padding: "3px", paddingBottom: "7px" }}
            >
              <Grid item xs={12} sm={10}>
                <Typography variant="p">Refundable Deposit</Typography>
                <Typography variant="p" sx={{ marginLeft: "18%" }}>
                  <span>&#8377;</span>2000
                </Typography>
                <br />
                <Typography variant="p" fontSize="13px">
                  (To be paid at the time of pickUp and will refunded after the
                  drop)
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}
