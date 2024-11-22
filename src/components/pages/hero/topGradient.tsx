"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

function HeroTopGradient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <img
          alt="Gradient background"
          className="opacity-20 dark:opacity-100"
          decoding="async"
          data-nimg="fill"
          sizes="100vw"
          src="/wp-content/bg-gradient.webp"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            color: "transparent",
          }}
        />
      </motion.div>
    </div>
  );
}

export default HeroTopGradient;
