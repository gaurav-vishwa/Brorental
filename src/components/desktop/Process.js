import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import listvehiclestep1icon from "../../assets/images/listvehiclestep1icon.svg";
import listvehiclestep2icon from "../../assets/images/listvehiclestep2icon.svg";
import listvehiclestep3icon from "../../assets/images/listvehiclestep3icon.svg";
import listvehiclestep4icon from "../../assets/images/listvehiclestep4icon.svg";

const Day = ({ active, count, onClick }) => {
  return (
    <div onClick={onClick} className={active ? "day activeProcess" : "day"}>
      <Box>
        <Box
          sx={{
            display: "flex",
            bgcolor: "#E2f0c680",
            p: 3,
          }}
        >
          <img src={count.img} alt="" />
          <Box sx={{ pl: 3 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              {count.step}
            </Typography>
            <Typography>
              <span className="font-bold">{count.title}</span>
              {count.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

const Process = () => {
  const [chosen, setChosen] = useState(0);
  const test = [
    {
      id: 1,
      step: "STEP 1",
      img: listvehiclestep1icon,
      title: "Sign up as a Partner",
      description: (
        <>
          {" "}
          - Enroll yourself as a partner and list your <br /> two-wheeler(s) on
          GoBikes’s platform by submitting the required <br /> description. This
          should not take more than 2 minutes.
        </>
      ),
    },
    {
      id: 2,
      step: "STEP 2",
      img: listvehiclestep2icon,
      title: "Get bookings on your dashboard",
      description: (
        <>
          {" "}
          - Manage your vehicles
          <br /> and bookings from our platform through your dashboard.
        </>
      ),
    },
    {
      id: 3,
      step: "STEP 3",
      img: listvehiclestep3icon,
      title: "Complete the booking",
      description: (
        <>
          {" "}
          - Customers would rent your vehicle at a <br /> price defined by you
          and come to your preferred location for <br /> pickup and drop of your
          vehicle.
        </>
      ),
    },
    {
      id: 4,
      step: "STEP 4",
      img: listvehiclestep4icon,
      title: "Receive Payments",
      description: (
        <>
          {" "}
          - We will transfer your payment directly <br /> to your bank account
          within 2 working days.
        </>
      ),
    },
  ];
  return (
    <div>
      {test.map((elements, index) => (
        <Day
          key={index}
          count={elements}
          active={index === chosen}
          onClick={() => setChosen(index)}
        />
      ))}
    </div>
  );
};

export default Process;
