import React, { useEffect, useState } from "react";
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
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, useNavigate } from "react-router-dom";

const styles = {
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

const SearchCityModal = () => {
  const [location, setLocation] = useState(false);
  const handleLocationClose = () => setLocation(false);
  const handleLocationOpen = () => setLocation(true);

  const [name, setName] = useState("Location");
  const [setEditName] = useState(null);
  const date = useLocation();

  useEffect(() => {
    // const initial_StartDate = dayjs(date.state.selected_startDate.$d);
    // const initial_EndDate = dayjs(date.state.selected_endDate.$d);
    const initial_CityName = date.state.selected_cityName;
    // console.log(initial_StartDate);
    // console.log(initial_EndDate);
    // console.log(initial_CityName);
    // setStartDate(initial_StartDate);
    // setEndDate(initial_EndDate);
    setName(initial_CityName);
  }, []);

  return (
    <div>
      <Button
        onClick={handleLocationOpen}
        // sx={{ marginTop: "5px", marginLeft: "12px" }}
      >
        <LocationOnIcon sx={{ color: "#59CE8F", fontSize: 30 }} />
        <Typography
          sx={{ color: "#000000" }}
          value={name}
          onChange={(e) => {
            setEditName(e.target.value);
            setName(e.target.value);
          }}
        >
          {name}
        </Typography>
      </Button>
      <Modal
        open={location}
        onClose={handleLocationClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose your preferred city
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setLocation(false)}
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
                  setName("Bangalore");
                  setLocation(false);
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
                  setName("Chandigarh");
                  setLocation(false);
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
                  setName("Chennai");
                  setLocation(false);
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
                  setName("Dehradun");
                  setLocation(false);
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
                  setName("Delhi");
                  setLocation(false);
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
                  setName("Ghaziabad");
                  setLocation(false);
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
                  setName("Goa");
                  setLocation(false);
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
                  setName("Hyderabad");
                  setLocation(false);
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
                  setName("Kolkata");
                  setLocation(false);
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
                  setName("Manali");
                  setLocation(false);
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
                  setName("Mumbai");
                  setLocation(false);
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
                  setName("Pune");
                  setLocation(false);
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
                  setName("Gurgaon");
                  setLocation(false);
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
                  setName("Guwahati");
                  setLocation(false);
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
                  setName("Jaipur");
                  setLocation(false);
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
                  setName("Leh");
                  setLocation(false);
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
                  setName("Noida");
                  setLocation(false);
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
                  setName("Udaipur");
                  setLocation(false);
                }}
              />
              <Typography variant="h6" align="center">
                Udaipur
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchCityModal;
