import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../assets/images/logo.png";
import star from "../../assets/images/star.png";
import loginPopup from "../../assets/images/loginPopup.webp";

const OTP = () => {
  return (
    <div className="text-center">
      <Box sx={{ display: "inline-flex" }}>
        <Box sx={{ bgcolor: "#f3f4f6" }}>
          <Box
            className="m-auto "
            component="img"
            sx={{
              height: 70,
              pt: 2,
              px: 5,
            }}
            alt="Your logo."
            src={logo}
          />
          <br />
          <Box
            className="m-auto"
            component="img"
            sx={{
              height: 230,
            }}
            alt="Your logo."
            src={loginPopup}
          />
          <Typography id="modal-modal-description" sx={{ mt: 3, pb: 1 }}>
            <div className="grid grid-cols-4 px-5 mx-auto">
              <div>
                <span className="text-sm">15+</span> <br />{" "}
                <span className="text-[11px] text-gray-500">Cities</span>
              </div>
              <div>
                <span className="text-sm">50000+</span> <br />{" "}
                <span className="text-[11px] text-gray-500">
                  Happy Customers
                </span>
              </div>
              <div>
                <span className="text-sm">6000+</span> <br />{" "}
                <span className="text-[11px] text-gray-500">Bikes</span>
              </div>
              <div>
                <Box>
                  <span className="text-sm">
                    4.8/5
                    <Box
                      className="inline-block"
                      component="img"
                      sx={{
                        height: 15,
                        px: 1,
                        mb: 0.5,
                      }}
                      alt="Your logo."
                      src={star}
                    />{" "}
                  </span>{" "}
                  <br />{" "}
                  <span className="text-[11px] text-gray-500">
                    1200+ reviews
                  </span>
                </Box>
              </div>
            </div>
          </Typography>
        </Box>
        <Box sx={{ pl: 3, m: "auto" }}>
          <Typography variant="h5" sx={{ m: 3 }}>
            Enter OTP sent to{" "}
            <span className="text-[#59CE8F]">(Mobile Number) (Change) </span>{" "}
          </Typography>
          <Typography variant="p">
            Verification of your number is required so that we can <br />{" "}
            contact you about any information
          </Typography>
          <Box>
            <TextField
              id="outlined-basic"
              size="small"
              sx={{ width: 45, my: 3, mx: 1 }}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              size="small"
              sx={{ width: 45, my: 3, mx: 1 }}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              size="small"
              sx={{ width: 45, my: 3, mx: 1 }}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              size="small"
              sx={{ width: 45, my: 3, mx: 1 }}
              variant="outlined"
            />
          </Box>
          <Box sx={{ display: "inline-flex" }}>
            <Typography>Didn't receive the OTP?</Typography>
            <Typography sx={{ color: "#59CE8F", ml: 2 }}>Resend OTP</Typography>
          </Box>
          <Button
            sx={{
              //   display: "flex",
              //   justifyContent: "center",
              p: 2,
              width: "97%",
              color: "#ffffff",
              bgcolor: "#59CE8F",
              //   textAlign: "center",
              my: 3,
              mx: "auto",
            }}
          >
            {" "}
            Submit{" "}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default OTP;
