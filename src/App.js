import "./assets/styles/App.css";
import Home from "./pages/desktop/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/desktop/AboutUs";
import PrivacyPolicy from "./pages/desktop/PrivacyPolicy";
import TermsCondition from "./pages/desktop/TermsCondition";
import ListYourVehicle from "./pages/desktop/ListYourVehicle";
import ContactUs from "./pages/desktop/ContactUs";
import FAQs from "./pages/desktop/FAQs";
import OffersForYou from "./pages/desktop/OffersForYou";
import Dashboard from "./pages/desktop/Dashboard";
import BookingFlow from "./pages/desktop/BookingFlow";
import BookNowPage from "./pages/desktop/BookNowPage";

import PersonalDetails from "./components/desktop/PersonalDetails";

import OTP from "./components/desktop/OTP";

import ScrollToTop from "./components/ScrollToTop";
import MyRides from "./components/desktop/MyRides";
import Trial from "./pages/mobile/Trial";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RentNow from "./pages/desktop/RentNow";
import MobileLogin from "./pages/mobile/MobileLogin";
import MobileListYourVehicle from "./pages/mobile/MobileListYourVehicle";
import MobileContactUs from "./pages/mobile/MobileContactUs";
import MobileFAQs from "./pages/mobile/MobileFAQs";
import MobileBookingFlow from "./pages/mobile/MobileBookingFlow";
import MobileProfile from "./pages/mobile/MobileProfile";
import MobileBookings from "./pages/mobile/MobileBookings";
import MobileGoCoins from "./pages/mobile/MobileGoCoins";

import MobileRentNow from "./pages/mobile/MobileRentNow";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import MobileBookNowPage from "./pages/mobile/MobileBookNowPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import OTPVerified from "./components/desktop/OTPVerified";
import MobileOTPVerified from "./pages/mobile/MobileOTPVerified";
import MobileOTP from "./pages/mobile/MobileOTP";

const theme = createTheme({
  typography: {
    // allVariants: {
    fontFamily: "poppins",
    // textTransform: "none",
    // fontSize: 16,
    // },
    button: {
      fontWeight: "bold",
      ":hover": {
        backgroundColor: "#36B671",
      },
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ListYourVehicle" element={<ListYourVehicle />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/OffersForYou" element={<OffersForYou />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsCondition" element={<TermsCondition />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MyRides" element={<MyRides />} />
            <Route path="/BookingFlow" element={<BookingFlow />} />
            <Route path="/BookNowPage" element={<BookNowPage />} />
            <Route path="/RentNow" element={<RentNow />} />

            {/* Test Routes */}
            <Route path="/OTP" element={<OTP />} />
            <Route path="/OTPVerified" element={<OTPVerified />} />
            <Route path="/PersonalDetails" element={<PersonalDetails />} />
            <Route path="/Trial" element={<Trial />} />
            <Route path="/RentNow" element={<RentNow />} />

            <Route path="/MobileLogin" element={<MobileLogin />} />
            <Route
              path="/MobileListYourVehicle"
              element={<MobileListYourVehicle />}
            />
            <Route path="/MobileContactUs" element={<MobileContactUs />} />
            <Route path="/MobileFAQs" element={<MobileFAQs />} />
            <Route path="/MobileBookingFlow" element={<MobileBookingFlow />} />
            <Route path="/MobileBookNowPage" element={<MobileBookNowPage />} />
            <Route path="/MobileProfile" element={<MobileProfile />} />
            <Route path="/MobileBookings" element={<MobileBookings />} />
            <Route path="/MobileGoCoins" element={<MobileGoCoins />} />
            <Route path="/MobileOTP" element={<MobileOTP />} />
            <Route path="/MobileOTPVerified" element={<MobileOTPVerified />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
