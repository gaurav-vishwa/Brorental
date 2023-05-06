import React from "react";
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Grid,
  Typography,
} from "@mui/material";
import listyourvehiclegraphic from "../../assets/images/listyourvehiclegraphic.jpg";
import listvehiclestep1image from "../../assets/images/listvehiclestep1image.jpg";
import listvehiclestep2image from "../../assets/images/listvehiclestep2image.jpg";
import listvehiclestep3image from "../../assets/images/listvehiclestep3image.jpg";
import listvehiclestep4image from "../../assets/images/listvehiclestep4image.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsIcon from "@mui/icons-material/Notifications";
import extraincome from "../../assets/images/extraincome.svg";
import nomoney from "../../assets/images/nomoney.svg";
import listvehiclesupport from "../../assets/images/listvehiclesupport.svg";
import listvehicleflexibility from "../../assets/images/listvehicleflexibility.svg";

const MobileListYourVehicle = () => {
  return (
    <div className="p-3">
      <Box>
        <Box textAlign={"center"}>
          <Typography variant="h5" sx={{ py: 4 }}>
            Did you know you can now make money out of your unused two-wheeler?
          </Typography>
          <Button variant="contained">Start Earning with GoBikes</Button>
          <Box
            component="img"
            sx={{
              width: "70%",
              m: "auto",
              py: 4,
            }}
            alt="Your logo."
            src={listyourvehiclegraphic}
          />
        </Box>

        <Typography variant="h4" textAlign={"center"}>
          Process
        </Typography>
        <Box>
          <Typography variant="h5" sx={{ py: 4 }}>
            STEP 1 - Sign up as a Partner
          </Typography>
          <Typography variant="p">
            Enroll yourself as a partner and list your two-wheeler(s) on
            GoBikes’s platform by submitting the required description. This
            should not take more than 2 minutes.
          </Typography>
          <Box
            className="m-auto "
            component="img"
            sx={{
              width: 70,
              ml: 1,
              py: 4,
            }}
            alt="Your logo."
            src={listvehiclestep1image}
          />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ py: 4 }}>
            STEP 2 - Get bookings on your dashboard
          </Typography>
          <Typography variant="p">
            Manage your vehicles and bookings from our platform through your
            dashboard.
          </Typography>
          <Box
            className="m-auto "
            component="img"
            sx={{
              width: 70,
              ml: 1,
              py: 4,
            }}
            alt="Your logo."
            src={listvehiclestep2image}
          />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ py: 4 }}>
            STEP 3 - Complete the booking
          </Typography>
          <Typography variant="p">
            Customers would rent your vehicle at a price defined by you and come
            to your preferred location for pickup and drop of your vehicle.
          </Typography>
          <Box
            className="m-auto "
            component="img"
            sx={{
              width: 70,
              ml: 1,
              py: 4,
            }}
            alt="Your logo."
            src={listvehiclestep3image}
          />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ py: 4 }}>
            STEP 4 - Receive Payments
          </Typography>
          <Typography variant="p">
            We will transfer your payment directly to your bank account within 2
            working days.
          </Typography>
          <Box
            className="m-auto "
            component="img"
            sx={{
              width: 70,
              ml: 1,
              py: 4,
            }}
            alt="Your logo."
            src={listvehiclestep4image}
          />
        </Box>
      </Box>
      <Box className="m-auto" sx={{ m: "auto" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center", py: 2 }}
        >
          Why list your bike on GoBikes?
        </Typography>
        <Box sx={{}}>
          <Grid container columnSpacing={2} sx={{ py: 2, mr: 20 }}>
            <Grid item xs={6} sx={{ m: "auto" }}>
              <img className="m-auto" src={extraincome} alt="Extra Income" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ pb: 2 }}>
                Earn extra income
              </Typography>
              <Typography>
                Make your vehicle an earning member of the family
              </Typography>
            </Grid>
          </Grid>
          <Grid container columnSpacing={2} sx={{ py: 2 }}>
            <Grid item xs={6} sx={{ m: "auto" }}>
              <img className="m-auto" src={nomoney} alt="Extra Income" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" sx={{ pb: 2 }}>
                Zero listing fee
              </Typography>
              <Typography>
                No upfront payment to yourself as a vendor
              </Typography>
            </Grid>
          </Grid>
          <Grid container columnSpacing={2} sx={{ py: 2 }}>
            <Grid item xs={6} sx={{ m: "auto" }}>
              <img
                className="m-auto"
                src={listvehiclesupport}
                alt="Extra Income"
              />
            </Grid>
            <Grid item xs={6} sx={{ pb: 2 }}>
              <Typography variant="h6" sx={{ pb: 2 }}>
                ESupport
              </Typography>
              <Typography>24*7 support from the GoBikes Team</Typography>
            </Grid>
          </Grid>
          <Grid container columnSpacing={2}>
            <Grid item xs={6} sx={{ m: "auto" }}>
              <img
                className="m-auto"
                src={listvehicleflexibility}
                alt="Extra Income"
              />
            </Grid>
            <Grid item xs={6} sx={{ pb: 10 }}>
              <Typography variant="h6" sx={{ pb: 2 }}>
                Flexibility
              </Typography>
              <Typography>Your vehicle, your location, your price</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Have Questions? We got you.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "20px" }}>
          We're here to help every step of the way. See some of the most
          frequently asked questions below, and if you still don't find what you
          need, You can contact us on +91-8448444897 WhatsApp/Call.
        </Typography>
        <div style={{ marginTop: "7%" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                What are the steps to list my vehicle on GoBikes?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Visit our https://gobikes.co.in/list-your-vehicle to fill out a
                simple form. We will give you a call to brief you about the
                process and once you accept all terms and conditions you will be
                listed as a partner with GoBikes.
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
                In how many days will my account be active on the website?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It usually takes 2-3 working days to create the account and list
                your bikes on the website.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>When are partners paid for the booking?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It takes 2 working days to process the payment once the booking
                is made.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What if a customer damages the vehicle?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In case of any damages, the money for repair is deducted from
                the security deposit that was paid by the customer while picking
                up the vehicle.
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
                How much can I earn via renting my vehicle?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Depending on the model and condition of the bike you can earn up
                to 25k.
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
                What do I do if the bike is unavailable and I don't want
                bookings for a few days?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once your account is created, you will be given a partner app
                with login credentials. You can use that app to block the bike
                for those particular days.
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
                What happens if a booking comes and I want to cancel it due to
                some reason?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If the partner is unable to provide the bike to the customer,
                then a penalty of 25% of the booking amount will be charged to
                compensate the customer.
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
                How do I decide the rental amount for a bike?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We usually recommend a price range to our partners for each
                two-wheeler but you can decide what price you want to keep.
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
                Is GoBikes liable in cases of damage or theft of the bike?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If the partner is unable to provide the bike to the customer,
                then a penalty of 25% of the booking amount will be charged to
                compensate the customer.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
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
          <br />
          <Typography variant="p" sx={{ fontSize: "15px" }}>
            Register your vehicle on GoBikes to rent it out via our platform.
            You can now make easy money while staying at home. GoBikes will
            ensure an easy, safe and reliable process of renting for you. Our
            GoBikes Team carefully reviews the renter's documentations to ensure
            a smooth, hassle-free process for both the renters and the vehicle
            owners.
          </Typography>
          <br />
          <Button variant="contained" color="success" sx={{ marginTop: "10%" }}>
            Start Earning With Gobikes
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default MobileListYourVehicle;
