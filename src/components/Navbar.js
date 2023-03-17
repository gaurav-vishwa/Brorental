import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            component="img"
            sx={{
              height: 50,
              ml: 10,
            }}
            alt="Your logo."
            src={logo}
          />
          <Box
            sx={{
              mr: 10,
            }}
          >
            <Typography variant="h6" component="div" sx={{ color: "black" }}>
              <Link>
                <Button
                  sx={{ color: "black", marginLeft: "auto" }}
                  color="primary"
                >
                  List your Vehicle
                </Button>
              </Link>

              <Button sx={{ color: "black" }} color="primary">
                Login
              </Button>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
