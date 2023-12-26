import {
  Box,
  Button,
  Grid,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import goImage from "../../assets/images/goImage.png";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

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

export default function Offer() {
  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Box sx={{ boxShadow: "5", borderRadius: "5px", width: 500, p: 5 }}>
        <Box sx={{ display: "inline-flex", justifyContent: "space-between" }}>
          <Typography variant="h5" color="#9c3" sx={{ pr: 10 }}>
            Get 10% as gocoins
          </Typography>
          <Box>
            <img
              src={goImage}
              alt="goImage"
              style={{ width: "61px", height: "41px" }}
            />
          </Box>
        </Box>{" "}
        <br />
        <Typography variant="p">
          Receive GoCoins worth 10% of the booking amount which you can redeem
          in your next booking
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #9c3",
              width: "55%",
              marginTop: "5%",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                color: "#9c3",
                marginLeft: "17%",
              }}
            >
              GOCOINS
            </span>
            <button
              style={{
                border: "2px solid #9c3",
                backgroundColor: "#9c3",
                color: "#fff",
                marginLeft: "25%",
                height: "50px",
                padding: "0 20px",
                fontWeight: "500",
              }}
            >
              COPY
            </button>
          </Box>
          <Typography variant="p">Coupon Code</Typography>
        </Box>
      </Box> */}

      <Box
        sx={{
          marginTop: "4%",
          // width: { md: "50%", xs: "94%" },
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
                  <Typography variant="h5" color="#59ce8f">
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
                Receive BroCoins worth 10% of the booking amount which you can
                redeem in your next booking
              </Typography>
              {/* <Box
                sx={{
                  m: { md: "auto" },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px dashed #9c3",
                  width: { md: "55%", xs: "80%" },
                  marginTop: "5%",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    color: "#9c3",
                    marginLeft: { md: "30%" },
                  }}
                >
                  GOBIKES100
                </span>
                <button
                  style={{
                    border: "2px solid #9c3",
                    backgroundColor: "#9c3",
                    color: "#fff",
                    marginLeft: "25%",
                    height: "50px",
                    padding: "0 20px",
                    fontWeight: "500",
                  }}
                >
                  COPY
                </button>
              </Box> */}
              <Box textAlign={"center"} sx={{ mt: 5 }}>
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
                      sx={{ p: 1, py: "18%" }}
                      style={{
                        fontSize: "20px",
                        color: "#59CE8F",
                      }}
                    >
                      BROCOINS
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
                        <Typography id="modal-modal-description" sx={{ ml: 5 }}>
                          Copied Sucessfully!
                        </Typography>
                      </Box>
                    </Modal>
                  </Box>
                </Box>{" "}
              </Box>
              <br />
              <Typography variant="p">Coupon Code</Typography>
              <div style={{ marginTop: "5%" }}></div>
            </Box>
          </Grid>
        </Grid>
        <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
      </Box>
    </>
  );
}
