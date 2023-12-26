import {
  AppBar,
  BottomNavigation,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  tableCellClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroDestini from "../../assets/images/HeroDestini.png";
import HondaSP from "../../assets/images/HondaSP.png";
import Ninja from "../../assets/images/bike2.webp";
import Duet from "../../assets/images/bike3.webp";
import HondaActiva from "../../assets/images/HondaActiva.png";
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import SocialDistanceRoundedIcon from "@mui/icons-material/SocialDistanceRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import instantRefund from "../../assets/images/instantRefund.png";
import distanceIcon from "../../assets/images/distanceIcon.png";
import excessChargeIcon from "../../assets/images/excessChargeIcon.png";
import latePenaltyIcon from "../../assets/images/latePenaltyIcon.png";
import AssistantDirectionRoundedIcon from "@mui/icons-material/AssistantDirectionRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import AirlineSeatReclineNormalRoundedIcon from "@mui/icons-material/AirlineSeatReclineNormalRounded";
import SettingsAccessibilityRoundedIcon from "@mui/icons-material/SettingsAccessibilityRounded";
// import goImage from "../assets/images/goImage.png";
import Faq from "../../components/desktop/Faq";
import OfferCarousal from "../../components/desktop/OfferCarousal";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddIcon from "@mui/icons-material/Add";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MobilePostLoginNavbar from "../../layouts/mobile/MobilePostLoginNavbar";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import SearchCityModal from "../../components/desktop/SearchCityModal";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CollapsibleSearch from "../../components/mobile/CollapsibleSearch";

// const style = {
//   position: "absolute",
//   // top: "50%",
//   // left: "50%",
//   // transform: "translate(-84%, -15%)",
//   width: "97%",
//   bgcolor: "background.paper",
//   borderRadius: "5px",
//   boxShadow: 24,
//   p: 2,
//   // justifyContent: "center",
//   // mx: "auto",
// };

const styles = {
  position: "absolute",
  top: "15%",
  right: "-7%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "green",
  color: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

const styled = {
  position: "absolute",

  top: "40%",
  left: "15%",
  // right: "-7%",
  // transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "red",
  color: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

const stylling = {
  position: "absolute",
  top: "40%",
  left: "70%",
  transform: "translate(-76%, -15%)",
  width: "80%",
  height: "40%",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 2,
};

function createData(TimeOfCancellation, RefundPercentage, RefundAmount) {
  return { TimeOfCancellation, RefundPercentage, RefundAmount };
}

const rows = [
  createData("If cancelled before 72 hours from pickup time", "100%", "₹"),
  createData(
    "If cancelled between 72 and 24 hours before pickup time",
    "No Refund",
    "₹0"
  ),
  createData("If cancelled within 24 hours of pickup time", "50%", "₹ 0.00"),
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MobileBookNowPage() {
  const date = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [search, setSearch] = useState(false);
  const handleSearchOpen = () => setSearch(true);
  const handleSearchClose = () => setSearch(false);

  const [payment, setPayment] = useState("PayNow");
  const [partialPayment, setPartialPayment] = useState("PartialPayment");

  const [payNow, setPayNow] = useState(false);
  const handlePayNowOpen = () => setPayNow(true);
  const handlePayNowClose = () => setPayNow(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [change, setChange] = useState(true);
  const handleChange = () => {
    setChange(!change);
  };
  const [name, setName] = useState("Location");
  const [setEditName] = useState("Bangalore");

  const [bike, setBike] = useState(false);
  const handleBikeModel = () => setBike(true);
  const handleBikeModelClose = () => setBike(false);

  const [image, setImage] = useState("HeroDestini");

  useEffect(() => {
    const initial_StartDate = dayjs(date.state.selected_startDate.$d);
    const initial_EndDate = dayjs(date.state.selected_endDate.$d);
    const initial_CityName = date.state.selected_cityName;
    console.log(initial_StartDate);
    console.log(initial_EndDate);
    console.log(initial_CityName);
    setStartDate(initial_StartDate);
    setEndDate(initial_EndDate);
    setName(initial_CityName);
  }, []);

  const handleNavigate = () => {
    navigate("/RentNow", {
      state: {
        selected_startDate: startDate,
        selected_endDate: endDate,
        selected_cityName: name,
      },
    });
  };
  //   setStartDate(initial_StartDate);
  //   setEndDate(initial_EndDate);
  // }, []);


  // --  handle Popup-images
  const imageArray = [HeroDestini, HondaSP, Ninja, Duet, HondaActiva];
  const [currentImageUrl, setCurrentImageUrl] = useState(HeroDestini)
  const [currentNum, setCurrentNum] = useState(0)
  let arrayLength = imageArray.length; // 5
  // let currentImageUrl = HeroDestini;
  // let currentNum = 0;

  const handleImageForwardButton = () => {
    if (currentNum === arrayLength - 1) {
      setCurrentNum(0)
    }
    else {
      setCurrentNum(currentNum + 1)
    }
    // currentImageUrl = imageArray[currentNum];
    setCurrentImageUrl(imageArray[currentNum])
  }
  const handleImageBackwordButton = () => {
    if (currentNum === 0) {
      setCurrentNum(arrayLength - 1)
    }
    else {
      setCurrentNum(currentNum - 1)
    }
    // currentImageUrl = imageArray[currentNum];
    setCurrentImageUrl(imageArray[currentNum])
  }

  // console.log("currentNum -> ", currentNum);

  return (
    <>
      <DynamicMobileNavbar />
      {/* Collapsible Location, Date and Search */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          // padding: "10px",
          color: "#000000",
          top: 55,
        }}
      >
        <CollapsibleSearch />
      </AppBar>

      {/* <AppBar 
        position="sticky"
        sx={{ backgroundColor: "white", padding: "20px" }}
      >
        <Box sx={{ display: "flex", textAlign: "center" }}>
          <Box sx={{ border: "#000000" }}>
            <Typography sx={{ color: "#000000", textAlign: "center" }}>
              Location - Date & Time
            </Typography>
          </Box>
          <ArrowDownwardIcon sx={{ color: "#59CE8F" }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FormControl
            sx={{ width: "90%", display: "flex", justifyContent: "center" }}
          >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                label="Go Hub Location"
                defaultValue="Baghajatin"
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Pickup Date & Time"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Dropoff Date & Time"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  sx={{ width: "100%" }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={2}>
              <SearchCityModal />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                onClick={handleSearchOpen}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#4cbb17",
                  padding: "10px",
                  margin: "5px",
                  ":hover": {
                    backgroundColor: "#4cbb17",
                  },
                }}
              >
                Search
              </Button>
              <Modal
                open={search}
                onClose={handleSearchClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styles}>
                  <div style={{ display: "flex" }}>
                    <IconButton
                      aria-label="close"
                      onClick={() => setSearch(false)}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[800],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <IconButton>
                      <TaskAltOutlinedIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Success
                    </Typography>
                  </div>
                  <Typography id="modal-modal-description" sx={{ ml: 5 }}>
                    Date and time changed
                  </Typography>
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </Container>
      </AppBar> */}
      <Container sx={{ marginTop: "2%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <Box
              sx={{
                border: "1px solid lightGray",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#f8d7da",
                  border: "1px solid #f5c6cb",
                  borderRadius: "5px",
                  padding: "10px",
                  color: "#721c24",
                  width: "30%",
                  fontSize: "12px",
                }}
              >
                Only 1 Bike Available
              </Box>
              {image === "HeroDestini" && (
                <img
                  src={HeroDestini}
                  alt="Hero Destini"
                  style={{
                    width: "50%",
                    padding: "30px",
                    marginLeft: "100px",
                  }}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  onClick={handleBikeModel}
                />
              )}
              {image === "Duet" && (
                <img
                  src={Duet}
                  alt="Duet"
                  style={{
                    width: "50%",
                    padding: "30px",
                    marginLeft: "100px",
                  }}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  onClick={handleBikeModel}
                />
              )}
              {image === "HondaSP" && (
                <img
                  src={HondaSP}
                  alt="Honda SP"
                  style={{
                    width: "50%",
                    padding: "30px",
                    marginLeft: "100px",
                  }}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  onClick={handleBikeModel}
                />
              )}
              {image === "Ninja" && (
                <img
                  src={Ninja}
                  alt="Ninja"
                  style={{
                    width: "50%",
                    padding: "30px",
                    marginLeft: "100px",
                  }}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  onClick={handleBikeModel}
                />
              )}
              {image === "HondaActiva" && (
                <img
                  src={HondaActiva}
                  alt="HondaActiva"
                  style={{
                    width: "50%",
                    padding: "30px",
                    marginLeft: "100px",
                  }}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  onClick={handleBikeModel}
                />
              )}
              {/* <Modal  
                open={bike}
                onClose={handleBikeModelClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={stylling}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Bike Model
                  </Typography>
                  <IconButton
                    aria-label="close"
                    onClick={() => setBike(false)}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[800],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Grid container spacing={2} sx={{ marginTop: "5px" }}>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Duet}
                        alt="Duet"
                        style={{
                          width: "150px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Duet");
                          setBike(false);
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          padding: "5px",
                          marginLeft: "45px",
                        }}
                      >
                        Duet
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={HondaSP}
                        alt="HondaSP"
                        style={{
                          width: "150px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("HondaSP");
                          setBike(false);
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          padding: "5px",
                          marginLeft: "25px",
                        }}
                      >
                        Honda SP
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={Ninja}
                        alt="Ninja"
                        style={{
                          width: "150px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("Ninja");
                          setBike(false);
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          padding: "5px",
                          marginLeft: "55px",
                        }}
                      >
                        Ninja
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={HondaActiva}
                        alt="HondaActiva"
                        style={{
                          width: "150px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("HondaActiva");
                          setBike(false);
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          padding: "5px",
                          marginLeft: "25px",
                        }}
                      >
                        Honda Activa
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <img
                        className="image"
                        src={HeroDestini}
                        alt="HeroDestini"
                        style={{
                          width: "150px",
                          borderRadius: "5px",
                        }}
                        onClick={() => {
                          setImage("HeroDestini");
                          setBike(false);
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          padding: "5px",
                          marginLeft: "25px",
                        }}
                      >
                        Hero Destini
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Modal> */}


              {/* --- current-Model */}
              <Modal
                open={bike}
                onClose={handleBikeModelClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              // sx={{width: "80%", height: "80%"}}
              >
                <Box sx={stylling}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Bike Model
                  </Typography>
                  <IconButton
                    aria-label="close"
                    onClick={() => setBike(false)}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[800],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Grid container spacing={0} sx={{ marginTop: "5px" }}>

                    <div className="w-full flex items-center justify-between">
                      <div className="w-[5%] ">
                        <MdArrowBackIos onClick={handleImageBackwordButton} className="text-2xl cursor-pointer" />
                      </div>

                      <div className="w-[90%] h-full">
                        <img src={currentImageUrl} alt="carousel" className="w-full h-[220px]" />
                      </div>

                      <div className="w-[5%] ">
                        <MdArrowForwardIos onClick={handleImageForwardButton} className="text-2xl cursor-pointer" />
                      </div>
                    </div>
                  </Grid>
                </Box>
              </Modal>

              <br />
              <Box sx={{ textAlign: "center" }}>
                {" "}
                <Typography
                  variant="p"
                  sx={{ fontSize: "10px", textAlign: "center" }}
                >
                  *Images are for representation purposes only.
                </Typography>{" "}
              </Box>

              <Grid container spacing={2} sx={{ marginTop: "2%" }}>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <IconButton sx={{ color: "#59ce8f" }}>
                      <SocialDistanceRoundedIcon fontSize="medium" />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                        fontSize: "12px",
                      }}
                    >
                      <Typography variant="p">Kms Driven</Typography>
                      <Typography variant="p" color="#59ce8f">
                        900 Kms
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <IconButton sx={{ color: "#59ce8f" }}>
                      <SettingsRoundedIcon fontSize="medium" />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                        fontSize: "12px",
                      }}
                    >
                      <Typography variant="p">Last Serviced</Typography>
                      <Typography variant="p" color="#59ce8f">
                        Aug 15, 2022
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <div style={{ display: "flex" }}>
                    <IconButton sx={{ color: "#59ce8f" }}>
                      <EngineeringRoundedIcon fontSize="medium" />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                        fontSize: "12px",
                      }}
                    >
                      <Typography variant="p">Make Year</Typography>
                      <Typography variant="p" color="#59ce8f">
                        2020
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={10} sx={{ display: "flex" }}>
                <Typography variant="p" fontWeight="bold" sx={{ pr: 2 }}>
                  Hero Destini 125
                </Typography>
                <Box
                  sx={{
                    borderRadius: "3px",
                    color: "#856404",
                    background: "#ffeeba",
                    padding: "5px",
                    fontSize: "12px",
                  }}
                >
                  10% off
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}></Grid>
            </Grid>
            <div style={{}}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "medium", fontSize: "15px" }}
                >
                  Payment Option
                </Typography>{" "}
              </Box>

              <Box sx={{ mb: 3 }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  {payment === "PayNow" && (
                    <FormControlLabel
                      value="PayNow"
                      control={<Radio color="success" />}
                      label={
                        <Typography sx={{ fontSize: "12px" }}>
                          Pay Now (Pay full amount now)
                        </Typography>
                      }
                      onClick={() => {
                        setPayment("PayNow");
                        handlePayNowOpen();
                        // componentsProps = { typography: { variant: "h3" } };
                      }}
                    />
                  )}
                  {partialPayment === "PartialPayment" && (
                    <FormControlLabel
                      value="PartialPayment"
                      control={<Radio color="success" />}
                      label={
                        <Typography sx={{ fontSize: "12px" }}>
                          Partial Payment (Pay partial amount now and rest at
                          the time of pickup){" "}
                        </Typography>
                      }
                      onClick={() => {
                        setPartialPayment("PartialPayment");
                        handlePayNowOpen();
                      }}
                    />
                  )}
                </RadioGroup>
              </Box>

              <Modal
                open={payNow}
                onClose={handlePayNowClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={styled}>
                  <div style={{ display: "flex" }}>
                    <IconButton
                      aria-label="close"
                      onClick={() => setPayNow(false)}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[800],
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <IconButton>
                      <ErrorOutlineIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Error
                    </Typography>
                  </div>
                  <Typography id="modal-modal-description" sx={{ ml: 5 }}>
                    Booking can be created only for future time
                  </Typography>
                </Box>
              </Modal>
            </div>
            <Box
              sx={{
                borderRadius: "3px",
                background: "#d4edda",
                color: "#155724",
                marginTop: "10px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <Typography variant="p">
                  Refundable Deposit - ₹ 2000 (To be paid at the time of pickup)
                </Typography>
              </div>
            </Box>
            <div style={{ marginTop: "20px", paddingBottom: "10px" }}>
              <Button
                variant="outlined"
                onClick={handleOpen}
                size="small"
                sx={{ width: "100%" }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    sm={10}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ paddingTop: "8px" }}>
                      <Typography variant="p" sx={{ fontSize: "12px" }}>
                        Cancellation Policy
                      </Typography>
                    </div>
                    <IconButton>
                      <ChevronRightIcon sx={{ color: "blue" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // my: "auto",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bgcolor: "background.paper",
                    p: 1,
                    boxShadow: 24,
                    borderRadius: "5px",
                    width: "96%",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    Cancellation Policy
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
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TableContainer>
                      <Table sx={{ minWidth: 10 }} aria-label="simple table">
                        <TableHead>
                          <TableRow
                            sx={{
                              backgroundColor: "#59ce8f",
                              border: "2px solid black",
                            }}
                          >
                            <TableCell
                              sx={{
                                color: "white",
                                border: "2px solid black",
                              }}
                            >
                              Time of Cancellation
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                color: "white",
                                border: "2px solid black",
                              }}
                            >
                              Refund Percentage
                            </TableCell>
                            <TableCell align="right" sx={{ color: "white" }}>
                              Refund Amount
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.TimeOfCancellation}
                              sx={{
                                [`& .${tableCellClasses.root}`]: {
                                  borderBottom: "2px solid black",
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{ border: "2px solid black" }}
                              >
                                {row.TimeOfCancellation}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ border: "2px solid black" }}
                              >
                                {row.RefundPercentage}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{ border: "2px solid black" }}
                              >
                                {row.RefundAmount}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                </Box>
              </Modal>
            </div>

            <Box
              sx={{
                border: "1px solid lightGray",
                borderRadius: "5px",
                mt: 3,
              }}
            >
              <div style={{ padding: "10px" }}>
                <Box sx={{ mb: 3 }}>
                  {" "}
                  <Typography variant="h7" fontWeight={"bold"}>
                    Terms & Conditions
                  </Typography>
                </Box>

                <ul style={{ fontSize: "12px", mt: 2 }}>
                  <li>
                    Documents Required:- Aadhar Card, Driving License and
                    Student/Employee ID Card.
                  </li>
                  <li>
                    One Govt address proof has to be submitted at the time of
                    pickup which will be returned at the time of drop.The riders
                    needs to present all the original documents at the time of
                    pickup.
                  </li>
                  <li>
                    Fuel Charges are not included in the security deposit or
                    rent.
                  </li>
                  <li>
                    In case of any damage to the vehicle, the customer is liable
                    to pay the repair charges plus the labour charges as per the
                    Authorised Service Center.
                  </li>
                  <li>
                    Charges to be borne by the customer:- Helmet Lost: Rs. 700,
                    Key Lost: Rs.1000, Full Insurance Declared Value of the
                    vehicle in case of any theft.
                  </li>
                </ul>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "10%" }}>
          <Typography variant="h6" fontWeight="bold" fontSize={"18px"}>
            Things To Remember
          </Typography>
          <Box
            sx={{
              border: "1px solid lightGray",
              borderRadius: "5px",
              mt: 5,
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", m: 3 }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  id="logo"
                  component="img"
                  sx={{
                    height: 30,
                    m: "auto",
                  }}
                  alt="instantRefund"
                  src={instantRefund}
                />
                {/* <img
                  src={instantRefund}
                  alt="instantRefund"
                  style={{
                    width: 30,
                    m: "auto",
                    // height: "50px",
                    // padding: "10px",
                    // marginLeft: "30px",
                  }} */}
                <Box sx={{}}>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Security Deposit
                  </Typography>
                  {/* <IconButton>
                    <InfoOutlinedIcon sx={{ color: "#59ce8f", width: 20 }} />
                  </IconButton> */}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    // marginLeft: "30px",
                    color: "#59ce8f",
                    fontSize: "12px",
                  }}
                >
                  ₹2000
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  id="logo"
                  component="img"
                  sx={{
                    height: 30,
                    m: "auto",
                  }}
                  alt="distanceIcon"
                  src={distanceIcon}
                />

                <Box sx={{}}>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Distance Limit
                  </Typography>
                  {/* <IconButton>
                    <InfoOutlinedIcon sx={{ color: "#59ce8f", width: 20 }} />
                  </IconButton> */}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    // marginLeft: "30px",
                    color: "#59ce8f",
                    fontSize: "12px",
                  }}
                >
                  No Distance Limit
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", m: 3 }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  id="logo"
                  component="img"
                  sx={{
                    height: 30,
                    m: "auto",
                  }}
                  alt="excessChargeIcon"
                  src={excessChargeIcon}
                />

                <Box sx={{}}>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Excess Charge
                  </Typography>
                  {/* <IconButton>
                    <InfoOutlinedIcon sx={{ color: "#4cbb17", width: 20 }} />
                  </IconButton> */}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    // marginLeft: "30px",
                    color: "#59ce8f",
                    fontSize: "12px",
                  }}
                >
                  ₹4 per km{" "}
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  id="logo"
                  component="img"
                  sx={{
                    height: 30,
                    m: "auto",
                  }}
                  alt="latePenaltyIcon"
                  src={latePenaltyIcon}
                />

                <Box sx={{}}>
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Late Penalty
                  </Typography>
                  {/* <IconButton>
                    <InfoOutlinedIcon sx={{ color: "#4cbb17", width: 20 }} />
                  </IconButton> */}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    // marginLeft: "30px",
                    color: "#59ce8f",
                    fontSize: "12px",
                  }}
                >
                  ₹100 per hour
                </Typography>
              </Box>
              {/* <Box>
                <div style={{ padding: "24px" }}>
                  <img
                    src={excessChargeIcon}
                    alt="excessChargeIcon"
                    style={{
                      width: "auto",
                      height: "55px",
                      padding: "10px",
                      marginLeft: "30px",
                    }}
                  />
                  <br />
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "17px" }}
                  >
                    Excess Charge
                    <IconButton>
                      <InfoOutlinedIcon sx={{ color: "#4cbb17" }} />
                    </IconButton>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#4cbb17" }}>
                    ₹4 per km
                  </Typography>
                </div>
              </Box>
              <Box>
                <div style={{ padding: "24px" }}>
                  <img
                    src={latePenaltyIcon}
                    alt="latePenaltyIcon"
                    style={{
                      width: "auto",
                      height: "55px",
                      padding: "10px",
                      marginLeft: "30px",
                    }}
                  />
                  <br />
                  <Typography
                    variant="p"
                    sx={{ fontWeight: "bold", fontSize: "17px" }}
                  >
                    Late Penalty
                    <IconButton>
                      <InfoOutlinedIcon sx={{ color: "#4cbb17" }} />
                    </IconButton>
                  </Typography>
                  <Typography variant="h5" sx={{ color: "#4cbb17" }}>
                    ₹100 per hour
                  </Typography>
                </div>
              </Box> */}
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "10%" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            fontSize={"18px"}
            sx={{ mb: 5 }}
          >
            Bike Features
          </Typography>
          <div style={{ marginTop: "2%" }}>
            <Box sx={{}}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box xs={12} sm={2}>
                  <div style={{ display: "flex" }}>
                    <IconButton>
                      <AssistantDirectionRoundedIcon
                        fontSize="medium"
                        sx={{ color: "#59ce8f" }}
                      />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        Displacement
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "14px",
                          color: "#59ce8f",
                          fontWeight: "bold",
                        }}
                      >
                        124cc
                      </Typography>
                    </div>
                  </div>
                </Box>
                <Box xs={12} sm={2}>
                  <div style={{ display: "flex" }}>
                    <IconButton>
                      <SpeedRoundedIcon
                        fontSize="medium"
                        sx={{ color: "#59ce8f" }}
                      />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        Top Speed
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "14px",
                          color: "#59ce8f",
                          fontWeight: "bold",
                        }}
                      >
                        100 kmph
                      </Typography>
                    </div>
                  </div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pr: 2,
                  mt: 3,
                }}
              >
                <Box>
                  <div style={{ display: "flex" }}>
                    <IconButton>
                      <LocalGasStationRoundedIcon
                        fontSize="medium"
                        sx={{ color: "#59ce8f" }}
                      />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        Fuel Capacity
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "14px",
                          color: "#59ce8f",
                          fontWeight: "bold",
                        }}
                      >
                        11L
                      </Typography>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div style={{ display: "flex" }}>
                    <IconButton>
                      <AirlineSeatReclineNormalRoundedIcon
                        fontSize="medium"
                        sx={{ color: "#59ce8f" }}
                      />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        Seats
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "14px",
                          color: "#59ce8f",
                          fontWeight: "bold",
                        }}
                      >
                        2 Seater
                      </Typography>
                    </div>
                  </div>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pr: 2,
                  mt: 3,
                }}
              >
                <Box>
                  <div style={{ display: "flex" }}>
                    <IconButton>
                      <SettingsAccessibilityRoundedIcon
                        fontSize="medium"
                        sx={{ color: "#59ce8f" }}
                      />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        Kerb Weight
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "14px",
                          color: "#59ce8f",
                          fontWeight: "bold",
                        }}
                      >
                        116 Kg
                      </Typography>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div style={{ display: "flex" }}>
                    <IconButton>
                      <SpeedRoundedIcon
                        fontSize="medium"
                        sx={{ color: "#59ce8f" }}
                      />
                    </IconButton>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "3px",
                      }}
                    >
                      <Typography
                        variant="p"
                        sx={{ fontSize: "15px", fontWeight: "bold" }}
                      >
                        Mileage
                      </Typography>
                      <Typography
                        variant="p"
                        sx={{
                          fontSize: "14px",
                          color: "#59ce8f",
                          fontWeight: "bold",
                        }}
                      >
                        65 Kmpl
                      </Typography>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </div>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: "10%" }}>
          <Grid item xs={12} sm={7}>
            <Typography variant="h6" fontSize={"15px"}>
              Pickup Location
            </Typography>
            <Typography
              variant="h6"
              fontSize={"15px"}
              sx={{ color: "#59ce8f" }}
            >
              Baghajatin
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Map
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACESS_TOKEN}
              initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14,
              }}
              style={{ width: 340, height: 200 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
            />
            {/* <img src={location} alt="location" /> */}
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "10%" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
            fontSize={"18px"}
          >
            Offers for you
          </Typography>
          <OfferCarousal />
        </Box>
        <Faq />
      </Container>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 3,
          zIndex: 100,
        }}
      >
        <Container>
          <BottomNavigation
            size="small"
            sx={{
              height: "2%",
            }}
          >
            <Grid
              container
              spacing={1}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item sx={{ display: "inline-flex" }}>
                <Typography sx={{ my: "auto", fontSize: "12px" }}>
                  Age 18 +{" "}
                </Typography>
                <Checkbox
                  {...label}
                  color="success"
                  size="medium"
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{}}
                  onClick={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <Typography
                  // variant="p"
                  sx={{ fontSize: "9px", fontWeight: "bold" }}
                >
                  You are just one step away from confirming your booking.
                  Confirm that you are above 18 and you are good to go!
                </Typography>
              </Grid> */}
              <Grid item sx={{ marginLeft: "10px" }}>
                <Typography
                  variant="p"
                  sx={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  Payable Amount
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  ₹ 500
                </Typography>
              </Grid>
              {/* <Grid item>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Grid> */}
              {/* <Grid item>
                <Typography
                  variant="p"
                  sx={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  Refundable Deposit
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "22px", fontWeight: "bold" }}
                >
                  ₹ 2000
                </Typography>
              </Grid> */}
              <Grid item sx={{ marginLeft: "25px" }}>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  color="success"
                  size="medium"
                  align="center"
                  disabled={change}
                  sx={{ mt: "10%" }}
                >
                  Rent Now
                </Button>
              </Grid>
            </Grid>
          </BottomNavigation>
        </Container>
      </Paper>
      <div style={{ marginTop: "10%" }}></div>
      <MobileFooter />
    </>
  );
}
