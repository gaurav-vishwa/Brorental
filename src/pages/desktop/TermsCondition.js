import React from "react";
import { Box, Typography } from "@mui/material";

import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const TermsCondition = () => {
  const theme = useTheme();
  const isMatchDown = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchUp = useMediaQuery(theme.breakpoints.up("md"));
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <>
      {isMatchDown ? <DynamicMobileNavbar /> : <DynamicNavbar />}

      <div className="tc_container1 mb-80">
        <div className="tc_container2">
          {isMatchUp && (
            <div className="tc_container3 mb-10">
              <ol>
                <NavHashLink
                  to="#1"
                  style={
                    isActive("#1")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      1. A general guide for use
                    </Typography>
                  </li>
                </NavHashLink>
                <NavHashLink
                  to="#2"
                  style={
                    isActive("#2")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      2. Use of the vehicle
                    </Typography>
                  </li>
                </NavHashLink>
                <NavHashLink
                  to="#3"
                  style={
                    isActive("#3")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      3. Prohibited Uses
                    </Typography>
                  </li>
                </NavHashLink>
                <NavHashLink
                  to="#4"
                  style={
                    isActive("#4")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      4. Maintenance/Vehicle Condition/Return/Stolen Vehicles
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#5"
                  style={
                    isActive("#5")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      5. Trip Extension
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#6"
                  style={
                    isActive("#6")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      6. Fee Policy
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#7"
                  style={
                    isActive("#7")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      7. No Agency
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#8"
                  style={
                    isActive("#8")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      8. Offers and Promotions
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#9"
                  style={
                    isActive("#9")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      9. Traffic Law/Applicable Law Violations
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#10"
                  style={
                    isActive("#10")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      10. Insurance/Liability
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#11"
                  style={
                    isActive("#11")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      11. Acceptable Website Use
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#12"
                  style={
                    isActive("#12")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      12. Disclaimer of Consequential Damages
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#13"
                  style={
                    isActive("#13")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      13. Intellectual Property Rights
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#14"
                  style={
                    isActive("#14")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      14. Dispute Resolution/Arbitration
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#15"
                  style={
                    isActive("#15")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      15. Governing Law and Jurisdiction
                    </Typography>
                  </li>
                </NavHashLink>

                <NavHashLink
                  to="#16"
                  style={
                    isActive("#16")
                      ? {
                          color: "#59ce8f",
                        }
                      : {}
                  }
                >
                  {" "}
                  <li className="tc_list1">
                    <Typography
                      variant="span"
                      fontFamily={"Poppins, sans-serif"}
                    >
                      16. Entire Agreement
                    </Typography>
                  </li>
                </NavHashLink>
              </ol>
            </div>
          )}

          <Box sx={{ width: { md: "75%", xs: "100%" } }}>
            <Typography
              variant="h5"
              textAlign={"center"}
              fontWeight={"bold"}
              fontFamily={"Poppins, sans-serif"}
              sx={{ ml: { md: 3, xs: 0 }, pb: 3 }}
              id="1"
            >
              Terms and Conditions
            </Typography>
            <ol className="mt-0">
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  1. A general guide for use
                </Typography>
                <ol>
                  <li>
                    <span>
                      1.1. Terms of Use govern your use of this website and
                      other services provided by GoBikes Automotive Private
                      Limited (the “Services“). These Terms of Use, together
                      with our Privacy Policy, and Disclaimer and any other
                      terms specifically referred to in any of those documents,
                      constitute legally binding agreement (the “Agreement“)
                      between You and GoBikes Automotive Private Limited in
                      relation to your use of this website and services
                      (together, the “Platform“). By accepting the terms and
                      conditions you will be legally bound to follow all the
                      below mentioned terms and conditions during your
                      relationship with GoBikes Automotive Private Limited.
                      Without your acceptance of the terms and conditions,
                      GoBikes Automotive Private Limited shall not be able to
                      give on Hire any bike. If you disagree with any of the
                      terms of this agreement, please refrain from hiring the
                      bike.
                    </span>
                  </li>
                  <li>
                    <span>1.2. Define terms:</span>
                    <ol>
                      <li>
                        <span>
                          1.2.1. “GoBikes Automotive Private Limited”
                          (hereinafter referred as the “Company“) is a
                          registered limited liability partnership company in
                          the state of Delhi, India. The registered address of
                          the Company is Top floor, C-78, E-3, Jvts Garden,
                          Chattarpur New Delhi, DELHI, South West Delhi, Delhi,
                          110074.
                        </span>
                      </li>
                      <li>
                        <span>
                          1.2.2. “Conditions” mean these General Conditions of
                          Use, to carry on the business of letting on hire or
                          otherwise, motorcycle and other vehicles of every kind
                          and description, on such terms and conditions as may
                          be decided by the Company from time to time.
                        </span>
                      </li>
                      <li>
                        <span>
                          1.2.3. “Service” refers to any service provided by the
                          Company, as the Company deems fit, to any User.
                        </span>
                      </li>
                      <li>
                        <span>
                          1.2.4. “User” means a person who has accepted the
                          terms and conditions for leasing or renting a
                          motorcycle or motor vehicle of any kind from the
                          Company.
                        </span>
                      </li>
                      <li>
                        <span>
                          1.2.5. “Vehicle” means the
                          motorcycle/motorbike/scooter or motor vehicle of any
                          kind offered by the Company to any User for
                          leasing/renting for the period as determined between
                          the Company and the User.
                        </span>
                      </li>
                      <li>
                        <span>
                          1.2.6. These Conditions are intended to create binding
                          rights and obligations between the User and the
                          Company in accordance with the Indian Contract Act,
                          1872. The Company reserves the right to change the
                          terms of these Conditions from time to time. No access
                          to the Services will be permitted unless the
                          Conditions are accepted in full. No User is entitled
                          to accept only part of the Conditions. If a User does
                          not agree to all the Conditions, such User may not use
                          the Services. In the event that any Member fails to
                          comply with any of the Conditions, the Company
                          reserves the right, at its own discretion, to suspend
                          or withdraw all Services to that User without notice.
                        </span>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="2"></div>
            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  2. Use of the vehicle
                </Typography>
                <ol>
                  <li>
                    <span>
                      2.1. User Information: The User who approaches the Company
                      for taking the Vehicle agrees to provide any personal
                      information requested by the Company. In particular, the
                      User will be required to provide their first name, last
                      name, age, title, valid telephone number, alternate
                      telephone number, residential address, office address and
                      email address. Use of the Vehicle and the Service of the
                      Company is limited to those over the age of 18 years at
                      the time of registration.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.2. Disclosure of Purpose: The User agrees to disclose
                      the duration for renting the Vehicle and reason for
                      leasing/renting out the Vehicle to the Company.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.3. Disclosure of Purpose: The User agrees to disclose
                      the duration for renting the Vehicle and reason for
                      leasing/renting out the Vehicle to the Company.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.4. Valid license: The User must possess a valid Motor
                      Vehicle with Gear (MVWG) License in case of Motor Vehicles
                      with Gear and Motor Vehicle without Gear (MVWOG) License
                      in case of Motor Vehicles without Gear. The User shall
                      submit a copy of the License to the Company. If any User’s
                      license expires or is revoked, authorization to drive the
                      Vehicle shall expire immediately. For international
                      visitors, a valid driving license from their home country
                      with an International Driving Permit is necessary along
                      with a valid Visa. Originals to be brought, a copy will be
                      retained for record.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.5. Submission of Original Documents: The User shall
                      submit the photocopy of one of the following documents to
                      the Company before leasing/renting the Vehicle:
                    </span>
                    <ol>
                      <li>
                        <span>2.5.1. Driving License</span>
                      </li>
                      <li>
                        <span>2.5.2. Aadhar Card</span>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span>
                      2.6. Rental Charges: The rental rate offered by the
                      Company to the User is as per what is shown on the
                      website. There are no hourly charges. The minimum tenure
                      of booking a Vehicle from the Company is one day (24
                      hours).
                    </span>
                  </li>
                  <li>
                    <span>
                      2.7. Helmets (Included in Rental Charges): One helmet is
                      provided by the Company with the Vehicle. The User is
                      encouraged to bring their own helmets for comfort and
                      style. Helmets for the User as well as for pillion are a
                      mandatory requirement by law; hence the User shall ensure
                      that the pillion rider is wearing a Helmet during the use
                      of the Vehicle. The User has the responsibility to follow
                      the law related to wearing of helmet for the rider as well
                      as the pillion, and is liable to pay any fines/costs that
                      are incurred due to violation of such law.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.8. Fuel Cost: Fuel costs are the User's responsibility.
                      The Company is not liable or responsible for the
                      motorcycle fuel consumption and mileage.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.9. Advance Payment: The User shall make the payment of
                      the entire rental charge (as per the duration of the
                      booking) in advance, before using the Vehicle. In case the
                      User wishes to extend the period of booking the Vehicle,
                      the User must make the additional payment before the
                      extension to continue the use of the Vehicle. The User can
                      pay the Company in NEFT Transfer or Debit/Credit Card.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.10. The Pick-up date, time and location cannot be
                      changed once a booking is confirmed.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.11. The customer is not authorized to lend the
                      two-wheeler to any person.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.12. Mechanical failure/breakdown/cleanliness/ <br />{" "}
                      maintenance during the ride: In case of a breakdown, the
                      User has to immediately intimate the Company about the
                      same and the location and kind of defect. The Company will
                      send a mechanic or provide a necessary guidance to repair
                      or rectify the fault so that you can get on with your ride
                      as soon as possible. However, the Company is not assuring
                      a definite timeline for repair, the same is depending on
                      the location of the vehicle and kind of failure of the
                      vehicle, availability of the mechanic, spare parts etc.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.13. Documents to be provided to the User: The User shall
                      be provided a copy of the motorbike registration
                      certificate & insurance.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.14. Permitted area of usage of the Vehicle: The Vehicle
                      is provided for usage within the state of Delhi, India.
                      The User cannot take the Vehicle outside the state
                      boundary without prior permission from the Company. In
                      case any User takes the Vehicle outside the state boundary
                      without prior permission, the contract of usage would be
                      terminated immediately and the User needs to return the
                      Vehicle immediately back to the Company. There would be no
                      refund of the Rental Charges already made, and the User
                      has sole responsibility for any and all costs, charges,
                      fees and expenses incurred by the Company as a result of a
                      breach of this condition. The User also has to pay a fine
                      of Rs. 2000.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.15. Crossing the State Border: The User has to inform
                      the Company in advance whenever he is intending to go to
                      other states. The User has to ensure that he takes the
                      necessary approval at the check post and pay the permit
                      fee before he enters the other state. The Company will not
                      be responsible for any damage to life and property if the
                      necessary permits are not taken while entering another
                      state. The Company's Insurance will also not be valid if
                      the necessary permits are not taken by the User while
                      crossing the border.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.16. Tracking of the Vehicle: Each Vehicle will be
                      tracked with a GPS tracker by the Company. The Company
                      ensures that the privacy of the User is not compromised in
                      any ways. The information regarding the tracking of the
                      Vehicle shall only be shared with the relevant authorities
                      in case of theft/accident/or any other incident which
                      happens with the Vehicle.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.17. The User is strongly advised to inspect the
                      motorcycle before riding them for any physical or
                      noticeable mechanical defects or flaw found on/in the
                      motorcycle. The User has to bear all the cost of
                      replacement pertaining to any damage to the vehicle loss
                      of tools and spare parts kept in the vehicle. Any type of
                      damage happened to the motorcycle during the ride should
                      be intimated to the Company while returning the vehicle.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.18. The User is duty bound to inform the Company, if
                      he/she notices any abnormality in riding comfort,
                      conditions, manoeuvrability, excess vibrations, uneasiness
                      etc.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.19. Cancellation Policy: If the Company cancels the
                      booking due to break down, non availability of the bike or
                      any other reason then we provide 100% refund of the
                      rentals received. If you cancel the booking the refund
                      would be made as per the following schedule:.
                    </span>
                    <ol>
                      <li>
                        <span>2.19.1 No Show - 100% deduction</span>
                      </li>
                      <li>
                        <span>
                          2.19.2 Between 0-24 hrs of the pickup time - 100%
                          deduction
                        </span>
                      </li>
                      <li>
                        <span>
                          2.19.3 Between 24-72 hrs of the pickup time - 50%
                          rental charges will be withheld
                        </span>
                      </li>
                      <li>
                        <span>
                          2.19.4 Before 72 hrs of the pickup time - Full Refund
                          to the customer
                        </span>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span>
                      2.20. The refunded amount will reflect in the customer's
                      bank account within 7-10 business days.
                    </span>
                  </li>
                  <li>
                    <span>
                      2.21. We reserve Our sole right to cancel Your booking if
                    </span>
                    <ol>
                      <li>
                        <span>
                          2.21.1 You don't turn up on time to pick up the
                          vehicle.
                        </span>
                      </li>
                      <li>
                        <span>
                          2.21.2 The delivery address provided by You is not
                          within the Places of Service.
                        </span>
                      </li>
                      <li>
                        <span>
                          2.21.3 Failure to deliver Your order due to lack of
                          necessary information.
                        </span>
                      </li>
                      <li>
                        <span>
                          2.21.4 Unavailability of the items/bikes
                          ordered/booked.
                        </span>
                      </li>
                      <li>
                        <span>
                          2.21.5 Failure due to reasons beyond Our reasonable
                          control, due force majeure events including but not
                          limited to acts of God, floods, fire, earthquake, acts
                          of terrorism, war, strikes, legislation or restriction
                          by any government or other authority, etc. Also that
                          we operate with machines i.e. motor cycles which might
                          break down or the previous user might not turn up on
                          time or there can be an accident which has resulted in
                          the bike not being available. In these situations but
                          not limited to the ones mentioned, refund to the
                          extent of money received would be made.
                        </span>
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="3"></div>
            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  3. Prohibited Uses
                </Typography>
                <ol>
                  <li>
                    <span>
                      3.1 The use of the Vehicle provided by the Company is
                      prohibited under the following conditions:
                    </span>
                    <ol>
                      <li>
                        <span>3.1.1. Any speed race or competition.</span>
                      </li>
                      <li>
                        <span>
                          3.1.2. By any person who is under the influence of (i)
                          alcohol or (ii) any drug or medication under the
                          effects of which the operation of a vehicle is
                          prohibited or not recommended. A zero-tolerance policy
                          is adopted in such cases.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.3. In the carrying out of any crime or any other
                          illegal activity.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.4. In an imprudent, negligent, or abusive manner
                          or for any abnormal use of this vehicle.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.5. By any person who has provided the Company with
                          false information or whose representations are
                          determined to be false (including, without limitation,
                          regarding his name, age, or address).
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.6. For driving the Vehicle outside of the
                          permitted area or any prohibited areas within the
                          permitted area.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.7. For driving while using a mobile phone or any
                          other mobile communication device in any manner
                          whatsoever, including while sending an SMS, emailing,
                          using a cell phone with or without a hands-free
                          device, otherwise using a mobile communication device
                          that may distract the User from driving or otherwise
                          engaging in similar activities that may be prohibited
                          by applicable law.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.8. Using the Vehicle to transport flammable,
                          poisonous, or otherwise hazardous substances for other
                          than legally permissible household use or in amounts
                          greater than what is usually consumed in a household.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.9. Transporting objects with the vehicle that
                          could adversely impact the Vehicle’s handling safety
                          or that could damage the Vehicle or, by virtue of such
                          object/s protruding outside, affect the safety of
                          vehicles driving in the vicinity of the Vehicle.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.10. Transporting more than 2 passengers.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.11. Using any fuel other than how it is prescribed
                          for the select model.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.12. The User shall follow speed limitation,
                          traffic rules or directions of the police or other
                          enforcement agencies. If there is any violation of a
                          traffic rule or any other law such as, over speeding,
                          jumping a signal, riding with two pillions, riding
                          without a helmet, parking illegally etc., the member
                          has to pay all the fines/penalties. If any case is
                          registered by the police authorities against the
                          Company, being the owner or permit holder of the
                          vehicle, the User has to compensate the Company all
                          costs, fines and legal fees incurred.
                        </span>
                      </li>
                      <li>
                        <span>
                          3.1.13. If the User over speeds beyond the limit set
                          as per the traffic rules or any other laws, the
                          Company shall not protect the User from any loss or
                          damage to the vehicle, himself and the third party
                          through the insurance that it has and the User shall
                          personally be liable for all the loss or damages
                          caused.
                        </span>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span>
                      3.2. The above mentioned list is not exhaustive, and any
                      unreasonable or inappropriate use of the Vehicle provided
                      by the Company, as determined by the Company in its sole
                      discretion, may be deemed a violation of these Conditions.
                      The Company may report the User to the authorities any use
                      of a Vehicle or other activities that are in violation of
                      local, state, and/or national law or in violation of these
                      Conditions.
                    </span>
                  </li>
                  <li>
                    <span>
                      3.3. The contract of usage would be terminated immediately
                      due to the violation of any of these Conditions and the
                      User needs to return the Vehicle immediately back to the
                      Company. There would be no refund of the Rental Charges
                      already made, and the User has sole responsibility for any
                      and all costs, charges, fees and expenses incurred by the
                      Company as a result of a breach of these Conditions.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="4"></div>
            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  4. Maintenance/Vehicle Condition/Return/Stolen Vehicles
                </Typography>
                <ol>
                  <li>
                    <span>
                      4.1. The User is responsible for securing the Vehicle
                      during the booking period. The Vehicle must be ignition
                      off and handle locked properly. The User will be
                      responsible for any fees or charges associated with a
                      failure to perform these steps.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.2. The Company will perform all necessary and required
                      routine maintenance on all of its Vehicles. However, the
                      User is responsible for the cleanliness of the Vehicle and
                      is expected to assist in helping the Company to maintain
                      the driving safety and performance of the vehicle, in
                      particular during longer bookings or when the vehicle
                      indicates that service or maintenance is required.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.3. All breakdowns or incidents involving the Vehicle
                      provided by the Company must be reported to the Company
                      immediately at the following number: +91-XXXXXXXXXX
                    </span>
                  </li>
                  <li>
                    <span>
                      4.4. The User must return the Vehicle, secured, clean, and
                      in good working order to the Company at the end of the
                      booking.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.5. The User must also return the Helmet given by the
                      Company in a clean state and good working condition. If
                      the Helmet has suffered any damage, the User is liable to
                      pay the costs of the Helmet as per the bill of the Helmet.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.6. Users are required to immediately report to the
                      Company any condition that impairs the driving
                      functionality of the Vehicle, such as poor driving feel or
                      external or internal damage that renders the Vehicle
                      unsafe, including but not limited to, missing or
                      inoperable signal or driving lighting, broken or missing
                      rear-view mirrors.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.7. Prior to taking possession of a vehicle, the User
                      must check the Vehicle, and inform the Company of any
                      damage or abnormality encountered on the Vehicle or in the
                      operation of the Vehicle. If the Company is not notified
                      of a problem at the start of a booking, the User will be
                      deemed to be responsible for any problem with the vehicle
                      discovered or reported after the booking, including,
                      without limitation, damage to the vehicle.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.8. The User is solely responsible for the Vehicle while
                      driving and any damage caused to it, and must bear the
                      repair cost at the cost of the authorised service centre.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.9. A stolen Vehicle must be immediately reported to the
                      Company and the nearest police station with a detailed
                      written complaint based on actual facts. The User shall
                      ensure that such complaint shall not contain any
                      discrepancy, inconsistencies or distortions from actual
                      facts as the same would be detrimental to a valid
                      insurance or other claim by the Company. The Company shall
                      provide all necessary assistance and the User shall
                      provide complete co-operation to fulfil the formalities.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.10. The User must immediately notify and deliver to the
                      Company every summons, complaint, document, or notice of
                      any kind received by User in any way relating to an
                      accident, theft, or other circumstances related to the
                      Vehicle.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.11. If there is any damage to the vehicle, GoBikes can
                      charge the amount equal to cost of the bike/cost of
                      repairing the bike that is not covered by the Insurance
                      Company and additionally loss of revenue if any to
                      GoBikes. In the event of an accident, GoBikes shall claim
                      Insurance only if the estimated damage is more than
                      Rs.5000 .The User shall be liable to pay the full value of
                      damages, if it's below the said limits. In case of the
                      damage being more than the said limits, the hirer has to
                      pay a deposit of Rs.10,000. GoBikes shall claim Insurance
                      and the differential amount between the amount settled and
                      the Invoice amount shall be adjusted from the above
                      deposit. The User shall also be liable for loss of rental
                      during the period the vehicle was down. The User shall
                      also provide a written statement explaining the incident
                      of the accident along with clear details of the location,
                      time, third party/property damage, police complaints
                      resulting from such accident. The User on return of the
                      ride shall also provide a crossed cheque in the name of
                      GoBikes Automotive Private Limited which shall be used to
                      settle the amount that is not approved by the Insurance
                      Company and Loss of Rental. The User shall not issue a
                      stop payment request to his banker on such cheque issued.
                      The Cheque will be returned if the hirer chooses to settle
                      in any other mode of payment.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.12. All accidents, damages to the vehicle, summons or
                      notices issued by police or by the court in relation to
                      acts while the vehicle was under the custody of the Hirer
                      shall be intimated within one Hour of such incident to
                      info@gobikes.co.in. The User shall also report in writing,
                      the entire events in minutest detail regarding the
                      accident. Any police cases shall be reported to the
                      Company immediately. Any misstatement or concealment is an
                      offence. The Company shall not protect the User with its
                      insurance if the hirer doesn't follow the above
                      instructions.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.13. Use of the Vehicle in any manner that causes
                      excessive wear and tear to the vehicle parts is
                      prohibited. The Company shall penalise the User if it is
                      found that the hirer has caused excessive wear and tear to
                      the vehicle.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.14. Attaching any external fixtures or fittings to the
                      Vehicle is not allowed. You are not allowed to do any
                      repairs, replacement of any item of the Vehicle.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.15. The User will compensate the company for all damages
                      caused to the Vehicle. In case of accidents to the
                      Vehicle, the cost of towing the vehicle from the place of
                      accident to the service station and all other Amounts that
                      are not approved by the insurance company, which includes
                      damage to the property of third party and third party have
                      to be paid by the User.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.16. If the accident or damage to the vehicle has been
                      caused due to violation of any rules or riding
                      requirements mentioned herein, then the User has to give
                      the entire cost of repair of the vehicle, damages caused
                      to third parties and compensation required to be aid to
                      the victim.
                    </span>
                  </li>
                  <li>
                    <span>
                      4.17. If a confirmed Item/bike is unavailable post
                      confirmation of the order, We will inform you of such
                      unavailability, however, there would be times when such an
                      information would not be possible due to the fact it is
                      beyond our control. In which case:
                    </span>
                    <ol>
                      <li>
                        <span>
                          4.17.1. If You have made the payment: You will be
                          entitled to cancel the order and refund the amount
                          paid for the Services.
                        </span>
                      </li>
                      <li>
                        <span>
                          4.17.2. If You opted for Cash on Delivery: You will be
                          entitled to cancel the order.
                        </span>
                      </li>
                    </ol>
                  </li>
                </ol>
                <ol></ol>
              </li>
            </ol>
            <div className="py-10" id="5"></div>
            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  5. Trip Extension
                </Typography>
                <ol>
                  <li>
                    <span>
                      5.1. A Trip extension request is to be made at least 3
                      hour before the drop-off time. Such requests are to be
                      made to the Customer care, mobile app or Field executive
                      over the phone. The request will be confirmed or denied as
                      per the availability of bikes. In case the customer
                      doesn’t drop the bike in spite of a denied extension
                      request, penalty charges will be applicable. If you
                      suspect that you will be late, please extend your
                      reservation at gobikes.co.in to avoid the penalty. We will
                      not be able to extend if there's another confirmed
                      reservation for the period.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="6"></div>
            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  6. Fee Policy
                </Typography>
                <ol>
                  <li>
                    <span>
                      6.1. Late fee: The Vehicle must be returned no later than
                      the end time of the booking and the User is required to
                      terminate the booking. If the User returns the bike beyond
                      the time specified in the booking form he shall be charged
                      three day's rental as penalty. Late return would be
                      charged at ₹50/hour(Scooty), ₹100/hour(Bikes) in addition
                      to the hourly fee for use of the vehicle.
                    </span>
                  </li>
                  <li>
                    <span>
                      6.2. In case of minor damages to the helmet, the customer
                      is liable to pay a fine.
                    </span>
                  </li>
                  <li>
                    <span>
                      6.3. In case of damage to the two-wheeler on rent due to
                      accident/mishandling/carelessness, appropriate charges
                      will be calculated and the customer is liable to pay the
                      same along with the daily tariff until the bike is ready
                      for renting again.
                    </span>
                  </li>
                  <li>
                    <span>
                      6.4. In case of theft, the customer is liable to pay, in
                      full, the market rate of the two-wheeler.
                    </span>
                  </li>
                  <li>
                    <span>
                      6.5. In case of engine fault or failure, the customer
                      needs to contact the customer care or Field Executive
                      before getting any repairs done. The original printed
                      invoice is mandatory to claim reimbursement for the same.
                    </span>
                  </li>
                  <li>
                    <span>
                      6.6. For any cancellation or refund, it takes 7-10
                      business days for the refunded amount to reflect in your
                      bank account.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="7"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  7. No Agency
                </Typography>
                <ol>
                  <li>
                    <span>
                      7.1. User will never be deemed to be the company's agent,
                      servant, or employee in any manner for any purpose
                      whatsoever.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="8"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  8. Offers and Promotions
                </Typography>
                <ol>
                  <li>
                    <span>
                      8.1. The Company reserves the right to suspend your
                      account and/or revoke any and all promotions or credits at
                      any time if we feel they were earned inappropriately or in
                      violation of the applicable promo code terms or the terms
                      of service applicable to you. Offers and promotions
                      credits usage and validity terms and conditions can be
                      updated without any prior notice by the Company. The terms
                      and conditions valid while booking the bike will be
                      applicable and will precedent all previous terms and
                      conditions.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="9"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  9. Traffic Law/Applicable Law Violations
                </Typography>
                <ol>
                  <li>
                    <span>
                      9.1. The User is responsible for complying with all
                      applicable laws associated with driving the Vehicle, in
                      particular, the Safety Standards in relation to Motor
                      Vehicles in the jurisdiction where the trip is initiated
                      and where the Vehicle is driven during such trip.
                    </span>
                  </li>
                  <li>
                    <span>
                      9.2. The User is solely responsible for any traffic
                      violations incurred due to his/her use of a Vehicle given
                      by the Company. This includes, but is not limited to
                      parking, speeding, breaking red light, photo enforcement,
                      violation of helmet wearing rules and toll violations. The
                      User is responsible for communicating all such charges of
                      traffic violations to the Company while submitting the
                      Vehicle after the use, and the User is liable to pay all
                      costs from any such violation, including fines for late
                      payment and any processing fees added by the issuing
                      municipality, to the respective authority in their
                      personal capacity. The Company is not responsible to bear
                      such costs incurred on the part of the User. The User is
                      liable to pay all tolls and any fines for toll evasion.
                    </span>
                  </li>
                  <li>
                    <span>
                      9.3. The User shall forthwith pay the relevant fine/s to
                      the authority concerned and provide the Company with the
                      proof of such payment.
                    </span>
                  </li>
                  <li>
                    <span>
                      9.4. The User must not leave a vehicle in a zone which has
                      parking restrictions. If the User has left the Vehicle in
                      such a restricted zone, the User must immediately notify
                      the Company and the User will be responsible for any and
                      all violation notices or towing charges incurred by the
                      Company.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="10"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  10. Insurance/Liability
                </Typography>
                <ol>
                  <li>
                    <span>
                      10.1. User agrees that neither Company nor its group
                      companies, directors, officers or employee shall be liable
                      for any direct or/and indirect or/and incidental or/and
                      special or/and consequential or/and exemplary damages,
                      resulting from the use or/and the inability to use the
                      service or/and for cost of procurement of substitute goods
                      or/and services or resulting from any goods or/and data
                      or/and information or/and services purchased or/and
                      obtained or/and messages received or/and transactions
                      entered into through or/and from the service or/and
                      resulting from unauthorised access to or/and alteration of
                      user's transmissions or/and data or/and arising from any
                      other matter relating to the service, including but not
                      limited to, damages for loss of profits or/and use or/and
                      data or other intangible, even if Company has been advised
                      of the possibility of such damages. User further agrees
                      that Company shall not be liable for any damages arising
                      from interruption, suspension or termination of service,
                      including but not limited to direct or/and indirect or/and
                      incidental or/and special consequential or/and exemplary
                      damages, whether such interruption or/and suspension
                      or/and termination was justified or not, negligent or
                      intentional, inadvertent or advertent. User agrees that
                      Company shall not be responsible or liable to user, or
                      anyone, for the statements or conduct of any third party
                      of the service. In sum, in no event shall Company's total
                      liability to the User for all damages or/and losses or/and
                      causes of action exceed the amount paid by the User to
                      Company, if any, that is related to the cause of action.
                    </span>
                  </li>
                  <li>
                    <span>
                      10.2. The Company shall provide primary liability
                      protection, which is the extent of claims/ liabilities
                      covered by the Company's vehicle insurer, on the Vehicle
                      for claims and/or liabilities arising out of the use or
                      operation of the Vehicle by the User. If at any time it is
                      determined that losses will exceed the User’s coverage
                      provided by the Company, the Member will be responsible
                      for the excess amount and is liable to pay the excess
                      amount to the Company.
                    </span>
                  </li>
                  <li>
                    <span>
                      10.3. The User will be responsible for any associated
                      deductible personally attributable to the User.
                    </span>
                  </li>
                  <li>
                    <span>
                      10.4. The Company is not responsible for any damage to,
                      loss or theft of, any personal property belonging to the
                      User, regardless of fault or negligence.
                    </span>
                  </li>
                  <li>
                    <span>
                      10.5. Indemnification: The User indemnifies and holds the
                      Company, its parent and affiliates and their respective
                      directors, officers, employees, shareholders, agents,
                      attorneys, assigns and successors-in-interest, harmless
                      for all losses, liabilities, damages, injuries, claims,
                      demands, costs, attorney fees, and other expenses incurred
                      by the User due to the use or possession of the Vehicle by
                      the User and the User's non-compliance with this
                      agreement.
                    </span>
                  </li>
                  <li>
                    <span>
                      10.6. This Agreement is intended for the benefit of User
                      and the Company and no other party may claim rights
                      hereunder, whether as a third-party beneficiary or
                      otherwise. Under no circumstance will the Company be
                      liable to any third party for indirect, incidental,
                      special or consequential damages arising from or related
                      to this Agreement or use of the Vehicle and Service.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="11"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  11. Acceptable Website Use
                </Typography>
                <ol>
                  <li>
                    <span>
                      11.1. Security Rules: Visitors are prohibited from
                      violating or attempting to violate the security of the Web
                      site, including, without limitation, (1) accessing data
                      not intended for such user or logging into a server or
                      account which the user is not authorised to access, (2)
                      attempting to probe, scan or test the vulnerability of a
                      system or network or to breach security or authentication
                      measures without proper authorisation, (3) attempting to
                      interfere with service to any user, host or network,
                      including, without limitation, via means of submitting a
                      virus or "Trojan horse" to the Website, overloading,
                      "flooding", "mail bombing" or "crashing", or (4) sending
                      unsolicited electronic mail, including promotions and/or
                      advertising of products or services. Violations of system
                      or network security may result in civil or criminal
                      liability. The business and / or its associate entities
                      will have the right to investigate occurrences that they
                      suspect as involving such violations and will have the
                      right to involve, and cooperate with, law enforcement
                      authorities in prosecuting users who are involved in such
                      violations.
                    </span>
                  </li>
                  <li>
                    <span>
                      11.2. General Rules: Visitors may not use the Web Site in
                      order to transmit, distribute, store or destroy material
                      (a) that could constitute or encourage conduct that would
                      be considered a criminal offence or violate any applicable
                      law or regulation, (b) in a manner that will infringe the
                      copyright, trademark, trade secret or other intellectual
                      property rights of others or violate the privacy or
                      publicity of other personal rights of others, or (c) that
                      is libellous, defamatory, pornographic, profane, obscene,
                      threatening, abusive or hateful.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="12"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  12. Disclaimer of Consequential Damages
                </Typography>
                <ol>
                  <li>
                    <span>
                      12.1. In no event shall Company or any parties,
                      organisations or entities associated with the corporate
                      brand name us or otherwise, mentioned at this Website be
                      liable for any damages whatsoever (including, without
                      limitations, incidental and consequential damages, lost
                      profits, or damage to computer hardware or loss of data
                      information or business interruption) resulting from the
                      use or inability to use the Website and the Website
                      material, whether based on warranty, contract, tort, or
                      any other legal theory, and whether or not, such
                      organisation or entities were advised of the possibility
                      of such damages.
                    </span>
                  </li>
                  <li>
                    <span>
                      12.2. None of the content may be downloaded, copied,
                      reproduced, transmitted, stored, sold or distributed
                      without the prior written consent of the copyright holder.
                      This excludes the downloading, copying and/or printing of
                      pages of the Website for personal, non-commercial home use
                      only.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="13"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  13. Intellectual Property Rights
                </Typography>
                <ol>
                  <li>
                    <span>
                      13.1. None of the content may be downloaded, copied,
                      reproduced, transmitted, stored, sold or distributed
                      without the prior written consent of the copyright holder.
                      This excludes the downloading, copying and/or printing of
                      pages of the Website for personal, non-commercial home use
                      only.
                    </span>
                  </li>
                  <li>
                    <span>
                      13.2. General Rules: Visitors may not use the Web Site in
                      order to transmit, distribute, store or destroy material
                      (a) that could constitute or encourage conduct that would
                      be considered a criminal offence or violate any applicable
                      law or regulation, (b) in a manner that will infringe the
                      copyright, trademark, trade secret or other intellectual
                      property rights of others or violate the privacy or
                      publicity of other personal rights of others, or (c) that
                      is libellous, defamatory, pornographic, profane, obscene,
                      threatening, abusive or hateful.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="14"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  14. Dispute Resolution/Arbitration
                </Typography>
                <ol>
                  <li>
                    <span>
                      14.1. In the event of any dispute or difference arising
                      between the parties with regard to the rights and
                      obligation under this agreement or as to any claim,
                      monetary or otherwise or as to the interpretation and
                      effect of any terms and conditions of this agreement, the
                      same shall be referred to arbitration; and such
                      Arbitration shall be governed by the Indian Arbitration
                      and Conciliation Act, 1996 for the time being in force.
                      The venue for such Arbitration shall be Delhi, India.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="15"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  15. Governing Law and Jurisdiction
                </Typography>
                <ol>
                  <li>
                    <span>
                      15.1. These terms and conditions and any disputes or
                      claims arising out of or in connection with its subject
                      matter are governed by and construed in accordance with
                      the laws of India and the Courts of Bangalore shall be the
                      competent court of jurisdiction.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
            <div className="py-10" id="16"></div>

            <ol>
              <li className="tc_card">
                <Typography
                  variant="span"
                  fontWeight={"bold"}
                  className="tc_title"
                  id="tc_header"
                >
                  16. Entire Agreement
                </Typography>
                <ol>
                  <li>
                    <span>
                      16.1. This Agreement contains the entire agreement between
                      the parties relating to the subject matter hereof and
                      supersedes any and all prior agreements or understandings,
                      written or oral, between the parties relating to the
                      subject matter hereof. No modification of this Agreement
                      shall be valid unless made in writing and signed by both
                      parties hereto. The Hirer read and understood the above
                      terms and Agree to abide by it.
                    </span>
                  </li>
                </ol>
              </li>
            </ol>
          </Box>
        </div>
      </div>
      {isMatchDown ? <MobileFooter /> : <DynamicFooter />}
    </>
  );
};

export default TermsCondition;
