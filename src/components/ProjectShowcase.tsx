import React from "react";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Project {
  title: string;
  description: string;
  image: string;
  learnMoreLink?: string;
  previewLink?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface ProjectShowcaseProps {
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          color: "white",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", marginTop: "50px", color: "white" }}
            gutterBottom
          >
            Projects I've Worked On
          </Typography>
        </motion.div>

        <div
          style={{
            padding: "4rem 2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            gap: "5rem",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                position: "relative",
                width: "fit-content",
                borderRadius: "15px",
              }}
            >
              {/* Full-size Background Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ opacity: 0.6 }} // Start with lower opacity
                animate={{ opacity: 0.8 }} // Animate to 0.8 smoothly
                transition={{ duration: 1.5 }} // Add a transition
                style={{
                  width: "60%",
                  borderRadius: "15px",
                  objectFit: "cover",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                }}
              />

              {/* Floating Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: "-50%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "8%",
                  background: "#fff",
                  color: "#333",
                  backdropFilter: "blur(15px)",
                  padding: "2rem",
                  borderRadius: "15px",
                  maxWidth: "450px",
                  boxShadow: "0 20px 20px rgba(0, 0, 0, 0.2)",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#555", marginBottom: "1rem" }}
                >
                  {project.description}
                </Typography>
                <div style={{ display: "flex", gap: "1rem" }}>
                  {project.learnMoreLink && (
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#ff4081",

                        color: "white",
                        fontWeight: "bold",
                      }}
                      onClick={() =>
                        window.open(project.learnMoreLink, "_blank")
                      }
                    >
                      Know More
                    </Button>
                  )}
                  {project.learnMoreLink && (
                    <Button
                      variant="outlined"
                      style={{
                        borderColor: "#ff4081",
                        color: "#ff4081",
                        fontWeight: "bold",
                      }}
                      onClick={() =>
                        window.open(project.learnMoreLink, "_blank")
                      }
                      endIcon={<OpenInNewIcon />}
                    >
                      Preview
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectShowcase;
