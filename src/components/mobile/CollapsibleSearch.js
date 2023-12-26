import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchCityModal from "../desktop/SearchCityModal";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";

const CollapsibleSearch = () => {
  const [name, setName] = useState("Location");
  const [setEditName] = useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  const date = useLocation();

  useEffect(() => {
    const initial_StartDate = dayjs(date.state.selected_startDate.$d);
    const initial_EndDate = dayjs(date.state.selected_endDate.$d);
    const initial_CityName = date.state.selected_cityName;
    // console.log(initial_StartDate);
    // console.log(initial_EndDate);
    // console.log(initial_CityName);
    setStartDate(initial_StartDate);
    setEndDate(initial_EndDate);
    setName(initial_CityName);
  }, []);

  // const handle = (value) => {
  //   console.log(value); // this will be a moment date object
  //   // now you can put this value into state
  //   // this.setState({ inputValue: value });
  // };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {/* <Typography
          sx={{ color: "#000000" }}
          value={name}
          onChange={(e) => {
            setEditName(e.target.value);
            setName(e.target.value);
          }}
        >
          {name}
        </Typography>
        <br /> */}
        <div style={{ display: "flex" }}>
          {startDate && (
            <Typography sx={{ color: "#000000" }}>
              {startDate.toString()}
            </Typography>
          )}
          <p
            style={{
              paddingRight: "10px",
              paddingLeft: "5px",
              fontWeight: "bold",
              fontSize: "27px",
            }}
          >
            {" "}
            -{" "}
          </p>
          {endDate && (
            <Typography sx={{ color: "#000000" }}>
              {endDate.toString()}
            </Typography>
          )}
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <SearchCityModal />
        </Box>

        <Box sx={{ mb: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              //   format="DD/MM/YYYY"
              //   ampm={true}
              //   views={["year", "month", "day"]}
              //   format="DD/MM/YYYY hh:mm"
              label="Pickup Date & Time"
              value={startDate}
              onChange={(date) => setStartDate(date)}
              // onChange={(event) => this.handle(event)}
              // selected={this.state.inputValue}
              sx={{ width: "100%" }}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ mb: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Dropoff Date & Time"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              sx={{ width: "100%" }}
            />
          </LocalizationProvider>
        </Box>

        <Button
          variant="contained"
          fullWidth
          // size="medium"
          sx={{
            backgroundColor: "#59ce8f",
            padding: "10px",
            marginTop: "5px",
            marginRight: "12px",
            ":hover": {
              backgroundColor: "#59ce8f",
            },
          }}
          onClick={handleOpen}
        >
          Search
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapsibleSearch;
