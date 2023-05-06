import React from "react";
import { Box, Typography } from "@mui/material";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";
import Navbar from "../../layouts/desktop/PreLoginNavbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ px: "15px", position: "relative", mt: 5, mx: 10 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          About Us
        </Typography>
        <Box
          sx={{
            bgcolor: "#f1f8ed",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <Typography variant="p" sx={{ px: "15px" }}>
            GoBikes is a bike rental platform which aims to fill the void in the
            transportation sector. The platform is designed primarily for daily
            commuters who rely on public transportation. It allows users to
            choose from a variety of bikes and scooters available at affordable
            prices and promises to deliver quality service. GoBikes aims to
            solve the absence of last and first-mile connectivity that exists in
            most of the major cities in India. GoBikes provides the users with
            the experience of a personalised ride where the process of renting a
            bike/scooter is made easy and hassle-free. GoBikes has built a
            technologically exclusive and user-friendly platform which it
            believes will revolutionise the future. GoBikes is a two-wheeler
            rental company headquartered in New Delhi, India. It is a Limited
            Liability Partnership(LLP) firm. At GoBikes, we believe in making
            "commuting easy" in busy cities where public transport is not viable
            at all times of the day and at all places. We are here to bridge the
            gap between the daily riders and the lack of public transport to
            their homes. Want to GO to your favourite places? Want to GO to your
            office or college? Want to rent a bike for a day, a week or even for
            longer periods? We are here to cover all your needs. We understand
            how much of a challenge it would be to move into new cities for
            education or jobs as we are a team of young graduates too and that
            is why we have your favourite two wheelers offered in our fleet. We
            have it all covered from daily user bikes/scooters, Electronic bikes
            to all your dream bikes.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ px: "15px", position: "relative", mt: 5, mb: 10, mx: 10 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Our Mission
        </Typography>
        <Box
          sx={{ bgcolor: "#f1f8ed", borderRadius: "10px", textAlign: "center" }}
        >
          <Typography variant="p" textAlign={"center"} sx={{ px: "15px" }}>
            Our mission is to make our fleet available to everyone out there
            with a combination of good service and affordable prices. Your
            satisfaction will make us grow. We will be coming soon to your
            cities so that you can Get On your wheels and GO!
          </Typography>
        </Box>
      </Box>
      <PostLoginFooter />
    </>
  );
};

export default AboutUs;
