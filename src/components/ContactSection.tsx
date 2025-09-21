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

    // Create WhatsApp message
    const message = `Hi! I'm ${formData.name} from ${formData.company || 'a company'}. I'm interested in ${formData.projectType} services. ${formData.message}`;
    const whatsappUrl = `https://wa.me/94713760463?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setTimeout(() => {
      alert('Redirecting to WhatsApp! We\'ll get back to you within 24 hours.');
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Phone</div>
                      <div className="text-gray-600 text-xs sm:text-sm">+94 71 376 0463</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</div>
                      <div className="text-gray-600 text-xs sm:text-sm">+94 71 376 0463</div>
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
            <div className="card-glass rounded-2xl p-6 sm:p-8 lg:p-12">
              <div className="absolute inset-1 card-overlay-neutral rounded-2xl"></div>
              <div className="relative z-10">
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
                      <option value="web-app">Web Application</option>
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
                  className="btn-glass-primary w-full text-gray-800 py-3 sm:py-4 px-6 sm:px-8 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending message...' : 'Send message'}</span>
                  <div className="absolute inset-1 btn-overlay-warm rounded-full"></div>
                </motion.button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll never spam or share your information.
                </p>
              </form>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}