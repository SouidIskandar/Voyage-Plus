// app/services/travail/page.js
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Briefcase, Building, Users, Clock, Check, ArrowRight, Plane, Wifi, Car, Coffee, Calendar, Shield, BookOpen, Globe } from 'lucide-react'
import Link from 'next/link'

const businessServices = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Corporate Travel Management",
    description: "End-to-end management of business flights and transportation",
    features: ["Multi-city itineraries", "Priority boarding", "Airport lounge access", "24/7 flight changes"]
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Executive Accommodations",
    description: "Premium hotels and extended stays for business travelers",
    features: ["Business district locations", "Meeting facilities", "Executive floors", "Late check-out"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Meeting & Event Planning",
    description: "Complete coordination for corporate events and meetings",
    features: ["Venue selection", "AV equipment", "Catering services", "Delegate management"]
  }
]

const corporatePackages = [
  {
    name: "Executive Business Package",
    duration: "Customizable",
    price: "From $499",
    previousPrice: "$599",
    bestFor: "C-level executives",
    features: [
      "Business class flights",
      "5-star accommodations", 
      "Private transfers",
      "Concierge service",
      "Emergency support"
    ]
  },
  {
    name: "Team Travel Solution",
    duration: "Customizable",
    price: "From $299",
    previousPrice: "$399",
    bestFor: "Group business trips",
    features: [
      "Economy plus flights",
      "4-star hotels",
      "Group transfers",
      "Meeting rooms",
      "Daily breakfast"
    ],
    popular: true
  },
  {
    name: "Conference Attendance",
    duration: "3-5 days",
    price: "From $399",
    previousPrice: "$499",
    bestFor: "Event participation",
    features: [
      "Event registration",
      "Preferred hotel rates",
      "Airport transfers",
      "Networking events",
      "Post-conference reports"
    ]
  }
]

const clientTestimonials = [
  {
    company: "TechInnovate Inc.",
    name: "Sarah Chen",
    position: "CEO",
    testimonial: "Voyage Plus transformed our corporate travel. The efficiency and attention to detail have saved us countless hours and significantly reduced our travel costs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    company: "Global Solutions Ltd.",
    name: "Michael Rodriguez",
    position: "Travel Manager",
    testimonial: "Their 24/7 support has been invaluable for our international teams. No matter the time zone, they're always available to assist.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    company: "FinTech Partners",
    name: "Emily Watson",
    position: "COO",
    testimonial: "The detailed reporting and cost analysis have helped us optimize our travel budget by 30% while maintaining comfort for our team.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
]

const businessFeatures = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Digital Itinerary Management",
    description: "Real-time updates and mobile access to all travel documents"
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Ground Transportation",
    description: "Premium car services and corporate transfers"
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Business Lounge Access",
    description: "Premium airport lounges worldwide"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Meeting Integration",
    description: "Seamless calendar synchronization"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Travel Risk Management",
    description: "Comprehensive safety and security protocols"
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Expense Management",
    description: "Integrated expense reporting and reconciliation"
  }
]

export default function TravailService() {
  const [selectedPackage, setSelectedPackage] = useState(1) // Start with popular package

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
              <Briefcase className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Travail</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Premium business travel solutions designed for efficiency, comfort, and productivity. 
              Experience seamless corporate travel management with our expert services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Corporate <span className="text-[#e60d0d]">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive business travel solutions tailored to your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="text-[#050b90] mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#050b90] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Packages Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Business <span className="text-[#e60d0d]">Packages</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tailored solutions for different business travel needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all relative ${
                  pkg.popular ? 'ring-2 ring-[#e60d0d]' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#e60d0d] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-[#050b90] mb-2 text-center">{pkg.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">Perfect for: {pkg.bestFor}</p>
                
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-[#050b90]">{pkg.price}</span>
                  <span className="text-gray-500 line-through ml-2">{pkg.previousPrice}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#050b90] to-[#e60d0d] text-white py-3 rounded-lg font-semibold"
                >
                  Request Proposal
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Business <span className="text-[#e60d0d]">Features</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need for productive and comfortable business travel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="text-[#050b90] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#050b90] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#050b90] mb-6">
              Corporate <span className="text-[#e60d0d]">Clients</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#050b90]">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#050b90] to-[#e60d0d]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Building className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business Travel?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our corporate travel experts to design a solution that meets your company's specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#050b90] px-8 py-4 rounded-lg font-bold text-lg"
              >
                Request Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation to other services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#050b90] text-center mb-8">
            Explore Our Other Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/voyage" className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-3 rounded-2xl inline-block mb-4">
                <Plane className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Voyage</h4>
              <p className="text-gray-600 text-sm">Luxury travel experiences</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>

            <Link href="/services/etude" className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-green-100 p-3 rounded-2xl inline-block mb-4">
                <BookOpen className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Étude</h4>
              <p className="text-gray-600 text-sm">Educational travel experiences</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>

            <Link href="/services/tourism" className="bg-gray-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all">
              <div className="bg-yellow-100 p-3 rounded-2xl inline-block mb-4">
                <Globe className="w-8 h-8 text-[#050b90]" />
              </div>
              <h4 className="font-bold text-[#050b90] mb-2">Tourism</h4>
              <p className="text-gray-600 text-sm">Sightseeing and activities</p>
              <ArrowRight className="w-5 h-5 text-[#e60d0d] mx-auto mt-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}