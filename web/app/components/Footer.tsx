'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  ArrowUp,
  CreditCard,
  Shield,
  Globe
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 pt-20 pb-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-4xl font-extrabold tracking-tight flex items-center gap-2 mb-6">
              <span className="text-[#050b90]">Voyage</span>
              <span className="text-[#e60d0d]">plus</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Creating unforgettable travel experiences with personalized service, expert guidance, and exclusive access to the world's most amazing destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-100 text-[#050b90] p-3 rounded-full hover:bg-[#050b90] hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-100 text-[#050b90] p-3 rounded-full hover:bg-[#050b90] hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-100 text-[#050b90] p-3 rounded-full hover:bg-[#050b90] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-100 text-[#050b90] p-3 rounded-full hover:bg-[#050b90] hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-100 text-[#050b90] p-3 rounded-full hover:bg-[#050b90] hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#050b90] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-[#e60d0d] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Our Services</Link></li>
              <li><Link href="/destinations" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Destinations</Link></li>
              <li><Link href="/testimonials" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Testimonials</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Travel Blog</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Careers</Link></li>
            </ul>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#050b90] mb-6">Popular Destinations</h3>
            <ul className="space-y-3">
              <li><Link href="/destinations/santorini" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Santorini, Greece</Link></li>
              <li><Link href="/destinations/kyoto" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Kyoto, Japan</Link></li>
              <li><Link href="/destinations/maldives" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Maldives</Link></li>
              <li><Link href="/destinations/swiss-alps" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Swiss Alps</Link></li>
              <li><Link href="/destinations/machu-picchu" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Machu Picchu, Peru</Link></li>
              <li><Link href="/destinations/paris" className="text-gray-600 hover:text-[#e60d0d] transition-colors">Paris, France</Link></li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#050b90] mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#e60d0d] mt-1 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#e60d0d] mt-1 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@voyageplus.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#e60d0d] mt-1 mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">123 Travel Street, Paradise City, PC 12345</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Stay Updated</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#050b90]"
                />
                <button className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white px-4 py-2 rounded-r-lg font-semibold">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12 py-8 border-t border-b border-gray-200"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-green-600" />
            <span className="text-gray-700 font-medium">Secure Booking</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-8 h-8 text-blue-600" />
            <span className="text-gray-700 font-medium">Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-purple-600" />
            <span className="text-gray-700 font-medium">Worldwide Coverage</span>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200"
        >
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Voyage Plus. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <Link href="/privacy" className="text-gray-600 hover:text-[#e60d0d] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-[#e60d0d] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-600 hover:text-[#e60d0d] text-sm transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-600 hover:text-[#e60d0d] text-sm transition-colors">
              Sitemap
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm">Accepting:</span>
            <div className="flex gap-2">
              <div className="w-8 h-5 bg-gray-300 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-300 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-300 rounded-sm"></div>
              <div className="w-8 h-5 bg-gray-300 rounded-sm"></div>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  )
}