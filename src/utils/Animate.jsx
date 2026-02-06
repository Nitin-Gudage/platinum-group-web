"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";

/*
  Universal Animation System

  Components:
  - <Animate />      → single item
  - <AnimateGroup /> → grid / list / multiple items
*/

/* Item Variants */
const variantsMap = {
  fade: {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  },

  slide: {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0 },
  },

  zoom: {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  },
};

/* Group (Stagger) Variant */
const groupVariant = {
  hidden: { opacity: 0 },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.25,
    },
  },
};

/* ---------------------------
   Animate (Single Item)
---------------------------- */
export const Animate = memo(function Animate({
  children,
  className = "",

  type = "fade",
  delay = 0,
  hover = false,

  once = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      /* Entrance */
      variants={reduceMotion ? undefined : variantsMap[type]}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once, margin: "-80px" }}
      /* Hover (FAST IN + OUT) */
      whileHover={
        hover && !reduceMotion
          ? {
              scale: 1.02,
              y: -2,
            }
          : undefined
      }
      /* Transitions */
      transition={{
        // Entrance animation
        duration: 0.5,
        delay,
        ease: "easeOut",

        // Hover in + out speed
        scale: {
          duration: 0.08, // 👈 80ms
          ease: "easeOut",
        },
        y: {
          duration: 0.08, // 👈 80ms
          ease: "easeOut",
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

/* ---------------------------
   AnimateGroup (Grid / List)
---------------------------- */
export const AnimateGroup = memo(function AnimateGroup({
  children,
  className = "",
  once = true,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? undefined : groupVariant}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default Animate;
