import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", sm: "space-between" },
        flexWrap: "wrap",
        mt: "80px",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box>
          <Facebook sx={{ fontSize: "35px", color: "#14a7c0" }} />
        </Box>

        <Box>
          <Twitter sx={{ fontSize: "35px", color: "#529d33" }} />
        </Box>

        <Box>
          <Instagram sx={{ fontSize: "35px", color: "#14a7c0" }} />
        </Box>
      </Box>
      <Box sx={{ mt: { sm: 3 } }}>
        <Typography
          variant="body1"
          sx={{ color: "#fff", fontSize: { xs: "14px", sm: "16px" } }}
        >
          جميع الحقوق محفوظة شركه{" "}
          <span style={{ color: "#14a7c0" }}>رايتو</span> &copy; 2020
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
