import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import MobileFAQ from "../mobile/MobileFAQs";
import PreLoginNavbar from "../../layouts/desktop/PreLoginNavbar";
import { Typography } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import { useLocation } from "react-router-dom";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const FAQs = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <div>
      {isMatch ? <DynamicMobileNavbar /> : <DynamicNavbar />}
      {isMatch ? (
        <MobileFAQ />
      ) : (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                mt: 6,
                marginRight: 20,
                padding: 5,
                // boxShadow: 3,
                borderRadius: 2,

                position: "fixed",
                top: -1,
              }}
            >
              <Box sx={{ ml: 10, mt: 5 }}>
                <Typography variant="h4">FAQ Section</Typography>
                <Box sx={{ bgcolor: "#59CE8F20", mt: 3, pr: 5, pl: 1 }}>
                  <NavHashLink
                    to="#Booking"
                    style={
                      isActive("#Booking")
                        ? {
                            color: "#59ce8f",
                          }
                        : {}
                    }
                  >
                    <Typography sx={{ p: 1.5 }}>Booking</Typography>
                  </NavHashLink>
                  <NavHashLink
                    to="#BookingCancellation"
                    style={
                      isActive("#BookingCancellation")
                        ? {
                            color: "#59ce8f",
                          }
                        : {}
                    }
                  >
                    <Typography sx={{ p: 1.5 }}>
                      Booking Cancellation
                    </Typography>
                  </NavHashLink>
                  <NavHashLink
                    to="#SafetyAndTips"
                    style={
                      isActive("#SafetyAndTips")
                        ? {
                            color: "#59ce8f",
                          }
                        : {}
                    }
                  >
                    <Typography sx={{ p: 1.5 }}>Safety and Tips</Typography>
                  </NavHashLink>
                  <NavHashLink
                    to="#SecurityDeposit"
                    style={
                      isActive("#SecurityDeposit")
                        ? {
                            color: "#59ce8f",
                          }
                        : {}
                    }
                  >
                    <Typography sx={{ p: 1.5 }}>Security Deposit</Typography>
                  </NavHashLink>

                  <NavHashLink
                    to="#AccidentOrDamage"
                    style={
                      isActive("#AccidentOrDamage")
                        ? {
                            color: "#59ce8f",
                          }
                        : {}
                    }
                  >
                    <Typography sx={{ p: 1.5 }}>Accident or Damage</Typography>
                  </NavHashLink>
                </Box>
              </Box>
            </Box>

            <Box sx={{ pl: "30%", pr: "10%", pb: 20 }}>
              <MobileFAQ />
            </Box>
          </Box>
        </Box>
      )}
      {isMatch ? <MobileFooter /> : <DynamicFooter />}
    </div>
  );
};

export default FAQs;
