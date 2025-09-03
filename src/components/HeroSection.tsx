'use client';

import { motion } from 'framer-motion';
import { TextReveal, FadeInUp } from './AnimationWrapper';

export default function HeroSection() {
  return (
    <section className="relative bg-white min-h-screen flex items-center pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading - exact Phenomenon Studio text */}
          <div className="mb-8">
            <TextReveal delay={0.1}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 leading-[0.85] tracking-tight mb-4">
                Product design and
              </h1>
            </TextReveal>
            <TextReveal delay={0.3}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 leading-[0.85] tracking-tight">
                development agency
              </h1>
            </TextReveal>
          </div>
          
          <FadeInUp delay={0.6} className="mb-12">
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
              Empowering startups to launch, scale, and succeed faster
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8} className="mb-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a 
                href="#contact" 
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg min-w-[140px] hover:bg-gray-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's talk
              </motion.a>
              <motion.a 
                href="#work" 
                className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg min-w-[180px] hover:border-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View our cases
              </motion.a>
            </div>
          </FadeInUp>

          {/* Client logos section */}
          <FadeInUp delay={1.0} className="mb-24">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-12">
              Trusted by 50+ companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
              {[
                "Company A",
                "Company B", 
                "Company C",
                "Company D"
              ].map((company, index) => (
                <motion.div
                  key={company}
                  className="text-lg font-semibold text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + (index * 0.1) }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </FadeInUp>

          {/* Stats section */}
          <FadeInUp delay={1.4} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { number: "50+", label: "Projects completed" },
              { number: "$10M+", label: "Revenue generated" },
              { number: "24h", label: "Average response time" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}