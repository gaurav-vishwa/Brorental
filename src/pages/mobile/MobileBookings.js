import React from "react";
import Booking from "../../components/desktop/Booking";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import MobilePostLoginNavbar from "../../layouts/mobile/MobilePostLoginNavbar";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const MobileBookings = () => {
  return (
    <div>
      <DynamicMobileNavbar />
      <Booking />
      <div className="my-20"></div>
      <MobileFooter />
    </div>
  );
};

export default MobileBookings;
