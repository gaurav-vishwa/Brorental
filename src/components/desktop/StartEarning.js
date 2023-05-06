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

import { Typography, TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

export default function StartEarning() {
  const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // const [capchaIsDone, setCapchaDone] = useState(false);

  // function onChange() {
  //   setCapchaDone(true);
  // }

  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          width: "50%",
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
        PaperProps={{ sx: { width: "35%" } }}
        // fullScreen={fullScreen}
        // maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box sx={{ bgcolor: "#EAEAEA" }}>
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

          <DialogContent sx={{}}>
            <Typography variant="h5" sx={{ pb: 3, fontFamily:"Poppins" }}>
              List Your Vehicle
            </Typography>
            <Box
              component="form"
              sx={{
                textAlign: "center",
                "& > :not(style)": { m: 1, width: "45ch" },
                mb: 2,
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                placeholder="Name*"
                variant="outlined"
                bgcolor="#ffffff"
              />{" "}
              <br />
              <TextField
                id="outlined-basic"
                placeholder="Email*"
                variant="outlined"
              />{" "}
              <br />
              <TextField
                id="outlined-basic"
                placeholder="Mobile Number*"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                placeholder="City*"
                variant="outlined"
              />{" "}
              <br />
              <TextField
                id="outlined-basic"
                placeholder="Number of Bikes*"
                variant="outlined"
              />{" "}
              <br />
              <TextField
                id="outlined-basic"
                placeholder="Message*"
                className="message"
                multiline
                rows={4}
                variant="outlined"
                InputProps={{ disableUnderline: true }}
              />{" "}
              <br />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
              <div>
                <ReCAPTCHA sitekey={key} />
              </div>
            </Box>
            <Button
              variant="contained"
              disabled
              sx={{
                display: "flex",
                justifyContent: "center",

                width: "94%",
                color: "#ffffff",
                bgcolor: "#59CE8F",
                textAlign: "center",
                m: "auto",
                py: 1.4,

                fontFamily:"Poppins",
              }}
            >
              {" "}
              Submit
            </Button>{" "}
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
