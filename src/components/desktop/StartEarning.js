import * as React from "react";
// import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

import {
  Typography,
  TextField,
  Grid,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

export default function StartEarning() {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // const [capchaIsDone, setCapchaDone] = useState(false);

  // function onChange() {
  //   setCapchaDone(true);
  // }

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    MobileNo: "",
    city: "",
    bikesQuantity: "",
    message: "",
  });

  const [showSubmit, setShowSubmit] = React.useState(true);
  const [isCapchaDone, setIsCapchaDone] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const errors = {};

  // const btnClickHandler = e => {

  //   if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     errors.email = "Enter a valid Email"
  //   }
  //   if (!/^[0-9]+$/.test(formData.MobileNo)) {
  //     errors.MobileNo = "Enter a valid Mobile No"
  //   };

  // }
  React.useEffect(() => {
    // console.log(formData.name.length);
    if (
      formData.name.length > 4 &&
      formData.email.length > 6 &&
      formData.MobileNo.length > 9 &&
      formData.city.length > 1 &&
      formData.bikesQuantity.length > 0 &&
      formData.message.length > 0 &&
      isCapchaDone === true
    ) {
      setShowSubmit(false);
    } else if (
      formData.name.length <= 4 ||
      formData.email.length <= 6 ||
      formData.MobileNo.length <= 9 ||
      formData.city.length <= 1 ||
      formData.bikesQuantity.length <= 0 ||
      formData.message.length <= 0 ||
      isCapchaDone === false
    ) {
      setShowSubmit(true);
    }
  }, [formData, isCapchaDone]);

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.keys(errors).length === 0) {

  //     console.log(errors.email.email.email);
  //     console.log(errors.MobileNo);

  //     // verified form data
  //     console.log(formData);

  //   } else {
  //     console.log(errors);
  //   }
  // }

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          width: { md: "50%", sm: "100%" },
          color: "#ffffff",
          bgcolor: "#59CE8F",
          textAlign: "center",
          m: "auto",
          ":hover": { bgcolor: "#36b671" },
          mt: 4,
        }}
      >
        {" "}
        Start Earning With Gobikes
      </Button>{" "}
      <Dialog
        sx={{}}
        PaperProps={{ sx: { width: { md: "35%", xs: "100%" } } }}
        // fullScreen={fullScreen}
        // maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* earning popup div started here  */}
        <Box sx={{}}>
          <DialogActions>
            <Button
              size="small"
              autoFocus
              onClick={handleClose}
              sx={{ color: "#36b671" }}
            >
              <CloseIcon />
            </Button>
          </DialogActions>

          <DialogContent>
            <Typography textAlign={"center"} variant="h5" sx={{ pb: 3 }}>
              List Your Vehicle{" "}
            </Typography>

            {/* earning form started here */}
            <Grid container spacing={3} sx={{}}>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  id="outlined-basic"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  type="text"
                  placeholder="Name*"
                  variant="outlined"
                  sx={{ width: { md: "45ch", xs: "25ch" } }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  id="outlined-basic"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  placeholder="Email*"
                  required
                  variant="outlined"
                  sx={{ width: { md: "45ch", xs: "25ch" } }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  id="outlined-basic"
                  name="MobileNo"
                  value={formData.MobileNo}
                  onChange={(e) =>
                    setFormData({ ...formData, MobileNo: e.target.value })
                  }
                  type="number"
                  placeholder="Mobile Number*"
                  required
                  variant="outlined"
                  sx={{ width: { md: "45ch", xs: "25ch" } }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  id="outlined-basic"
                  name="city"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  placeholder="City*"
                  required
                  variant="outlined"
                  sx={{ width: { md: "45ch", xs: "25ch" } }}
                />
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <TextField
                  id="outlined-basic"
                  name="bikesQuantity"
                  value={formData.bikesQuantity}
                  onChange={(e) =>
                    setFormData({ ...formData, bikesQuantity: e.target.value })
                  }
                  type="number"
                  placeholder="Number of Bikes*"
                  required
                  variant="outlined"
                  sx={{ width: { md: "45ch", xs: "25ch" } }}
                />
              </Grid>
              <Grid
                item
                container
                sx={{
                  mx: "auto",
                }}
              >
                {" "}
                <Stack
                  sx={{
                    width: { md: "45ch", xs: "25ch" },
                    mx: "auto",
                  }}
                >
                  <TextareaAutosize
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    id="outlined-basic"
                    placeholder="Message*"
                    variant="outlined"
                    sx={{ mx: "auto" }}
                  />
                </Stack>
              </Grid>
            </Grid>

            <Box
              className="g-recaptcha"
              sx={{
                mx: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ReCAPTCHA
                sitekey={key}
                size="10px"
                onChange={(e) => setIsCapchaDone(true)}
                onErrored={(e) => setIsCapchaDone(false)}
              />
            </Box>
            <div
              class="captcha"
              style={{
                transform: "scale(0.85)",
                transformOrigin: "0 0",
                mx: "auto",
              }}
            ></div>
            {/* <Box
              sx={{
                display: "flex",

                justifyContent: "center",

                my: 3,
              }}
            > */}
            {/* <ReCAPTCHA
              sitekey={key}
              onChange={(e) => setIsCapchaDone(true)}
              onErrored={(e) => setIsCapchaDone(false)}
            /> */}
            {/* </Box> */}

            <Button
              variant="contained"
              type="submit"
              disabled={showSubmit} //this will toggle submit button display and blur
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { md: "94%", xs: "100%" },
                color: "#ffffff",
                bgcolor: "#59CE8F",
                mx: "auto",
                py: 1.4,
                mt: 5,
              }}
            >
              Submit
            </Button>
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
