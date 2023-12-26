import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../assets/images/logo.png";
import star from "../../assets/images/star.png";
import loginPopup from "../../assets/images/loginPopup.webp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const OTPVerified = () => {
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
              height: 200,
            }}
            alt="Your logo."
            src={loginPopup}
          />
          <Typography id="modal-modal-description" sx={{ mt: 2, pb: 1 }}>
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
        <Box sx={{ width: "50%", my: "auto", pl: 15 }}>
          <CheckCircleIcon sx={{ fontSize: 200, color: "#59CE8F" }} />
          <Typography sx={{ color: "#59CE8F", pt: 4 }}>
            OTP Verified Successfully!
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default OTPVerified;
