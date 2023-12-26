import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import Bangalore from "../../assets/images/Bangalore.jpg";
import Chandigarh from "../../assets/images/Chandigarh.jpg";
import Chennai from "../../assets/images/Chennai.jpg";
import Dehradun from "../../assets/images/Dehradun.webp";
import Delhi from "../../assets/images/Delhi.webp";
import Ghaziabad from "../../assets/images/Ghaziabad.jpg";
import Goa from "../../assets/images/Goa.jpg";
import Hyderabad from "../../assets/images/Hyderabad.jpg";
import Kolkata from "../../assets/images/Kolkata.jpg";
import Manali from "../../assets/images/Manali.jpg";
import Mumbai from "../../assets/images/Mumbai.webp";
import Pune from "../../assets/images/Pune.jpg";
import Gurgaon from "../../assets/images/Gurgaon.jpg";
import Guwahati from "../../assets/images/Guwahati.jpg";
import Jaipur from "../../assets/images/Jaipur.jpg";
import Leh from "../../assets/images/Leh.jpg";
import Noida from "../../assets/images/Noida.jpg";
import Udaipur from "../../assets/images/Udaipur.jpg";
import bikeleft from "../../assets/images/bikeleft.png";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
// import BookOnlineIcon from "@mui/icons-material/BookOnline";

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

const SearchForm = () => {
  // Disable Search Button

  const [diableSearchBtn, setDiableSearchBtn] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [image, setImage] = useState("");
  const [name, setName] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/BookingFlow", {
      state: {
        selected_startDate: startDate,
        selected_endDate: endDate,
        selected_cityName: image,
      },
    });
  };

  const [changeStart, setChangeStart] = useState(true);
  const [changeEnd, setChangeEnd] = useState(false);

  useEffect(() => {
    setChangeStart(!changeStart);
    setChangeEnd(!changeEnd);
  }, [startDate]);

  return (
    <>
      <Box sx={{ display: "inline-flex" }}>
        <Box
          sx={{
            color: "#59ce8f",
            width: 200,
            mt: 30,
            ml: 5,
            position: "fixed",
          }}
        >
          <img className="text-[#59ce8f]" src={bikeleft} alt="" />
        </Box>
        <Box
          className=""
          sx={{
            marginTop: 10,
            ml: "12%",
            padding: 5,
            boxShadow: "10px 10px 10px #EAEAEA",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            position: "fixed",
          }}
        >
          <Typography variant="h4">
            Commuting Made <span style={{ color: "#59CE8F" }}>Easy</span>,
            <br />
          </Typography>
          <Typography variant="h4" sx={{ marginTop: "5px" }}>
            <span style={{ color: "#59CE8F" }}>Affordable</span> and{" "}
            <span style={{ color: "#59CE8F" }}>Quick</span>
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "2px" }}>
            Scooter/Scooty/Bike on Rent in Delhi
          </Typography>
          <TextField
            fullWidth
            placeholder="Search City"
            value={image}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginTop: "5%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ color: "#59CE8F" }}>
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
              <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[600],
                }}
              >
                <CloseIcon />
              </IconButton>
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
                    onClick={() => {
                      setImage("Bangalore");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Chandigarh");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Chennai");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Dehradun");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Delhi");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Ghaziabad");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Goa");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Hyderabad");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Kolkata");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Manali");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Mumbai");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Pune");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Gurgaon");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Guwahati");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Jaipur");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Leh");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Noida");
                      setOpen(false);
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
                    onClick={() => {
                      setImage("Udaipur");
                      setOpen(false);
                    }}
                  />
                  <Typography variant="h6" align="center">
                    Udaipur
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Modal>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Pickup Date"
              fullWidth
              // disablePast
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              sx={{ marginTop: "5%" }}
              disabled={changeStart}
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Dropoff Date"
              // disablePast
              value={endDate}
              // onChange={(newValue) => setEndDate(newValue)}
              onChange={(newValue) => {
                setEndDate(newValue);
                // checking CityName is selected or not : if selected will enable Search button
                if (image !== "") {
                  setDiableSearchBtn(false);
                }
              }}
              sx={{ marginTop: "5%" }}
              fullWidth
              disabled={changeEnd}
            />
          </LocalizationProvider>
          {/* <TextField
                fullWidth
                placeholder="Book Now"
                sx={{ marginTop: "2%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ color: "blue" }}>
                      <BookOnlineIcon />
                    </InputAdornment>
                  ),
                }}
              /> */}
          <Typography variant="p" sx={{ marginTop: "2%" }}>
            Duration: {Math.floor((endDate - startDate) / (1000 * 3600 * 24))}{" "}
            Day
          </Typography>
          <Box
            sx={{
              display: "inline-flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Box>
              <Button
                // variant="contained"
                sx={{
                  color: "#ffffff",
                  fontSize: "15px",
                  // marginTop: "2%",
                  // width: "25%",
                  backgroundColor: "#59CE8F",
                  ":hover": {
                    backgroundColor: "#36b671",
                  },
                }}
                // disabled={diableSearchBtn}
                onClick={handleNavigate}
              >
                Search
              </Button>
            </Box>
            <Box
              sx={{
                // marginTop: "2%",
                // marginLeft: "35%",
                // width: "40%",
                textAlign: "center",
              }}
            >
              <Button
                // variant="contained"
                sx={{
                  color: "#ffffff",
                  fontSize: "15px",
                  // marginTop: "2%",
                  // marginLeft: "35%",

                  backgroundColor: "#59CE8F",
                  ":hover": {
                    backgroundColor: "#59CE8F",
                  },
                }}
              >
                Instant Booking
              </Button>{" "}
              <Typography fontSize={"12px"}>Coming Soon</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchForm;
