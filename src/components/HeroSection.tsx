'use client';

import { motion } from 'framer-motion';
import { TextReveal, FadeInUp } from './AnimationWrapper';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Elements - 2D Flat Design */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flat geometric shapes - better positioned */}
        <div className="absolute top-32 left-16 w-24 h-24 bg-orange-400 rounded-3xl rotate-12 opacity-60"></div>
        <div className="absolute top-20 right-32 w-32 h-32 bg-green-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-400 transform -rotate-45 opacity-55"></div>
        <div className="absolute top-1/2 left-8 w-16 h-16 bg-purple-400 rounded-2xl rotate-45 opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-yellow-400 rounded-full opacity-35"></div>

        {/* Simple grid pattern - repositioned */}
        <div className="absolute top-40 right-16 w-32 h-32 opacity-10">
          <div className="grid grid-cols-6 gap-1 h-full">
            {Array.from({length: 36}).map((_, i) => (
              <div key={i} className="bg-gray-400"></div>
            ))}
          </div>
        </div>

        {/* Flat dots - repositioned */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-green-400 rounded-full opacity-55"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main heading - clean layout */}
          <div className="mb-12">
            <TextReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gray-900 leading-[0.9] tracking-tight mb-4 text-balance">
                Product design and development agency
              </h1>
            </TextReveal>
          </div>
          
          <FadeInUp delay={0.6} className="mb-12">
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
              Empowering startups to launch, scale, and succeed faster
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8} className="mb-16">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="#contact"
                className="btn-glass-primary text-gray-800 px-8 py-4 rounded-full font-semibold text-lg min-w-[140px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's talk</span>
                <div className="absolute inset-1 btn-overlay-warm rounded-full"></div>
              </motion.a>
              <motion.a
                href="#cases"
                className="btn-glass-secondary text-gray-800 px-8 py-4 rounded-full font-semibold text-lg min-w-[180px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View our cases</span>
                <div className="absolute inset-1 btn-overlay-cool rounded-full"></div>
              </motion.a>
            </div>
          </FadeInUp>

          {/* Stats section with consistent glass cards */}
          <FadeInUp delay={1.0} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-xl mx-auto">
            {[
              { number: "3+", label: "Projects completed", overlay: "card-overlay-cool" },
              { number: "24h", label: "Average response time", overlay: "card-overlay-warm" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-glass p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`absolute inset-1 ${stat.overlay} rounded-2xl`}></div>
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}