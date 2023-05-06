import { Button, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import contactcompany from "../../assets/images/contactcompany.svg";
import contactlocation from "../../assets/images/contactlocation.svg";
import contactphone from "../../assets/images/contactphone.svg";
import contactemail from "../../assets/images/contactemail.svg";

const MobileContactUs = () => {
  return (
    <div className="p-4">
      <Box>
        <Typography variant="h5">Contact Us</Typography> <br />
        <Typography variant="h4">How can we help you?</Typography>
        <br />
        <Typography variant="p">Fill in the form or drop an email</Typography>
      </Box>
      <Box sx={{ bgcolor: "#FAFAFA" }}>
        <Typography>We're here for you</Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name*" variant="outlined" />
          <TextField id="outlined-basic" label="Email*" variant="outlined" />
          <TextField id="outlined-basic" label="Mobile*" variant="outlined" />
          <TextField id="outlined-basic" label="Message*" variant="outlined" />
        </Box>
        <Button variant="contained" sx={{ bgcolor: "#99CC33" }}>
          Submit
        </Button>
      </Box>
      <Box className="" sx={{}}>
        <Grid container columnSpacing={2} sx={{ py: 2, mr: 20 }}>
          <Grid item xs={6} sx={{ m: "auto" }}>
            <img className="m-auto" src={contactcompany} alt="Extra Income" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Registered Company
            </Typography>
            <Typography>GoBikes Automotive Private Limited</Typography>
          </Grid>
        </Grid>
        <Grid container columnSpacing={2} sx={{ py: 2 }}>
          <Grid item xs={6} sx={{ m: "auto" }}>
            <img className="m-auto" src={contactlocation} alt="Extra Income" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Registered Address
            </Typography>
            <Typography>
              5th Floor, Seminar Building, Incubation Center IIIT Delhi, New
              Delhi, Delhi 110020
            </Typography>
          </Grid>
        </Grid>
        <Grid container columnSpacing={2} sx={{ py: 2 }}>
          <Grid item xs={6} sx={{ m: "auto" }}>
            <img className="m-auto" src={contactphone} alt="Extra Income" />
          </Grid>
          <Grid item xs={6} sx={{ pb: 2 }}>
            <Typography variant="h6" sx={{ pb: 2 }}>
              Mobile Number
            </Typography>
            <Typography>+91-8448444897</Typography>
          </Grid>
        </Grid>
        <Grid container columnSpacing={2}>
          <Grid item xs={6} sx={{ m: "auto" }}>
            <img className="m-auto" src={contactemail} alt="Extra Income" />
          </Grid>
          <Grid item xs={6} sx={{ pb: 10 }}>
            <Typography variant="h6" sx={{}}>
              Support :
            </Typography>
            <Typography sx={{}}>support@gobikes.co.in</Typography>
            <Typography variant="h6" sx={{}}>
              Contact Us :
            </Typography>
            <Typography>contact-us@gobikes.co.in</Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MobileContactUs;
