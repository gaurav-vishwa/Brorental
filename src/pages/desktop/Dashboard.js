import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import profileImage from "../../assets/images/Profile.png";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Profile from "../../components/desktop/Profile";
import Booking from "../../components/desktop/Booking";
import GoCoins from "../../components/desktop/GoCoins";
import PostLoginNavbar from "../../layouts/desktop/PostLoginNavbar";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileDashboard from "../mobile/MobileDashboard";

export default function Dashboard() {
  const [active, setActive] = useState("profile");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <MobileDashboard />
      ) : (
        <Box>
          <DynamicNavbar />

          <Container sx={{ marginTop: "5%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
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
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ marginTop: "25%" }}
                    >
                      Dibyajyoti Sahoo
                    </Typography>
                  </div>
                </Box>
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
                      backgroundColor: "#36b671",
                    },
                  }}
                  onClick={() => setActive("profile")}
                >
                  Profile
                </Button>
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
                      backgroundColor: "#36b671",
                    },
                  }}
                  onClick={() => setActive("booking")}
                >
                  Bookings
                </Button>
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
                      backgroundColor: "#36b671",
                    },
                  }}
                  onClick={() => setActive("goCoins")}
                >
                  Bro Coins
                </Button>
              </Grid>
              <Grid item xs={12} sm={8}>
                {active === "profile" && <Profile />}
                {active === "booking" && <Booking />}
                {active === "goCoins" && <GoCoins />}
              </Grid>
            </Grid>
          </Container>
          <div className="h-40"></div>
          <DynamicFooter />
        </Box>
      )}
    </>
  );
}
