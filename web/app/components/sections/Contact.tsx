'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 px-6 sm:px-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#050b90] mb-6">
            Get In <span className="text-[#e60d0d]">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about your dream vacation? Our travel experts are here to help you plan the perfect journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#050b90] mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Reach out to us through any of these channels. Our team typically responds within 24 hours.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-start p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-[#050b90]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90]">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8:00 AM - 6:00 PM</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="p-3 bg-red-100 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-[#e60d0d]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90]">Email</h4>
                  <p className="text-gray-600">info@voyageplus.com</p>
                  <p className="text-gray-600">support@voyageplus.com</p>
                  <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90]">Office</h4>
                  <p className="text-gray-600">123 Travel Street</p>
                  <p className="text-gray-600">Paradise City, PC 12345</p>
                  <p className="text-sm text-gray-500 mt-1">Visit by appointment</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start p-4 bg-white rounded-xl shadow-md"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#050b90]">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </motion.div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#050b90] to-[#e60d0d] rounded-2xl p-6 text-white"
            >
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 mr-3" />
                <h4 className="text-xl font-bold">Emergency Support</h4>
              </div>
              <p className="mb-4">For urgent travel issues during your trip</p>
              <p className="text-2xl font-bold">+1 (555) 911-TRIP</p>
              <p className="text-sm opacity-90 mt-2">24/7 assistance</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-full">
                <Send className="w-8 h-8 text-[#050b90]" />
              </div>
              <h3 className="text-2xl font-bold text-[#050b90]">Send us a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Assistance</option>
                    <option value="custom">Custom Tour Request</option>
                    <option value="group">Group Travel</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                  placeholder="Tell us about your travel plans, questions, or how we can help you..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>

            <p className="text-xs text-gray-500 mt-6">
              * Required fields. By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 h-96">
              {/* This would be a real map integration in production */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#e60d0d] mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Would Appear Here</p>
                  <p className="text-sm text-gray-500">123 Travel Street, Paradise City, PC 12345</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold text-[#050b90] mb-4">Visit Our Office</h3>
              <p className="text-gray-600 mb-6">
                Feel free to stop by our office during business hours. We recommend scheduling an appointment to ensure we can give you our full attention.
              </p>
              <div className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 text-[#e60d0d] mr-3" />
                  123 Travel Street, Paradise City, PC 12345
                </p>
                <p className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 text-[#050b90] mr-3" />
                  Mon-Fri: 8:00 AM - 6:00 PM
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 text-green-600 mr-3" />
                  +1 (555) 123-4567
                </p>
              </div>
              <button className="mt-6 bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white px-6 py-2 rounded-lg font-semibold">
                Get Directions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}