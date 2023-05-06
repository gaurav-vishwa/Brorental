import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { Typography, Button, TextareaAutosize } from "@mui/material";
import MobileContactUs from "../../pages/mobile/MobileContactUs";
import TextField from "@mui/material/TextField";
import contactcompany from "../../assets/images/contactcompany.svg";
import contactlocation from "../../assets/images/contactlocation.svg";
import contactphone from "../../assets/images/contactphone.svg";
import contactemail from "../../assets/images/contactemail.svg";
import ReCAPTCHA from "react-google-recaptcha";
import PreLoginNavbar from "../../layouts/desktop/PreLoginNavbar";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";

const ContactUs = () => {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const [capchaIsDone, setCapchaDone] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  function onChange() {
    setCapchaDone(true);
  }

  return (
    <div>
      <PreLoginNavbar />
      {isMatch ? (
        <MobileContactUs />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            padding: "0 12%",
            boxSizing: "border-box",
            marginTop: "5%",
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h5"
                fontSize={"30px"}
                fontWeight={"bold"}
                sx={{ color: "#99CC33" }}
              >
                Contact Us
              </Typography>{" "}
              <br />
              <Typography variant="h4" fontWeight={"bold"}>
                How can we help you?
              </Typography>
              <br />
              <Typography
                variant="p"
                fontSize={"18px"}
                fontWeight={"bold"}
                sx={{ color: "#717171" }}
              >
                Fill in the form or drop an email
              </Typography>
            </Box>

            <Box className="" sx={{}}>
              <Box sx={{ display: "inline-flex", mt: 5 }}>
                <Box>
                  <img
                    className="w-16"
                    src={contactcompany}
                    alt="Extra Income"
                  />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography variant="h5" sx={{ color: "#59CE8F" }}>
                    Registered Company
                  </Typography>
                  <Typography variant="h6">
                    GoBikes Automotive Private Limited
                  </Typography>
                </Box>
              </Box>{" "}
              <br />
              <Box sx={{ display: "inline-flex", mt: 5 }}>
                <Box>
                  <img
                    className="w-16"
                    src={contactlocation}
                    alt="Extra Income"
                  />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography variant="h5" sx={{ color: "#59CE8F" }}>
                    Registered Address{" "}
                  </Typography>
                  <Typography variant="h6">
                    5th Floor, Seminar Building, Incubation Center <br /> IIIT
                    Delhi, New Delhi, Delhi 110020{" "}
                  </Typography>
                </Box>
              </Box>{" "}
              <br />
              <Box sx={{ display: "inline-flex", mt: 5 }}>
                <Box>
                  <img className="w-16" src={contactphone} alt="Extra Income" />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Typography variant="h5" sx={{ color: "#59CE8F" }}>
                    Mobile Number{" "}
                  </Typography>
                  <Typography variant="h6">+91-8448444897 </Typography>
                </Box>
              </Box>{" "}
              <br />
              <Box sx={{ display: "inline-flex", mt: 5 }}>
                <Box>
                  <img className="w-16" src={contactemail} alt="Extra Income" />
                </Box>
                <Box sx={{ ml: 3 }}>
                  <Box sx={{ display: "inline-flex" }}>
                    <Typography variant="h5" sx={{ color: "#59CE8F" }}>
                      Support :
                    </Typography>
                    <Typography variant="h6">
                      &nbsp; contact-us@gobikes.co.in
                    </Typography>
                  </Box>{" "}
                  <br />
                  <Box sx={{ display: "inline-flex" }}>
                    <Typography variant="h5" sx={{ color: "#59CE8F" }}>
                      Contact Us :{}
                    </Typography>
                    <Typography variant="h6">
                      &nbsp; contact-us@gobikes.co.in{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                bgcolor: "#FAFAFA",
                p: "10%",
                borderRadius: "20px",
                boxSizing: "border-box",
                boxShadow: "0 0 6px",
              }}
            >
              <Typography fontWeight={"bold"} fontSize={"25px"}>
                We're here for you:
              </Typography>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30em" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  sx={{
                    height: "7vh",
                    p: "2px",
                    position: "relative",
                    margin: "auto",
                  }}
                  id="outlined-basic"
                  label="Name*"
                  variant="outlined"
                />{" "}
                <br />
                <TextField
                  sx={{
                    height: "7vh",
                    width: 10,
                    p: "2px",
                  }}
                  id="outlined-basic"
                  label="Email*"
                  variant="outlined"
                />{" "}
                <br />
                <TextField
                  sx={{
                    height: "7vh",
                    width: 10,
                    p: "2px",
                  }}
                  id="outlined-basic"
                  label="Mobile*"
                  variant="outlined"
                />{" "}
                <br />
                <TextareaAutosize
                  id="outlined-basic"
                  label="message"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ margin: "10px" }}>
                <div>
                  <ReCAPTCHA sitekey={key} onChange={onChange} />
                </div>
              </Box>
              {capchaIsDone && (
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#99CC33",
                    p: "7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "35em",
                  }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      )}
      <div className="h-32"></div>
      <PostLoginFooter />
    </div>
  );
};

export default ContactUs;
