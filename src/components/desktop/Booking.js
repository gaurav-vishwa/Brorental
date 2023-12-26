import { Box, Typography, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import emptyBookings from "../../assets/images/emptyBookings.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import BookingDetails from "./BookingDetails";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Booking() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <>
      {isMatch ? (
        <Box sx={{ display: "inline-flex", py: 3, px: 2 }}>
          <Link to="/Dashboard">
            <ArrowBackIosIcon sx={{ mt: 2, mr: 2, color: "#59CE8F" }} />
          </Link>

          <Box>
            <Typography variant="h5" sx={{ fontWeight: "regular" }}>
              Bookings
            </Typography>
            <Typography variant="p" sx={{ fontSize: "18px" }}>
              Manage your bookings
            </Typography>
          </Box>
        </Box>
      ) : (
        <div style={{ padding: "2%" }}>
          <Typography variant="h5" sx={{ fontWeight: "regular" }}>
            Bookings
          </Typography>
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Manage your bookings
          </Typography>
        </div>
      )}
      <Box
        sx={{
          width: { md: "100%", xs: "90%" },
          m: "auto",
          borderRadius: "8px",
          boxShadow: "2",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Confirmed" />
          <Tab label="Pending" />
          <Tab label="Cancelled" />
        </Tabs>
        <TabPanel value={value} index={0} align="center">
          <Box
            sx={{
              width: "25%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#fff3cd",
            }}
          >
            No orders found!
          </Box>
          <img
            src={emptyBookings}
            alt="No orders found"
            style={{ marginTop: "2%" }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BookingDetails />
        </TabPanel>
        <TabPanel value={value} index={2} align="center">
          <Box
            sx={{
              width: "25%",
              borderRadius: "8px",
              padding: "3px",
              backgroundColor: "#fff3cd",
            }}
          >
            No orders found!
          </Box>
          <img
            src={emptyBookings}
            alt="No orders found"
            style={{ marginTop: "2%" }}
          />
        </TabPanel>
      </Box>
    </>
  );
}
