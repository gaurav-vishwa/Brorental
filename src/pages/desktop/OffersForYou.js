import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import goImage from "../../assets/images/goImage.png";
import bike1 from "../../assets/images/bike1.webp";
import bike2 from "../../assets/images/bike2.webp";
import bike3 from "../../assets/images/bike3.webp";
import PreLoginNavbar from "../../layouts/desktop/PreLoginNavbar";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";

const style = {
  position: "absolute",
  top: "15%",
  right: "-7%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "green",
  color: "white",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

const OffersForYou = () => {
  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <PreLoginNavbar />
      <Box sx={{ marginLeft: "5%", pt: 10 }}>
        <Typography variant="h4" sx={{ fontFamily:"Poppins", fontWeight: "bold" }}>
          Offers for you
        </Typography>
      </Box>

      <Box sx={{ display: { md: "flex" }, justifyContent: "center" }}>
        <Box
          sx={{
            marginTop: "4%",
            width: { md: "30%", xs: "94%" },
            pr: { md: 5, xs: 2 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  margin: "3%",
                  boxShadow: "1",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" color="#59CE8F" fontFamily={"Poppins"}>
                      Get 10% as gocoins
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      src={goImage}
                      alt="goImage"
                      style={{ width: "61px", height: "41px" }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="p" fontFamily={"Poppins"}>
                  Receive GoCoins worth 10% of the booking amount which you can
                  redeem in your next booking
                </Typography>
                <img className="w-[50%] m-auto py-2" src={bike1} alt="bike1" />
                <Box textAlign={"center"} sx={{ mt: 10 }}>
                  {" "}
                  <Box
                    sx={{
                      display: "inline-flex",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px dashed #59CE8F",
                        display: "flex",
                        alignContent: "center",

                        px: 1,
                      }}
                    >
                      <Typography
                        sx={{ p: 1, py: "20%", fontFamily:"Poppins" }}
                        style={{
                          fontSize: "20px",
                          color: "#59CE8F",
                        }}
                      >
                        GOCOINS
                      </Typography>
                    </Box>

                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#59CE8F",
                          py: 1.8,
                          px: 4,
                          borderRadius: 0,
                          ":hover": { bgcolor: "#3C8C62" },
                          fontSize: 25,
                        }}
                        onClick={() => {
                          handlePopup();
                        }}
                      >
                        Copy
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div style={{ display: "flex" }}>
                            <IconButton>
                              <TaskAltOutlinedIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Typography
                              fontFamily={"Poppins"}
                              fontWeight={"bold"}
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Success
                            </Typography>
                          </div>
                          <Typography
                            id="modal-modal-description"
                            sx={{ ml: 5, fontFamily:"Poppins" }}
                          >
                            Copied Sucessfully!
                          </Typography>
                        </Box>
                      </Modal>
                    </Box>
                  </Box>{" "}
                </Box>
                <div style={{ marginTop: "5%" }}></div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
        </Box>
        <Box
          sx={{
            marginTop: "4%",
            width: { md: "30%", xs: "94%" },
            pr: { md: 5, xs: 2 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  margin: "3%",
                  boxShadow: "1",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" color="#59CE8F">
                      Get Flat Rs. 50 OFF
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      src={goImage}
                      alt="goImage"
                      style={{ width: "61px", height: "41px" }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="p">
                  Get Flat Rs. 50 off on orders above Rs. 1,000
                </Typography>
                <img
                  className="w-[51%] m-auto py-4 h-50"
                  src={bike2}
                  alt="bike2"
                />
                <Box textAlign={"center"} sx={{ mt: 10 }}>
                  {" "}
                  <Box
                    sx={{
                      display: "inline-flex",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px dashed #59CE8F",
                        display: "flex",
                        alignContent: "center",

                        px: 1,
                      }}
                    >
                      <Typography
                        sx={{ p: 1, py: "20%" }}
                        style={{
                          fontSize: "20px",
                          color: "#59CE8F",
                        }}
                      >
                        GOCOINS
                      </Typography>
                    </Box>

                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#59CE8F",
                          py: 1.8,
                          px: 4,
                          borderRadius: 0,
                          ":hover": { bgcolor: "#36b671" },
                          fontSize: 25,
                        }}
                        onClick={() => {
                          handlePopup();
                        }}
                      >
                        Copy
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div style={{ display: "flex" }}>
                            <IconButton>
                              <TaskAltOutlinedIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Success
                            </Typography>
                          </div>
                          <Typography
                            id="modal-modal-description"
                            sx={{ ml: 5 }}
                          >
                            Copied Sucessfully!
                          </Typography>
                        </Box>
                      </Modal>
                    </Box>
                  </Box>{" "}
                </Box>
                <div style={{ marginTop: "5%" }}></div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
        </Box>
        <Box
          sx={{
            marginTop: "4%",
            width: { md: "30%", xs: "94%" },
            pr: { md: 5, xs: 2 },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  margin: "3%",
                  boxShadow: "1",
                  borderRadius: "5px",
                  padding: "20px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" color="#9c3">
                      Get Flat Rs. 100 OFF
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <img
                      src={goImage}
                      alt="goImage"
                      style={{ width: "61px", height: "41px" }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="p">
                  Get Flat Rs. 100 off on orders above Rs. 2,000
                </Typography>
                <img
                  className="w-[50%] m-auto py-4 h-50"
                  src={bike3}
                  alt="bike3"
                />
                {/* Copy Button */}
                <Box textAlign={"center"} sx={{ mt: 10 }}>
                  {" "}
                  <Box
                    sx={{
                      display: "inline-flex",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px dashed #59CE8F",
                        display: "flex",
                        alignContent: "center",

                        px: 1,
                      }}
                    >
                      <Typography
                        sx={{ p: 1, py: "20%" }}
                        style={{
                          fontSize: "20px",
                          color: "#59CE8F",
                        }}
                      >
                        GOCOINS
                      </Typography>
                    </Box>

                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#59CE8F",
                          py: 1.8,
                          px: 4,
                          borderRadius: 0,
                          ":hover": { bgcolor: "#36b671" },
                          fontSize: 25,
                        }}
                        onClick={() => {
                          handlePopup();
                        }}
                      >
                        Copy
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div style={{ display: "flex" }}>
                            <IconButton>
                              <TaskAltOutlinedIcon sx={{ color: "white" }} />
                            </IconButton>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Success
                            </Typography>
                          </div>
                          <Typography
                            id="modal-modal-description"
                            sx={{ ml: 5 }}
                          >
                            Copied Sucessfully!
                          </Typography>
                        </Box>
                      </Modal>
                    </Box>
                  </Box>{" "}
                </Box>

                <div style={{ marginTop: "5%" }}></div>
              </Box>
            </Grid>
          </Grid>
          <div style={{ marginTop: "25%" }}></div>
        </Box>
      </Box>
      <PostLoginFooter />
    </div>
  );
};

export default OffersForYou;
