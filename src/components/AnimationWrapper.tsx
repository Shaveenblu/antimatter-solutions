'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  scale?: number;
  opacity?: number;
  staggerChildren?: number;
}

export function FadeInUp({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6, 
  y = 40,
  opacity = 0
}: AnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity, y }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Phenomenon Studio easing
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  scale = 0.95,
  opacity = 0
}: AnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity, scale }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity, scale }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ 
  children, 
  className = "", 
  staggerChildren = 0.1,
  duration = 0.6
}: AnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: 0.1
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  y = 60
}: AnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration, 
            delay,
            ease: [0.21, 0.47, 0.32, 0.98]
          }
        }
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8 
}: AnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ 
          duration, 
          delay,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};