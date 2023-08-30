import React from "react";
import buildingImg from "../assets/building.png";
import building2Img from "../assets/building2.png";
import storeImg from "../assets/store.png";
import gasStationImg from "../assets/gas-station.png";
import archivesImg from "../assets/archives.png";
import healthCareImg from "../assets/healthcare.png";
import lawImg from "../assets/law.png";
import managementImg from "../assets/management.png";
import moneyImg from "../assets/money.png";
import schoolImg from "../assets/school.png";
import teamImg from "../assets/team.png";
import voteImg from "../assets/vote.png";
import { Box, Grid, Typography } from "@mui/material";
import Service from "./Service";

function Services() {
  let services = [
    {
      serviceImg: buildingImg,
      serviceText: "الاصول الثابته",
    },

    {
      serviceImg: storeImg,
      serviceText: "المخزون",
    },

    {
      serviceImg: moneyImg,
      serviceText: "الحسابات",
    },

    {
      serviceImg: managementImg,
      serviceText: "الادارة",
    },

    {
      serviceImg: voteImg,
      serviceText: "التصويت",
    },

    {
      serviceImg: lawImg,
      serviceText: "محاماه",
    },

    {
      serviceImg: building2Img,
      serviceText: "عقارات",
    },

    {
      serviceImg: teamImg,
      serviceText: "شئون الموظفين",
    },

    {
      serviceImg: gasStationImg,
      serviceText: "المحطات",
    },

    {
      serviceImg: healthCareImg,
      serviceText: "التامين الطبى",
    },

    {
      serviceImg: archivesImg,
      serviceText: "الارشيف",
    },
    {
      serviceImg: schoolImg,
      serviceText: "المدارس",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item md={8} xs={12} sx={{zIndex: "5000"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Typography variant="h1">Raito</Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: 16, sm: 25 }, color: "#14a7c0" }}
          >
            انظمة رايتو للمحاسبة
          </Typography>
        </Box>
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              rowGap: 5,
              columnGap: 8,
              flexWrap: "wrap",
              mt: 5,
              mx: "auto",
            }}
          >
            {services.map((service, index) => (
              <Service
                key={index}
                serviceImg={service.serviceImg}
                serviceText={service.serviceText}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
