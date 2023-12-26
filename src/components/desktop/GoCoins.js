import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

export default function Booking() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: "8px",
          boxShadow: "2",
        }}
      >
        <div style={{ padding: "3%" }}>
          <Typography variant="h5" sx={{ fontWeight: "regular" }}>
            Wallet
          </Typography>
          <Typography variant="p" sx={{ fontSize: "18px" }}>
            Manage your wallet
          </Typography>
          <hr style={{ marginTop: "2%" }} />
          <div style={{ marginTop: "2%" }}>
            <Typography variant="h5" sx={{ fontWeight: "regular" }}>
              Bro-Coins
            </Typography>
            <Typography variant="p" sx={{ fontSize: "18px" }}>
              Quick and convienient way to pay and refund
            </Typography>
          </div>
          <Box
            sx={{
              width: "100%",
              boxShadow: "2",
              alignItems: "center",
              justifyContent: "spaceBetween",
              marginTop: "20px",
              borderRadius: "8px",
              border: "1px solid #fafafa",
              backgroundColor: "#f3f3f4",
            }}
          >
            <div style={{ padding: "36px" }}>
              <Typography variant="p" sx={{ fontWeight: "medium" }}>
                Total Balance Available
              </Typography>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                <IconButton sx={{ color: "black" }}>
                  <AccountBalanceWalletOutlinedIcon />
                </IconButton>
                <Typography variant="p">0</Typography>
              </div>
            </div>
          </Box>
          <Button
            sx={{
              width: "100%",
              py: 1,
              color: "#ffffff",
              bgcolor: "#59CE8F",
              textAlign: "center",
              m: "auto",
              ":hover": { bgcolor: "#36b671" },
              mt: 4,
              fontSize: 20,
            }}
          >
            {" "}
            Add Money to Wallet
          </Button>
          <div style={{ marginTop: "2%" }}>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Please Note
            </Typography>
            <ul>
              <li>
                Bro-Coins can not be cancelled or transferred to another
                account.
              </li>
              <li>
                It can not be withdrawn in the form of cash or transferred to
                any bank account.
              </li>
              <li>It can not be used to purchase Gift Cards.</li>
              <li>
                Net-banking and credit/debit cards issued in India can be used
                for Bro-Coins Topup
              </li>
              <li>Credits have an expiry. Check FAQs for more details.</li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
}
