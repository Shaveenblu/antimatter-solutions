'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeInUp, TextReveal } from './AnimationWrapper';

export default function PortfolioSection() {
  const cases = [
    {
      title: "Travel Booking Platform",
      category: "Web Application • Travel",
      description: "Comprehensive travel booking platform with destination showcase, intuitive booking flow, and modern design aesthetics.",
      image: "/Screenshot (289).png",
      liveUrl: "https://travel-template-indol.vercel.app/",
      stats: {
        timeline: "4 weeks",
        result: "High conversion",
        investment: "SEO optimized"
      },
      services: ["Web Development", "UI/UX Design", "Performance Optimization"]
    },
    {
      title: "Developer Portfolio",
      category: "Portfolio • Personal Brand",
      description: "Professional portfolio showcasing software engineering skills, projects, and achievements with engaging interactions.",
      image: "/Screenshot (288).png",
      liveUrl: "https://portfolio-geethmi.vercel.app/",
      stats: {
        timeline: "2 weeks",
        result: "Professional brand",
        investment: "Mobile-first"
      },
      services: ["Portfolio Design", "Personal Branding", "Interactive Development"]
    },
    {
      title: "Coffee House Platform",
      category: "Landing Page • F&B",
      description: "Modern coffee house website with elegant design, menu showcase, and seamless user experience for coffee enthusiasts.",
      image: "/Screenshot (290).png",
      liveUrl: "https://coffee-page-steel.vercel.app/",
      stats: {
        timeline: "3 weeks",
        result: "Perfect UX",
        investment: "100% responsive"
      },
      services: ["Landing Page Design", "UI/UX Design", "Responsive Development"]
    }
  ];

  return (
    <section id="cases" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <TextReveal>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight">
              Success stories
            </h2>
          </TextReveal>
          <FadeInUp delay={0.3}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results for real companies at every stage of their journey
            </p>
          </FadeInUp>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {cases.map((caseItem, index) => (
            <FadeInUp key={index} delay={0.4 + (index * 0.2)}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Case Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div 
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image
                        src={caseItem.image}
                        alt={caseItem.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover aspect-[4/3]"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Case Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                      {caseItem.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                    {caseItem.title}
                  </h3>
                  
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {caseItem.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{caseItem.stats.timeline}</div>
                      <div className="text-sm text-gray-500">Timeline</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{caseItem.stats.result}</div>
                      <div className="text-sm text-gray-500">Result</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{caseItem.stats.investment}</div>
                      <div className="text-sm text-gray-500">Impact</div>
                    </div>
                  </div>

                  {/* Services Used */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                      Services Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {caseItem.liveUrl ? (
                      <motion.a
                        href={caseItem.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View live site
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    ) : null}
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

      </div>
    </section>
  );
}