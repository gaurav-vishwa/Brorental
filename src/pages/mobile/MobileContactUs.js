import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  Typography,
  Button,
  TextareaAutosize,
  Grid,
  Stack,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import contactcompany from "../../assets/images/contactcompany.svg";
import contactlocation from "../../assets/images/contactlocation.svg";
import contactphone from "../../assets/images/contactphone.svg";
import contactemail from "../../assets/images/contactemail.svg";
import ReCAPTCHA from "react-google-recaptcha";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import MobilePreLoginNavbar from "../../layouts/mobile/MobilePreLoginNavbar";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const MobileContactUs = () => {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isCapchaDone, setIsCapchaDone] = useState(false);
  const [showSubmit, setShowSubmit] = React.useState(true);

  useEffect(() => {
    // console.log(formData.name.length);
    if (
      formData.name.length > 4 &&
      formData.email.length > 6 &&
      formData.mobile.length > 9 &&
      formData.message.length > 10 &&
      isCapchaDone == true
    ) {
      setShowSubmit(false);
    } else if (
      formData.name.length <= 4 ||
      formData.email.length <= 6 ||
      formData.mobile.length <= 9 ||
      formData.message.length <= 9 ||
      isCapchaDone == false
    ) {
      setShowSubmit(true);
    }
  }, [formData, isCapchaDone]);

  return (
    <div>
      <DynamicMobileNavbar />
      <Box>
        <Box sx={{ textAlign: "center", my: 3 }}>
          <Typography
            variant="h6"
            fontSize={"30px"}
            fontWeight={"bold"}
            sx={{ color: "#59ce8f" }}
          >
            Contact Us
          </Typography>{" "}
          <Typography variant="h5" fontWeight={"bold"}>
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
        {/* CONTACT FORM */}
        <br />
        <Box
          sx={{
            bgcolor: "#FAFAFA",
            py: "10%",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            m: "auto",
            // boxSizing: "border-box",
            boxShadow: "0 0 6px",
            width: "85%",
          }}
        >
          <Box>
            <Typography
              fontWeight={"bold"}
              fontSize={"20px"}
              sx={{ textAlign: "center", mb: 2 }}
            >
              We're here for you
            </Typography>

            {/* ContactUs form starts here  */}
            <Grid component="form" container spacing={3} sx={{ mt: 1 }}>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  fullWidth
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{ width: "17em" }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ width: "17em" }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  name="mobile"
                  type="number"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  required
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  sx={{ width: "17em" }}
                />
              </Grid>
              <Grid
                item
                container
                sx={{
                  mx: "auto",
                }}
              >
                {" "}
                <Stack sx={{ width: "17em", mx: "auto" }}>
                  <TextareaAutosize
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    id="outlined-basic"
                    placeholder="Message*"
                    variant="outlined"
                    sx={{ mx: "auto" }}
                  />
                </Stack>
              </Grid>
            </Grid>

            <Box
              sx={{
                margin: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                mt: 3,
              }}
            >
              <ReCAPTCHA
                sitekey={key}
                onChange={(e) => setIsCapchaDone(true)}
                onErrored={(e) => setIsCapchaDone(false)}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              disabled={showSubmit}
              sx={{
                bgcolor: "#59CE8F",
                // p: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                m: "auto",
                width: "20em",
                mt: 3,
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>

        {/* CONTACT INFO */}

        <Box sx={{ mx: 5 }}>
          <Box
            sx={{
              display: "flex",
              // ml: "5%",

              mt: 10,
            }}
          >
            <Box>
              <img className="w-10" src={contactcompany} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography
                variant="h7"
                fontSize={"13px"}
                fontWeight={"bold"}
                sx={{ color: "#59CE8F" }}
              >
                Registered Company
              </Typography>{" "}
              <br />
              <Typography variant="h7" fontWeight={"bold"} fontSize={"13px"}>
                GoBikes Automotive Private Limited
              </Typography>
            </Box>
          </Box>{" "}
          <br />
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              // ml: "5%",
            }}
          >
            <Box>
              <img className="w-12" src={contactlocation} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 4 }}>
              <Typography
                variant="h7"
                fontSize={"13px"}
                fontWeight={"bold"}
                sx={{ color: "#59CE8F" }}
              >
                Registered Address{" "}
              </Typography>{" "}
              <br />
              <Typography variant="h7" fontWeight={"bold"} fontSize={"13px"}>
                5th Floor, Seminar Building, Incubation Center IIIT Delhi, New
                Delhi, Delhi 110020{" "}
              </Typography>
            </Box>
          </Box>{" "}
          <br />
          <Box sx={{ display: "flex" }}>
            <Box>
              <img className="w-8" src={contactphone} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Typography
                variant="h7"
                fontSize={"13px"}
                fontWeight={"bold"}
                sx={{ color: "#59CE8F" }}
              >
                Mobile Number{" "}
              </Typography>{" "}
              <br />
              <Typography variant="h7" fontWeight={"bold"} fontSize={"13px"}>
                +91-8448444897{" "}
              </Typography>
            </Box>
          </Box>{" "}
          <br />
          <Box sx={{ display: "inline-flex" }}>
            <Box>
              <img className="w-8" src={contactemail} alt="Extra Income" />
            </Box>
            <Box sx={{ ml: 3 }}>
              <Box sx={{ display: "inline-flex" }}>
                <Typography
                  variant="h7"
                  fontWeight={"bold"}
                  sx={{ color: "#59CE8F" }}
                  fontSize={"13px"}
                >
                  Support :
                </Typography>
                <Typography variant="h7" fontSize={"13px"} fontWeight={"bold"}>
                  &nbsp; contact-us@gobikes.co.in
                </Typography>
              </Box>{" "}
              <br />
              <Box sx={{ display: "inline-flex" }}>
                <Typography
                  variant="h7"
                  fontWeight={"bold"}
                  sx={{ color: "#59CE8F" }}
                  fontSize={"12px"}
                >
                  Contact Us :{}
                </Typography>
                <Typography variant="h7" fontSize={"12px"} fontWeight={"bold"}>
                  &nbsp; contact-us@gobikes.co.in{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <div className="h-32"></div>
      <MobileFooter />
    </div>
  );
};

export default MobileContactUs;
