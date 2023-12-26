import React, { useEffect, useState } from "react";
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
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";

const ContactUs = () => {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
      <DynamicNavbar />
      {isMatch ? (
        <MobileContactUs />
      ) : (
        <Box>
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
                  sx={{ color: "#59ce8f" }}
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
                    <img
                      className="w-16"
                      src={contactphone}
                      alt="Extra Income"
                    />
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
                    <img
                      className="w-16"
                      src={contactemail}
                      alt="Extra Income"
                    />
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

                {/* ContactUs form starts here  */}
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{
                    "& > :not(style)": { m: 1, width: "30em" },
                  }}
                >
                  <TextField
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
                    sx={{
                      height: "7vh",
                      p: "2px",
                      position: "relative",
                      margin: "auto",
                    }}
                  />
                  <br />

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
                    sx={{
                      height: "7vh",
                      width: 10,
                      p: "2px",
                    }}
                  />
                  <br />

                  <TextField
                    name="mobile"
                    type="number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    required
                    id="outlined-basic"
                    label="Mobile"
                    variant="outlined"
                    sx={{
                      height: "7vh",
                      width: 10,
                      p: "2px",
                    }}
                  />
                  <br />

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
                  />
                </Box>

                <Box sx={{ margin: "10px" }}>
                  <div>
                    <ReCAPTCHA
                      sitekey={key}
                      onChange={(e) => setIsCapchaDone(true)}
                      onErrored={(e) => setIsCapchaDone(false)}
                    />
                  </div>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={showSubmit}
                  sx={{
                    bgcolor: "#59ce8f",
                    p: "7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "35em",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
          <div className="h-32"></div>
          <DynamicFooter />
        </Box>
      )}
    </div>
  );
};

export default ContactUs;
