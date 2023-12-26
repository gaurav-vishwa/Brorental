import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import star from "../../assets/images/star.png";
import loginPopup from "../../assets/images/loginPopup.webp";

const PersonalDetails = () => {

  const [formData, setFormData] = useState({ firstName: '',lastName: '', email: '', mobile: '' })

  const [showSubmit, setShowSubmit] =useState(true)


 useEffect(() => {
    
    if (formData.firstName.length > 1 && formData.email.length > 6 && formData.mobile.length > 9 && formData.lastName.length > 1) {
      setShowSubmit(false)
    }
    else if (formData.firstName.length <= 1 ||formData.email.length <= 6 || formData.mobile.length <= 9 || formData.lastName.length <= 1) {
      setShowSubmit(true)
    }
  }, [formData])


  return (
    <div className="text-center">
      <Box>
        <Box sx={{ display: "inline-flex" }}>
          <Box sx={{ bgcolor: "#f3f4f6" }}>
            <Box
              className="m-auto "
              component="img"
              sx={{
                height: 70,
                pt: 2,
                px: 5,
              }}
              alt="Your logo."
              src={logo}
            />
            <br />
            <Box
              className="m-auto"
              component="img"
              sx={{
                height: 230,
              }}
              alt="Your logo."
              src={loginPopup}
            />
            <Typography id="modal-modal-description" sx={{ mt: 3, pb: 1 }}>
              <div className="grid grid-cols-4 px-5 mx-auto">
                <div>
                  <span className="text-sm">15+</span> <br />{" "}
                  <span className="text-[11px] text-gray-500">Cities</span>
                </div>
                <div>
                  <span className="text-sm">50000+</span> <br />{" "}
                  <span className="text-[11px] text-gray-500">
                    Happy Customers
                  </span>
                </div>
                <div>
                  <span className="text-sm">6000+</span> <br />{" "}
                  <span className="text-[11px] text-gray-500">Bikes</span>
                </div>
                <div>
                  <Box>
                    <span className="text-sm">
                      4.8/5
                      <Box
                        className="inline-block"
                        component="img"
                        sx={{
                          height: 15,
                          px: 1,
                          mb: 0.5,
                        }}
                        alt="Your logo."
                        src={star}
                      />{" "}
                    </span>{" "}
                    <br />{" "}
                    <span className="text-[11px] text-gray-500">
                      1200+ reviews
                    </span>
                  </Box>
                </div>
              </div>
            </Typography>
          </Box>
          <Box sx={{ pl: 4, textAlign: "left" }}>


            {/* personal Details div starts here  */}
            <Typography variant="h5" sx={{ pt: 1.5, pb: 1, pl: 1 }}>
              Personal Details
            </Typography>
            {/* personal Details forn starts here  */}
            <Box component="form" noValidate autoComplete="off"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
                mb: 2,
              }} >

              <TextField id="outlined-basic" name='firstName' value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required type='text' label="First Name" variant="outlined" />
              <br />

              <TextField id="outlined-basic" name='lastName' value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required type='text' label="Last Name" variant="outlined" />
              <br />

              <TextField id="outlined-basic" name='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required type='email' label="Email" variant="outlined" />
              <br />

              <TextField id="outlined-basic" name='mobile' value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} required type='number' label="Mobile Number" variant="outlined"
              />
              <Button variant="outlined"
               disabled={showSubmit}
                sx={{
                  display: "flex", justifyContent: "center", p: 2, fontWeight:'bold', width: "97%",
                  color: "#ffffff", bgcolor: "#59CE8F", textAlign: "center", m: "auto",
                }}>

                Submit
              </Button>
            </Box>

          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default PersonalDetails;
