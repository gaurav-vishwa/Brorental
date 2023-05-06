import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <>
      <Container sx={{ marginTop: "7%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily:"Poppins" }}>
          Have Questions? We got you.
        </Typography>
        <Typography variant="p" sx={{ fontSize: "20px", fontFamily:"Poppins" }}>
          Contact us on +91-8448444897 WhatsApp/Call in case of any other query.
        </Typography>
        <div style={{ marginTop: "7%" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily:"Poppins" }}>Is fuel included in the tariff?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily:"Poppins" }}>
                All prices are exclusive of fuel. We provide a minimal amount of
                fuel to get the vehicle to the nearest fuel station. In case
                there is excess fuel in the vehicle at the time of return,
                GoBikes is not liable for any refunds for the same.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily:"Poppins" }}>
                How can I book a bike without seeing it physically?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily:"Poppins" }}>
                We offer a 100% money back guarantee. Pay a commitment advance
                to reserve the bike. Reach location and test drive your bike. If
                there is any issue in the vehicle, raise a ticket and you shall
                be refunded 100% of the amount you have paid us. No questions
                asked in case there is mechanical fault in the Vehicle.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily:"Poppins" }}>
                Can the bike booked be delivered to my home/office? If yes, then
                what are the charges?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily:"Poppins" }}>
                Delivery depends on many factors. You can call us on
                +91-8448444897 and check if the delivery is possible or not.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily:"Poppins" }}>
                I have a Learner's Licence. Will that work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily:"Poppins" }}>
                We don't give bikes/scooters on learner's licence. You need to
                have a driver's licence.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily:"Poppins" }}>Can I cancel my booking? If yes then how?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily:"Poppins" }}>
                Yes. You can cancel your booking by going to the Bookings
                sections in the Profile tab. Upon booking a bike with any of our
                dealers, they reserve the bike for the customer. In the case of
                cancellation, unnecessary inconvenience is caused to the dealer.
                To account for the potential financial loss, we withhold some
                amount as cancellation charges as follows: No Show - 100%
                deduction. Between 0-24 hrs of the pickup time - 100% deduction.
                Between 24-72 hrs of the pickup time - 50% rental charges will
                be withheld. Before 72 hrs of the pickup time - Full Refund to
                the customer
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily:"Poppins" }}>
                How does GoBikes handle security deposits?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily:"Poppins" }}>
                Security Deposits with GoBikes are kept secure and are 100%
                refundable to the rider after he/she has completed their bike
                trip and have returned the bike.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontFamily:"Poppins" }}>Will I be getting a complimentary helmet?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily:"Poppins" }}>
                GoBikes provides one complimentary helmet with each bike booked.
                A second helmet can also be provided but it is chargeable at INR
                50 per day.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </>
  );
}
