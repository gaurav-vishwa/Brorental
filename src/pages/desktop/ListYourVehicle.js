import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, IconButton, Typography } from "@mui/material";
import MobileListYourVehicle from "../../pages/mobile/MobileListYourVehicle";
import listyourvehiclegraphic from "../../assets/images/listyourvehiclegraphic.jpg";
import extraincome from "../../assets/images/extraincome.svg";
import nomoney from "../../assets/images/nomoney.svg";
import ridesharing from "../../assets/images/ridesharing.jpg";
import listvehiclesupport from "../../assets/images/listvehiclesupport.svg";
import listvehicleflexibility from "../../assets/images/listvehicleflexibility.svg";
import Faq from "../../components/desktop/Faq";
import NotificationsIcon from "@mui/icons-material/Notifications";
import listvehiclestep1image from "../../assets/images/listvehiclestep1image.jpg";
import listvehiclestep2image from "../../assets/images/listvehiclestep2image.jpg";
import listvehiclestep3image from "../../assets/images/listvehiclestep3image.jpg";
import listvehiclestep4image from "../../assets/images/listvehiclestep4image.jpg";
import listvehiclestep1icon from "../../assets/images/listvehiclestep1icon.svg";
import listvehiclestep2icon from "../../assets/images/listvehiclestep2icon.svg";
import listvehiclestep3icon from "../../assets/images/listvehiclestep3icon.svg";
import listvehiclestep4icon from "../../assets/images/listvehiclestep4icon.svg";

import StartEarning from "../../components/desktop/StartEarning";

import PreLoginNavbar from "../../layouts/desktop/PreLoginNavbar";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";

const styles = {
  paperContainer: {
    backgroundImage: `url(${ridesharing})`,
  },
};

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

const ListYourVehicle = () => {
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

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const [active, setActive] = useState("step1");
  // const element = useRef("");
  // const [appState, changeState] = useState({
  //   activeObject: null,
  //   objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  // });

  // const handleClick = (name) => {
  //   console.log(name);
  //   const e = document.getElementById(name);
  //   document.getElementById(e).classList.add("highlight");
  //   if (name !== "step1box") {
  //     document.getElementById().classList.remove("highlight");
  //   } else {
  //     document.getElementById(name).classList.add("highlight");
  //   }
  // };

  // const handleClick = () => {
  //   // const e = element.current.id();
  //   element.current.classList.addClass("highlight");
  // };

  return (
    <div>
      {isMatch ? (
        <MobileListYourVehicle />
      ) : (
        <Box>
          <PreLoginNavbar />

          <Box display={"inline-flex"} sx={{ p: 10 }}>
            <Box>
              <Typography variant="h5" sx={{ py: 4 }}>
                Did you know you can now make money out of your unused
                two-wheeler?
              </Typography>
              <StartEarning />
            </Box>

            <Box
              component="img"
              sx={{
                width: "70%",
                m: "auto",
                py: 4,
              }}
              alt="Your logo."
              src={listyourvehiclegraphic}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ mr: "15%" }}>
              {chosen === 0 && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep1image} alt="" />
                </Box>
              )}
              {chosen === 1 && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep2image} alt="" />
                </Box>
              )}

              {chosen === 2 && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep3image} alt="" />
                </Box>
              )}
              {chosen === 3 && (
                <Box sx={{ mt: "40%" }}>
                  <img src={listvehiclestep4image} alt="" />
                </Box>
              )}
            </Box>

            <Box sx={{}}>
              <Typography variant="h4" sx={{ my: 5 }}>
                Process
              </Typography>

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
            </Box>
          </Box>

          <Box>
            <Typography variant="h4" textAlign={"center"} sx={{ mt: 10 }}>
              Why list your bike on GoBikes?
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
              <Box sx={{}}>
                <img className="" src={extraincome} alt="Extra Income" />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  Earn extra income
                </Typography>
                <Typography>
                  Make your vehicle an earning <br /> member of the family
                </Typography>
              </Box>
              <Box sx={{ ml: 15 }}>
                <img className="" src={nomoney} alt="Extra Income" />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  Zero listing fee
                </Typography>
                <Typography>
                  No upfront payment to yourself <br /> as a vendor
                </Typography>
              </Box>
              <Box sx={{ ml: 15 }}>
                <img className="" src={listvehiclesupport} alt="Extra Income" />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  ESupport
                </Typography>
                <Typography>
                  24*7 support from the <br /> GoBikes Team
                </Typography>
              </Box>
              <Box sx={{ ml: 15 }}>
                <img
                  className=""
                  src={listvehicleflexibility}
                  alt="Extra Income"
                />
                <Typography variant="h6" sx={{ pb: 2 }}>
                  Flexibility
                </Typography>
                <Typography>
                  Your vehicle, your location, <br /> your price
                </Typography>
              </Box>
            </Box>
          </Box>
          <Faq />

          <Box
            style={styles.paperContainer}
            sx={{
              bgcolor: "#EAEAEA",
              mt: 4,
              // backgroundImage: `url(${styles})`,
            }}
          >
            <Box
              sx={{
                py: 5,
                display: "flex",
                justifyContent: "flex-end",
                pr: 10,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#ffffff",
                  width: "40%",
                  height: "5%",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "3",
                }}
              >
                <IconButton>
                  <NotificationsIcon
                    sx={{ fontSize: "30px", color: "black" }}
                  />
                </IconButton>
                <Typography variant="p" sx={{ fontSize: "20px" }}>
                  List your vehicle
                </Typography>{" "}
                <br />
                <br />
                <Typography variant="p" sx={{ fontSize: "15px" }}>
                  Register your vehicle on GoBikes to rent it out via our
                  platform. You can now make easy money while staying at home.
                  GoBikes will ensure an easy, safe and reliable process of
                  renting for you. Our GoBikes Team carefully reviews the
                  renter's documentations to ensure a smooth, hassle-free
                  process for both the renters and the vehicle owners.
                </Typography>
                <br />
                <StartEarning />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {/* <GoToTop /> */}
      <PostLoginFooter />
    </div>
  );
};

export default ListYourVehicle;
