import React, { useState, useRef, useEffect } from 'react';
import AnimatedAvatar from '../../components/AnimatedAvatar/AnimatedAvatar';
import { motion } from 'framer-motion';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const avatarRef = useRef(null);

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };

  // Avatar animation variants
  const avatarVariants = {
    initial: { 
      x: 0, // Start in the middle
    },
    animate: {
      x: -150, // Move left (adjust as needed)
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Text animation variants
  const textVariants = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen bg-eggshell flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg flex items-center">
        <motion.div
          className="hover:border-zomp-100 relative flex-shrink-0"
          ref={avatarRef}
          variants={avatarVariants}
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
        >
          <AnimatedAvatar onClick={toggleDiv} />
          
        </motion.div>

        {!isOpen && (
            <h1 className="fixed top-60 left-45 bg-icterine rotate-[-0.8rad] shadow-lg text-6xl -translate-x-1/2 -translate-y-1/2">
              Click Me!
            </h1>
          )}

        {isOpen && (
          <motion.div
            className="flex flex-col items-start justify-center pt-10 pl-4 flex-grow"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl font-bold text-brunswick_green">Mary Brantnall</h1>
            <p className="mt-2 text-lg text-reseda_green">
              AI Programming, Frontend Development & Design
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;

