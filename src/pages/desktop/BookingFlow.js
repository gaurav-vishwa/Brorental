import {
  AppBar,
  Box,
  Button,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HeroDestini from "../../assets/images/HeroDestini.png";
import HondaSP from "../../assets/images/HondaSP.png";
import { Link, useNavigate } from "react-router-dom";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CloseIcon from "@mui/icons-material/Close";

import PostLoginNavbar from "../../layouts/desktop/PostLoginNavbar";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileBookingFlow from "../../pages/mobile/MobileBookingFlow";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import dayjs from "dayjs";
import SearchCityModal from "../../components/desktop/SearchCityModal";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
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


export default function BookingFlow(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [packages, setPackages] = useState("dailyPackages");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const [location, setLocation] = useState(false);
  // const handleLocationOpen = () => setLocation(true);
  // const handleLocationClose = () => setLocation(false);

  const [name, setName] = useState("Location");
  const [setEditName] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const date = useLocation();

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

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/BookNowPage", {
      state: {
        selected_startDate: startDate,
        selected_endDate: endDate,
        selected_cityName: name,
      },
    });
  };


  // handeling "useState" & "useeffect" for skeleton
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      {isMatch ? (
        <MobileBookingFlow />
      ) : (
        <Box>
          <DynamicNavbar />
          <AppBar
            position="sticky"
            sx={{ backgroundColor: "white", padding: "20px" }}
          >
            <Container>
              <Grid container spacing={2}>
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
                    variant="contained"
                    size="medium"
                    sx={{
                      backgroundColor: "#59ce8f",
                      padding: "10px",
                      marginTop: "5px",
                      marginRight: "12px",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                    }}
                    onClick={handleOpen}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </AppBar>


          <Container sx={{ marginTop: "2%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <Box
                  sx={{
                    border: "1px solid lightGray",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5">FILTER</Typography>
                  <div style={{ padding: "7px", marginTop: "8px" }}>
                    <Typography variant="p" sx={{ fontWeight: "medium" }}>
                      BOOKING DURATION
                    </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="daily package"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="daily package"
                        control={<Radio color="success" />}
                        label="Daily Package"
                        onClick={() => {
                          setPackages("dailyPackages");
                          handleOpen();
                        }}
                      />
                      <FormControlLabel
                        value="weekly package"
                        control={<Radio color="success" />}
                        label="Weekly Package"
                        onClick={() => {
                          setPackages("weeklyPackages");
                          handleOpen();
                        }}
                      />
                      <FormControlLabel
                        value="15 days package"
                        control={<Radio color="success" />}
                        label="15 Days Package"
                        onClick={() => {
                          setPackages("15daysPackages");
                          handleOpen();
                        }}
                      />
                      <FormControlLabel
                        value="monthly package"
                        control={<Radio color="success" />}
                        label="Monthly Package"
                        onClick={() => {
                          setPackages("monthlyPackages");
                          handleOpen();
                        }}
                      />
                    </RadioGroup>
                  </div>
                  <hr />
                  <div style={{ padding: "7px", marginTop: "8px" }}>
                    <Typography variant="p" sx={{ fontWeight: "medium" }}>
                      TRANSMISSION TYPE
                    </Typography>
                    <div>
                      <Checkbox
                        {...label}
                        color="success"
                        size="small"
                        inputProps={{ "aria-label": "controlled" }}
                        onClick={() => {
                          setPackages("gear");
                          handleOpen();
                        }}
                      />
                      Gear
                    </div>
                    <div>
                      <Checkbox
                        {...label}
                        color="success"
                        size="small"
                        inputProps={{ "aria-label": "controlled" }}
                        onClick={() => {
                          setPackages("gearLess");
                          handleOpen();
                        }}
                      />
                      Gearless
                    </div>
                  </div>
                  <hr />
                  <div style={{ padding: "7px", marginTop: "8px" }}>
                    <Typography variant="p" sx={{ fontWeight: "medium" }}>
                      FUEL TYPE
                    </Typography>
                    <div>
                      <Checkbox
                        {...label}
                        color="success"
                        size="small"
                        inputProps={{ "aria-label": "controlled" }}
                        onClick={() => {
                          setPackages("baghajatin");
                          handleOpen();
                        }}
                      />
                      Electric
                    </div>
                    <div>
                      <Checkbox
                        {...label}
                        color="success"
                        size="small"
                        inputProps={{ "aria-label": "controlled" }}
                        onClick={() => {
                          setPackages("tikiaparaRailwayStation");
                          handleOpen();
                        }}
                      />
                      Non-electric
                    </div>
                  </div>
                  <hr />
                  <div style={{ padding: "7px", marginTop: "8px" }}>
                    <Typography variant="p" sx={{ fontWeight: "medium" }}>
                      Brands
                    </Typography>
                    <div>
                      <Checkbox
                        {...label}
                        color="success"
                        size="small"
                        inputProps={{ "aria-label": "controlled" }}
                        onClick={() => {
                          setPackages("hero");
                          handleOpen();
                        }}
                      />
                      Hero
                    </div>
                    <div>
                      <Checkbox
                        {...label}
                        color="success"
                        size="small"
                        inputProps={{ "aria-label": "controlled" }}
                        onClick={() => {
                          setPackages("honda");
                          handleOpen();
                        }}
                      />
                      Honda
                    </div>
                  </div>
                </Box>
              </Grid>


              <Grid item xs={12} sm={9}>
                {packages === "dailyPackages" && (
                  <Grid container spacing={2}>
                    {/* --- Hero-Skeleton --- */}
                    {
                      loading
                        ? <Stack sx={{ marginTop: '20px', marginLeft: "20px" }}>
                          <Skeleton variant="rectangular" width={275} height={250} animation="wave" />
                          {/* <Skeleton variant="rectangular" width={275} height={200} animation="wave" /> */}

                          <Stack sx={{ width: '100%' }}>
                            {
                              loading ?
                                < >
                                  <Typography> <Skeleton variant="text" width="100%" height={50} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={40} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={40} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={20} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={20} animation="wave" /> </Typography>
                                </>
                                : null
                            }
                          </Stack>
                        </Stack>
                        : <Grid item xs={12} sm={4}>
                          <CardContent
                            sx={{
                              border: "1px solid lightGray",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography
                              variant="h6"
                              align="center"
                              sx={{ fontWeight: "bold" }}
                            >
                              Hero Destini 125
                            </Typography>
                            <img
                              src={HeroDestini}
                              alt="HeroDestini"
                              style={{
                                height: "100%",
                                width: "100%",
                                padding: "7px",
                              }}
                            />
                            <TextField
                              fullWidth
                              label="Available at"
                              defaultValue="Tikiapara Railway Station"
                              sx={{ marginTop: "5%" }}
                              InputProps={{
                                readOnly: true,
                              }}
                              size="small"
                            />
                            <Grid container spacing={2} sx={{ padding: "5px" }}>
                              <Grid item xs={12} sm={6}>
                                <Typography
                                  variant="p"
                                  sx={{ color: "#59ce8f", fontSize: "25px" }}
                                >
                                  ₹449
                                </Typography>
                                <br />
                                <Typography variant="p">100 Km limit</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Button
                                  size="small"
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#59ce8f",
                                    ":hover": {
                                      backgroundColor: "#36B671",
                                    },
                                  }}
                                  onClick={handleNavigate}
                                >
                                  Book Now
                                </Button>
                              </Grid>
                            </Grid>
                            <hr />
                            <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="p">Deposit : ₹2000</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="p">
                                  Make Year : 2020
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                    }


                    {/* --- Honda-Skeleton --- */}
                    {
                      loading
                        ? <Stack sx={{ marginTop: '20px', marginLeft: "20px" }}>
                          <Skeleton variant="rectangular" width={275} height={250} animation="wave" />
                          {/* <Skeleton variant="rectangular" width={275} height={200} animation="wave" /> */}

                          <Stack sx={{ width: '100%' }}>
                            {
                              loading ?
                                < >
                                  <Typography> <Skeleton variant="text" width="100%" height={50} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={40} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={40} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={20} animation="wave" /> </Typography>
                                  <Typography> <Skeleton variant="text" width="100%" height={20} animation="wave" /> </Typography>
                                </>
                                : null
                            }
                          </Stack>
                        </Stack>
                        : <Grid item xs={12} sm={4}>
                          <CardContent
                            sx={{
                              border: "1px solid lightGray",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography
                              variant="h6"
                              align="center"
                              sx={{ fontWeight: "bold" }}
                            >
                              Honda SP 125
                            </Typography>
                            <img
                              src={HondaSP}
                              alt="HeroDestini"
                              style={{
                                height: "100%",
                                width: "81%",
                                padding: "7px",
                              }}
                            />
                            <TextField
                              fullWidth
                              label="Available at"
                              defaultValue="Baghajatin"
                              sx={{ marginTop: "5%" }}
                              InputProps={{
                                readOnly: true,
                              }}
                              size="small"
                            />
                            <Grid container spacing={2} sx={{ padding: "5px" }}>
                              <Grid item xs={12} sm={6}>
                                <Typography
                                  variant="p"
                                  sx={{ color: "#59ce8f", fontSize: "25px" }}
                                >
                                  ₹719
                                </Typography>
                                <br />
                                <Typography variant="p">240 Km limit</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Button
                                  size="small"
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#59ce8f",
                                    ":hover": {
                                      backgroundColor: "#36B671",
                                    },
                                  }}
                                  onClick={handleNavigate}
                                >
                                  Book Now
                                </Button>
                              </Grid>
                            </Grid>
                            <hr />
                            <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="p">Deposit : ₹2000</Typography>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                <Typography variant="p">
                                  Make Year : 2020
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                    }
                  </Grid>
                )}




                {packages === "weeklyPackages" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Hero Destini 125
                        </Typography>
                        <img
                          src={HeroDestini}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "100%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Tikiapara Railway Station"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹4049
                            </Typography>
                            <br />
                            <Typography variant="p">1000 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Honda SP 125
                        </Typography>
                        <img
                          src={HondaSP}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "81%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Baghajatin"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹7019
                            </Typography>
                            <br />
                            <Typography variant="p">2400 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "15daysPackages" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Hero Destini 125
                        </Typography>
                        <img
                          src={HeroDestini}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "100%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Tikiapara Railway Station"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹8099
                            </Typography>
                            <br />
                            <Typography variant="p">2000 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Honda SP 125
                        </Typography>
                        <img
                          src={HondaSP}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "81%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Baghajatin"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹9099
                            </Typography>
                            <br />
                            <Typography variant="p">3000 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "monthlyPackages" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Hero Destini 125
                        </Typography>
                        <img
                          src={HeroDestini}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "100%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Tikiapara Railway Station"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹15299
                            </Typography>
                            <br />
                            <Typography variant="p">4500 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Honda SP 125
                        </Typography>
                        <img
                          src={HondaSP}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "81%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Baghajatin"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹16300
                            </Typography>
                            <br />
                            <Typography variant="p">5500 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "gear" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Honda SP 125
                        </Typography>
                        <img
                          src={HondaSP}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "81%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Baghajatin"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹719
                            </Typography>
                            <br />
                            <Typography variant="p">240 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "gearLess" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Hero Destini 125
                        </Typography>
                        <img
                          src={HeroDestini}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "100%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Tikiapara Railway Station"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹449
                            </Typography>
                            <br />
                            <Typography variant="p">100 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#36B671",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "baghajatin" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Honda SP 125
                        </Typography>
                        <img
                          src={HondaSP}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "81%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Baghajatin"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹719
                            </Typography>
                            <br />
                            <Typography variant="p">240 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "tikiaparaRailwayStation" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Hero Destini 125
                        </Typography>
                        <img
                          src={HeroDestini}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "100%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Tikiapara Railway Station"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹449
                            </Typography>
                            <br />
                            <Typography variant="p">100 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "hero" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Hero Destini 125
                        </Typography>
                        <img
                          src={HeroDestini}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "100%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Tikiapara Railway Station"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹449
                            </Typography>
                            <br />
                            <Typography variant="p">100 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
                {packages === "honda" && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <CardContent
                        sx={{
                          border: "1px solid lightGray",
                          borderRadius: "5px",
                        }}
                      >
                        <Typography
                          variant="h6"
                          align="center"
                          sx={{ fontWeight: "bold" }}
                        >
                          Honda SP 125
                        </Typography>
                        <img
                          src={HondaSP}
                          alt="HeroDestini"
                          style={{
                            height: "100%",
                            width: "81%",
                            padding: "7px",
                          }}
                        />
                        <TextField
                          fullWidth
                          label="Available at"
                          defaultValue="Baghajatin"
                          sx={{ marginTop: "5%" }}
                          InputProps={{
                            readOnly: true,
                          }}
                          size="small"
                        />
                        <Grid container spacing={2} sx={{ padding: "5px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant="p"
                              sx={{ color: "#59ce8f", fontSize: "25px" }}
                            >
                              ₹719
                            </Typography>
                            <br />
                            <Typography variant="p">240 Km limit</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Button
                              size="small"
                              variant="contained"
                              sx={{
                                backgroundColor: "#59ce8f",
                                ":hover": {
                                  backgroundColor: "#36B671",
                                },
                              }}
                              onClick={handleNavigate}
                            >
                              Book Now
                            </Button>
                          </Grid>
                        </Grid>
                        <hr />
                        <Grid container spacing={2} sx={{ fontSize: "15px" }}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">Deposit : ₹2000</Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Typography variant="p">
                              Make Year : 2020
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Container>


          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div style={{ display: "flex" }}>
                <IconButton>
                  <TaskAltOutlinedIcon sx={{ color: "white" }} />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Success
                </Typography>
              </div>
              <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[200],
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography id="modal-modal-description" sx={{ ml: 5 }}>
                Date and time changed
              </Typography>
            </Box>
          </Modal>
          <div style={{ marginTop: "10%" }}></div>
          <DynamicFooter />
        </Box>
      )}
    </>
  );
}
