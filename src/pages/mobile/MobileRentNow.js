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
import React, { useState } from "react";
// import styles from '../../assets/styles/MobileRentNowCss.module.css';
import HondaActiva from "../../assets/images/HeroDestini.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: "absolute",
  bottom: "-30%",
  right: "-38%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function MobileRentNow() {
  const [payment, setPayment] = useState("");
  const [disable, setDisable] = useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setPayment(event.target.value);
  };

  const handleDisable = () => {
    setDisable(!disable);
  };

  return (
    <>
      <DynamicMobileNavbar />
      <Container sx={{ marginTop: "10%", marginBottom: "10%" }}>
        <Typography variant="h6">Summary</Typography>
        <Grid container sx={{}}>
          <Grid
            item={true}
            sx={{
              width: "100%",
              padding: "0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                border: "2px solid #e0e0e0",
                borderRadius: "4px",
                padding: "",
              }}
            >
              <div>
                <div style={{ display: "flex" }}>
                  <img
                    src={HondaActiva}
                    alt="HondaActiva"
                    style={{ width: "47%", height: "150px" }}
                  />
                  <div
                    style={{
                      marginLeft: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      id="bike_name"
                      sx={{ fontSize: "20px" }}
                      variant="h6"
                    >
                      Hero Destini 125
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            fontWeight: "700",
                            margin: "0 20px 0 0",
                          }}
                        >
                          Rental
                        </Typography>
                        <Typography>₹449</Typography>
                      </div>

                      <p style={{ fontSize: "30px", margin: "0 20px 0 0" }}>
                        +
                      </p>

                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "700" }}
                        >
                          Deposit
                        </Typography>
                        <Typography>₹2000</Typography>
                      </div>
                    </div>

                    <Box
                      sx={{
                        width: "fit-content",
                        height: "40px",
                        border: "1px solid #e0e0e0",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "0px",
                          background: "#e0e0e0",
                        }}
                      >
                        <RemoveIcon style={{ fontSize: "20px" }} />
                      </IconButton>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "20px",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        1
                      </Typography>

                      <IconButton
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "0px",
                          background: "#e0e0e0",
                        }}
                      >
                        <AddIcon style={{ fontSize: "20px" }} />
                      </IconButton>
                    </Box>
                  </div>
                </div>

                <Box sx={{ marginTop: "7px" }}>
                  <FormControl sx={{ minWidth: 350, width: "100%" }}>
                    <Select
                      width="100%"
                      value={payment}
                      size="small"
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Payment Mode:FullPayment</em>
                      </MenuItem>
                      <MenuItem
                        sx={{ fontSize: "2px" }}
                        fontSize="1px"
                        value={10}
                      >
                        Payment Mode:FullPayment
                      </MenuItem>
                      <MenuItem value={20}>
                        Payment Mode:PartialPayment
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <div style={{ marginTop: "40px", padding: "15px" }}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#59ce8f",
                    marginBottom: "10px",
                  }}
                >
                  Pickup and Drop Date
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{ marginLeft: "15px", fontWeight: "600" }}
                  >
                    24th February 2023, 12:00 PM
                  </Typography>

                  <Typography
                    variant="p"
                    sx={{ marginLeft: "15px", fontWeight: "600" }}
                  >
                    25th February 2023, 12:00 AM
                  </Typography>
                </div>

                <Typography
                  variant="p"
                  sx={{ fontSize: "20px", fontWeight: "600", color: "#59ce8f" }}
                >
                  Pickup and Drop Location
                </Typography>
                <br />
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginLeft: "15px",
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
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Things to Remember
                </Typography>

                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="p"
                    sx={{
                      marginTop: "12px",
                      marginBottom: "5px",
                      weight: "100%",
                      fontSize: "16px",
                      fontWeigth: "500",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Kilometer Limit </span>
                    <span> 100 Kms </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="p"
                    sx={{
                      marginBottom: "5px",
                      weight: "100%",
                      fontSize: "16px",
                      fontWeigth: "500",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Kilometers Changes </span>
                    <span> ₹3/Km </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography
                    variant="p"
                    sx={{
                      marginBottom: "5px",
                      weight: "100%",
                      fontSize: "16px",
                      fontWeigth: "500",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span> Location Time </span>
                    <span> 7.00AM to 10.00Pm </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="p"
                    sx={{
                      marginBottom: "5px",
                      weight: "100%",
                      fontSize: "16px",
                      fontWeigth: "500",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Late Drop Fee </span>
                    <span> ₹100/hr </span>
                  </Typography>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Box>
              <FormControl sx={{ width: "100%", marginTop: "20px" }}>
                <Select
                  value={payment}
                  size="small"
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Apply Coupons</em>
                  </MenuItem>
                  <MenuItem value={10}>
                    <Grid
                      spacing={0}
                      sx={{
                        marginBottom: "20px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid item xs={12} sm={2} sx={{ width: "20%" }}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            color: "black",
                            backgroundColor: "#eeeeee",
                            ":hover": {
                              backgroundColor: "#eeeeee",
                            },
                          }}
                        >
                          GOCOINS
                        </Button>
                      </Grid>

                      <Grid
                        xs={12}
                        sm={4}
                        sx={{
                          width: "50%",
                          heigth: "50px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <Typography
                          variant="p"
                          sx={{ fontSize: "14px", color: "#59ce8f" }}
                        >
                          Receive GoCoins worth 10% of the booking amount which
                          you can redeem in your next booking.
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={2}
                        sx={{ width: "20%", textAlign: "end" }}
                      >
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: "#59ce8f" }}
                        >
                          APPLY
                        </Button>
                      </Grid>
                    </Grid>
                  </MenuItem>

                  <MenuItem value={20}>
                    <Grid
                      spacing={0}
                      sx={{
                        marginBottom: "20px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid item xs={12} sm={2} sx={{ width: "20%" }}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            color: "black",
                            backgroundColor: "#eeeeee",
                            ":hover": {
                              backgroundColor: "#eeeeee",
                            },
                          }}
                        >
                          GOCOINS
                        </Button>
                      </Grid>

                      <Grid
                        xs={12}
                        sm={4}
                        sx={{
                          width: "50%",
                          heigth: "50px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <Typography
                          variant="p"
                          sx={{ fontSize: "14px", color: "#59ce8f" }}
                        >
                          Get Flat Rs.50 Off on orders above Rs.1000.
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={2}
                        sx={{ width: "20%", textAlign: "end" }}
                      >
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: "#59ce8f" }}
                        >
                          APPLY
                        </Button>
                      </Grid>
                    </Grid>
                  </MenuItem>

                  <MenuItem value={30}>
                    <Grid
                      spacing={0}
                      sx={{
                        marginBottom: "20px",
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid item xs={12} sm={2} sx={{ width: "20%" }}>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            color: "black",
                            backgroundColor: "#eeeeee",
                            ":hover": {
                              backgroundColor: "#eeeeee",
                            },
                          }}
                        >
                          GOCOINS
                        </Button>
                      </Grid>

                      <Grid
                        xs={12}
                        sm={4}
                        sx={{
                          width: "50%",
                          heigth: "50px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <Typography
                          variant="p"
                          sx={{ fontSize: "14px", color: "#59ce8f" }}
                        >
                          Get Flat Rs.100 Off on orders above Rs.2000.
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sm={2}
                        sx={{ width: "20%", textAlign: "end" }}
                      >
                        <Button
                          variant="text"
                          size="small"
                          sx={{ color: "#59ce8f" }}
                        >
                          APPLY
                        </Button>
                      </Grid>
                    </Grid>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              sx={{
                border: "2px solid #e0e0e0",
                borderRadius: "4px",
                padding: "15px",
                marginTop: "7px",
                backgroundColor: "#e0e0e0",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Fare Details
              </Typography>
              <Grid container spacing={2} sx={{ width: "100%" }}>
                <Grid
                  item
                  xs={12}
                  sm={9}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="p" fontSize="18px">
                    {" "}
                    Rent Amount{" "}
                  </Typography>
                  <Typography variant="p" fontSize="18px">
                    {" "}
                    ₹449.00{" "}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={2}
                sx={{ width: "100%", marginBottom: "15px" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={9}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="p" fontSize="15px">
                    {" "}
                    Gohub Discount (10% off){" "}
                  </Typography>
                  <Typography variant="p" fontSize="15px">
                    {" "}
                    -₹49.00{" "}
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
              <Grid container spacing={2} sx={{ width: "100%" }}>
                <Grid
                  item
                  xs={12}
                  sm={9}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      marginBottom: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Total Payable Amount
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹449.10
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={9}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="p" fontSize="18px">
                    <span>Refundable Deposit</span>
                    <br />
                    <span>(To be paid at the time of Pickup)</span>
                  </Typography>
                  <Typography variant="p" fontSize="18px">
                    ₹2000.00
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Grid
              container
              sx={{ width: "80vw", padding: "7px", position: "relative" }}
            >
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
                sx={{ width: "90vw", position: "relative" }}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ width: "100%" }}
                  >
                    GoHub Terms and Conditions
                  </Typography>
                  <div
                    style={{ width: "90vw", padding: "2px", paddingLeft: "" }}
                  >
                    <ui
                      style={{
                        width: "90vw",
                        maxHeight: "300px",
                        overflowY: "scroll",
                      }}
                    >
                      <li>
                        Documents Required: Aadhar Card, Driving License and
                        Student/Employee ID Card.
                      </li>
                      <li>
                        One Goverment address proved has to be submitted at the
                        time of pickUp which will be returned at the time of
                        drop. The riders needs to present all the original
                        documents at the time of pickUp.
                      </li>
                      <li>
                        Fuel Charges are not included in the security deposit or
                        rent.
                      </li>
                      <li>
                        In the case any damage to the vehicle, the customer is
                        liable to pay the repair charges plus the labour charges
                        as per Authorised Service Center.
                      </li>
                      <li>
                        Charges to be borne by the customer: Helmet Lost:
                        Rs.700, Key Lost: Rs.1000, Full Insurance Declared Value
                        of the vehicle of the in case of any theft.
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
    </>
  );
}
