import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import rightSection from "../assets/images/rightSection.jpeg";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Bangalore from "../assets/images/Bangalore.jpg";
import Chandigarh from "../assets/images/Chandigarh.jpg";
import Chennai from "../assets/images/Chennai.jpg";
import Dehradun from "../assets/images/Dehradun.webp";
import Delhi from "../assets/images/Delhi.webp";
import Ghaziabad from "../assets/images/Ghaziabad.jpg";
import Goa from "../assets/images/Goa.jpg";
import Hyderabad from "../assets/images/Hyderabad.jpg";
import Kolkata from "../assets/images/Kolkata.jpg";
import Manali from "../assets/images/Manali.jpg";
import Mumbai from "../assets/images/Mumbai.webp";
import Pune from "../assets/images/Pune.jpg";
import Gurgaon from "../assets/images/Gurgaon.jpg";
import Guwahati from "../assets/images/Guwahati.jpg";
import Jaipur from "../assets/images/Jaipur.jpg";
import Leh from "../assets/images/Leh.jpg";
import Noida from "../assets/images/Noida.jpg";
import Udaipur from "../assets/images/Udaipur.jpg";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
// import Offer from "./Offer";
// import Video from "./Video";
import Features from "./Features";
import BookRide from "./BookRide";
import Faq from "./Faq";
import Statistics from "./Statistics";
// import KnowMore from "./KnowMore";
import goImage from "../assets/images/goImage.png";
import ReactPlayer from "react-player";
import NotificationsIcon from "@mui/icons-material/Notifications";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

const MobileHome = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Box classname="">
          <img
            src={rightSection}
            alt="Header"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          className=""
          sx={{
            // marginTop: 10,
            // marginRight: 10,
            padding: 2,
            boxShadow: 3,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">
            Commuting Made <span style={{ color: "#aeea00" }}>Easy</span>,
            <br />
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "5px" }}>
            <span style={{ color: "#aeea00" }}>Affordable</span> and{" "}
            <span style={{ color: "#aeea00" }}>Quick</span>
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "2px" }}>
            Scooter/Scooty/Bike on Rent in Delhi
          </Typography>
          <TextField
            fullWidth
            label="Search City"
            sx={{ marginTop: "5%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ color: "green" }}>
                  <PlaceIcon />
                </InputAdornment>
              ),
            }}
            onClick={handleOpen}
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Choose your preferred city
              </Typography>
              <Grid container spacing={2} sx={{ marginTop: "5px" }}>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Bangalore}
                    alt="Bangalore"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Bangalore
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Chandigarh}
                    alt="Chandigarh"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Chandigarh
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Chennai}
                    alt="Chennai"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Chennai
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Dehradun}
                    alt="Dehradun"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Dehradun
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Delhi}
                    alt="Delhi"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Delhi
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Ghaziabad}
                    alt="Ghaziabad"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Ghaziabad
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Goa}
                    alt="Goa"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Goa
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Hyderabad}
                    alt="Hyderabad"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Hyderabad
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Kolkata}
                    alt="Kolkata"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Kolkata
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Manali}
                    alt="Manali"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Manali
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Mumbai}
                    alt="Mumbai"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Mumbai
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Pune}
                    alt="Pune"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Pune
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Gurgaon}
                    alt="Gurgaon"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Gurgaon
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Guwahati}
                    alt="Guwahati"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Guwahati
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Jaipur}
                    alt="Jaipur"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Jaipur
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Leh}
                    alt="Leh"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Leh
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Noida}
                    alt="Noida"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Noida
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    className="image"
                    src={Udaipur}
                    alt="Udaipur"
                    style={{
                      width: "125px",
                      height: "125px",
                      borderRadius: "5px",
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Udaipur
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Modal>
          <TextField
            fullWidth
            label="Start Date"
            sx={{ marginTop: "2%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ color: "#aeea00" }}>
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="End Date"
            sx={{ marginTop: "2%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ color: "red" }}>
                  <CalendarMonthIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Book Now"
            sx={{ marginTop: "2%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ color: "blue" }}>
                  <BookOnlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="p" sx={{ marginTop: "2%" }}>
            Duration: 1 Day
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "2%",
              width: "25%",
              backgroundColor: "green",
            }}
          >
            Search
          </Button>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", pt: 2 }}>
            Offers for you
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  // margin: "3%",
                  mt: 2,
                  boxShadow: "1",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" color="#9c3">
                      Get 10% as gocoins
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      src={goImage}
                      alt="goImage"
                      style={{ width: "61px", height: "41px" }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="p">
                  Receive GoCoins worth 10% of the booking amount which you can
                  redeem in your next booking
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed #9c3",
                    width: "55%",
                    marginTop: "5%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#9c3",
                      marginLeft: "55%",
                    }}
                  >
                    GOCOINS
                  </span>
                  <button
                    style={{
                      border: "2px solid #9c3",
                      backgroundColor: "#9c3",
                      color: "#fff",
                      marginLeft: "25%",
                      height: "50px",
                      padding: "0 20px",
                      fontWeight: "500",
                    }}
                  >
                    COPY
                  </button>
                </Box>
                <div style={{ marginTop: "5%" }}>
                  <Typography variant="p" marginLeft="5px">
                    Coupon Code
                  </Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb: 3 }}>
            Commuting Made Easy!
          </Typography>

          <ReactPlayer
            controls
            pip
            width="100%"
            url="https://youtu.be/VB4SUy5h8ME"
          />

          {/* <CardMedia sx={{ marginTop: "5%", width: "20%", height: "" }}>
            <ReactPlayer controls url="https://youtu.be/VB4SUy5h8ME" />
          </CardMedia> */}
        </Box>

        <Features />
        <BookRide />
        <Faq />
        <Statistics />
        <Box sx={{ py: 5 }}>
          <Box
            sx={{
              width: "100%",
              height: "5%",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "3",
            }}
          >
            <IconButton>
              <NotificationsIcon sx={{ fontSize: "30px", color: "black" }} />
            </IconButton>
            <Typography variant="p" sx={{ fontSize: "20px" }}>
              List your vehicle
            </Typography>{" "}
            <br />
            <Typography variant="h6" sx={{ marginTop: "3%", color: "#9c3" }}>
              Want to list your unused two-wheeler and earn extra income
            </Typography>
            <br />
            <Typography variant="p" sx={{ fontSize: "15px" }}>
              List your motorcycles and scooters with India's fastest growing
              mobility platform - Just connect to turn them into earning members
              of your family.
            </Typography>
            <br />
            <Button
              variant="contained"
              color="success"
              sx={{ marginTop: "10%" }}
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MobileHome;
