import React, { useState, useRef } from "react";
import Profile from "../../components/desktop/Profile";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import PersonPinRoundedIcon from "@mui/icons-material/PersonPinRounded";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MobilePostLoginNavbar from "../../layouts/mobile/MobilePostLoginNavbar";
import { Link } from "react-router-dom";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const MobileProfile = () => {
  const [name, setName] = useState("");
  const [editName, setEditName] = useState(false);
  const [cancelEditName, setCancelEditName] = useState(false);
  const [myName, setMyName] = useState("Dibyajyoti Sahoo");
  const [showName, setShowName] = useState("Dibyajyoti Sahoo");
  const [nameSaved, setNameSaved] = useState(false);

  const handleCancelEditName = () => {
    setCancelEditName(!cancelEditName);
    setEditName(!editName);
    setName("");
  };

  const handleNameSave = () => {
    setNameSaved(!nameSaved);
    setEditName(!editName);
    setShowName(myName);
    setName("");
  };

  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);
  const [cancelEditEmail, setCancelEditEmail] = useState(false);
  const [myEmail, setMyEmail] = useState("strugend@gmail.com");
  const [showEmail, setShowEmail] = useState("strugend@gmail.com");
  const [emailSaved, setEmailSaved] = useState(false);

  const handleCancelEditEmail = () => {
    setCancelEditEmail(!cancelEditEmail);
    setEditEmail(!editEmail);
    setEmail("");
  };

  const handleEmailSave = () => {
    setEmailSaved(!emailSaved);
    setEditEmail(!editEmail);
    setShowEmail(myEmail);
    setEmail("");
  };

  const [address, setAddress] = useState("");
  const [editAddress, setEditAddress] = useState(false);
  const [cancelEditAddress, setCancelEditAddress] = useState(false);
  const [myAddress, setMyAddress] = useState("Odisha");
  const [showAddress, setShowAddress] = useState("Odisha");
  const [addressSaved, setAddressSaved] = useState(false);

  const handleCancelEditAddress = () => {
    setCancelEditAddress(!cancelEditAddress);
    setEditAddress(!editAddress);
    setAddress("");
  };

  const handleAddressSave = () => {
    setAddressSaved(!addressSaved);
    setEditAddress(!editAddress);
    setShowAddress(myAddress);
    setAddress("");
  };

  // Adding aadhar-card & Driving Licence functionality --
  const aadharRef = useRef();
  const drivingRef = useRef();
  const [aadharCard, setAadharCard] = useState(null);
  const [drivingLicence, setDrivingLicence] = useState(null);

  const handleAddAdharCard = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setAadharCard(selectedFilesArray);
  }
  const handleDrivingLicence = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setDrivingLicence(selectedFilesArray);
  }


  return (
    <div>
      <DynamicMobileNavbar />
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "2",
          pt: 2,
        }}
      >
        <div style={{ padding: "3%" }}>
          <Box sx={{ display: "inline-flex" }}>
            <Link to="/Dashboard">
              <ArrowBackIosIcon sx={{ mt: 2, mr: 2, color: "#59CE8F" }} />
            </Link>

            <Box>
              <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                Profile
              </Typography>
              <Typography variant="p" sx={{ fontSize: "18px" }}>
                Basic Details
              </Typography>
            </Box>
          </Box>

          <hr style={{ marginTop: "10%" }} />
          <Box sx={{ textAlign: "center" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={7}>
                <Grid container sx={{ marginTop: "5%" }}>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                      Name
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} sx={{ my: 3 }}>
                    {!editName ? (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={() => {
                          setEditName(!editName);
                          setName("Name");
                        }}
                      >
                        Edit
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={handleCancelEditName}
                      >
                        Cancel
                      </Button>
                    )}
                  </Grid>
                </Grid>
                {name === "" && (
                  <Typography variant="p" sx={{ fontSize: "18px" }}>
                    {showName}
                  </Typography>
                )}
                {name === "Name" && (
                  <div>
                    <TextField
                      label="Name"
                      defaultValue="Dibyajyoti Sahoo"
                      size="small"
                      color="success"
                      sx={{
                        marginTop: "15px",
                      }}
                      focused
                      value={myName}
                      onChange={(e) => setMyName(e.target.value)}
                    />
                    <br />
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#59CE8F",
                        ":hover": {
                          backgroundColor: "#59CE8F",
                        },
                        color: "white",
                        marginTop: "5px",
                        my: 3,
                      }}
                      onClick={handleNameSave}
                    >
                      Save
                    </Button>
                  </div>
                )}
                <hr style={{ marginTop: "10%" }} />
                <Grid container sx={{ marginTop: "5%" }}>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                      Email
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} sx={{ my: 3 }}>
                    {!editEmail ? (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={() => {
                          setEditEmail(!editEmail);
                          setEmail("Email");
                        }}
                      >
                        Edit
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={handleCancelEditEmail}
                      >
                        Cancel
                      </Button>
                    )}
                  </Grid>
                </Grid>
                {email === "" && (
                  <Typography variant="p" sx={{ fontSize: "18px" }}>
                    {showEmail}
                  </Typography>
                )}
                {email === "Email" && (
                  <div>
                    <TextField
                      label="Email"
                      defaultValue="strugend@gmail.com"
                      size="small"
                      color="success"
                      focused
                      sx={{ marginTop: "15px" }}
                      value={myEmail}
                      onChange={(e) => setMyEmail(e.target.value)}
                    />
                    <br />
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#59CE8F",
                        ":hover": {
                          backgroundColor: "#59CE8F",
                        },
                        color: "white",
                        marginTop: "5px",
                        my: 3,
                      }}
                      onClick={handleEmailSave}
                    >
                      Save
                    </Button>
                  </div>
                )}
                <hr style={{ marginTop: "10%" }} />

                <Grid container sx={{ marginTop: "5%" }}>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                      Address
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} sx={{ my: 3 }}>
                    {!editAddress ? (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={() => {
                          setEditAddress(!editAddress);
                          setAddress("Address");
                        }}
                      >
                        Edit
                      </Button>
                    ) : (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={handleCancelEditAddress}
                      >
                        Cancel
                      </Button>
                    )}
                  </Grid>
                </Grid>
                {address === "" && (
                  <Typography variant="p" sx={{ fontSize: "18px" }}>
                    {showAddress}
                  </Typography>
                )}
                {address === "Address" && (
                  <div style={{ marginTop: "10px" }}>
                    <TextField
                      label="Address"
                      defaultValue="Odisha"
                      size="small"
                      color="success"
                      focused
                      value={myAddress}
                      onChange={(e) => setMyAddress(e.target.value)}
                    />
                    <br />
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        fontSize: "15px",
                        backgroundColor: "#59CE8F",
                        ":hover": {
                          backgroundColor: "#59CE8F",
                        },
                        color: "white",
                        marginTop: "5px",
                        my: 3,
                      }}
                      onClick={handleAddressSave}
                    >
                      Save
                    </Button>
                  </div>
                )}
                <hr style={{ marginTop: "10%" }} />
                <div className="my-10">
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    Mobile Number
                  </Typography>
                  <Box sx={{ display: "inline-flex" }}>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        my: "auto",
                      }}
                    >
                      8260921530
                    </Typography>
                    <IconButton sx={{ marginLeft: "2%", color: "green" }}>
                      <VerifiedRoundedIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </div>








                <hr style={{ marginTop: "10%" }} />

                <Grid container sx={{ marginTop: "10%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  {/* Aadhaar Card  */}
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                      Aadhaar Card
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} sx={{ my: 3 }}>
                    {!editAddress ? (
                      <div className="flex flex-col w-full">
                        <label className="">
                          <input
                            type="file"
                            name="aadhar images"
                            multiple
                            hidden
                            ref={aadharRef}
                            onChange={handleAddAdharCard}
                          />

                          <button
                            onClick={() => aadharRef.current.click()}
                            className="px-3 py-1.5 bg-[#59CE8F] text-xs text-white font-semibold border-0 rounded-sm hover:bg-[#36b671] "
                          >
                            UPLOAD
                          </button>
                        </label>
                      </div>
                    ) : (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={handleCancelEditAddress}
                      >
                        Cancel
                      </Button>
                    )}
                  </Grid>

                  <div className="w-full">
                    {
                      (aadharCard)
                        ? <div className="w-full p-2 pl-4 mt-5 text-lg flex flex-col items-start text-black border-2 border-red-400 rounded-md" >
                          {
                            aadharCard.map((file, index) => <li key={index} className="text-sm font-semibold ">{file.name} </li>)
                          }
                        </div>
                        : null
                    }
                  </div>
                </Grid>






                {/*  Driving Licence  */}
                <hr style={{ marginTop: "5%" }} />

                <Grid container sx={{ marginTop: "10%" }}>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                      Driving Licence{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={2} sx={{ my: 3 }}>
                    {!editAddress ? (
                      <div className="flex flex-col w-full">
                        <label className="">
                          <input
                            type="file"
                            name="aadhar images"
                            multiple
                            hidden
                            ref={drivingRef}
                            onChange={handleDrivingLicence}
                          />

                          <button
                            onClick={() => drivingRef.current.click()}
                            className="px-3 py-1.5 bg-[#59CE8F] text-xs text-white font-semibold border-0 rounded-sm hover:bg-[#36b671] "
                          >
                            UPLOAD
                          </button>
                        </label>
                      </div>
                    ) : (
                      <Button
                        variant="text"
                        size="small"
                        sx={{
                          fontSize: "15px",
                          backgroundColor: "#59CE8F",
                          ":hover": {
                            backgroundColor: "#59CE8F",
                          },
                          color: "white",
                        }}
                        onClick={handleCancelEditAddress}
                      >
                        Cancel
                      </Button>
                    )}
                  </Grid>

                  <div className="w-full">
                    {
                      (drivingLicence)
                        ? <div className="w-full p-2 pl-4 mt-5 text-lg flex flex-col items-start text-black border-2 border-red-400 rounded-md" >
                          {
                            drivingLicence.map((file, index) => <li key={index} className="text-sm font-semibold ">{file.name} </li>)
                          }
                        </div>
                        : null
                    }
                  </div>
                </Grid>
                {/*  KYC  */}
                <hr style={{ marginTop: "5%" }} />

                <div className="my-10">
                  <Typography variant="h5" sx={{ fontWeight: "regular" }}>
                    KYC{" "}
                  </Typography>
                  <Box sx={{ display: "inline-flex" }}>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        my: "auto",
                      }}
                    >
                      Verified
                    </Typography>
                    <IconButton sx={{ marginLeft: "2%", color: "green" }}>
                      <VerifiedRoundedIcon fontSize="small" />
                    </IconButton>
                  </Box>{" "}
                  <br />



                  <Box sx={{}}>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "20px",
                        // display: "flex",
                        // justifyContent: "center",
                        // alignContent: "center",
                        my: "auto",
                      }}
                    >
                      Verification Pending
                    </Typography>
                    <IconButton sx={{ marginLeft: "2%", color: "green" }}>
                      <AutorenewIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>



      <Box>
        <Box
          sx={{
            // dispaly: "flex",
            // justifyContent: "center",
            m: "auto",
            border: "1px solid lightGrey",
            borderRadius: "8px",
            marginTop: "20%",
            boxShadow: 3,
            width: "90%",
          }}
        >
          <div style={{ padding: "4%" }}>
            <IconButton>
              <LockRoundedIcon fontSize="large" />
            </IconButton>
            <br />
            <Typography variant="p">
              Details GoBikes uses to verify your identity can't be changed.
              Some personal details can be edited, but we may ask you to verify
              your identity the next time you book or create a listing.
            </Typography>
            <br />
            <div style={{ marginTop: "5%" }}>
              <IconButton>
                <PersonPinRoundedIcon fontSize="large" />
              </IconButton>
              <br />
              <Typography variant="p">
                Personal info that you've shared with us, like email, address
                and options to manage it. This info is private to you.
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
      <div className="my-20"></div>
      <MobileFooter />
    </div>
  );
};

export default MobileProfile;
