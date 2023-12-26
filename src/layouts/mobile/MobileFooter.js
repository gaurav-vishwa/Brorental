import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const MobileFooter = () => {
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
            // display: "flex",
            // justifyContent: "center",
            textAlign: "left",
            // width: "100%",

            pb: 10,
          }}
        >
          <Link to="/">
            <Box
              className="m-auto"
              component="img"
              sx={{
                height: 50,

                mb: 5,
              }}
              alt="Your logo."
              src={logo}
            />
          </Link>
          <Box sx={{ pl: 5 }}>
            <Link to="/ContactUs">
              <Typography sx={{ color: "#000000", mb: 2 }}>
                Contact Us
              </Typography>
            </Link>
            <Link to="/PrivacyPolicy">
              <Typography sx={{ color: "#000000", mb: 2 }}>
                Privacy Policy
              </Typography>
            </Link>
            <Link to="/TermsCondition">
              <Typography sx={{ color: "#000000", mb: 5 }}>
                Terms and Conditions
              </Typography>
            </Link>
          </Box>
          <Box sx={{ pl: 5 }}>
            <Link to="/OffersForYou">
              <Typography sx={{ color: "#000000", mb: 2 }}>Offers</Typography>
            </Link>
            <Link to="/ListYourVehicle">
              <Typography sx={{ color: "#000000", mb: 2 }}>
                List Your Vehicle
              </Typography>
            </Link>
            <Link to="/FAQs">
              <Typography sx={{ color: "#000000", mb: 5 }}>FAQs</Typography>
            </Link>
          </Box>
          <Box sx={{ pl: 5 }}>
            <Link to="/AboutUs">
              <Typography sx={{ color: "#000000", mb: 2 }}>About Us</Typography>
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
                <Typography sx={{ color: "#000000" }}>
                  +91 7328834913
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Typography sx={{ fontSize: 14 }}>
            {" "}
            © STRUGEND. All rights reserved.
          </Typography>
          <Box sx={{}}>
            <Link to="https://www.instagram.com/strugend/">
              <InstagramIcon sx={{ color: "#000000", mr: 2, width: 15 }} />
            </Link>
            <Link to="https://strugend.com/index.html">
              <TwitterIcon sx={{ color: "#000000", mr: 2, width: 15 }} />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100085408645437">
              <FacebookIcon sx={{ color: "#000000", width: 15 }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MobileFooter;
