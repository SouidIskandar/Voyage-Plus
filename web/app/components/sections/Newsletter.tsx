'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Send, Map, Gift, Calendar, Award, Quote } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this to your email service
    console.log('Submitting email:', email)
    setSubscribed(true)
    setEmail('')
    
    // Reset after 5 seconds
    setTimeout(() => {
      setSubscribed(false)
    }, 5000)
  }

  return (
    <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#050b90] mb-6">
            Stay <span className="text-[#e60d0d]">Inspired</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join our community of travel enthusiasts and never miss out on exclusive deals, 
            new destinations, and expert tips
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Mail className="w-8 h-8 text-[#050b90]" />
              </div>
              <h3 className="text-2xl font-bold text-[#050b90]">Travel Newsletter</h3>
            </div>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-[#050b90] mb-2">Welcome Aboard!</h4>
                <p className="text-gray-600 mb-6">
                  Thank you for subscribing to our newsletter. Check your inbox for our welcome gift!
                </p>
                <button
                  onClick={() => setSubscribed(false)}
                  className="text-[#050b90] font-semibold hover:underline"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <>
                <p className="text-gray-600 mb-8">
                  Get weekly inspiration with stunning travel photography, exclusive deals, 
                  and expert guides to make your next journey unforgettable.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        className="mt-1 mr-2 focus:ring-[#050b90]"
                        required
                      />
                      <span className="text-sm text-gray-600">
                        I agree to receive travel inspiration and deals from Voyage Plus. 
                        I can unsubscribe at any time.
                      </span>
                    </label>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Subscribe Now
                  </motion.button>
                </form>
                
                <p className="text-xs text-gray-500 mt-6">
                  We respect your privacy and will never share your information with third parties.
                </p>
              </>
            )}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#050b90] mb-8">Why Subscribe?</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-red-100 rounded-full">
                  <Gift className="w-6 h-6 text-[#e60d0d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90] mb-1">Exclusive Deals</h4>
                  <p className="text-gray-600">
                    Get access to subscriber-only discounts and early-bird offers
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="p-3 bg-blue-100 rounded-full">
                  <Map className="w-6 h-6 text-[#050b90]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90] mb-1">Destination Guides</h4>
                  <p className="text-gray-600">
                    Receive detailed guides to hidden gems and popular destinations
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90] mb-1">Seasonal Inspiration</h4>
                  <p className="text-gray-600">
                    Get curated travel ideas for each season and upcoming holidays
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <div className="p-3 bg-green-100 rounded-full">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90] mb-1">Travel Tips</h4>
                  <p className="text-gray-600">
                    Expert advice on packing, budgeting, and making the most of your travels
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-2xl font-bold text-[#050b90]">50K+</div>
                <div className="text-sm text-gray-600">Subscribers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-2xl font-bold text-[#050b90]">92%</div>
                <div className="text-sm text-gray-600">Open Rate</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial from Subscriber */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] rounded-2xl shadow-lg p-8 md:p-10 mt-16 text-white"
        >
          <Quote className="w-10 h-10 opacity-20 mb-4" />
          <p className="text-xl italic mb-6">
            "Thanks to Voyage Plus's newsletter, I discovered an amazing deal to Bali that 
            saved me over $800! Their destination guides helped me plan the perfect itinerary."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <span className="font-bold">ML</span>
            </div>
            <div>
              <div className="font-semibold">Michael Lawson</div>
              <div className="text-white/80">Subscriber since 2022</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}