import React from "react";
import Features from "./Features";
import BookRide from "./BookRide";
import Faq from "./Faq";
import Statistics from "./Statistics";
import KnowMore from "./KnowMore";
import OfferCarousal from "./OfferCarousal";
import Video from "./Video";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function RightSection() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      {isMatch && (
        <Box sx={{ mt: 10 }}>
          {/* <img
            src={rightSection}
            alt="Right Section"
            style={{
              width: "100vw",
              height: "85vh",
            }}
          /> */}
          <Typography variant="h4" sx={{ fontWeight: "bold", my: 5 }}>
            Offers for you
          </Typography>
          <OfferCarousal />
          <Video />
          <Features />
          <BookRide />
          <Faq />
          <Statistics />
          <KnowMore />
        </Box>
      )}
    </Box>
  );
}
