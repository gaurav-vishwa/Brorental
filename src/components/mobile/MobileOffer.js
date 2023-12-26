import {
  Box,
  Button,
  Grid,
  Typography,
  Modal,
  IconButton,
  Snackbar,
  Alert,
  Backdrop,
} from "@mui/material";
import React, { useState } from "react";
import goImage from "../../assets/images/goImage.png";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

// const style = {
//   position: "absolute",
//   top: "15%",
//   // right: { md: "-7%", xs: "-0%" },
//   transform: "translate(-50%, -50%)",
//   width: 300,
//   bgcolor: "green",
//   color: "white",
//   boxShadow: 24,
//   p: 2,
//   borderRadius: 3,
// };

export default function MobileOffer() {
  const [open, setOpen] = useState(false);
  const handlePopup = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          marginTop: "4%",
          width: { md: "50%", xs: "80%" },
          height: { md: "50%", xs: "50%" },
          pr: { md: 5, xs: 2 },
          mx: "auto",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                margin: "3%",
                boxShadow: "2",
                borderRadius: "5px",
                padding: "20px",
                width: "100%",
              }}
            >
              <Grid container>
                <Grid item xs={12} sm={10}>
                  <Typography
                    variant="h5"
                    color="#59CE8F"
                    fontSize={"18px"}
                    textAlign={"center"}
                  >
                    Get Flat Rs. 100 OFF
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} sm={2}>
                    <img
                      src={goImage}
                      alt="goImage"
                      style={{ width: "61px", height: "41px" }}
                    />
                  </Grid> */}
                <Typography
                  variant="p"
                  fontSize={"14px"}
                  textAlign={"center"}
                  sx={{ mt: 2 }}
                >
                  Receive BroCoins worth 10% of the booking amount which you can
                  redeem in your next booking
                </Typography>
              </Grid>

              <Box textAlign={"center"} sx={{ mt: 2 }}>
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
                      sx={{ py: "10%" }}
                      style={{
                        fontSize: "15px",
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
                        // py: 1.8,
                        px: 3,
                        borderRadius: 0,
                        ":hover": { bgcolor: "#36b671" },
                        fontSize: 15,
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
                      autoHideDuration={1000}
                      //   aria-labelledby="modal-modal-title"
                      //   aria-describedby="modal-modal-description"
                      closeAfterTransition
                    >
                      {/* <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%", bgcolor: "#59CE8F" }}
                      >
                        Copied Sucessfully!
                      </Alert> */}
                      <Snackbar
                        open={open}
                        autoHideDuration={1000}
                        onClose={handleClose}
                      >
                        <Alert
                          onClose={handleClose}
                          severity="success"
                          sx={{ width: "100%", bgcolor: "#59CE8F" }}
                        >
                          Copied Sucessfully!
                        </Alert>
                      </Snackbar>
                      {/* <Box sx={{ top: "50%" }}> */}
                      {/* <div style={{ display: "flex" }}>
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
                        </Typography> */}
                      {/* </Box> */}
                    </Modal>
                  </Box>
                </Box>{" "}
              </Box>
              <Box textAlign={"center"} sx={{ mt: 1 }}>
                <Typography variant="p" fontSize={"12px"}>
                  Coupon Code
                </Typography>
              </Box>

              {/* <div style={{ marginTop: "5%" }}></div> */}
            </Box>
          </Grid>
        </Grid>
        <div style={{ marginTop: "5%", marginLeft: "5%" }}></div>
      </Box>
    </>
  );
}
