import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const PreLoginFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };
  return (
    <Box sx={{ bgcolor: "#d6fbe6" }}>
      <Box sx={{ mt: 20 }} className="relative z-50">
        <Box
          sx={{
            bgcolor: "#d6fbe6",
            display: "flex",
            justifyContent: "end",
            alignContent: "flex-start",
            pt: 2,
            px: 2,
          }}
        >
          <Button onClick={scrollToTop}>
            <ArrowUpwardIcon sx={{ color: "#59CE8F" }} />
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "#d6fbe6",
            display: "inline-flex",
            justifyContent: "space-evenly",
            width: "100%",

            pb: 10,
          }}
        >
          <Link to="/">
            <Box
              component="img"
              sx={{
                height: 50,
              }}
              alt="Your logo."
              src={logo}
            />
          </Link>
          <Box sx={{}}>
            <Link to="/ContactUs">
              <Typography sx={{ color: "#000000", mb: 2 }}>
                Contact Us
              </Typography>
            </Link>
            <Link to="/PrivacyPolicy">
              <Typography sx={{ color: "#000000", mb: 2 }}>
                Privacy Policy
              </Typography>
            </Link>
            <Link to="/TermsCondition">
              <Typography sx={{ color: "#000000" }}>
                Terms and Conditions
              </Typography>
            </Link>
          </Box>
          <Box sx={{}}>
            <Link to="/OffersForYou">
              <Typography sx={{ color: "#000000", mb: 2 }}>Offers</Typography>
            </Link>
            <Link to="/ListYourVehicle">
              <Typography sx={{ color: "#000000", mb: 2 }}>
                List Your Vehicle
              </Typography>
            </Link>
            <Link to="/FAQs">
              <Typography sx={{ color: "#000000" }}>FAQs</Typography>
            </Link>
          </Box>
          <Box sx={{}}>
            <Link to="/AboutUs">
              <Typography sx={{ color: "#000000", mb: 2 }}>About Us</Typography>
            </Link>
            <button
              // sx={{ color: "#000000" }}
              onClick={() => (window.location = "mailto:service@strugend.com")}
            >
              {" "}
              service@strugend.com
            </button>{" "}
            <Box sx={{ color: "#000000", mt: 2 }}>
              <a className="text-pink-900" href="tel:+917328834913">
                <Typography sx={{ color: "#000000", mb: 2 }}>
                  +91 7328834913
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "#d6fbe6",
            display: "inline-flex",
            justifyContent: "space-evenly",
            width: "100%",

            py: 5,
          }}
        >
          <Box sx={{}}>
            <Typography>Bike on rent in Agra</Typography>
            <Typography>Bike on rent in Ahmedabad</Typography>
            <Typography>Bike on rent in Bangalore</Typography>
            <Typography>Bike on rent in Chandigarh</Typography>
            <Typography>Bike on rent in Chennai</Typography>
            <Typography>Monthly Bike Rental</Typography>
          </Box>
          <Box sx={{}}>
            <Typography>Bike on rent in Dehradun</Typography>
            <Typography>Bike on rent in Delhi</Typography>
            <Typography>Bike on rent in Ghaziabad</Typography>
            <Typography>Bike on rent in Gos</Typography>
            <Typography>Bike on rent in Gurgaon</Typography>
            <Typography>Scooter Rental</Typography>
          </Box>
          <Box sx={{}}>
            <Typography>Bike on rent in Guwahati</Typography>
            <Typography>Bike on rent in Hyderabad</Typography>
            <Typography>Bike on rent in Jaipur</Typography>
            <Typography>Bike on rent in Kolkata</Typography>
            <Typography>Bike on rent in Leh</Typography>
            <Typography>Two Wheeler for Rent</Typography>
          </Box>
          <Box sx={{}}>
            <Typography>Bike on rent in Manali</Typography>
            <Typography>Bike on rent in Mumbai</Typography>
            <Typography>Bike on rent in Noida</Typography>
            <Typography>Bike on rent in Pune</Typography>
            <Typography>Bike on rent in Udaipur</Typography>
            <Typography>Bike on rent in Vizag</Typography>
          </Box>
        </Box>
        <Box sx={{ bgcolor: "#d6fbe6" }}>
          <Box sx={{ py: 5, px: 20 }}>
            <Typography variant="h6">
              India: Popular For Iconic Monuments
            </Typography>{" "}
            <br />
            <Typography>
              The abundance of historic buildings in the country proves India's
              rich legacy. In terms of the number of World Heritage Sites, India
              is placed in the top 10 nations of the world. India has more than
              35 UNESCO World Heritage Sites. Among the most famous landmarks
              are the magnificent Taj Mahal, the Sun Temple, Qutub Minar, and
              the Hawa Mahal. Check out the amazing monuments India is known for
              if you are captivated by this nation. But make sure you take a
              scooty on rent in India to save time. Just Google scooter rental
              near me and numerous options will open before you. Choose the one
              you like the best and start your journey
            </Typography>
          </Box>
          <Box sx={{ py: 5, px: 20 }}>
            <Typography variant="h6">Places to visit in India</Typography>{" "}
            <br />
            <Typography>
              The Taj Mahal is one of the most stunning and well-known
              structures in India. This monument in Agra is one of the Seven
              Wonders of the World. A Mughal emperor by the name of Shahjahan
              built this monument with white marble in honor of his wife. You
              can get a bike on rent in India to visit this place. The Gateway
              of India is Mumbai's most popular landmark, which you can reach by
              taking a scooty on rent in India. It is a good gathering place for
              tourists, locals, street merchants, and photographers. But to
              visit more places in Mumbai, you should first search for bike
              rentals near me. In this way, you can enjoy beautiful views of
              Marine Drive and Juhu Beach in one day. Next, the other
              mesmerizing place is Hawa Mahal in Rajasthan. It is also known as
              the Palace of Winds and is located in Jaipur. The Maharaja Sawai
              Pratap Singh constructed it out of red and pink sandstones. If you
              love to eat tasty food while watching amazing monuments, plan a
              trip to Delhi. It has famous monuments like Qutub Minar, Red Fort,
              Jantar Mantar, and India Gate. But covering all these places on
              the weekend might be difficult. So, you can get a vehicle from
              bike rentals in India. The Sanchi Stupa, also known as the Great
              Stupa, is a revered Buddhist structure. It is located in Sanchi.
              Emperor Ashoka built this stone building in the center of India.
              However, it is inconvenient to reach here. Hence, you can book a
              bike on rent in India to avoid inconvenience. The leading bike on
              rental service providers has a vast collection of innumerable
              motorcycles and scooters from top brands. You can select the
              models as per your preference. If you are bothered whether or not
              the vehicles will be of good-quality, rest assured the top-ranking
              bike rental companies provide highly-maintained and well-serviced
              vehicles, guaranteeing an enjoying experience.
            </Typography>
          </Box>
          <Box sx={{ py: 5, px: 20 }}>
            <Typography variant="h6">Places to eat in India</Typography> <br />
            <Typography>
              There are several famous restaurants in India where you can get
              everything on a platter with a big smile. Bombay center is one
              such restaurant. So, type on Google bike rental near me while
              planning a visit to this restaurant. Reach this place to
              experience a good ambiance. You can't miss other restaurants in
              India: India Accent, Bomra's, Wasabi Artusi Ristorante Bar, and
              much more. All these places will provide a peaceful atmosphere and
              unique taste. They have something for all the food lovers.
            </Typography>
          </Box>
          <Box sx={{ py: 5, px: 20 }}>
            <Typography>
              Wrapping Up India is an absolutely stunning country for travelers.
              You can read this guide anytime if you have difficulty deciding on
              the perfect destination. Also, check the restaurant we've
              mentioned above. But book a bike on rent in India first to witness
              the hybrid of the country's rich tradition. The process is very
              simple,search scooty rentals near me online and visit the best
              rental company’s website.They have various cost-effective packages
              for daily, weekly or monthly rentals. Choose the one according to
              your needs and capacity. Thats it! Enjoy your trip to the fullest
              with the top-notch bike on rental services.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#ffffff",
          }}
        >
          <Typography sx={{ pl: 10 }}>
            {" "}
            © STRUGEND. All rights reserved.
          </Typography>
          <Box sx={{ pr: 10 }}>
            <Link to="https://www.instagram.com/strugend/">
              <InstagramIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
            <Link to="https://strugend.com/index.html">
              <TwitterIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100085408645437">
              <FacebookIcon sx={{ mx: 2, color: "#000000" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PreLoginFooter;
