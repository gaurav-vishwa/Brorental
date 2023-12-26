import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import BookingConfirmation from "./BookingConfirmation";
import CloseIcon from "@mui/icons-material/Close";
// import { Box } from "@mui/system";
import RideCompletion from "./RideCompletion";
// import PersonalDetails from "./PersonalDetails";
// import OTP from "./OTP";
// import OTPVerified from "./OTPVerified";

export default function ResponsiveDialog() {
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
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        sx={{}}
        PaperProps={{ sx: { width: "70%", height: "80%" } }}
        // fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
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
          {/* <BookingConfirmation /> */}
          <RideCompletion />
          {/* <PersonalDetails /> */}
          {/* <OTP /> */}
          {/* <OTPVerified /> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
