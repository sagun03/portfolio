import React from 'react';
import { motion } from 'framer-motion';
import nisha from '../assets/nisha.png';

const PortfolioComponent: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Animated Image */}
      <motion.img
        src={nisha}
        alt="Person"
        style={{
          position: 'absolute',
          width: '100vw',
          maxWidth: '1000px',
          marginBottom: '25vw',
          height: 'auto',
          objectFit: 'cover',
        }}
        initial={{ opacity: 0,  y: 100 }}  // Start with invisible
        animate={{ opacity: 1, y: 0 }}  // Fade in
        transition={{ duration: 1.5, delay: 0.8 }}  // Delay to appear after a moment
      />

      {/* Animated Heading */}
      <motion.h1
        style={{
          position: 'absolute',
          zIndex: 2,
          fontSize: '17vw',
          color: '#EADBC4',
          fontFamily: 'Arial, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '-0.08em',
          WebkitTextStroke: '1px #71614A',
          textShadow: '2px 2px 0px rgba(0, 0, 0, 0.5)', /* Adds depth */
          mixBlendMode: 'color-burn', // Use difference for a blended effect
          transform: 'scaleY(1.5)', // Increase height by 1.5x
          transformOrigin: 'center',
        }}
        initial={{ opacity: 0, y: -100 }}  // Start with opacity 0 and position above
        animate={{ opacity: 1, y: 0 }}  // Fade in and move into place
        transition={{ duration: 1.5, delay: 0.8 }}  // Delay and smooth transition
      >
        PORTFOLIO
      </motion.h1>
    </div>
  );
};

export default PortfolioComponent;
