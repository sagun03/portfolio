/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Cloud,
  Environment,
} from "@react-three/drei";
import Navbar from "./components/Navbar";
import CareerTransition from "./components/CareerTransition";
import sleekKartImage from "./assets/sleekKartImage.png";
import notionAIImage from "./assets/notionAIImage.png";
import ProjectShowcase from "./components/ProjectShowcase";
import Experience from "./components/Experience";
import Volunteering from "./components/Volunteering";
import PortfolioHeader from "./components/PortfolioHeader";
import HallOfFame from "./components/HallOfFame";
import cert1 from "./assets/cert1.png";
import cert2 from "./assets/cert2.png";
import cert3 from "./assets/cert3.png";
import cert4 from "./assets/cert4.png";
import cert5 from "./assets/cert5.png";
import cert6 from "./assets/cert6.png";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "AI Micro-Certification",
    image: cert6, // Replace cert6 with the appropriate image variable
    description:
      "Deeper understanding of AI technologies in product management by Product School",
  },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    image: cert2,
    description: "Deep understanding of Agile product ownership",
  },

  {
    name: "Product Manager Sprint Apprenticeship (Co.Lab)",
    image: cert4,
    description: "Hands-on experience in product development",
  },
  {
    name: "Google Project Management",
    image: cert3,
    description: "Project execution and leadership skills",
  },
  {
    name: "Certified Scrum Master (CSM)",
    image: cert1,
    description: "Agile & Scrum methodologies expert",
  },
  {
    name: "From Excel to SQL",
    image: cert5,
    description: "Transitioning from spreadsheets to database management",
  },
];

const projects = [
  {
    title: "Sleek Kart",
    description: `🔍 Sleekart revolutionizes the grocery shopping experience by introducing innovative bill scanning technology. This advanced feature allows users to effortlessly scan their entire grocery bill, enabling seamless tracking of purchases and enhanced convenience.`,
    image: sleekKartImage, // Image path
    learnMoreLink: "https://your-sleek-kart-project-link.com", // Optional link
  },
  {
    title: "Notion AI Enhancement",
    description: `🚀 How can AI simplify Notion user onboarding and workspace setup to create seamless experiences? How can AI simplify Notion user onboarding and workspace setup to create seamless experiences?`,
    image: notionAIImage, // Image path
    learnMoreLink: "https://your-notion-ai-project-link.com", // Optional link
  },
];

// Rotating Stars Component
function RotatingStars() {
  const starsRef = useRef(null!);
  useFrame((_, delta) => {
    if (starsRef.current) {
      (starsRef.current as any).rotation.y += delta * 0.2; // Slow rotation
    }
  });
  return (
    <Stars
      ref={starsRef}
      radius={200}
      depth={50}
      count={300000}
      factor={6}
      saturation={0}
      speed={1}
    />
  );
}

export default function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: "100%", height: "100%", background: "black" }}>
      <Navbar />
      <Parallax ref={parallax} pages={8}>
        {/* Page 1: Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ParallaxLayer offset={0} speed={0} factor={8} style={{ zIndex: -1 }}>
            <Canvas camera={{ position: [0, 0, 10] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <RotatingStars />
              <OrbitControls enableZoom={false} enableRotate={false} />
              <Environment preset="sunset" />
            </Canvas>
          </ParallaxLayer>
        </motion.div>

        {/* Parallax Layer with Cloud Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        >
          <ParallaxLayer
            offset={0}
            factor={2}
            speed={0.3}
            style={{ zIndex: 0 }}
          >
            <Canvas>
              <ambientLight intensity={0.9} />
              <Cloud
                position={[0, 2, 0]} // Top-right corner
                scale={0.6}
                opacity={0.8}
                speed={0.5}
              />
            </Canvas>
          </ParallaxLayer>
        </motion.div>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PortfolioHeader />
          {/* <div style={{ textAlign: "center", zIndex: 10 }}>
            <img
              src={profilePhot}
              alt="Profile"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "4px solid white",
                marginBottom: "1rem",
              }}
            />
            <h1>
              <Typewriter
                words={[
                  "Innovative Thinker",
                  "Product Manager",
                  "Creator of Impactful Solutions",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1500}
              />
            </h1>
            <p>
              Hi There! I'm passionate about turning creative ideas into
              impactful digital solutions.
            </p>
            <Button
              variant="contained"
              color="primary"
              style={{
                marginTop: "1rem",
                backgroundColor: "#ff4081",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              View My Projects
            </Button>
          </div> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.99}
          factor={2}
          speed={1.2}
          style={{ zIndex: 0 }}
        >
          <Canvas>
            <ambientLight intensity={0.6} />
            <Cloud
              position={[-20, 4, -30]} // Top-left corner
              scale={0.8}
              opacity={0.6}
              speed={0.3}
            />
          </Canvas>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 0 }}>
          <CareerTransition />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ zIndex: 0 }}>
          <HallOfFame certifications={certifications} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3} // Adjusted to match the new layout
          speed={0.5}
          factor={1}
          style={{ zIndex: 0 }}
        >
          <ProjectShowcase projects={projects} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.1}
          speed={0.8}
          factor={3}
          style={{ zIndex: 0 }}
        >
          <Experience />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6} // Adjusted to match the new layout
          speed={1.2}
          factor={1}
          style={{ zIndex: 0 }}
        >
          <Volunteering />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={6} // Adjusted to match the new layout
          speed={1.6}
          factor={2}
          style={{ zIndex: 0 }}
        >
          <Bookshelf />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
