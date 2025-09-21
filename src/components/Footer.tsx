import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <Image
                src="/logo.jpg"
                alt="Antimatter Solutions"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg"
              />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-display font-bold text-gray-900">
                <span className="hidden sm:inline">Antimatter Solutions</span>
                <span className="sm:hidden">Antimatter</span>
              </span>
            </div>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base">
              We're a passionate web development agency specializing in creating high-converting 
              landing pages and modern web experiences that drive business growth.
            </p>
          </div>

          {/* Services */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
                  Performance Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-500">
              © 2024 Antimatter Solutions. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
              Designed and developed with ❤️ for growing businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}