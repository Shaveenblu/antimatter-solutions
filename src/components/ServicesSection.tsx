'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp, TextReveal } from './AnimationWrapper';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('preseed');

  const services = {
    preseed: [
      {
        icon: "🚀",
        title: "Prototype",
        description: "Interactive prototypes to validate your concept and gather user feedback early in the process.",
        link: "Learn more"
      },
      {
        icon: "🔍",
        title: "Product Discovery",
        description: "In-depth research and strategy to understand market needs and define product direction.",
        link: "Learn more"
      }
    ],
    seed: [
      {
        icon: "🎨",
        title: "Branding",
        description: "Complete brand identity design including visual elements and brand guidelines.",
        link: "Learn more"
      },
      {
        icon: "🛠️",
        title: "Technical Workshop",
        description: "Architecture planning and technical strategy sessions for your product development.",
        link: "Learn more"
      },
      {
        icon: "⚡",
        title: "MVP Development",
        description: "Build your minimum viable product with core features to validate market fit.",
        link: "Learn more"
      }
    ],
    scale: [
      {
        icon: "🔍",
        title: "UX Audit",
        description: "Comprehensive evaluation of user experience with actionable improvement recommendations.",
        link: "Learn more"
      },
      {
        icon: "🔄",
        title: "Product Redesign",
        description: "Complete overhaul of existing products to improve usability and market position.",
        link: "Learn more"
      },
      {
        icon: "👥",
        title: "Team Extension",
        description: "Dedicated development team to scale your product development capabilities.",
        link: "Learn more"
      }
    ]
  };

  const tabs = [
    { id: 'preseed', label: 'Pre-seed', desc: 'Validate', subtitle: 'Validate your idea' },
    { id: 'seed', label: 'Seed', desc: 'Building', subtitle: 'Build your MVP' },
    { id: 'scale', label: 'Series A & Beyond', desc: 'Scale', subtitle: 'Scale your business' }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <TextReveal>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight">
              Services for every stage of your business
            </h2>
          </TextReveal>
          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From pre-seed validation to series A scaling, we provide specialized services 
              tailored to your startup's growth stage.
            </p>
          </FadeInUp>
        </div>

        {/* Tab Navigation */}
        <FadeInUp delay={0.5} className="flex justify-center mb-20">
          <div className="bg-gray-100 rounded-full p-1 max-w-4xl w-full">
            <div className="flex relative">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 px-6 py-4 rounded-full font-semibold transition-all duration-500 text-center ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute inset-0 bg-gray-900 rounded-full"
                      layoutId="activeTab"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  <div className="relative">
                    <div className="font-bold text-lg">{tab.label}</div>
                    <div className="text-sm opacity-80">{tab.desc}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Service Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {services[activeTab as keyof typeof services].map((service, index) => (
              <motion.div 
                key={`${activeTab}-${index}`} 
                className="group"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div 
                  className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 h-full hover:border-gray-200 transition-all duration-500 relative overflow-hidden group-hover:shadow-lg"
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="text-5xl mb-8 relative z-10">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg relative z-10">
                    {service.description}
                  </p>
                  
                  <motion.a 
                    href="#contact" 
                    className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-700 transition-colors group/link relative z-10"
                    whileHover={{ x: 4 }}
                  >
                    {service.link}
                    <motion.svg 
                      className="ml-2 w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}