import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Chip,
  Box,
  Avatar,
} from "@mui/material";
import { FaRegHandshake } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

const volunteerWork = [
  {
    organization: "PRofessionals & Coffee (PR & Coffee)",
    role: "Public Relations",
    duration: "Feb 2025 - Present · 1 mo",
    description:
      "Building public relations strategies, managing social media outreach, and organizing networking events for the company.",
    skills: ["PR Strategy", "Networking", "Communication"],
    icon: <FaRegHandshake />,
    offset: 1.6,
  },
  {
    organization: "JK Total Washing and Cleaning Solutions",
    role: "Product Manager/Scrum Master",
    duration: "Mar 2024 - Oct 2024 · 8 mos",
    description:
      "Coordinated with an agile technical team using Azure, Docker, SQL, MongoDB, React, Node.Js to drive project efficiency and communication.",
    skills: [
      "Agile Methodologies",
      "Leadership",
      "Jira",
      "Figma",
      "React",
      "Docker",
    ],
    icon: <SiReact />,
    offset: 1.8,
  },
  {
    organization: "St. James Town Community Corner",
    role: "Ambassador",
    duration: "Jan 2021 - Aug 2021 · 8 mos",
    description:
      "Worked with the community, leading initiatives that improved social services and facilitated local events for residents.",
    skills: ["Community Outreach", "Social Services", "Leadership"],
    icon: <FaRegHandshake />,
    offset: 1.6,
  },
];

const Volunteering: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <ParallaxLayer offset={-2} speed={-0.27} style={{ zIndex: -1 }}>
        <img
          src={"/assets/v2.png"}
          style={{ display: "block", width: "20%", marginLeft: "40%" }}
        />
      </ParallaxLayer>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "80px", zIndex: 9999 }}
        gutterBottom
      >
        Volunteering & Social Impact
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {volunteerWork.map((work, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <ParallaxLayer
                offset={work.offset}
                speed={0.3}
                key={index}
                style={{ zIndex: 1, position: "relative" }}
              >
                <Card
                  sx={{
                    background: "linear-gradient(145deg, #fff, #E4D3BC)",
                    borderRadius: "15px",
                    boxShadow: "4px 4px 15px rgba(90, 75, 66, 0.2)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "6px 6px 20px rgba(90, 75, 66, 0.3)",
                    },
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ backgroundColor: "#8B6F4D", color: "#fff" }}
                      >
                        {work.icon}
                      </Avatar>
                    }
                    title={
                      <Typography
                        variant="h6"
                        sx={{ color: "#5A4B42", fontWeight: "600" }}
                      >
                        {work.role}
                      </Typography>
                    }
                    subheader={
                      <Typography variant="body2" sx={{ color: "#7A6655" }}>
                        {work.organization}
                      </Typography>
                    }
                    sx={{
                      backgroundColor: "#E4D3BC",
                      color: "#5A4B42",
                      borderTopLeftRadius: "15px",
                      borderTopRightRadius: "15px",
                      padding: "16px",
                    }}
                  />
                  <CardContent sx={{ padding: "16px" }}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ color: "#5A4B42" }}
                    >
                      {work.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      paragraph
                    >
                      <strong>{work.duration}</strong>
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {work.skills.map((skill, idx) => (
                        <Chip
                          key={idx}
                          label={skill}
                          sx={{
                            backgroundColor: "#C8A97E",
                            color: "#fff",
                            borderRadius: "20px",
                            padding: "5px 15px",
                            "&:hover": {
                              backgroundColor: "#B08B6D",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </ParallaxLayer>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Volunteering;
