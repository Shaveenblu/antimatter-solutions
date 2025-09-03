'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingPhrases = [
  "Installing one more great idea",
  "Calibrating design systems",
  "Optimizing user experiences", 
  "Connecting startup dreams",
  "Launching your vision"
];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const phraseTimer = setInterval(() => {
      setCurrentPhrase(prev => {
        if (prev >= loadingPhrases.length - 1) {
          clearInterval(phraseTimer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(phraseTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-white z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            {/* Loading phrase */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhrase}
                  className="text-xl md:text-2xl font-medium text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingPhrases[currentPhrase]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Animated dots */}
            <div className="flex space-x-1 justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gray-900 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}