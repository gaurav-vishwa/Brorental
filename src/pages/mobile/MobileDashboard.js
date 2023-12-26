import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import profileImage from "../../assets/images/Profile.png";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

import MobilePostLoginNavbar from "../../layouts/mobile/MobilePostLoginNavbar";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import { Link } from "react-router-dom";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

export default function MobileDashboard() {
  const [active, setActive] = useState("profile");
  return (
    <>
      <DynamicMobileNavbar />

      <Box
        sx={{
          textAlign: "center",

          marginTop: "5%",
        }}
      >
        <Box>
          <Box
            sx={{
              mx: "auto",
              width: 350,
              height: 350,
              borderRadius: 2,
              boxShadow: 2,
              backgroundColor: "#e3f2fd",
            }}
          >
            <div style={{ padding: "17%" }}>
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  width: "80%",
                  marginLeft: "10%",
                }}
              />
              <Typography variant="h6" align="center" sx={{ marginTop: "25%" }}>
                Dibyajyoti Sahoo
              </Typography>
            </div>
          </Box>
          <Link to="/MobileProfile">
            <Button
              variant="contained"
              startIcon={<AccountBoxOutlinedIcon />}
              sx={{
                justifyContent: "flex-start",
                width: "350px",
                marginTop: "5%",
                padding: "10px",
                fontSize: "17px",
                backgroundColor: "#59CE8F",
                ":hover": {
                  backgroundColor: "#59CE8F",
                },
              }}
              onClick={() => setActive("profile")}
            >
              Profile
            </Button>
          </Link>
          <Link to="/MobileBookings">
            <Button
              variant="contained"
              startIcon={<BookOnlineOutlinedIcon />}
              sx={{
                justifyContent: "flex-start",
                width: "350px",
                marginTop: "3%",
                padding: "10px",
                fontSize: "17px",
                backgroundColor: "#59CE8F",
                ":hover": {
                  backgroundColor: "#59CE8F",
                },
              }}
              onClick={() => setActive("booking")}
            >
              Bookings
            </Button>
          </Link>
          <Link to="/MobileGoCoins">
            <Button
              variant="contained"
              startIcon={<AccountBalanceWalletOutlinedIcon />}
              sx={{
                justifyContent: "flex-start",
                width: "350px",
                marginTop: "3%",
                padding: "10px",
                fontSize: "17px",
                backgroundColor: "#59CE8F",
                ":hover": {
                  backgroundColor: "#59CE8F",
                },
              }}
              onClick={() => setActive("goCoins")}
            >
              Bro Coins
            </Button>
          </Link>
        </Box>
      </Box>
      <div className="h-40"></div>
      <MobileFooter />
    </>
  );
}
