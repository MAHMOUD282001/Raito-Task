import { Box, Typography } from "@mui/material";
import React from "react";

function Service({ serviceImg, serviceText }) {
  return (
    <Box>
      <Box
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          border: "2px solid #14a7c0",
          borderTop: "10px solid #14a7c0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "content-box",
        }}
      >
        <img src={serviceImg} style={{ width: "70px", height: "70px" }} />
      </Box>

      <Typography variant="body2" sx={{ fontSize: 18, color: "#14a7c0", textAlign: "center" }}>
        {serviceText}
      </Typography>
    </Box>
  );
}

export default Service;
