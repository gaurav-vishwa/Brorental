import {
  Box,
  Button,
  CardContent,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import HeroDestini from "../../assets/images/HeroDestini.png";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import dayjs from "dayjs";

//Search Models

const containsText = (text, searchText) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const modelOptions = ["Model One", "Model Two", "Model Three", "Model Four"];
const locationOptions = [
  "Location One",
  "Location Two",
  "Location Three",
  "Location Four",
];

const BookingFlowCard = () => {
  //Search Models

  //   const [selectedModel, setSelectedModel] = useState(modelOptions[0]);
  const [selectedLocation, setSelectedLocation] = useState(locationOptions[0]);

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () => modelOptions.filter((option) => containsText(option, searchText)),
    [searchText]
  );

  //Location, Date And Time

  const date = useLocation();
  const navigate = useNavigate();

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
    navigate("/BookNowPage", {
      state: {
        selected_startDate: startDate,
        selected_endDate: endDate,
        selected_cityName: name,
      },
    });
  };

  // ---  handeling "useState" & "useeffect" for skeleton
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Grid item xs={12} sm={4}>
      {loading ? (
        <Stack sx={{ width: "100%", margin: "20px 0px 20px 0px" }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height={250}
            animation="wave"
          />
          {/* <Skeleton variant="rectangular" width={275} height={200} animation="wave" /> */}

          <Stack sx={{ width: "100%" }}>
            {loading ? (
              <>
                <Typography>
                  {" "}
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={50}
                    animation="wave"
                  />{" "}
                </Typography>
                <Typography>
                  {" "}
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={40}
                    animation="wave"
                  />{" "}
                </Typography>
                <Typography>
                  {" "}
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={20}
                    animation="wave"
                  />{" "}
                </Typography>
                <Typography>
                  {" "}
                  <Skeleton
                    variant="text"
                    width="100%"
                    height={20}
                    animation="wave"
                  />{" "}
                </Typography>
              </>
            ) : null}
          </Stack>
        </Stack>
      ) : (
        <CardContent
          sx={{
            border: "1px solid lightGray",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{ fontWeight: "bold", fontSize: "8px", color: "red", mb: 2 }}
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
            <Typography variant="p" sx={{ color: "#59ce8f", fontSize: "20px" }}>
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
                backgroundColor: "#4cbb17",
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
      )}
    </Grid>
  );
};

export default BookingFlowCard;
