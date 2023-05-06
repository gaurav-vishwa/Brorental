import React from "react";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const NoBikesAvailable = () => {
  return (
    <div className="bg-[#fafbfd]">
      <Box
        sx={{
          m: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          bgcolor: "#ffffff",
          width: "70%",
          height: 600,
        }}
      >
        <Box sx={{ m: "auto", textAlign: "center" }}>
          <EventBusyIcon
            className="pb-2"
            sx={{
              fontSize: 150,
              color: "#59CE8F",
            }}
          />
          <Typography variant="h4" sx={{}}>
            No Bikes Available
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default NoBikesAvailable;
