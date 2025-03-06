import React from "react";
import { Divider, Typography } from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the timeline component styles
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
import { GiLightBulb } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";

// Import the CSS file for the animation
import "./Experience.css"; 

const experiences = [
  {
    company: "Co.Lab joincolab.io",
    role: "AI Product Manager",
    duration: "Jan 2025 - Present",
    location: "Canada",
    details: [
      "Selected among the top 10% of 2,000+ applicants.",
      "Awarded a fully funded scholarship for a 14-week AI Bootcamp.",
      "Led the development of an AI-driven product concept, defining the problem statement, use cases, and go-to-market strategy.",
      "Conducted user research and gathered data-driven insights, leading to a 25% improvement in user engagement.",
      "Collaborated with engineers and designers to develop a prototype using AI/ML technologies."
    ],
    icon: <AiOutlineRobot />,
  },
  {
    company: "Vosyn",
    role: "Scrum Master Intern",
    duration: "Sep 2024 - Jan 2025",
    location: "Etobicoke, Ontario, Canada",
    details: [
      "Applied Agile methodologies like Scrum, Kanban, and Lean.",
      "Reduced impediment resolution time from 3 days to 1 day.",
      "Implemented process improvement initiatives, increasing team productivity by 30%.",
      "Facilitated Agile ceremonies including sprint planning and retrospectives.",
      "Developed training sessions to enhance Agile adoption, improving cross-functional collaboration by 40%."
    ],
    icon: <IoIosStats />,
  },
  {
    company: "Co.Lab joincolab.io",
    role: "Product Manager Apprentice",
    duration: "Apr 2024 - May 2024",
    location: "Canada",
    details: [
      "Managed the product backlog, defining feature requirements aligned with stakeholder feedback.",
      "Collaborated with designers, developers, and stakeholders to define product vision and roadmap.",
      "Conducted market research and competitive analysis, leading to an 80% increase in customer satisfaction.",
      "Developed wireframes and prototypes, reducing time-to-market by 20%.",
      "Presented key findings and insights to stakeholders, influencing strategic product decisions."
    ],
    icon: <GiLightBulb />,
  },
  {
    company: "FB Canada Express",
    role: "Operations Supervisor",
    duration: "Oct 2022 - Apr 2024",
    location: "Mississauga, Ontario, Canada",
    details: [
      "Managed a team of 60+ associates, improving workflow efficiency by 60-65%.",
      "Streamlined customs and clearing processes, reducing processing time by 85%.",
      "Collaborated with Amazon, Canada Post, and Purolator to improve on-time deliveries by 20-30%.",
      "Optimized warehouse operations, reducing fulfillment errors by 35% through automation.",
      "Implemented real-time reporting dashboards, enhancing operational decision-making."
    ],
    icon: <FaBriefcase />,
  },
  {
    company: "FB Canada Express",
    role: "Logistics Coordinator",
    duration: "May 2022 - Sep 2022",
    location: "Mississauga, Ontario, Canada",
    details: [
      "Coordinated inbound and outbound logistics, reducing shipment delays by 40%.",
      "Implemented tracking systems, improving shipment visibility and reducing lost parcels by 20%.",
      "Negotiated better shipping rates with carriers, cutting costs by 15%.",
      "Improved communication between logistics teams, resolving shipment discrepancies faster.",
      "Developed a reporting framework for shipment analytics, improving decision-making."
    ],
    icon: <MdLocalShipping />,
  }
];

const Experience: React.FC = () => {
  return (
    <div
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        color: "white",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        style={{ fontWeight: "bold", marginBottom: "80px", color: "white" }}
        gutterBottom
      >
        Experience
      </Typography>

      <VerticalTimeline lineColor="#E4D3BC" layout="2-columns">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            iconStyle={{
              background: "#5A4B42",  // New background color
  color: "#E4D3BC", 
            }}
            icon={exp.icon}
            contentArrowStyle={{
              borderRight: "7px solid #fff",
            }}
            dateClassName="date"
          >
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                color: "#5A4B42",
              }}
            >
              {exp.role}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                color: "#5A4B42",
              }}
            >
              {exp.company}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "#5A4B42",
              }}
            >
              {exp.duration}
            </Typography>
            <Divider style={{ margin: "1rem 0", backgroundColor: "#E4D3BC" }} />
            <ul style={{ textAlign: "left", paddingLeft: "2rem" }}>
              {exp.details.map((detail, index) => (
                <li key={index} style={{ marginBottom: "1rem" }}>
                  <Typography variant="body1" style={{ fontSize: "1rem" }}>
                    {detail}
                  </Typography>
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
