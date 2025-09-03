'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { 
      category: "Pre-seed: Validate", 
      items: [
        { name: "Prototype", desc: "Interactive prototypes for validation" },
        { name: "Product Discovery", desc: "Research and strategy" }
      ]
    },
    { 
      category: "Seed: Building", 
      items: [
        { name: "Branding", desc: "Visual identity and brand design" },
        { name: "Technical Workshop", desc: "Architecture and planning" },
        { name: "MVP Development", desc: "Minimum viable product creation" }
      ]
    },
    { 
      category: "Series A & Beyond: Scale", 
      items: [
        { name: "UX Audit", desc: "Experience evaluation and optimization" },
        { name: "Product Redesign", desc: "Complete product overhaul" },
        { name: "Team Extension", desc: "Dedicated development team" }
      ]
    }
  ];

  const companyItems = [
    { name: "About", desc: "Learn about our story" },
    { name: "Team", desc: "Meet our experts" },
    { name: "Process", desc: "How we work" },
    { name: "Awards", desc: "Recognition and achievements" }
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo with hover animation */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo.jpg"
              alt="Antimatter Solutions"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
            />
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-semibold text-gray-900 font-display">
              <span className="hidden sm:inline">Antimatter Solutions</span>
              <span className="sm:hidden">Antimatter</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.button 
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                Services
                <motion.svg 
                  className="ml-1 h-4 w-4 transition-transform duration-200"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    className="absolute top-full left-0 w-screen max-w-5xl -ml-40 mt-4 bg-white border border-gray-100/50 rounded-2xl shadow-2xl py-8 backdrop-blur-sm"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <div className="grid grid-cols-3 gap-10 px-10">
                      {services.map((category, categoryIndex) => (
                        <motion.div 
                          key={category.category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                        >
                          <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                            {category.category}
                          </h3>
                          <ul className="space-y-4">
                            {category.items.map((item, itemIndex) => (
                              <motion.li 
                                key={item.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                              >
                                <motion.a 
                                  href="#services" 
                                  className="block p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                                  whileHover={{ scale: 1.02, x: 4 }}
                                >
                                  <div className="font-semibold text-gray-900 group-hover:text-antimatter-blue transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                                </motion.a>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a 
              href="#cases" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group"
              whileHover={{ scale: 1.02 }}
            >
              Cases
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"
              />
            </motion.a>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.button 
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors group"
                whileHover={{ scale: 1.02 }}
              >
                Company
                <motion.svg 
                  className="ml-1 h-4 w-4 transition-transform duration-200"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: activeDropdown === 'company' ? 180 : 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div 
                    className="absolute top-full left-0 w-64 mt-4 bg-white border border-gray-100/50 rounded-2xl shadow-2xl py-6 backdrop-blur-sm"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    {companyItems.map((item, itemIndex) => (
                      <motion.a 
                        key={item.name}
                        href="#about" 
                        className="block p-3 mx-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a 
              href="#career" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group"
              whileHover={{ scale: 1.02 }}
            >
              Career
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"
              />
            </motion.a>

            <motion.a 
              href="#insights" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group"
              whileHover={{ scale: 1.02 }}
            >
              Insights
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"
              />
            </motion.a>

            <motion.a 
              href="#contacts" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative group"
              whileHover={{ scale: 1.02 }}
            >
              Contacts
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"
              />
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 ml-6"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#1f2937",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.path 
                      key="close"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{ pathLength: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  ) : (
                    <motion.path 
                      key="menu"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{ pathLength: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="px-6 py-8 space-y-6">
              {['Services', 'Cases', 'Company', 'Career', 'Insights', 'Contacts'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-gray-600 hover:text-gray-900 font-medium py-3 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-block mt-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}