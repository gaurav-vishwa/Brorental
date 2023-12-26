import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  CardContent,
  Checkbox,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Modal,
  Radio,
  Stack,
  Skeleton,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import HeroDestini from "../../assets/images/HeroDestini.png";
import HondaSP from "../../assets/images/HondaSP.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PostLoginNavbar from "../../layouts/desktop/PostLoginNavbar";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import dayjs from "dayjs";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import SearchCityModal from "../../components/desktop/SearchCityModal";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CollapsibleSearch from "../../components/mobile/CollapsibleSearch";
import BookingFlowCard from "../../components/mobile/BookingFlowCard";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  top: "15%",
  right: "-30%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "green",
  color: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

// const styles = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "50%",
//   bgcolor: "background.paper",
//   borderRadius: "5px",
//   boxShadow: 24,
//   p: 4,
// };

//Search Models

const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const modelOptions = ["None", "Hero Destini", "Honda SP"];
const locationOptions = ["Baghajatin", "Tikiapara Railway Station"];

export default function MobileBookingFlow(props) {
  //Search Models

  const [selectedModel, setSelectedModel] = useState(modelOptions[0]);
  const [selectedLocation, setSelectedLocation] = useState(locationOptions[0]);

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () => modelOptions.filter((option) => containsText(option, searchText)),
    [searchText]
  );

  const date = useLocation();
  const navigate = useNavigate();
  const [packages, setPackages] = useState("dailyPackages");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [location, setLocation] = useState(false);
  const handleLocationOpen = () => setLocation(true);
  const handleLocationClose = () => setLocation(false);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [name, setName] = useState("Location");
  const [setEditName] = useState(null);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Grid item xs={12} sm={3}>
      {/* GG */}
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
                setPackages("electric");
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
                setPackages("nonElectric");
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
  );

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
    navigate("/BookNowPage", {
      state: {
        selected_startDate: startDate,
        selected_endDate: endDate,
        selected_cityName: name,
      },
    });
  };

  // useEffect(() => {
  //   const initial_StartDate = dayjs(date.state.selected_startDate.$d);
  //   const initial_EndDate = dayjs(date.state.selected_endDate.$d);
  //   setStartDate(initial_StartDate);
  //   setEndDate(initial_EndDate);
  // }, []);

  // ---  handeling "useState" & "useeffect" for skeleton
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <DynamicNavbar />
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div className="filter">
          {["bottom"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                onClick={toggleDrawer(anchor, true)}
                style={{ color: "white" }}
              >
                <FilterAltOutlinedIcon />
                Filter
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </Box>
      {/* <div className="float">
          <Fab variant='extended' style={{padding: "7px", bottom: "-100px"}} color='green' size='large'>
            Filter
          </Fab>
        </div> */}
      {/* Search Models */}
      <Box sx={{ my: 5, mx: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="search-select-label">Bike Models</InputLabel>
          <Select
            // Disables auto focus on MenuItems and allows TextField to be in focus
            MenuProps={{ autoFocus: false }}
            labelId="search-select-label"
            id="search-select"
            value={selectedModel}
            label="Bike Models"
            onChange={(e) => setSelectedModel(e.target.value)}
            onClose={() => setSearchText("")}
            // This prevents rendering empty string in Select's value
            // if search text would exclude currently selected option.
            renderValue={() => selectedModel}
          >
            {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
            <ListSubheader>
              <TextField
                size="small"
                // Autofocus on textfield
                autoFocus
                placeholder="Type to search..."
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key !== "Escape") {
                    // Prevents autoselecting item while typing (default Select behaviour)
                    e.stopPropagation();
                  }
                }}
              />
            </ListSubheader>
            {displayedOptions.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* New Card UI */}
      {selectedModel === "None" && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "45%", mx: 1 }}>
            {packages === "dailyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "weeklyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹4049
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      1000 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "15daysPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹9099
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      3000 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "monthlyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹15299
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      4500 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "gearLess" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "electric" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "nonElectric" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "hero" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
          </Box>

          <Box sx={{ width: "45%", mx: 1 }}>
            {packages === "dailyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹719
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "weeklyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹4049
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      1000 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "15daysPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹9099
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      3000 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "monthlyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹15299
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      4500 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "gear" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "electric" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "nonElectric" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "honda" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
                  >
                    Honda SP
                  </Typography>
                  <img
                    src={HondaSP}
                    alt="HondaSP"
                    style={{
                      width: "82%",
                      padding: "7px",
                    }}
                  />
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
          </Box>
        </Box>
      )}
      {selectedModel === "Hero Destini" && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "45%", mx: 1 }}>
            {packages === "dailyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "weeklyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹4049
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      1000 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "15daysPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹9099
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      3000 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "monthlyPackages" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "15px" }}
                    >
                      ₹15299
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      4500 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "gearLess" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "electric" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "nonElectric" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
            {packages === "hero" && (
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: "8px",
                      color: "red",
                      mb: 2,
                    }}
                  >
                    Available Till 10 PM{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: "bold", fontSize: "12px" }}
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
                  {/* <TextField
      fullWidth
      label="Available at"
      defaultValue="Tikiapara Railway Station"
      sx={{ marginTop: "5%" }}
      InputProps={{
        readOnly: true,
      }}
      size="small"
    /> */}
                  {/* <Box sx={{ my: 5, mx: 2 }}> */}
                  <FormControl
                    sx={{ display: "flex", justifyContent: "center", my: 2 }}
                  >
                    <InputLabel id="search-select-label">
                      Available at
                    </InputLabel>
                    <Select
                      // Disables auto focus on MenuItems and allows TextField to be in focus
                      MenuProps={{ autoFocus: false }}
                      labelId="search-select-label"
                      id="search-select"
                      value={selectedLocation}
                      label="Available at"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      onClose={() => setSearchText("")}
                      // This prevents rendering empty string in Select's value
                      // if search text would exclude currently selected option.
                      renderValue={() => selectedLocation}
                    >
                      {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                      <ListSubheader>
                        <TextField
                          size="small"
                          // Autofocus on textfield
                          autoFocus
                          placeholder="Type to search..."
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                          }}
                          onChange={(e) => setSearchText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key !== "Escape") {
                              // Prevents autoselecting item while typing (default Select behaviour)
                              e.stopPropagation();
                            }
                          }}
                        />
                      </ListSubheader>
                      {displayedOptions.map((option, i) => (
                        <MenuItem key={i} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {/* </Box> */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ color: "#59ce8f", fontSize: "20px" }}
                    >
                      ₹449
                    </Typography>

                    <Typography variant="p" sx={{ fontSize: "12px" }}>
                      100 Km limit
                    </Typography>
                  </Box>
                  <Button
                    onClick={handleNavigate}
                    variant="contained"
                    sx={{
                      backgroundColor: "#59ce8f",
                      ":hover": {
                        backgroundColor: "#36B671",
                      },
                      width: "100%",
                    }}
                  >
                    Book Now
                  </Button>
                  {/* <hr />
    <Grid container spacing={2} sx={{ fontSize: "15px" }}>
      <Grid item xs={6} sm={6}>
        <Typography variant="p">Deposit : ₹2000</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="p">Make Year : 2020</Typography>
      </Grid>
    </Grid> */}
                </CardContent>
              </Grid>
            )}
          </Box>
        </Box>
      )}
      {selectedModel === "Honda SP" && (
        <Box sx={{ width: "45%", mx: 1 }}>
          {packages === "dailyPackages" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "20px" }}
                  >
                    ₹719
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    100 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
          {packages === "weeklyPackages" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "15px" }}
                  >
                    ₹4049
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    1000 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
          {packages === "15daysPackages" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "15px" }}
                  >
                    ₹9099
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    3000 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
          {packages === "monthlyPackages" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "15px" }}
                  >
                    ₹15299
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    4500 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
          {packages === "gear" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "20px" }}
                  >
                    ₹449
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    100 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
          {packages === "electric" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "20px" }}
                  >
                    ₹449
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    100 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
          {packages === "nonElectric" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "20px" }}
                  >
                    ₹449
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    100 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
          {packages === "honda" && (
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
                  sx={{
                    fontWeight: "bold",
                    fontSize: "8px",
                    color: "red",
                    mb: 2,
                  }}
                >
                  Available Till 10 PM{" "}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold", fontSize: "12px" }}
                >
                  Honda SP
                </Typography>
                <img
                  src={HondaSP}
                  alt="HondaSP"
                  style={{
                    width: "82%",
                    padding: "7px",
                  }}
                />
                {/* <TextField
    fullWidth
    label="Available at"
    defaultValue="Tikiapara Railway Station"
    sx={{ marginTop: "5%" }}
    InputProps={{
      readOnly: true,
    }}
    size="small"
  /> */}
                {/* <Box sx={{ my: 5, mx: 2 }}> */}
                <FormControl
                  sx={{ display: "flex", justifyContent: "center", my: 2 }}
                >
                  <InputLabel id="search-select-label">Available at</InputLabel>
                  <Select
                    // Disables auto focus on MenuItems and allows TextField to be in focus
                    MenuProps={{ autoFocus: false }}
                    labelId="search-select-label"
                    id="search-select"
                    value={selectedLocation}
                    label="Available at"
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    onClose={() => setSearchText("")}
                    // This prevents rendering empty string in Select's value
                    // if search text would exclude currently selected option.
                    renderValue={() => selectedLocation}
                  >
                    {/* TextField is put into ListSubheader so that it doesn't
act as a selectable item in the menu
i.e. we can click the TextField without triggering any selection.*/}
                    <ListSubheader>
                      <TextField
                        size="small"
                        // Autofocus on textfield
                        autoFocus
                        placeholder="Type to search..."
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            // Prevents autoselecting item while typing (default Select behaviour)
                            e.stopPropagation();
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedOptions.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/* </Box> */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ color: "#59ce8f", fontSize: "20px" }}
                  >
                    ₹449
                  </Typography>

                  <Typography variant="p" sx={{ fontSize: "12px" }}>
                    100 Km limit
                  </Typography>
                </Box>
                <Button
                  onClick={handleNavigate}
                  variant="contained"
                  sx={{
                    backgroundColor: "#59ce8f",
                    ":hover": {
                      backgroundColor: "#36B671",
                    },
                    width: "100%",
                  }}
                >
                  Book Now
                </Button>
                {/* <hr />
  <Grid container spacing={2} sx={{ fontSize: "15px" }}>
    <Grid item xs={6} sm={6}>
      <Typography variant="p">Deposit : ₹2000</Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="p">Make Year : 2020</Typography>
    </Grid>
  </Grid> */}
              </CardContent>
            </Grid>
          )}
        </Box>
      )}

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
      <MobileFooter />
    </>
  );
}
