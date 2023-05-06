import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const PostLoginFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  return (
    <div className="">
      <Box sx={{}} className="relative z-50">
        <Box
          sx={{
            bgcolor: "#d6fbe6",
            display: "flex",
            justifyContent: "end",
            alignContent: "flex-start",
            pt: 2,
            px: 2,
          }}
        >
          <Button onClick={scrollToTop}>
            <ArrowUpwardIcon sx={{ color: "#59CE8F" }} />
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "#d6fbe6",
            display: "inline-flex",
            justifyContent: "space-evenly",
            width: "100%",

            pb: 10,
          }}
        >
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 50,
              }}
              alt="Your logo."
              src={logo}
            />
          </Link>
          <Box sx={{}}>
            <Link to="/ContactUs">
              <Typography sx={{ color: "#000000", mb: 2, fontFamily:"Poppins", fontWeight:"bold" }}>
                Contact Us
              </Typography>
            </Link>
            <Link to="/PrivacyPolicy">
              <Typography sx={{ color: "#000000", mb: 2, fontFamily:"Poppins", fontWeight:"bold" }}>
                Privacy Policy
              </Typography>
            </Link>
            <Link to="/TermsCondition">
              <Typography sx={{ color: "#000000", fontFamily:"Poppins", fontWeight:"bold" }}>
                Terms and Conditions
              </Typography>
            </Link>
          </Box>
          <Box sx={{}}>
            <Link to="/OffersForYou">
              <Typography sx={{ color: "#000000", mb: 2, fontFamily:"Poppins", fontWeight:"bold" }}>Offers</Typography>
            </Link>
            <Link to="/ListYourVehicle">
              <Typography sx={{ color: "#000000", mb: 2, fontFamily:"Poppins", fontWeight:"bold" }}>
                List Your Vehicle
              </Typography>
            </Link>
            <Link to="/FAQs">
              <Typography sx={{ color: "#000000", fontFamily:"Poppins", fontWeight:"bold" }}>FAQs</Typography>
            </Link>
          </Box>
          <Box sx={{}}>
            <Link to="/AboutUs">
              <Typography sx={{ color: "#000000", mb: 2, fontFamily:"Poppins", fontWeight:"bold" }}>About Us</Typography>
            </Link>
            <button
              // sx={{ color: "#000000" }}
              onClick={() => (window.location = "mailto:service@strugend.com")}
            >
              {" "}
              service@strugend.com
            </button>{" "}
            <Box sx={{ color: "#000000", mt: 2 }}>
              <a className="text-pink-900" href="tel:+917328834913">
                <Typography sx={{ color: "#000000", mb: 2, fontFamily:"Poppins", fontWeight:"bold" }}>
                  +91 7328834913
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>

        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ pl: 10, fontFamily:"Poppins", fontWeight:"bold" }}>
            {" "}
            © STRUGEND. All rights reserved.
          </Typography>
          <Box sx={{ pr: 10 }}>
            <Link to="www.google.com">
              <InstagramIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
            <Link to="www.google.com">
              <TwitterIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
            <Link to="www.google.com">
              <FacebookIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PostLoginFooter;
