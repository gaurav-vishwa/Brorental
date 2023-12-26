import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import HondaActiva from "../../assets/images/HeroDestini.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import MobileRentNow from "../mobile/MobileRentNow";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const dynamicCoupons = [
  {
    id: "apply1",
    color: "#59ce8f",
    text: "APPLY",
    sideBtnText: "GOBIKES",
    couponText: "Receive GoCoins worth 10% of the booking amount",
    value: 10,
  },
  {
    id: "apply2",
    color: "#59ce8f",
    text: "APPLY",
    sideBtnText: "GOBIKES",
    couponText: "Get Flat Rs.50 Off on orders above Rs.1000.",
    value: 20,
  },
  {
    id: "apply3",
    color: "#59ce8f",
    text: "APPLY",
    sideBtnText: "GOBIKES",
    couponText: "Get Flat Rs.100 Off on orders above Rs.2000.",
    value: 30,
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function RentNow() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [payment, setPayment] = useState("");
  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const [coupons, setCoupons] = useState("");
  const handleCoupons = (event) => {
    setCoupons(event.target.value);
  };

  const [disable, setDisable] = useState(true);
  const handleDisable = () => {
    setDisable(!disable);
  };

  const [couponsArray, setCouponsArray] = useState(dynamicCoupons);

  useEffect(() => {
    setCoupons("");
  }, [couponsArray]);

  const handleApply = (e) => {
    let arr = couponsArray;
    var btnId = e.currentTarget.id;
    var currId = btnId[5];

    console.log("Button Clicked!");
    if (arr[currId - 1].text === "APPLY") arr[currId - 1].text = "REMOVE";
    else {
      arr[currId - 1].text = "APPLY";
      setCoupons("");
    }
    if (arr[currId - 1].color === "#59ce8f") arr[currId - 1].color = "red";
    else arr[currId - 1].color = "#59ce8f";
    setCouponsArray(arr);
  };
  console.log(coupons);

  return (
    <>
      <DynamicNavbar />
      {isMatch ? (
        <MobileRentNow />
      ) : (
        <Container sx={{ marginTop: "2%" }}>
          <Typography variant="h6">Summary</Typography>
          <Grid container spacing={2} sx={{ paddingTop: "5px" }}>
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  border: "2px solid #e0e0e0",
                  borderRadius: "4px",
                  padding: "20px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <img
                    src={HondaActiva}
                    alt="HondaActiva"
                    style={{ width: "40%" }}
                  />
                  <div style={{ marginLeft: "5px" }}>
                    <Typography variant="h6">Hero Destini 125</Typography>
                    <Typography variant="p" fontSize="16px">
                      RentNow: <span style={{ fontWeight: "bold" }}>₹449</span>
                    </Typography>
                    <br />
                    <Typography variant="p" fontSize="16px">
                      Refundable Deposit:{" "}
                      <span style={{ fontWeight: "bold" }}>₹2000</span>
                    </Typography>
                    <Box
                      sx={{
                        border: "1px solid #e0e0e0",
                        borderRadius: "4px",
                        width: "27%",
                        marginTop: "7px",
                        display: "flex",
                      }}
                    >
                      <IconButton
                        sx={{
                          padding: "3px",
                          paddingLeft: "5px",
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography
                        variant="h6"
                        sx={{
                          borderLeft: "1px solid #e0e0e0",
                          padding: "4px",
                          paddingLeft: "6px",
                          paddingRight: "6px",
                          borderRight: "1px solid #e0e0e0",
                        }}
                      >
                        1
                      </Typography>
                      <IconButton sx={{ padding: "3px", paddingLeft: "5px" }}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ marginTop: "7px" }}>
                      <FormControl sx={{ minWidth: 350 }}>
                        <Select
                          value={payment}
                          size="small"
                          onChange={handleChange}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value="">
                            <em>Payment Mode:FullPayment</em>
                          </MenuItem>
                          <MenuItem value={10}>
                            Payment Mode:FullPayment
                          </MenuItem>
                          <MenuItem value={20}>
                            Payment Mode:PartialPayment
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div style={{ marginTop: "3%" }}>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "16px", color: "#59ce8f" }}
                  >
                    Pickup and Drop Date
                  </Typography>
                  <br />
                  <div style={{ display: "flex" }}>
                    <div>
                      <Typography variant="p">
                        <span style={{ fontSize: "35px", fontWeight: "bold" }}>
                          22
                        </span>
                      </Typography>
                      <Typography variant="p" sx={{ marginLeft: "10px" }}>
                        <span>February, 2023</span>
                        <br />
                        <span>1.00PM</span>
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="p">
                        <span style={{ fontSize: "35px", fontWeight: "bold" }}>
                          23
                        </span>
                      </Typography>
                      <Typography variant="p" sx={{ marginLeft: "10px" }}>
                        <span>February, 2023</span>
                        <br />
                        <span>2.00PM</span>
                      </Typography>
                    </div>
                  </div>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "16px", color: "#59ce8f" }}
                  >
                    Pickup and Drop Location
                  </Typography>
                  <br />
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      padding: "5px",
                    }}
                  >
                    Tikiapara Railway Station
                  </Typography>
                </div>
                <Box
                  sx={{
                    border: "2px solid #e0e0e0",
                    borderRadius: "4px",
                    padding: "15px",
                    marginTop: "15px",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    Things to Remember
                  </Typography>
                  <Grid container spacing={2} sx={{ marginTop: "2px" }}>
                    <Grid item xs={12} sm={3}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        Kilometer Limit
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        100 Kms
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        Kilometers Changes
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        ₹3/Km
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        Location Time
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        7.00AM to 10.00Pm
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        Late Drop Fee
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <Typography variant="p" sx={{ fontSize: "15px" }}>
                        ₹100/hr
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={5}>
              {/* apply coupon section starts here  */}
              <Box>
                <FormControl sx={{ minWidth: 470 }}>
                  <Select
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                    displayEmpty
                    value={coupons}
                    onChange={handleCoupons}
                  >
                    <MenuItem value="">
                      <em>Apply Coupons</em>
                    </MenuItem>
                    {couponsArray.map((coup) => (
                      <MenuItem value={coup.value} key={coup.value}>
                        <div style={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              color: "black",
                              backgroundColor: "#eeeeee",
                              ":hover": { backgroundColor: "#eeeeee" },
                            }}
                          >
                            {coup.sideBtnText}
                          </Button>
                          <Typography
                            variant="p"
                            sx={{
                              fontSize: "14px",
                              color: "#59ce8f",
                              marginLeft: "5px",
                            }}
                          >
                            {coup.couponText}
                          </Typography>

                          <Button
                            variant="text"
                            size="small"
                            sx={{ color: coup.color }}
                            id={coup.id}
                            onClick={handleApply}
                          >
                            {coup.text}
                          </Button>
                        </div>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  border: "2px solid #e0e0e0",
                  borderRadius: "4px",
                  padding: "10px",
                  marginTop: "7px",
                  backgroundColor: "#e0e0e0",
                }}
              >
                <Typography
                  variant="p"
                  sx={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  Fare Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="p" fontSize="15px">
                      Rent Amount
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" fontSize="15px">
                      ₹449.00
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="p" fontSize="15px">
                      Gohub Discount (10% off)
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" fontSize="15px">
                      <span style={{ color: "#59ce8f" }}>-₹49.00</span>
                    </Typography>
                  </Grid>
                </Grid>
                <hr
                  style={{
                    background: "#9e9e9e",
                    borderColor: "#9e9e9e",
                    marginBottom: "3px",
                    marginTop: "3px",
                  }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={9}>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Total Payable Amount
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      ₹449.10
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      <span>Refundable Deposit</span>
                      <br />
                      <span>(To be paid at the time of Pickup)</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Typography variant="p" sx={{ fontSize: "15px" }}>
                      ₹2000.00
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Grid container sx={{ padding: "7px" }}>
                <Grid item>
                  <Checkbox
                    {...label}
                    color="success"
                    size="medium"
                    inputProps={{ "aria-label": "controlled" }}
                    onClick={() => {
                      handleDisable();
                      handleOpen();
                    }}
                  />
                </Grid>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      GoHub Terms and Conditions
                    </Typography>
                    <div style={{ padding: "3px", paddingLeft: "17px" }}>
                      <ui>
                        <li>
                          Documents Required: Aadhar Card, Driving License and
                          Student/Employee ID Card.
                        </li>
                        <li>
                          One Goverment address proved has to be submitted at
                          the time of pickUp which will be returned at the time
                          of drop. The riders needs to present all the original
                          documents at the time of pickUp.
                        </li>
                        <li>
                          Fuel Charges are not included in the security deposit
                          or rent.
                        </li>
                        <li>
                          In the case any damage to the vehicle, the customer is
                          liable to pay the repair charges plus the labour
                          charges as per Authorised Service Center.
                        </li>
                        <li>
                          Charges to be borne by the customer: Helmet Lost:
                          Rs.700, Key Lost: Rs.1000, Full Insurance Declared
                          Value of the vehicle of the in case of any theft.
                        </li>
                      </ui>
                    </div>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        marginLeft: "68%",
                        marginTop: "2%",
                        backgroundColor: "#59ce8f",
                        ":hover": {
                          backgroundColor: "#59ce8f",
                        },
                      }}
                      onClick={handleClose}
                    >
                      Accept & Proceed To Payment
                    </Button>
                  </Box>
                </Modal>
                <Grid item sx={{ marginTop: "7px" }}>
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    I have read the Term and Conditions
                  </Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                disabled={disable}
                sx={{
                  width: "100%",
                  backgroundColor: "#59ce8f",
                  ":hover": {
                    backgroundColor: "#59ce8f",
                  },
                }}
              >
                PayNow
              </Button>
            </Grid>
          </Grid>
        </Container>
      )}
      {isMatch ? <MobileFooter /> : <DynamicFooter />}
    </>
  );
}
