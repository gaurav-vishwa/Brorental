import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const MobileFAQ = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Box sx={{ px: 2 }}>
        {/* <Typography variant="h4" textAlign={"center"}>
          FAQ Section
        </Typography> */}
        {/* BOOKING FAQS */}
        <Box id="Booking">
          <Typography variant="h5" sx={{ pt: 10, pb: 2 }}>
            Bookings
          </Typography>
          <Box>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>
                  What to do if I can't get in touch with someone at the pickup
                  location?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you are unable to get in touch with the Dealer after
                  booking a reservation, you can call us at +91-8448444897 and
                  we will resolve the issue as soon as possible.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Can I extend my trip?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Reservations can be extended by going to the Bookings section
                  in the Profile tab. You can select the new end date and time
                  and make the payment for the extended dates/hours accordingly.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>Is fuel included in tariff?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  All prices are exclusive of fuel. We provide minimal amount of
                  fuel to get the vehicle to the nearest fuel station. In case
                  there is excess fuel in the vehicle at the time of return,
                  GoBikes is not liable for any refunds for the same.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography>
                  Can the bike booked be delivered to my home/office? If yes,
                  then what are the charges?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Delivery depends on many factors. You can call us on
                  +91-8448444897 and check if the delivery is possible or not
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography>
                  Can I visit the shop, see the vehicle and then book it?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, you can do it. Just give us a call on +91-8448444897. We
                  will arrange it.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography>
                  How can I book a bike without seeing it physically?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We offer a 100% money back guarantee. Pay a commitment advance
                  to reserve the bike. Reach location and test drive your bike.
                  If there is any issue in the vehicle, raise a ticket and you
                  shall be refunded 100% of the amount you have paid us. No
                  questions asked in case there is a mechanical fault in the
                  Vehicle.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel7d-content"
                id="panel7d-header"
              >
                <Typography>Can I ride for unlimited kilometres?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Each dealer has their own set of terms and conditions, they
                  may or may not include unlimited kilometres for their bikes.
                  In some of our locations, our dealers do provide bikes with
                  unlimited kilometres.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                aria-controls="panel8d-content"
                id="panel8d-header"
              >
                <Typography>What if I return the bike late?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you drop the bike off way past the due time, a penalty will
                  be charged. Returning the bike past the due date causes
                  inconvenience to our dealer and other customers who might have
                  scheduled a booking for the bike. You may call the dealer for
                  an extension before the end of your trip if you think you are
                  going to be late.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                aria-controls="panel9d-content"
                id="panel9d-header"
              >
                <Typography>
                  What is the minimum age for riding a bike?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  As each dealer has his/her own set of terms and conditions,
                  the minimum age for renting and riding a bike will depend upon
                  the dealer and/or the bike you will be renting. If the age is
                  not mentioned in the terms and conditions then the minimum age
                  would be 18 and anyone with a driving licence can rent a
                  vehicle.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                aria-controls="panel10d-content"
                id="panel10d-header"
              >
                <Typography>
                  What happens if I am unable to show the documents required to
                  rent the bike?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you are unable to show your documents, your booking will be
                  cancelled and no refund will be granted. So do make sure you
                  are able to show up with your documents before booking a bike!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel11"}
              onChange={handleChange("panel11")}
            >
              <AccordionSummary
                aria-controls="panel11d-content"
                id="panel11d-header"
              >
                <Typography>Where should I pick up the bike from?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  After you book a bike for a certain date, a "Confirmation
                  Message" is sent to your phone number with all the relevant
                  details about picking up the bike. In case you don't receive a
                  confirmation message, you can give us a call at +91-8448444897
                  and we will solve the issue immediately.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel12"}
              onChange={handleChange("panel12")}
            >
              <AccordionSummary
                aria-controls="panel12d-content"
                id="panel12d-header"
              >
                <Typography>Is there any speed limit on the bike?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It depends on the dealer and the particular bike you rent. It
                  will be mentioned in the bike features section on the website.
                  As a general rule it is best to travel at a safe and
                  comfortable speed.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel13"}
              onChange={handleChange("panel13")}
            >
              <AccordionSummary
                aria-controls="panel13d-content"
                id="panel13d-header"
              >
                <Typography>Can I take it outside the city?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  As each dealer has his/her own set of terms and conditions, it
                  might be mentioned in the terms and conditions section. If it
                  is not mentioned there, scooter is not allowed to take outside
                  the city and bikes you can take adhering to the distance limit
                  mentioned.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel14"}
              onChange={handleChange("panel14")}
            >
              <AccordionSummary
                aria-controls="panel14d-content"
                id="panel14d-header"
              >
                <Typography>Do you have any coupon code?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, we do run various offers from time-to-time. You can check
                  all the live coupons at https://gobikes.co.in/offers
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel15"}
              onChange={handleChange("panel15")}
            >
              <AccordionSummary
                aria-controls="panel15d-content"
                id="panel15d-header"
              >
                <Typography>
                  Do I have to submit the original document?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  As each dealer has his/her own set of terms and conditions,
                  documents to be submitted/shown will be mentioned in the terms
                  and conditions section of that go-hub.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel16"}
              onChange={handleChange("panel16")}
            >
              <AccordionSummary
                aria-controls="panel16d-content"
                id="panel16d-header"
              >
                <Typography>
                  Who will take care of the servicing if I rent it out for a
                  month?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We will take care of everything. One free service is included
                  every month
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel17"}
              onChange={handleChange("panel17")}
            >
              <AccordionSummary
                aria-controls="panel17d-content"
                id="panel17d-header"
              >
                <Typography>
                  Who will take care of the servicing if I rent it out for a
                  month?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Exact location of the pickup point and the contact details are
                  shared after the booking is done via sms and mail.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel18"}
              onChange={handleChange("panel18")}
            >
              <AccordionSummary
                aria-controls="panel18d-content"
                id="panel18d-header"
              >
                <Typography>
                  I have a Learner's Licence. Will that work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We don't give bikes/scooters on learner's licence. You need to
                  have a driver's licence.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel19"}
              onChange={handleChange("panel19")}
            >
              <AccordionSummary
                aria-controls="panel19d-content"
                id="panel19d-header"
              >
                <Typography>
                  Will I be getting a complimentary helmet?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  GoBikes provides one complimentary helmet with each bike
                  booked. A second helmet can also be provided but it is
                  chargeable at INR 50 per day.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel20"}
              onChange={handleChange("panel20")}
            >
              <AccordionSummary
                aria-controls="panel20d-content"
                id="panel20d-header"
              >
                <Typography>
                  How shall I get the address to pick up the motorcycle?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Once your booking is complete, you get an Email and SMS having
                  the complete address and contact number of the dealer. These
                  details are also always available on your personal dashboard.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel21"}
              onChange={handleChange("panel21")}
            >
              <AccordionSummary
                aria-controls="panel21d-content"
                id="panel21d-header"
              >
                <Typography>
                  What if I get caught violating traffic rules?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We respect traffic rules and expect you to do the same. You
                  are fully responsible to pay the penalty to traffic police if
                  you are found violating the rules.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel22"}
              onChange={handleChange("panel22")}
            >
              <AccordionSummary
                aria-controls="panel22d-content"
                id="panel22d-header"
              >
                <Typography>
                  I want to book for one month. Would I need to return the bike
                  daily?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No, you just need to return it at the drop date/ time, which
                  you select on the website.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel23"}
              onChange={handleChange("panel23")}
            >
              <AccordionSummary
                aria-controls="panel23d-content"
                id="panel23d-header"
              >
                <Typography>
                  I live outside India. What are the requirements to rent a
                  bike?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You shall need to submit a copy of passport and the copy of
                  International Driver's Licence for the type of motorcycle you
                  are renting.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel24"}
              onChange={handleChange("panel24")}
            >
              <AccordionSummary
                aria-controls="panel24d-content"
                id="panel24d-header"
              >
                <Typography>
                  I am shortening my trip. How shall I get the refund?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  There are no refunds on shortening the trip.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel25"}
              onChange={handleChange("panel25")}
            >
              <AccordionSummary
                aria-controls="panel25d-content"
                id="panel25d-header"
              >
                <Typography>
                  I booked for a far off location. Can it be changed?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. Just give us a call on +91-8448444897. We will arrange
                  it.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel26"}
              onChange={handleChange("panel26")}
            >
              <AccordionSummary
                aria-controls="panel26d-content"
                id="panel26d-header"
              >
                <Typography>
                  What if I don't get a bike after booking?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is a rare instance as we always maintain real-time
                  availability. There may be instances where bikes,
                  unfortunately, get into incidents. In such a case, we shall
                  offer you an alternate bike (depends on the availability of
                  course). If an alternate bike isn't available or you don't
                  wish to rent an alternate bike, we shall refund you 100%
                  amount within 7 working days.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        {/* BOOKING CANCELLATION FAQS */}
        <Box id="BookingCancellation">
          <Typography variant="h5" sx={{ pt: 10, pb: 2 }}>
            Booking Cancellation
          </Typography>
          <Box>
            <Accordion
              expanded={expanded === "panel27"}
              onChange={handleChange("panel27")}
            >
              <AccordionSummary
                aria-controls="panel27d-content"
                id="panel27d-header"
              >
                <Typography>
                  Can I cancel my booking? If yes then how?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes. You can cancel your booking by going to the Bookings
                  sections in the Profile tab.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel28"}
              onChange={handleChange("panel28")}
            >
              <AccordionSummary
                aria-controls="panel28d-content"
                id="panel28d-header"
              >
                <Typography>Will I get a refund if I cancel?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Upon booking a bike with any of our dealers, they reserve the
                  bike for the customer. In the case of cancellation,
                  unnecessary inconvenience is caused to the dealer. To account
                  for the potential financial loss, we withhold some amount as
                  cancellation charges as follows: No Show - 100% deduction.
                  Between 0-24 hrs of the pickup time - 100% deduction. Between
                  24-72 hrs of the pickup time - 50% rental charges will be
                  withheld. Before 72 hrs of the pickup time - Full Refund to
                  the customer
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel29"}
              onChange={handleChange("panel29")}
            >
              <AccordionSummary
                aria-controls="panel29d-content"
                id="panel29d-header"
              >
                <Typography>
                  Can the date of an existing reservation be changed?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No, since the bikes have been booked and reserved by our
                  dealers. You can cancel your current booking and then book a
                  bike for a later date.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel30"}
              onChange={handleChange("panel30")}
            >
              <AccordionSummary
                aria-controls="panel30d-content"
                id="panel30d-header"
              >
                <Typography>
                  How long does it take to get the refund?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We at GoBikes ensure that your money is refunded at the
                  earliest. With all kinds of transactions, it takes up to 7 to
                  10 days for the refunded amount to reach your account after
                  initiating the cancellation.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel31"}
              onChange={handleChange("panel31")}
            >
              <AccordionSummary
                aria-controls="panel31d-content"
                id="panel31d-header"
              >
                <Typography>What if my dealer cancels the booking?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We are committed to ensuring a hassle free booking process. It
                  is highly unlikely that the dealer would cancel your
                  reservation. However, on the off chance if it does happen due
                  to an emergency, the customer is refunded 100% of the amount
                  paid for the booking.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        {/* SAFETY AND TIPS FAQS */}
        <Box id="SafetyAndTips">
          <Typography variant="h5" sx={{ pt: 10, pb: 2 }}>
            Safety And Tips
          </Typography>
          <Box>
            <Accordion
              expanded={expanded === "panel32"}
              onChange={handleChange("panel32")}
            >
              <AccordionSummary
                aria-controls="panel32d-content"
                id="panel32d-header"
              >
                <Typography>
                  What happens if I meet with an accident?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We treat accidents and injuries during bike rides very
                  seriously. If you are in such a situation, you should first
                  try to get any immediate in person help possible. Followed by
                  this call the vendor immediately to inform him of the mishap.
                  We advise you to inform us of the incident as soon as possible
                  as well.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel33"}
              onChange={handleChange("panel33")}
            >
              <AccordionSummary
                aria-controls="panel33d-content"
                id="panel33d-header"
              >
                <Typography>
                  What should I do if the bike breaks down?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We at GoBikes make sure that the bike we give to our Riders is
                  of the best quality. However, some circumstances are beyond
                  our control in such cases of bike troubles, it is best to call
                  the Dealer and he will assist you at once by either fixing the
                  problem or providing you with a replacement bike.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        {/* SECURITY DEPOSIT FAQS */}
        <Box id="SecurityDeposit">
          <Typography variant="h5" sx={{ pt: 10, pb: 2 }}>
            Security Deposit
          </Typography>
          <Box>
            <Accordion
              expanded={expanded === "panel34"}
              onChange={handleChange("panel34")}
            >
              <AccordionSummary
                aria-controls="panel34d-content"
                id="panel34d-header"
              >
                <Typography>
                  How does GoBikes handle security deposits?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Security Deposits with GoBikes are kept secure and are 100%
                  refundable to the rider after he/she has completed their bike
                  trip and has returned the bike.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel35"}
              onChange={handleChange("panel35")}
            >
              <AccordionSummary
                aria-controls="panel35d-content"
                id="panel35d-header"
              >
                <Typography>
                  What happens if I don't get my security deposit back?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If for some reason you are not given your security deposit
                  back, you can raise an issue by calling us and we will see
                  that the issue is solved immediately.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel36"}
              onChange={handleChange("panel36")}
            >
              <AccordionSummary
                aria-controls="panel36d-content"
                id="panel36d-header"
              >
                <Typography>What if a dealer asks for more money?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The dealers at GoBikes are trusted and hand-picked by GoBikes
                  itself to ensure best service to the customers. If on a rare
                  occasion this does happen, you are advised to call us
                  immediately and we shall sort the issue out for you at once.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>

        {/* ACCIDENT or DAMAGE FAQS */}
        <Box id="AccidentOrDamage">
          <Typography variant="h5" sx={{ pt: 10, pb: 2 }}>
            Accident or Damage
          </Typography>
          <Box>
            <Accordion
              expanded={expanded === "panel37"}
              onChange={handleChange("panel37")}
            >
              <AccordionSummary
                aria-controls="panel37d-content"
                id="panel37d-header"
              >
                <Typography>
                  What happens if I meet with an accident?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We treat accidents and injuries during bike rides very
                  seriously. If you are in such a situation, you should first
                  try to get any immediate in-person help possible. Followed by
                  this, call the dealer immediately to inform him of the mishap.
                  We advise you to inform us of the incident as soon as possible
                  as well.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel38"}
              onChange={handleChange("panel38")}
            >
              <AccordionSummary
                aria-controls="panel38d-content"
                id="panel38d-header"
              >
                <Typography>
                  What should I do if the bike breaks down?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We at GoBikes make sure that the bike we give to our riders is
                  of the best quality. However, some circumstances are beyond
                  our control in such cases of bike troubles, it is best to call
                  the dealer and he will assist you at once by either fixing the
                  problem or providing you with a replacement bike.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel39"}
              onChange={handleChange("panel39")}
            >
              <AccordionSummary
                aria-controls="panel39d-content"
                id="panel39d-header"
              >
                <Typography>
                  What happens if the bike is damaged when I am on a trip?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  For any form of damage or harm that has come to the bike while
                  on your trip, the dealer terms and conditions will apply.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel40"}
              onChange={handleChange("panel40")}
            >
              <AccordionSummary
                aria-controls="panel40d-content"
                id="panel40d-header"
              >
                <Typography>What happens in case of bike theft?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  For any form of damage or harm (including theft) that has come
                  to the bike while on your trip, the Dealer terms and
                  conditions will apply.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel41"}
              onChange={handleChange("panel41")}
            >
              <AccordionSummary
                aria-controls="panel41d-content"
                id="panel41d-header"
              >
                <Typography>What happens in case of bike theft?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  In case of a tyre puncture, find the nearest bike mechanic and
                  get the puncture fixed. As puncture of tyres are unpredictable
                  and depend upon various factors like terrain, style of riding,
                  etc. it does not qualify as a responsibility of the Dealer.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MobileFAQ;
