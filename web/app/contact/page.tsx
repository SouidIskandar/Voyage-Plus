// app/contact/page.js
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Simulate form submission
    setIsSubmitted(true)
    
    // In a real application, you would send the data to your backend
    console.log('Form submitted:', formData)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 8:00 AM - 6:00 PM",
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@voyageplus.com",
      description: "We respond within 24 hours",
      color: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "123 Travel Street",
      description: "Paradise City, PC 12345",
      color: "bg-green-100",
      textColor: "text-green-600"
    }
  ]

  const departments = [
    {
      name: "General Inquiries",
      email: "info@voyageplus.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Customer Support",
      email: "support@voyageplus.com", 
      phone: "+1 (555) 123-HELP"
    },
    {
      name: "Sales & Bookings",
      email: "sales@voyageplus.com",
      phone: "+1 (555) 123-BOOK"
    },
    {
      name: "Emergency Support",
      email: "emergency@voyageplus.com",
      phone: "+1 (555) 911-TRIP"
    }
  ]

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours. For urgent matters, please call our emergency support line."
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer: "Yes, we provide 24/7 emergency support for travelers currently on their trips. For general inquiries, our hours are 8:00 AM - 6:00 PM daily."
    },
    {
      question: "Can I schedule a consultation call?",
      answer: "Absolutely! We offer free 30-minute consultation calls to discuss your travel needs and how we can help create your perfect journey."
    }
  ]

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
              <MessageCircle className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get in touch with our travel experts to start planning your dream vacation. 
              We're here to help you create unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`inline-block p-3 rounded-2xl ${method.color} ${method.textColor} mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-[#050b90] mb-2">{method.title}</h3>
                <p className="text-gray-800 font-semibold mb-2">{method.details}</p>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-[#050b90] mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#050b90] mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <PhoneIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#050b90] focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
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
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Departments */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#050b90] mb-6">Departments</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-semibold text-gray-800 mb-2">{dept.name}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {dept.email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {dept.phone}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#050b90] mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Monday - Friday</span>
                    <span className="font-semibold text-[#050b90]">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Saturday</span>
                    <span className="font-semibold text-[#050b90]">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sunday</span>
                    <span className="font-semibold text-[#050b90]">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-[#e60d0d] font-semibold">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Emergency Support: 24/7 Available
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-2xl font-bold text-[#050b90] mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Visit Our <span className="text-[#e60d0d]">Office</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Feel free to stop by our office during business hours. We recommend scheduling an appointment to ensure we can give you our full attention.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Map Placeholder */}
              <div className="lg:col-span-2 h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-12 h-12 text-[#e60d0d] mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Would Appear Here</p>
                  <p className="text-sm text-gray-500 mt-2">123 Travel Street, Paradise City, PC 12345</p>
                </div>
              </div>
              
              {/* Office Info */}
              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold text-[#050b90] mb-6">Office Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="w-5 h-5 text-[#e60d0d] mt-1 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">123 Travel Street</p>
                      <p className="text-gray-600">Paradise City, PC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#050b90] mt-1 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-green-600 mt-1 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-800">Contact</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-gray-600">info@voyageplus.com</p>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold mt-6"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 px-6 bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">24/7 Emergency Support</h3>
              <p>For urgent travel issues during your trip</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-2xl font-bold">+1 (555) 911-TRIP</div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#050b90] px-6 py-2 rounded-lg font-semibold"
              >
                Emergency Contact
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}           