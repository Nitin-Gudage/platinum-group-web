"use client";

import { motion } from "framer-motion";
import { createContext, useContext } from "react";

/**
 * Context to share animation props
 */
const AnimationContext = createContext({
  hover: false,
});

/* Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

/* Container */
export function AnimatedContainer({
  children,
  className = "",
  once = true,
  hover = false, // CONTROL HERE
}) {
  return (
    <AnimationContext.Provider value={{ hover }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin: "-100px" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimationContext.Provider>
  );
}

/* Item */
export function AnimatedItem({ children, className = "" }) {
  const { hover } = useContext(AnimationContext);

  return (
    <motion.div
      variants={itemVariants}
      whileHover={
        hover
          ? {
            
              scale: 1.01,
              y: -5,
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
