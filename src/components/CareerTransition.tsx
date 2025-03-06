import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import about from "../assets/about.png";
import cast from "../assets/cast.gif";
import cast2 from "../assets/cast2.png";
import CareerSummary from "./CareerSummary";

const CareerTransition: React.FC = () => {
  /* Animation Variants */
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          position: "relative",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          style={{ bottom: "0", position: "absolute", zIndex: 9999 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src={cast}
            alt="cast"
            style={{ width: "95vw", marginTop: "6vw" }}
          />
        </motion.div>
        {/* About Me Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          style={{
            bottom: "0",
            position: "absolute",
            zIndex: 9999,
            right: "0",
          }}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={cast2} alt="cast2" style={{ width: "15vw" }} />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src={about}
            alt="about"
            style={{ width: "80vw", marginTop: "10px" }}
          />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            marginTop: "-8vw",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              WebkitTextStroke: "1px #71614A",
              textShadow: "2px 2px 0px rgba(0, 0, 0, 0.5)",
              letterSpacing: "-0.08em",
              textAlign: "center",
              position: "absolute",
              zIndex: 2,
              fontSize: "10vw",
              color: "#E4D3BC",
              transform: "scaleY(1.3)", // Increase height by 1.5x
              transformOrigin: "center",
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            style={{
              maxWidth: "800px",
              lineHeight: "1.6",
              textAlign: "center",
              marginTop: "12vw",
              color: "#E4D3BC",
              fontSize: "1.1rem",
            }}
          >
            <CareerSummary />
          </Typography>
        </motion.div>

        {/* Career Transition Section */}
        {/* <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
            marginTop: "50px",
            // flexWrap: "wrap",
            backgroundImage: `url(${gif})`,
          backgroundSize: "cover",  // ✅ Ensures full coverage
          backgroundPosition: "center",  // ✅ Centers the image
          backgroundRepeat: "no-repeat",  // ✅ Prevents tiling
          }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card style={cardStyle}>
              <CardContent>
                <img src={fb} alt="Logistics Supervisor" style={imageStyle} />
                <Typography variant="h4" style={titleStyle}>
                  Logistics
                </Typography>
                <Typography variant="body2" style={textStyle}>
                  Streamlined processes and led cross-functional teams.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          <motion.img
            src={plane}
            alt="Transition GIF"
            style={{ width: "350px", height: "450px", borderRadius: "15px" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          />

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card style={cardStyle}>
              <CardContent>
                <img
                  src={tech}
                  alt="Product Manager"
                  style={{
                    ...imageStyle,
                    maxHeight: "130px",
                    objectFit: "contain",
                  }}
                />
                <Typography variant="h4" style={titleStyle}>
                  Product Manager
                </Typography>
                <Typography variant="body2" style={textStyle}>
                  Delivering innovative solutions by aligning customer needs
                  with business goals.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div> */}
      </div>
      {/* Certifications Section */}
      {/* <HallOfFame certifications={certifications} /> */}
      {/* <div  style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px",
          color: "white",
          margin: "0 auto",
         
        }}>
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
            Certifications
          </Typography>
        </motion.div>

        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginTop: "30px",
            zIndex: 9999,
          }}
          variants={fadeUp2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CardComponent
                image={cert.image}
                title={cert.name}
                content={cert.description}
              />
            </motion.div>
          ))}
        </motion.div>
        </div> */}
      {/* <ParallaxLayer offset={1} factor={2} speed={1} style={{ zIndex: 0 }}>
        <Canvas>
          <ambientLight intensity={0.9} />
          <Cloud
            position={[10, 0, -18]} // Top-left corner
            scale={0.8}
            opacity={0.6}
            speed={0.7}
          />
        </Canvas>
      </ParallaxLayer>

      <ParallaxLayer offset={1} factor={2} speed={0.8} style={{ zIndex: 0 }}>
        <Canvas>
          <ambientLight intensity={1.5} />
          <Cloud
            position={[-15, 10, -20]} // Top-left corner
            scale={0.8}
            opacity={0.6}
            speed={0.6}
          />
        </Canvas>
      </ParallaxLayer>

      <ParallaxLayer offset={1} factor={2} speed={1.2} style={{ zIndex: -1 }}>
        <Canvas>
          <ambientLight intensity={0.9} />
          <Cloud
            position={[-5, -15, -20]} // Top-left corner
            scale={0.8}
            opacity={0.6}
            speed={0.5}
          />
        </Canvas>
      </ParallaxLayer> */}
    </>
  );
};

export default CareerTransition;
