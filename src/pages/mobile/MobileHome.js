import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  IconButton,
  CardMedia,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import React, { useState } from "react";
import rightSectionNew from "../../assets/images/rightSectionNew.jpg";

// import Offer from "./Offer";
// import Video from "./Video";
import Features from "../../components/desktop/Features";
import BookRide from "../../components/desktop/BookRide";
import Faq from "../../components/desktop/Faq";
import Statistics from "../../components/desktop/Statistics";
// import KnowMore from "./KnowMore";
import goImage from "../../assets/images/goImage.png";
import ReactPlayer from "react-player";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MobilePreLoginNavbar from "../../layouts/mobile/MobilePreLoginNavbar";
import MobileSearchForm from "../../components/mobile/MobileSearchForm";
import OfferCarousal from "../../components/desktop/OfferCarousal";
import Video from "../../components/desktop/Video";
import { Container } from "@mui/system";
import Money from "../../assets/images/Money.png";
import Bike from "../../assets/images/Bike.png";
import Rent from "../../assets/images/Rent.png";
import open24hours from "../../assets/images/open24hours.png";
import payLater from "../../assets/images/payLater.png";
import instantRefund from "../../assets/images/instantRefund.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { green } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import { Link } from "react-router-dom";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const MobileHome = () => {
  return (
    <>
      <DynamicMobileNavbar />

      <Box>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={rightSectionNew}
            alt="Header"
            className=""
            sx={{
              width: "100%",
              height: "60%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          {/* <Box
            // component="img"
            // src={rightSectionNew}
            alt="Header"
            className=""
            sx={{
              width: "100%",
              height: "50%",
              position: "absolute",
              top: 0,
              left: 0,
              // bgcolor: "#000000",
              bgcolor: "#59CE8F",
            }}
          /> */}

          <Box
            sx={{
              mx: 2,
              position: "relative",
              zIndex: 100,
              top: 200,
              // top: 350,
              // top: 50,

              mb: 30,
            }}
          >
            {" "}
            <MobileSearchForm />
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", ml: 2 }}>
            Offers for you
          </Typography>
          <OfferCarousal />
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", pb: 3, ml: 2, mt: 4, mb: 2 }}
          >
            Commuting Made Easy!
          </Typography>
          {/* <Box>
            <ReactPlayer
              controls
              pip
              width="60%"
              url="https://youtu.be/VB4SUy5h8ME"
            />
          </Box> */}
          {/* 
          <CardMedia sx={{ marginTop: "5%", textAlign: "center" }}>
            <ReactPlayer
              controls
              pip
              width="90%"
              url="https://youtu.be/VB4SUy5h8ME"
            />
          </CardMedia> */}
          <Box className="player-wrapper" sx={{ ml: "5%" }}>
            <ReactPlayer
              pip
              url="https://youtu.be/VB4SUy5h8ME"
              className="react-player"
              // playing
              width="95%"
              height="100%"
              controls
            />
          </Box>
        </Box>

        {/* <Features /> */}
        <Box sx={{ marginTop: "15%", ml: 2, mr: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Why choose GoBikes?
          </Typography>
          <Box sx={{ mt: 5 }}>
            <img src={Money} alt="Money" />
            <div style={{ marginTop: "2%" }}>
              <Typography variant="h6" fontWeight={"bold"}>
                Different Flexible Packages
              </Typography>
              <Typography variant="p" sx={{ fontSize: "20px" }}>
                Grab daily, weekly, fortnight and monthly packages at discounted
                rates
              </Typography>
            </div>
          </Box>
          <Box sx={{ mt: 4 }}>
            <img src={Bike} alt="Bike" />
            <div style={{}}>
              <Typography variant="h6" fontWeight={"bold"}>
                Wide Range
              </Typography>
              <Typography
                variant="p"
                sx={{ marginTop: "5px", fontSize: "20px" }}
              >
                Looking for a particular brand or location? We have probably got
                it
              </Typography>
            </div>
          </Box>
          <Box sx={{ mt: 5 }}>
            <img src={Rent} alt="Rent" />
            <div style={{ marginTop: "2%" }}>
              <Typography variant="h6" fontWeight={"bold"}>
                Highly Maintained Fleet
              </Typography>
              <Typography
                variant="p"
                sx={{ marginTop: "5px", fontSize: "20px" }}
              >
                Get high quality and serviced vehicles.
              </Typography>
            </div>
          </Box>
          <Box sx={{ mt: 5 }}>
            <img src={open24hours} alt="open24hours" />
            <div style={{ marginTop: "2%" }}>
              <Typography variant="h6" fontWeight={"bold"}>
                24*7 At Service
              </Typography>
              <Typography
                variant="p"
                sx={{ marginTop: "5px", fontSize: "20px" }}
              >
                Day or night, rent a bike
              </Typography>
            </div>
          </Box>
          <Box sx={{ mt: 5 }}>
            <img src={payLater} alt="payLater" />
            <div style={{ marginTop: "2%" }}>
              <Typography variant="h6" fontWeight={"bold"}>
                Book Now, Pay later
              </Typography>
              <Typography
                variant="p"
                sx={{ marginTop: "5px", fontSize: "20px" }}
              >
                Flexibility to decide when and how to pay.
              </Typography>
            </div>
          </Box>
          <Box sx={{ mt: 5 }}>
            <img src={instantRefund} alt="instantRefund" />
            <div style={{ marginTop: "2%" }}>
              <Typography variant="h6" fontWeight={"bold"}>
                Instant Refund
              </Typography>
              <Typography
                variant="p"
                sx={{ marginTop: "5px", fontSize: "19px" }}
              >
                Facing an issue while booking/pick up? We initiate instant
                refund.
              </Typography>
            </div>
          </Box>
        </Box>

        {/* 
        <BookRide /> */}

        <Container sx={{ marginTop: "15%" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            How to book your ride?
          </Typography>
          <br />
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            Book your dream ride in just four simple steps
          </Typography>
          <div style={{ marginTop: "7%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
                <Avatar sx={{ bgcolor: green[500] }}>1</Avatar>
              </Grid>
              <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    marginBottom: "5",
                  }}
                >
                  Find your Ride
                </Typography>
                <br />
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  Enter the basic details like, city, pick up and drop date and
                  time to choose from a list of available two - wheelers at your
                  desired go-hub.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
                <Avatar sx={{ bgcolor: green[500] }}>2</Avatar>
              </Grid>
              <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Book your Ride
                </Typography>
                <br />
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  Select your package and choose from the available payment
                  options.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
                <Avatar sx={{ bgcolor: green[500] }}>3</Avatar>
              </Grid>
              <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
                <Typography
                  variant="p"
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Get Ready to Ride
                </Typography>
                <br />
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  You will receive all the ride details via message and email.
                  Reach the pick up point in time and pay the security deposit
                  (if applicable). Enjoy every moment of your ride.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2} sx={{ marginTop: "2%" }}>
                <Avatar sx={{ bgcolor: green[500] }}>4</Avatar>
              </Grid>
              <Grid item xs={12} sm={10} sx={{ marginTop: "2%" }}>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  End your Ride
                </Typography>
                <br />
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  Once you have had the time of your life, drop the vehicle at
                  the same pick up point. Security deposit is refunded after
                  checking for damages and challans (if any).
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Container>

        {/* <Faq /> */}

        <Container sx={{ marginTop: "15%" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Have Questions? We got you.
          </Typography>{" "}
          <br />
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            Contact us on +91-8448444897 WhatsApp/Call in case of any other
            query.
          </Typography>
          <div style={{ marginTop: "7%" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Is fuel included in the tariff?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  All prices are exclusive of fuel. We provide a minimal amount
                  of fuel to get the vehicle to the nearest fuel station. In
                  case there is excess fuel in the vehicle at the time of
                  return, GoBikes is not liable for any refunds for the same.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  How can I book a bike without seeing it physically?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We offer a 100% money back guarantee. Pay a commitment advance
                  to reserve the bike. Reach location and test drive your bike.
                  If there is any issue in the vehicle, raise a ticket and you
                  shall be refunded 100% of the amount you have paid us. No
                  questions asked in case there is mechanical fault in the
                  Vehicle.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Can the bike booked be delivered to my home/office? If yes,
                  then what are the charges?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Delivery depends on many factors. You can call us on
                  +91-8448444897 and check if the delivery is possible or not.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  I have a Learner's Licence. Will that work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We don't give bikes/scooters on learner's licence. You need to
                  have a driver's licence.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Can I cancel my booking? If yes then how?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. You can cancel your booking by going to the Bookings
                  sections in the Profile tab. Upon booking a bike with any of
                  our dealers, they reserve the bike for the customer. In the
                  case of cancellation, unnecessary inconvenience is caused to
                  the dealer. To account for the potential financial loss, we
                  withhold some amount as cancellation charges as follows: No
                  Show - 100% deduction. Between 0-24 hrs of the pickup time -
                  100% deduction. Between 24-72 hrs of the pickup time - 50%
                  rental charges will be withheld. Before 72 hrs of the pickup
                  time - Full Refund to the customer
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  How does GoBikes handle security deposits?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Security Deposits with GoBikes are kept secure and are 100%
                  refundable to the rider after he/she has completed their bike
                  trip and have returned the bike.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  Will I be getting a complimentary helmet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  GoBikes provides one complimentary helmet with each bike
                  booked. A second helmet can also be provided but it is
                  chargeable at INR 50 per day.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>

        <Box sx={{ py: 5, mx: 2 }}>
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
              <NotificationsIcon sx={{ fontSize: "30px", color: "#59CE8F" }} />
            </IconButton>
            <Typography variant="p" sx={{ fontSize: "20px" }}>
              List your vehicle
            </Typography>{" "}
            <br />
            <Typography variant="h6" sx={{ marginTop: "3%", color: "#59CE8F" }}>
              Want to list your unused two-wheeler and earn extra income
            </Typography>
            <br />
            <Typography variant="p" sx={{ fontSize: "15px" }}>
              List your motorcycles and scooters with India's fastest growing
              mobility platform - Just connect to turn them into earning members
              of your family.
            </Typography>
            <br /> <br />
            <Link to="/ListYourVehicle">
              <Button
                sx={{
                  marginTop: "10%",
                  color: "#ffffff",
                  bgcolor: "#59CE8F",
                  textAlign: "center",
                  m: "auto",
                  ":hover": { bgcolor: "#36b671" },
                }}
              >
                Know More
              </Button>
            </Link>
          </Box>
        </Box>
        <MobileFooter />
      </Box>
    </>
  );
};

export default MobileHome;
