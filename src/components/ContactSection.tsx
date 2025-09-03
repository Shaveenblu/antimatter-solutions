'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeInUp, TextReveal, FadeIn } from './AnimationWrapper';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'landing-page',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'landing-page',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <TextReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-tight tracking-tight">
              Ready to start your project?
            </h2>
          </TextReveal>
          <FadeInUp delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance px-2">
              Let's discuss your project requirements and see how we can help you achieve your business goals.
            </p>
          </FadeInUp>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <FadeInUp delay={0.4} className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-8">
              <div className="mb-8 sm:mb-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/davide-baraldi-vHaJiuCeZtc-unsplash.jpg"
                    alt="UX Design Process"
                    width={400}
                    height={300}
                    className="w-full h-40 sm:h-48 object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-4 sm:mb-6">
                    Let's talk
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    We're here to help you bring your vision to life. Whether you need a landing page, 
                    full website, or ongoing support, let's discuss how we can work together.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Email</div>
                      <div className="text-gray-600 text-xs sm:text-sm">hello@antimattersolutions.dev</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Response time</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Within 24 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Based in</div>
                      <div className="text-gray-600 text-xs sm:text-sm">Available worldwide</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">What to expect:</h4>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600">
                    <li className="flex items-center text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-antimatter-blue rounded-full mr-3 flex-shrink-0"></div>
                      Initial consultation call within 24h
                    </li>
                    <li className="flex items-center text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-antimatter-blue rounded-full mr-3 flex-shrink-0"></div>
                      Detailed project proposal & timeline
                    </li>
                    <li className="flex items-center text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-antimatter-blue rounded-full mr-3 flex-shrink-0"></div>
                      Transparent pricing with no hidden fees
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.6} className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                      Company name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                      Project type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all text-gray-900 bg-white text-sm sm:text-base"
                    >
                      <option value="landing-page">Landing Page</option>
                      <option value="website">Full Website</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Describe your project goals, timeline, budget range, and any specific requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending message...' : 'Send message'}
                </motion.button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never spam or share your information.
                </p>
              </form>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}