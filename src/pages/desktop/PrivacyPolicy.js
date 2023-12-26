import React from "react";
import { Box, Typography } from "@mui/material";
import PreLoginNavbar from "../../layouts/desktop/PreLoginNavbar";
import PostLoginFooter from "../../layouts/desktop/PostLoginFooter";
import DynamicNavbar from "../../layouts/desktop/DynamicNavbar";
import DynamicFooter from "../../layouts/desktop/DynamicFooter";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFooter from "../../layouts/mobile/MobileFooter";
import DynamicMobileNavbar from "../../layouts/mobile/DynamicMobileNavbar";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? <DynamicMobileNavbar /> : <DynamicNavbar />}
      <Box sx={{ px: { md: "50px", xs: "15px" }, mt: 5 }}>
        <Typography variant="h4" textAlign={"center"} sx={{ px: "5px", mb: 3 }}>
          Privacy Policy
        </Typography>
        <Box
          sx={{
            padding: "25px",
            bgcolor: "#f1f8ed",
            borderRadius: "15px",
            marginBottom: "24px",
          }}
        >
          <Typography variant="p">
            GoBikes ("us", "we", or "our") operates the gobikes.co.in website
            and the GoBikes mobile application (the "Service").
            <br />
            GoBikes Automotive Pvt. Ltd. is a company duly registered and
            incorporated under the companies Act,2008. It is registered whose
            address is at no. Top floor, C-78, E-3, Jvts Garden Chattarpur New
            Delhi, DELHI, South West Delhi, Delhi, 110074. GoBikes Automotive
            Pvt. Ltd. owns and operates https://gobikes.co.in that is a website
            for booking two wheelers on rent/lease for short term as well as for
            long term. This document is published and shall be construed in
            accordance with the provisions of the Information Technology
            (reasonable security practices and procedures and sensitive personal
            data of information) rules, 2011 under Information Technology Act,
            2000; that require publishing of the Privacy Policy for collection,
            use, storage and transfer of sensitive personal data or information.
            Please read this Privacy Policy carefully by using the Website, you
            indicate that you understand, agree and consent to this Privacy
            Policy. If you do not agree with the terms of this Privacy Policy,
            please do not use this Website. By providing us your Information or
            by making use of the facilities provided by the Website, You hereby
            consent to the collection, storage, processing and transfer of any
            or all of Your Personal Information and Non-Personal Information by
            us as specified under this Privacy Policy. You further agree that
            such collection, use, storage and transfer of Your Information shall
            not cause any loss or wrongful gain to you or any other person.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "25px",
            bgcolor: "#f1f8ed",
            borderRadius: "15px",
            marginBottom: "24px",
          }}
        >
          <Typography variant="p">
            By registering at Gobikes you agree to following terms and
            conditions:
            <br />
            <br />
            <Typography sx={{ px: "25px" }}>
              1. GoBikes Automotive Pvt. Ltd. operates https://gobikes.co.in
              which is a platform for renting two wheelers. In order to book two
              wheelers from our platform, Customers need to signup or login by
              providing details like Full name, Mobile number, Email id,
              Password, Emergency contact number along with the relationship,
              blood type. By registering at GoBikes, You accept all the Terms
              and conditions and the privacy policy and you take full
              responsibility for every activities occurred under your name.
              <br />
              <br />
              2. We expect to keep your personal data safe and suggest you not
              to share with anyone. You will not pretend to be someone else or
              create fake accounts or multiple accounts.
              <br />
              <br />
              3. Information Collection And Use: We collect several different
              types of information for various purposes to provide and improve
              our Service to you.
              <br />
              <br />
              4. Types of Data Collected - Personal Data. While using our
              Service, we may ask you to provide us with certain personally
              identifiable information that can be used to contact or identify
              you ("Personal Data"). Personally identifiable information may
              include, but is not limited to:
              <br />
              <Typography variant="p">
                4.1 Email address
                <br />
                <br />
                4.2 First name and last name
                <br />
                <br />
                4.3 Phone number
                <br />
                <br />
                4.4 Employer
                <br />
                <br />
                4.5 College Name
                <br />
                <br />
                4.6 Address, State, Province, ZIP/Postal code, City
                <br />
                <br />
                4.7 Cookies and Usage Data
                <br />
                <br />
                4.8 Usage Data
                <br />
                <br />
              </Typography>
              5. Unique identifiers (such as membership number or email
              addresses) are collected from website visitors to verify the
              user's identity and for use as account numbers in our record
              system. Financial information (such as their bank account or
              credit card numbers) is collected and used where appropriate to
              bill the customer for services.
              <br />
              <Typography variant="p">
                5.1 You can update your personal details by accessing your
                account Profile page and making any necessary changes; this will
                update your details across all services that you have or will
                use at GoBikes.
                <br />
                5.2 GoBikes will not use or share the Personally Identifiable
                Information collected on our website in ways unrelated to the
                purpose for which you provided the information without providing
                you with a choice whether to permit any such unrelated uses.
                GoBikes does not sell, trade, or rent to others the Personally
                Identifiable Information we collect.
                <br />
                5.3 GoBikes seeks to ensure that your information and
                preferences are accurate and complete and ensure that we don't
                hold personal information any longer than is necessary. If you
                wish to view or change your information, where possible you may
                do this online. Alternatively by sending an email with your
                name, full mailing address, email address, and relevant
                information about subscriptions and registrations you have with
                us to the customer support team at info@gobikes.co.in.
                <br />
                5.4 We collect Personally Identifiable Information when you ask
                to receive e-newsletters, promotional emails, and other
                information. We use this information to provide you with the
                information you requested. You may opt-out of receiving future
                mailings dropping us an email at info@gobikes.co.in.
                <br />
                5.5 Our primary goal in collecting information is to provide
                customers with a better service and to provide all visitors a
                smooth, efficient, and personalised experience while using our
                website. If you contact us, we may keep a record of your
                correspondence or comments. We use this information to help us
                provide better service in the event that you contact us again.
                <br />
                5.6 To use some of our services such as the "shopping cart" and
                the log on process, we use cookies. A "cookie" is a small data
                file created by your web browser and stored on your computer's
                hard drive. Some of the information collected also permits us to
                analyse traffic patterns on our website. This can enable us over
                time to provide you with a better experience on our website by
                improving the content and making it easier to use.
                <br />
                5.7 These terms and/or your use of the website shall be governed
                by and construed in accordance with Indian law and the Indian
                Courts shall have exclusive jurisdiction over any dispute which
                may arise.
                <br />
                5.8 GoBikes acknowledges your trust and is committed to
                protecting the information you provide. To prevent unauthorised
                access, maintain accuracy, and ensure proper use of information,
                we employ physical, electronic, and managerial processes to
                safeguard and secure the information we collect online. Our site
                has security measures in place to protect against the loss,
                misuse and alteration of the information under our control.
                These include but are not limited to a secured database
                containing personal data. The database is located off the main
                web server and is not accessible directly. Whilst we will use
                all reasonable efforts to safeguard your personal data, you
                acknowledge that the use of the internet is not entirely secure
                and for this reason we cannot guarantee the security or
                integrity of any personal data in transit from you or to you via
                the internet.
                <br />
                5.9 If you breach these or any of our other terms and conditions
                we reserve the right to close your account, if we do so, we may
                close all accounts you have open in your name.
                <br />
              </Typography>
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "25px",
            bgcolor: "#f1f8ed",
            borderRadius: "15px",
            marginBottom: "24px",
          }}
        >
          <Typography variant="h6">User Information</Typography>
          <Typography variant="p">
            To avail certain services on our Websites, users are required to
            provide certain information for the registration process namely:
            <br />
            <Typography variant="p">
              1. Name
              <br />
              2. Email address
              <br />
              3. Sex
              <br />
              4. Age
              <br />
              5. PIN code
              <br />
              6. Credit card or Debit card details
              <br />
              7. Medical records and history
              <br />
              8. Sexual orientation
              <br />
              9. Biometric information
              <br />
              10. Password
              <br />
              11. Occupation, interests, and the like
              <br />
            </Typography>
            The Information as supplied by the users enables us to improve our
            sites and provide you the most user-friendly experience. All
            required information is service dependent and we may use the above
            said user information to, maintain, protect, and improve its
            services (including advertising services) and for developing new
            services Such information will not be considered as sensitive if it
            is freely available and accessible in the public domain or is
            furnished under the Right to Information Act, 2005 or any other law
            for the time being in force.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "25px",
            bgcolor: "#f1f8ed",
            borderRadius: "15px",
            marginBottom: "24px",
          }}
        >
          <Typography variant="h6">Cookies</Typography>
          <Typography variant="p" sx={{ px: "20px" }}>
            To improve the responsiveness of the sites for our users, we may use
            "cookies" or similar electronic tools to collect information to
            assign each visitor a unique, random number as a User Identification
            (User ID) to understand the user's individual interests using the
            Identified Computer. Unless you voluntarily identify yourself
            (through registration, for example), we will have no way of knowing
            who you are, even if we assign a cookie to your computer. The only
            personal information a cookie can contain is information you supply
            (an example of this is when you ask for our Personalised Horoscope).
            A cookie cannot read data off your hard drive. Our advertisers may
            also assign their own cookies to your browser (if you click on their
            ads), a process that we do not control.
            <br />
            Our web servers automatically collect limited information about your
            computer's connection to the Internet,including your IP address,
            when you visit our site. (Your IP address is a number that lets
            computers attached to the Internet know where to send you data --
            such as the web pages you view.) Your IP address does not identify
            you personally. We use this information to deliver our web pages to
            you upon request, to tailor our site to the interests of our users,
            to measure traffic within our site and let advertisers know the
            geographic locations from where our visitors come.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "25px",
            bgcolor: "#f1f8ed",
            borderRadius: "15px",
            marginBottom: "24px",
          }}
        >
          <Typography variant="h6">Links to the other sites</Typography>
          <Typography variant="p" sx={{ px: "20px" }}>
            Our policy discloses the privacy practices for our own web site
            only. Our site provides links to other websites also that are beyond
            our control. We shall in no way be responsible in way for your use
            of such sites.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "25px",
            bgcolor: "#f1f8ed",
            borderRadius: "15px",
            marginBottom: "24px",
          }}
        >
          <Typography variant="h6">Information Sharing</Typography>
          <Typography variant="p">
            We shares the sensitive personal information to any third party
            without obtaining the prior consent of the user in the following
            limited circumstances:
            <br />
            <Typography variant="p">
              1. When it is requested or required by law or by any court or
              governmental agency or authority to disclose,for the purpose of
              verification of identity, or for the prevention, detection,
              investigation including cyber incidents, or for prosecution and
              punishment of offences. These disclosures are made in good faith
              and belief that such disclosure is reasonably necessary for
              enforcing these Terms; for complying with the applicable laws and
              regulations.
              <br />
              <br />
              2. We proposes to share such information within its group
              companies and officers and employees of such group companies for
              the purpose of processing personal information on its behalf. We
              also ensure that these recipients of such information agree to
              process such information based on our instructions and in
              compliance with this Privacy Policy and any other appropriate
              confidentiality and security measures.
            </Typography>
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "25px",
            bgcolor: "#f1f8ed",
            borderRadius: "15px",
            marginBottom: "24px",
          }}
        >
          <Typography variant="h6">
            Information Security
            <br />
          </Typography>
          <Typography variant="p" sx={{ px: "20px" }}>
            We take appropriate security measures to protect against
            unauthorized access to or unauthorized alteration, disclosure or
            destruction of data. These include internal reviews of our data
            collection, storage and processing practices and security measures,
            including appropriate encryption and physical security measures to
            guard against unauthorized access to systems where we store personal
            data.
            <br />
            <br />
            All information gathered on our Website is securely stored within
            our controlled database. The database is stored on servers secured
            behind a firewall; access to the servers is password-protected and
            is strictly limited. However, as effective as our security measures
            are, no security system is impenetrable. We cannot guarantee the
            security of our database, nor can we guarantee that information you
            supply will not be intercepted while being transmitted to us over
            the Internet. And, of course, any information you include in a
            posting to the discussion areas is available to anyone with Internet
            access.
            <br />
            <br />
            However the internet is an ever evolving medium. We may change our
            Privacy Policy from time to time to incorporate necessary future
            changes. Of course, our use of any information we gather will always
            be consistent with the policy under which the information was
            collected, regardless of what the new policy maybe.
            <br />
          </Typography>
        </Box>
      </Box>
      <div style={{ marginTop: "10%" }}></div>
      {isMatch ? <MobileFooter /> : <DynamicFooter />}
    </>
  );
};

export default PrivacyPolicy;
